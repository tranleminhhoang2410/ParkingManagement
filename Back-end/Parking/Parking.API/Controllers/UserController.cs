using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.DTO.DTOs;
using Parking.API.Filter;
using Parking.Service;
using Parking.ViewModel.User;
using System.Security.Claims;

namespace Parking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        private readonly IHttpContextAccessor httpContextAccessor;

        public UserController(IUserService userService, IHttpContextAccessor httpContextAccessor)
        {
            this.userService = userService;
            this.httpContextAccessor = httpContextAccessor;
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Get/Id/{Id}")]
        public async Task<ActionResult<UserDTO>> GetById(int Id)
        {
            UserDTO user = await userService.GetUserById(Id);
            if (user == null) return BadRequest("not found");
            return Ok(user);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("GetLoggedUser")]
        public async Task<ActionResult<UserDTO>> GetLoggedUser()
        {
            int userid = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
            UserDTO user = await userService.GetUserById(userid);
            return Ok(user);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Get/Email/{Email}")]
        public async Task<ActionResult<UserDTO>> GetByEmail(string Email)
        {
            UserDTO user = await userService.GetUserByEmail(Email);
            if (user == null) return BadRequest("not found");
            return Ok(user);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin")]
        [HttpGet("Get/Phone/{Phone}")]
        public async Task<ActionResult<UserDTO>> GetByPhone(string Phone)
        {
            UserDTO user = await userService.GetUserByPhone(Phone);
            if (user == null) return BadRequest("not found");
            return Ok(user);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpPut("Update")]
        public async Task<ActionResult<UserDTO>> Update(UserUpdateModel user)
        {
            UserDTO updateUser = new UserDTO
            {
                Id = user.Id,
                Email = user.Email,
                Phone = user.Phone,
                Street = user.Street,
                CityId = user.CityId,
                DistrictId = user.DistrictId,
                WardId = user.WardId
            };
            Boolean updated = await userService.UpdateUser(updateUser);
            if (updated)
            {
                UserDTO updatedUser = await userService.GetUserById(user.Id);
                return Ok(updatedUser);
            }
            else
            {
                return BadRequest("update fail");
            }

        }
    }
}
