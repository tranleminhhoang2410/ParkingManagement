using Microsoft.AspNetCore.Mvc;
using Paking.DTO.DTOs;
using Parking.Service;

namespace Parking.API.Controllers
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

        [HttpGet("GetByUserId/{Id}")]
        public async Task<ActionResult<AccountDTO>> GetById(int Id)
        {
            AccountDTO account = await accountService.GetAccountById(Id);
            if (account == null) return BadRequest("not found");
            return Ok(account);
        }
    }
}
