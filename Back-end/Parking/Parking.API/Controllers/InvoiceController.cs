using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.Data.Constant;
using Paking.DTO.DTOs;
using Parking.API.Filter;
using Parking.Service;
using Parking.ViewModel.StatisticModel;
using System.ComponentModel;
using System.Reflection;

namespace Parking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IUserService userService;
        private readonly IVehicleService vehicleService;
        private readonly IInvoiceService invoiceService;
        private readonly IManagerInvoiceService managerInvoiceService;
        private readonly ISlotService slotService;

        public InvoiceController(IInvoiceService invoiceService, IVehicleService vehicleService, 
            IUserService userService, IManagerInvoiceService managerInvoiceService, ISlotService slotService)
        {
            this.invoiceService = invoiceService;
            this.vehicleService = vehicleService;
            this.userService = userService;
            this.managerInvoiceService = managerInvoiceService;
            this.slotService = slotService;
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("Get/{userId}")]
        public async Task<ActionResult<IEnumerable<InvoiceDTO>>> GetByUser(int userId)
        {
            List<InvoiceDTO> userInvoice = new List<InvoiceDTO>();

            List<VehicleDTO> userVehicles = (await vehicleService.GetAllByUserID(userId)).ToList();

            foreach(VehicleDTO v in userVehicles)
            {
                List<InvoiceDTO> vehicleInvoice = (await invoiceService.GetByVehicleId(v.Id)).Where(i => i.CheckoutTime != null).ToList();
                userInvoice.AddRange(vehicleInvoice);
            }

            return Ok(userInvoice);
        }


        [AuthorizationFilter]
        [Authorize(Roles = "User")]
        [HttpDelete("Delete/{Id}")]
        public async Task<ActionResult<string>> Delete(int Id)
        {
            try
            {
                await invoiceService.DeleteInvoice(Id);
                return Ok("Delete invoice success");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Admin/GetAll")]
        public async Task<ActionResult<IEnumerable<ManagerInvoiceDTO>>> GetAllManagerInvoice()
        {
            List<ManagerInvoiceDTO> List = (await managerInvoiceService.GetAll())
                .OrderByDescending(i => i.Id)
                .Take(6)
                .ToList();
            return Ok(List);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Admin/GetByID/{id}")]
        public async Task<ActionResult<ManagerInvoiceDTO>> GetManagerInvoiceById(int id)
        {
            return Ok(await managerInvoiceService.GetById(id));
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Admin/GetMonthlyParkingType")]
        public async Task<ActionResult<IEnumerable<MonthlyParking>>> GetMonthlyParkingType()
        {
            IEnumerable<ManagerInvoiceDTO> managerInvoice = 
                (await managerInvoiceService.GetAll()).Where(c => c.CheckoutTime.Value.Year == DateTime.Now.Year);

            List<MonthlyParking> monthlyParkings = new List<MonthlyParking>();

            for(int i = 1; i <= 12; i++)
            {
                monthlyParkings.Add(calculateMonthlyParking(i, managerInvoice));
            }

            return Ok(monthlyParkings);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Admin/GetHighestParkingType")]
        public async Task<ActionResult> HighestParkingType()
        {
            IEnumerable<ManagerInvoiceDTO> managerInvoice =
                (await managerInvoiceService.GetAll())
                    .Where(c => 
                        c.CheckoutTime.Value.Year == DateTime.Now.Year &&
                        c.CheckoutTime.Value.Month == DateTime.Now.Month
                    );

            return Ok(
                new
                {
                    MonthTotalPrice = managerInvoice.Sum(c => c.TotalPaid),
                    Data = calculateHighestPaidType(managerInvoice)
                }    
            );
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Admin/InvoiceStatistic")]
        public async Task<IActionResult> Statistic()
        {
            IEnumerable<ManagerInvoiceDTO> list = await managerInvoiceService.GetAll();
            double revenue = list
                .Where(i => i.CheckoutTime.Value.Year == DateTime.Now.Year)
                .Sum(i => i.TotalPaid);
            double average = revenue / 12;
            return Ok(new
            {
                totalInvoice = list.Count(),
                revenue = revenue,
                average = average
            });
        }

        #region Statistic calculate
        private MonthlyParking calculateMonthlyParking(int month, IEnumerable<ManagerInvoiceDTO> thisYearInvoices)
        {
            IEnumerable<ManagerInvoiceDTO> thisMonthInvoices = thisYearInvoices.Where(c => c.CheckoutTime.Value.Month == month);

            int count (int typeId, IEnumerable<ManagerInvoiceDTO> thisMonthInvoices)
            {
                return thisMonthInvoices
                        .Where(c =>
                            slotService.GetByID(c.SlotId).Result.VehicleTypeId == typeId)
                        .Count();
            }

            return new MonthlyParking
            {
                Month = GetEnumDescription((Month)month),
                Car = count(1, thisMonthInvoices),
                Bus = count(2, thisMonthInvoices),
                Truck = count(3, thisMonthInvoices),
            };
        }

        private TypeStatistic calculateHighestPaidType(IEnumerable<ManagerInvoiceDTO> thisMonthInvoices)
        {

            double total(int typeId)
            {
                return thisMonthInvoices
                        .Where(c =>
                            slotService.GetByID(c.SlotId).Result.VehicleTypeId == typeId)
                        .Sum(c => c.TotalPaid);
            }

            List<TypeStatistic> statistic = new List<TypeStatistic>()
            {
                new TypeStatistic{ TypeId = 1, TypeName="Car", Total = total(1)},
                new TypeStatistic{ TypeId = 2, TypeName="Bus", Total = total(2)},
                new TypeStatistic{ TypeId = 3, TypeName="Truck", Total = total(3)}
            };


            return statistic.OrderByDescending(c => c.Total).FirstOrDefault();
        }

        public static string GetEnumDescription(Enum value)
        {
            FieldInfo fi = value.GetType().GetField(value.ToString());

            DescriptionAttribute[] attributes = fi.GetCustomAttributes(typeof(DescriptionAttribute), false) as DescriptionAttribute[];

            if (attributes != null && attributes.Any())
            {
                return attributes.First().Description;
            }

            return value.ToString();
        }
        #endregion
    }
}
