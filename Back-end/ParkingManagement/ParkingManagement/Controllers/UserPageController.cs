using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Model.DTO;
using ParkingManagement.Service;

namespace ParkingManagement.Controllers
{
    [Route("ParkingManagement")]
    [ApiController]
    public class UserPageController : ControllerBase
    {

        private readonly ISlotService slotService;
        private readonly IVehicleTypeService vehicleTypeService;
        private readonly IVehicleService vehicleService;
        private readonly IUserService userService;
        private readonly IInvoiceService invoiceService;

        private readonly IDistrictService districtService;
        private readonly ICityService cityService;
        private readonly IWardService wardService;

        public UserPageController(ISlotService slotService, IVehicleTypeService vehicleTypeService, IVehicleService vehicleService, 
            IUserService userService, IInvoiceService invoiceService, IDistrictService districtService, ICityService cityService, IWardService wardService)
        {
            this.slotService = slotService;
            this.vehicleTypeService = vehicleTypeService;
            this.vehicleService = vehicleService;
            this.userService = userService;
            this.invoiceService = invoiceService;
            this.districtService = districtService;
            this.cityService = cityService;
            this.wardService = wardService;
        }

        [HttpGet("ParkingLot")]
        public async Task<ActionResult> GetAllParkingLot()
        {
            try
            {
                IEnumerable<SlotDTO> slots = await slotService.GetAll();
                
                return Ok(new
                {
                    Slots = slots,
                    User = "user is here"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Error = ex.Message
                });
            }
            
        }

        [HttpGet("PriceTable")]
        public async Task<ActionResult> GetAllVehicleTypes()
        {
            try
            {
                IEnumerable<VehicleTypeDTO> types = await vehicleTypeService.GetAll();

                return Ok(new
                {
                    Types = types
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Error = ex.Message
                });
            }
        }

        [HttpGet("UserFeedback")]
        public async Task<ActionResult> UserFeedback()
        {
            try
            {
                IEnumerable<UserDTO> users = await userService.GetAll();

                return Ok(new
                {
                    Types = users
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Error = ex.Message
                });
            }
        }

        /// <summary>
        /// ---This action call when user clicks a empty slot to check in---
        /// </summary>
        /// <param name="SlotId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>

        [HttpGet("CheckIn/{SlotId}/{UserId}")]
        public async Task<ActionResult<IEnumerable<VehicleDTO>>> CheckIn(string SlotId, int UserId)
        {
            IEnumerable<VehicleDTO> vehicleDTOs = await vehicleService.GetAllByUserID(UserId);
            SlotDTO slotDTO = await slotService.GetByID(SlotId);

            List<VehicleDTO> result = new List<VehicleDTO>();

            foreach (VehicleDTO vehicle in vehicleDTOs)
            {
                if (vehicle.IsParking == false && vehicle.VehicleTypeId == slotDTO.VehicleTypeId)
                {
                    result.Add(vehicle);
                }
            }

            return Ok(result);
        }

        [HttpPost("CheckIn")]
        public async Task<ActionResult<string>> CheckIn(string vehicleId, string slotId)
        {
            InvoiceDTO invoiceDTO = new InvoiceDTO
            {
                VehicleId = vehicleId,
                SlotId = slotId
            };

            try
            {
                string note = "";
                note += await invoiceService.AddNewInvoice(invoiceDTO);
                note += await slotService.SetParkingSlotStatus(slotId, true);
                note += await vehicleService.SetVehicleIsParking(vehicleId, true);

                return note;
            }
            catch (Exception e)
            {
                return BadRequest("ERROR: " + e.Message);
            }
        }
    }
}
