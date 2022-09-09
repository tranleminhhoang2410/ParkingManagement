using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Filter;
using ParkingManagement.Model.DTO;
using ParkingManagement.Service;
using System.Security.Claims;

namespace ParkingManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly IVehicleService vehicleService;
        private readonly IInvoiceService invoiceService;
        private readonly ISlotService slotService;
        private readonly IVehicleTypeService vehicleTypeService;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IUserService userService;

        public VehicleController(IVehicleService vehicleService, IInvoiceService invoiceService, ISlotService slotService, 
            IVehicleTypeService vehicleTypeService, IHttpContextAccessor httpContextAccessor, IUserService userService)
        {
            this.vehicleService = vehicleService;
            this.invoiceService = invoiceService;
            this.slotService = slotService;
            this.vehicleTypeService = vehicleTypeService;
            this.httpContextAccessor = httpContextAccessor;
            this.userService = userService;
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpPost("AddVehicle")]
        public async Task<ActionResult<string>> AddVehicle(int userID, string vehicleId, string name, string brand, int typeId)
        {
            VehicleDTO vehicle = new VehicleDTO
            {
                Id = vehicleId,
                VehicleName = name,
                VehicleBrand = brand,
                VehicleTypeId = typeId
            };
            return await vehicleService.AddNewUserVehicle(vehicle, userID);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("Get/UserVehicle/{userId}")]
        public async Task<ActionResult<IEnumerable<VehicleDTO>>> GetUserVehicle(int userId)
        {
            return Ok(await vehicleService.GetAllByUserID(userId));
        }

        /// <summary>
        /// cÁI NÀY SẼ GỌI KHI CLICK VÀO 1 LOT TRỐNG ĐỂ GỬI 1 CÁI API LIST XE CHƯA ĐỖ CỦA USER THEO LOẠI XE CỦA CÁI LOT ĐÓ
        /// </summary>
        /// <param name="SlotId">LOT ĐƯỢC CHỌN (AREA+NUMBER)</param>
        /// <returns></returns>
        
        //[AuthorizationFilter]
        //[Authorize(Roles = "User")]
        //[HttpGet("CheckIn/{SlotId}")]
        //public async Task<ActionResult<IEnumerable<VehicleDTO>>> CheckIn(string SlotId)
        //{
        //    int UserId = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
        //    IEnumerable<VehicleDTO> vehicleDTOs = await vehicleService.GetAllByUserID(UserId);
        //    SlotDTO slotDTO = await slotService.GetByID(SlotId);

        //    List<VehicleDTO> result = new List<VehicleDTO>();

        //    foreach (VehicleDTO vehicle in vehicleDTOs)
        //    {
        //        if (vehicle.IsParking == false && vehicle.VehicleTypeId == slotDTO.VehicleTypeId)
        //        {
        //            result.Add(vehicle);
        //        }
        //    }

        //    return Ok(result);
        //}

        /// <summary>
        /// GỌI KHI NGƯỜI DÙNG CLICK VÀO NÚT CHECK IN, NÓ SẼ LẤY TẠO 1 HÓA ĐƠN ĐỂ TRỐNG PHẦN CHECKOUT TIME VÀ TỔNG TIỀN (2 CÁI NÀY THÊM VÀO LÚC CHECK OUT)
        /// </summary>
        /// <param name="vehicleId">CHỌN TỪ DANH SÁCH</param>
        /// <param name="slotId">LOT HIỆN TẠI (AREA+NUMBER)</param>
        /// <returns></returns>
        [AuthorizationFilter]
        [Authorize(Roles = "User")]
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

        /// <summary>
        /// CÁI NÀY ĐƯỢC GỌI KHI NGƯỜI DÙNG CLICK VÀO LOT ĐÃ ĐẶT, NÓ SẼ TÍNH TỔNG TIỀN THEO GIỜ CHECKIN VÀ GIỜ CHECKOUT
        /// </summary>
        /// <param name="SlotId"> LOT ĐƯỢC CHỌN (AREA+NUMBER)</param>
        /// <returns></returns>

        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpGet("GetParkingVehicle/{SlotId}")]
        public async Task<ActionResult<InvoiceDTO>> CheckOut(string SlotId)
        {
            try
            {
                InvoiceDTO invoiceDTO = await invoiceService.GetIsParkingInvoiceBySlot(SlotId);

                int UserId = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                UserDTO user = await userService.GetUserById(UserId);

                VehicleDTO parkedVehicle = await vehicleService.GetById(invoiceDTO.VehicleId);

                bool isUserVehicle = false;

                foreach (VehicleDTO v in user.Vehicles)
                {
                    if (v.Id.Equals(parkedVehicle.Id))
                    {
                        isUserVehicle = true;
                        break;
                    }
                }

                if (!isUserVehicle) throw new Exception("It's not yours");

                invoiceDTO.CheckoutTime = DateTime.Parse(DateTime.Now.ToString("MM/dd/yyyy HH:mm:ss"));

                int[] parkingTime = await invoiceService.CalculateparkingTime(invoiceDTO.CheckinTime, invoiceDTO.CheckoutTime);

                VehicleTypeDTO parkingType = await vehicleTypeService.GetById((await slotService.GetByID(SlotId)).VehicleTypeId);

                invoiceDTO.TotalPaid = parkingTime[0] * parkingType.PricePerHour
                                        + parkingTime[1] * parkingType.PricePerDay
                                        + parkingTime[2] * parkingType.PricePerWeek
                                        + parkingTime[3] * parkingType.PricePerMonth
                                        + parkingTime[4] * parkingType.PricePerYear;

                return Ok(invoiceDTO);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// GỌI CÁI NÀY KHI USER NHẤN VÀO NÚT CHECK OUT, NÓ SẼ CẬP NHẬT LẠI HÓA ĐƠN THEO THÔNG TIN ĐÃ HIỆN
        /// </summary>
        /// <param name="invoiceDTO"> ĐẨY LẠI CÁI DTO Ở HÀM TRÊN VÀO ĐÂY </param>
        /// <returns></returns>
        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpPost("CheckOut")]
        public async Task<ActionResult<string>> CheckOut(InvoiceDTO invoiceDTO)
        {
            try
            {
                string note = "";
                note += await invoiceService.UpdateInvoice(invoiceDTO);
                note += await slotService.SetParkingSlotStatus(invoiceDTO.SlotId, false);
                note += await vehicleService.SetVehicleIsParking(invoiceDTO.VehicleId, false);

                return note;
            }
            catch (Exception e)
            {
                return BadRequest("ERROR: " + e.Message);
            }
        }
    }
}
