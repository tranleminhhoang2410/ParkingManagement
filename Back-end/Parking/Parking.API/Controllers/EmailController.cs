using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.DTO.DTOs;
using Parking.EmailService;
using Parking.Security;
using Parking.Service;

namespace Parking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService emailService;
        private readonly IAccountService accountService;
        private readonly ITokenManager tokenManager;

        public EmailController(IEmailService emailService, IAccountService accountService, ITokenManager tokenManager)
        {
            this.emailService = emailService;
            this.accountService = accountService;
            this.tokenManager = tokenManager;
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassowrd(string username)
        {
            try
            {
                string token = tokenManager.GeneratePasswordResetToken();

                AccountDTO account = await accountService.GetAccountByUser(username);

                if (tokenManager.GetUserValidTokenStorage(account.User.Id) == null)
                {
                    await tokenManager.AddUserValidTokenStorage(account.User.Id);
                }

                await tokenManager.SavePasswordResetToken(account.User.Id, token);

                emailService.sendEmail(new EmailModel
                {
                    To = account.User.Email,
                    Subject = "ForgotPassword notify",
                    Body = EmailFormat.ForgotPassword(username, token)
                });

                return Ok(new
                {
                    Success = "A confirmation email has been sent to email "+ account.User.Email + ". Please, check "+ account.User.Email + " to reset password!"
                });
            }
            catch (Exception e)
            {
                return BadRequest(new
                {
                    error = e.Message
                });
            }
        }
    }
}
