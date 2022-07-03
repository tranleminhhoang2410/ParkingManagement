using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Filter;
using ParkingManagement.Model.DTO;
using ParkingManagement.Model.ViewModel;
using ParkingManagement.Service;
using System.Security.Claims;

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

        private readonly IHttpContextAccessor httpContextAccessor;

        public UserPageController(ISlotService slotService, IVehicleTypeService vehicleTypeService, IVehicleService vehicleService, 
            IUserService userService, IInvoiceService invoiceService, IDistrictService districtService, ICityService cityService, IWardService wardService,
            IHttpContextAccessor httpContextAccessor)
        {
            this.slotService = slotService;
            this.vehicleTypeService = vehicleTypeService;
            this.vehicleService = vehicleService;
            this.userService = userService;
            this.invoiceService = invoiceService;
            this.districtService = districtService;
            this.cityService = cityService;
            this.wardService = wardService;
            this.httpContextAccessor = httpContextAccessor;
        }

        [HttpGet("ParkingLot"), AllowAnonymous]
        public async Task<ActionResult> GetAllParkingLot()
        {
            try
            {
                IEnumerable<SlotDTO> slots = await slotService.GetAll();

                List<SlotDTO> A = slots.Where(c => c.Area == "A").OrderBy(c => c.Position).ToList();
                List<SlotDTO> B = slots.Where(c => c.Area == "B").OrderBy(c => c.Position).ToList();
                List<SlotDTO> C = slots.Where(c => c.Area == "C").OrderBy(c => c.Position).ToList();
                List<SlotDTO> D = slots.Where(c => c.Area == "D").OrderBy(c => c.Position).ToList();
                List<SlotDTO> E = slots.Where(c => c.Area == "E").OrderBy(c => c.Position).ToList();

                List<LotArea> parkingArea = new List<LotArea>
                {
                    slotService.toView(A),
                    slotService.toView(B),
                    slotService.toView(C),
                    slotService.toView(E)
                };

                return Ok(new
                {
                    Slots = parkingArea
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Error = ex
                });
            }
            
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpGet("ParkingLot/User")]
        public async Task<ActionResult> GetAllParkingLot2()
        {
            try
            {
                IEnumerable<SlotDTO> slots = await slotService.GetAll();

                List<SlotDTO> A = slots.Where(c => c.Area == "A").OrderBy(c => c.Position).ToList();
                List<SlotDTO> B = slots.Where(c => c.Area == "B").OrderBy(c => c.Position).ToList();
                List<SlotDTO> C = slots.Where(c => c.Area == "C").OrderBy(c => c.Position).ToList();
                List<SlotDTO> D = slots.Where(c => c.Area == "D").OrderBy(c => c.Position).ToList();
                List<SlotDTO> E = slots.Where(c => c.Area == "E").OrderBy(c => c.Position).ToList();

                List<LotArea> parkingArea = new List<LotArea>
                {
                    slotService.toView(A),
                    slotService.toView(B),
                    slotService.toView(C),
                    slotService.toView(E)
                };

                int userid = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                UserDTO user = await userService.GetUserById(userid);

                return Ok(new
                {
                    Slots = slots,
                    LoggedUser = user
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Error = ex
                });
            }

        }

        [HttpGet("PriceTable"), AllowAnonymous]
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

        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpGet("PriceTable/User"), AllowAnonymous]
        public async Task<ActionResult> GetAllVehicleTypes2()
        {
            try
            {
                IEnumerable<VehicleTypeDTO> types = await vehicleTypeService.GetAll();

                int userid = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                UserDTO user = await userService.GetUserById(userid);

                return Ok(new
                {
                    Types = types,
                    LoggedUser = user
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

        [HttpGet("UserFeedback"), AllowAnonymous]
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

        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpGet("UserFeedback/User"), AllowAnonymous]
        public async Task<ActionResult> UserFeedback2()
        {
            try
            {
                IEnumerable<UserDTO> users = await userService.GetAll();

                int userid = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                UserDTO user = await userService.GetUserById(userid);

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
