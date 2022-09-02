using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Model.DTO;
using ParkingManagement.Model.ViewModel;
using ParkingManagement.Service;
using ParkingManagement.Utils.Constant;

namespace ParkingManagement.Controllers.ModelControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService emailService;
        private readonly IAccountService accountService;

        public EmailController(IEmailService emailService, IAccountService accountService)
        {
            this.emailService = emailService;
            this.accountService = accountService;
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassowrd(string username, string link)
        {
            try
            {
                AccountDTO account = await accountService.GetAccountByUser(username);

                string toEmail = account.User.Email;

                emailService.sendEmail(new EmailModel
                {
                    To = toEmail,
                    Subject = "ForgotPassword notify",
                    Body = EmailFormat.ForgotPassword(link, username)
                });

                return Ok(new
                {
                    Success = "send email success"
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
