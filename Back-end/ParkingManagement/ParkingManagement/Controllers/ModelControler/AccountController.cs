using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Filter;
using ParkingManagement.Model.DTO;
using ParkingManagement.Service;

namespace ParkingManagement.Controllers.ModelControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService accountService;

        public AccountController(IAccountService accountService)
        {
            this.accountService = accountService;
        }

        [AuthorizationFilter]
        [Authorize(Roles = "Admin, User")]
        [HttpGet("GetByUserId/{Id}")]
        public async Task<ActionResult<AccountDTO>> GetById(int Id)
        {
            AccountDTO account = await accountService.GetAccountById(Id);
            if (account == null) return BadRequest("not found");
            return Ok(account);
        }
    }
}
