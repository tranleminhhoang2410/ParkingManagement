using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.DTO.DTOs;
using Parking.Service;

namespace Parking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DistrictController : ControllerBase
    {
        private readonly IDistrictService districtService;

        public DistrictController(IDistrictService districtService)
        {
            this.districtService = districtService;
        }

        [HttpGet("GetAll"), AllowAnonymous]
        public async Task<ActionResult<IEnumerable<DistrictDTO>>> GetDistricts()
        {
            return Ok(await districtService.GetAllDistricts());
        }

        [HttpGet("Get/{Id}"), AllowAnonymous]
        public async Task<ActionResult<DistrictDTO>> GetDistricts(int Id)
        {
            DistrictDTO district = await districtService.GetDistrictById(Id);
            if (district == null) return BadRequest("not found");
            return Ok(district);
        }

        [HttpGet("Get/CityId/{CityId}"), AllowAnonymous]
        public async Task<ActionResult<IEnumerable<DistrictDTO>>> GetDistrictsByCityId(int CityId)
        {
            return Ok(await districtService.GetDistrictByCityId(CityId));
        }
    }
}
