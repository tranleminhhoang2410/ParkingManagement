﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.Data.Constant;
using Paking.DTO.DTOs;
using Parking.API.Filter;
using Parking.API.Utils;
using Parking.Service;
using Parking.ViewModel.Vehicle;
using System.Security.Claims;

namespace Parking.API.Controllers
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
        private readonly IManagerInvoiceService managerInvoiceService;

        public VehicleController(IVehicleService vehicleService, IInvoiceService invoiceService, ISlotService slotService,
            IVehicleTypeService vehicleTypeService, IHttpContextAccessor httpContextAccessor, IUserService userService, IManagerInvoiceService managerInvoiceService)
        {
            this.vehicleService = vehicleService;
            this.invoiceService = invoiceService;
            this.slotService = slotService;
            this.vehicleTypeService = vehicleTypeService;
            this.httpContextAccessor = httpContextAccessor;
            this.userService = userService;
            this.managerInvoiceService = managerInvoiceService;
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpPost("AddVehicle")]
        public async Task<ActionResult<string>> AddVehicle(int userID, string vehicleId, string name, string brand, int typeId)
        {
            try
            {
                if (!Valid.vehicleId(vehicleId)) throw new Exception("Vehicle id not right format");
                if((await vehicleService.GetAll()).FirstOrDefault(v => v.Id.Equals(vehicleId))!= null)
                {
                    throw new Exception("Your vehicle id is existed! try again.");
                }

                VehicleDTO vehicle = new VehicleDTO
                {
                    Id = vehicleId,
                    VehicleName = name,
                    VehicleBrand = brand,
                    VehicleTypeId = typeId
                };
                return await vehicleService.AddNewUserVehicle(vehicle, userID);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("Get/UserVehicle/{userId}")]
        public async Task<ActionResult<IEnumerable<VehicleDTO>>> GetUserVehicle(int userId)
        {
            return Ok(await vehicleService.GetAllByUserID(userId));
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("GetAll")]
        public async Task<ActionResult<IEnumerable<VehicleDTO>>> GetAll()
        {
            return Ok(await vehicleService.GetAll());
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("GetByType/{typeId}")]
        public async Task<ActionResult<IEnumerable<VehicleVM1>>> GetByType(int typeId)
        {
            List<VehicleDTO> vehicleList = (await vehicleService.GetAll()).Where(v => v.VehicleTypeId == typeId).ToList();

            List<VehicleVM1> list = vehicleList.Select(v => new VehicleVM1
            {
                VehicleId = v.Id,
                VehicleBrand = v.VehicleBrand,
                VehicleName = v.VehicleName,
                IsParking = v.IsParking?1:0,
                Owner = userService.GetUserById(v.UserId).Result.Name
            }).ToList();

            return Ok(
                list
            );
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpDelete("Remove/{id}")]
        public async Task<ActionResult> Remove(string id)
        {
            try
            {               
                await vehicleService.Remove(id);
                return Ok(new { Success = "Remove success!!!" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }

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
                note += await slotService.SetParkingSlotStatus(slotId, (int)SlotStatus.Parked);
                note += await vehicleService.SetVehicleIsParking(vehicleId, true);

                return note;
            }
            catch (Exception e)
            {
                return BadRequest("ERROR: " + e.Message);
            }
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("CheckedIn/{SlotId}")]
        public async Task<ActionResult<InvoiceDTO>> GetCheckInInvoice(string SlotId)
        {
            try
            {
                InvoiceDTO invoiceDTO = await invoiceService.GetIsParkingInvoiceBySlot(SlotId);

                int UserId = getLoggedUserId();
                UserDTO user = await userService.GetUserById(UserId);

                if (invoiceDTO != null)
                {
                    VehicleDTO parkedVehicle = await vehicleService.GetById(invoiceDTO.VehicleId);
                    if (getLoggedUserRole().Equals("User"))
                    {
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
                    }

                    invoiceDTO.CheckoutTime = DateTime.Parse(DateTime.Now.ToString("MM/dd/yyyy HH:mm:ss"));

                    invoiceDTO.TotalPaid = CalulateParkingPrice(invoiceDTO, parkedVehicle.VehicleType).Result;

                    return Ok(invoiceDTO);
                }
                else
                {
                    return Ok(new
                    {
                        Message = "No parking vehicle"
                    });
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpPost("CheckOut")]
        public async Task<ActionResult<InvoiceDTO>> CheckOut(InvoiceDTO invoiceDTO)
        {
            try
            {
                invoiceDTO.CheckoutTime = DateTime.Parse(DateTime.Now.ToString("MM/dd/yyyy HH:mm:ss"));

                Dictionary<string, int> parkingTime = await invoiceService.CalculateparkingTime(invoiceDTO.CheckinTime, invoiceDTO.CheckoutTime);

                VehicleTypeDTO parkingType = await vehicleTypeService.GetById((await slotService.GetByID(invoiceDTO.SlotId)).VehicleTypeId);
                VehicleDTO parkingVehicle = await vehicleService.GetById(invoiceDTO.VehicleId);

                invoiceDTO.TotalPaid = CalulateParkingPrice(invoiceDTO, parkingType).Result;

                string note = "";
                note += await invoiceService.UpdateInvoice(invoiceDTO);
                note += await slotService.SetParkingSlotStatus(invoiceDTO.SlotId, (int)SlotStatus.Empty);
                note += await vehicleService.SetVehicleIsParking(invoiceDTO.VehicleId, false);

                await managerInvoiceService.AddNewInvoice(new ManagerInvoiceDTO
                {
                    Id = invoiceDTO.Id,
                    CheckinTime = invoiceDTO.CheckinTime,
                    CheckoutTime = invoiceDTO.CheckoutTime,
                    SlotId = invoiceDTO.SlotId,
                    TotalPaid = invoiceDTO.TotalPaid,
                    UserName = (await userService.GetUserById(parkingVehicle.UserId)).Name,
                    VehicleId = invoiceDTO.VehicleId
                });

                return invoiceDTO;
            }
            catch (Exception e)
            {
                return BadRequest("ERROR: " + e.Message);
            }
        }

        #region Utils
        private async Task<double> CalulateParkingPrice(InvoiceDTO ParkedInvoice, VehicleTypeDTO vehicleType)
        {
            Dictionary<string, int> parkingTime = await invoiceService.CalculateparkingTime(ParkedInvoice.CheckinTime, ParkedInvoice.CheckoutTime);

            double total = parkingTime.GetValueOrDefault("hours") * vehicleType.PricePerHour 
                        + parkingTime.GetValueOrDefault("days") * vehicleType.PricePerDay
                        + parkingTime.GetValueOrDefault("weeks") * vehicleType.PricePerWeek;

            total = total == 0 ? vehicleType.PricePerHour : total;

            return total;
        }

        private int getLoggedUserId() => int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));

        private string getLoggedUserRole() => httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Role);
        #endregion

    }
}
