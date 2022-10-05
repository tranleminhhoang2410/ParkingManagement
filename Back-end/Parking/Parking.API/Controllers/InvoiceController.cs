using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.DTO.DTOs;
using Parking.API.Filter;
using Parking.Service;

namespace Parking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IUserService userService;
        private readonly IVehicleService vehicleService;
        private readonly IInvoiceService invoiceService;

        public InvoiceController(IInvoiceService invoiceService, IVehicleService vehicleService, IUserService userService)
        {
            this.invoiceService = invoiceService;
            this.vehicleService = vehicleService;
            this.userService = userService;
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("Get/{userId}")]
        public async Task<ActionResult<IEnumerable<InvoiceDTO>>> GetUserVehicle(int userId)
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
    }
}
