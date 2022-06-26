using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ParkingManagement.Controllers
{
    [Route("ParkingManagement")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        [HttpPost("Login")]
        public IActionResult Login(string user, string password)
        {
            return Ok();
        }

        [HttpPost("SignUp")]
        public IActionResult SignUp(string user, string password, string rePassword)
        {
            return Ok();
        }

        [HttpPost("ChangePassword")]
        public IActionResult ChangePassword(string user, string password, string newPassword)
        {
            return Ok();
        }

        [HttpDelete("Logout")]
        public IActionResult Logout()
        {
            return Ok();
        }
    }
}
