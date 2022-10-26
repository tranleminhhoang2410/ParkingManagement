using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Paking.DTO.DTOs;
using Parking.Service;

namespace Parking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityService cityService;

        public CityController(ICityService cityService)
        {
            this.cityService = cityService;
        }


        [HttpGet("GetAll"), AllowAnonymous]
        public async Task<ActionResult<IEnumerable<CityDTO>>> GetCities()
        {
            return Ok(await cityService.GetAllCities());
        }

        [HttpGet("Get/{Id}"), AllowAnonymous]
        public async Task<ActionResult<CityDTO>> GetCities(int Id)
        {
            CityDTO city = await cityService.GetCityById(Id);
            if (city == null) return BadRequest("not found");
            return Ok(city);
        }
    }
}
