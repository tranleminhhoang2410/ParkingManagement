using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.DTO.DTOs;
using Parking.Service;

namespace Parking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WardController : ControllerBase
    {
        private readonly IWardService wardService;

        public WardController(IWardService wardService)
        {
            this.wardService = wardService;
        }

        [HttpGet("GetAll"), AllowAnonymous]
        public async Task<ActionResult<IEnumerable<WardDTO>>> GetWards()
        {
            return Ok(await wardService.GetAllWards());
        }

        [HttpGet("Get/{Id}"), AllowAnonymous]
        public async Task<ActionResult<WardDTO>> GetWard(int Id)
        {
            WardDTO ward = await wardService.GetWardById(Id);
            if (ward == null) return BadRequest("not found");
            return Ok(ward);
        }

        [HttpGet("Get/DistrictId/{DistrictId}"), AllowAnonymous]
        public async Task<ActionResult<IEnumerable<WardDTO>>> GetWardByDistrictId(int DistrictId)
        {
            return Ok(await wardService.GetWardByDistrictId(DistrictId));
        }
    }
}
