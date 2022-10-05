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
    public class VehicleTypeController : ControllerBase
    {
        private readonly IVehicleTypeService vehicleTypeService;

        public VehicleTypeController(IVehicleTypeService vehicleTypeService)
        {
            this.vehicleTypeService = vehicleTypeService;
        }

        [HttpGet("GetAll"), AllowAnonymous]
        public async Task<ActionResult<IEnumerable<VehicleTypeDTO>>> GetAllVehicleTypes()
        {
            return Ok(await vehicleTypeService.GetAll());
        }

        [HttpGet("Get/{Id}"), AllowAnonymous]
        public async Task<ActionResult<VehicleTypeDTO>> GetType(int Id)
        {
            VehicleTypeDTO type = await vehicleTypeService.GetById(Id);
            if (type == null) return BadRequest("not found");
            return Ok(type);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpPut("Update")]
        public async Task<ActionResult<IEnumerable<VehicleTypeDTO>>> Update(VehicleTypeDTO vehicleTypeDTO)
        {
            Boolean updated = await vehicleTypeService.Update(vehicleTypeDTO);
            if (updated)
            {
                return Ok(await vehicleTypeService.GetAll());
            }
            else
            {
                return BadRequest("update fail");
            }

        }
    }
}
