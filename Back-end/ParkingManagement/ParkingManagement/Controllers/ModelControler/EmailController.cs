﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Authentication;
using ParkingManagement.Authentication.AuthModel;
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
        private readonly ITokenManager tokenManager;

        public EmailController(IEmailService emailService, IAccountService accountService, ITokenManager tokenManager)
        {
            this.emailService = emailService;
            this.accountService = accountService;
            this.tokenManager = tokenManager;
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassowrd(string username, string link, string token)
        {
            try
            {
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
