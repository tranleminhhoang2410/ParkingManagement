using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paking.Data.Constant;
using Paking.Data.Entities;
using Paking.DTO.DTOs;
using Parking.API.Filter;
using Parking.API.Utils;
using Parking.Security;
using Parking.Service;
using System.Security.Claims;

namespace Parking.API.Controllers
{
    [Route("api/ParkingManagement")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAccountService accountService;
        private readonly ITokenManager tokenManager;
        private readonly IHttpContextAccessor httpContextAccessor;

        public AuthenticationController(IAccountService accountService, ITokenManager tokenManager, IHttpContextAccessor httpContextAccessor)
        {
            this.accountService = accountService;
            this.tokenManager = tokenManager;
            this.httpContextAccessor = httpContextAccessor;
        }


        /// <summary>
        /// LOGIN FUNCTION - FOR ALL
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost("Login")]
        public async Task<IActionResult> Login(string username, string password)
        {
            try
            {
                AccountDTO loggeduser = await accountService.GetAccountByUser(username);
                if (loggeduser != null)
                {
                    if (loggeduser.Password.Equals(AuthenticationHelper.MD5Hash(password)))
                    {
                        if (tokenManager.GetUserValidTokenStorage(loggeduser.User.Id) == null)
                        {
                            await tokenManager.AddUserValidTokenStorage(loggeduser.User.Id);
                        }

                        string token = tokenManager.GenerateNewToken(loggeduser);
                        SetTokenCookie(token, DateTime.Now.AddHours(2));

                        return Ok(new
                        {
                            Token = token
                        });
                    }
                    else
                    {
                        throw new Exception("Password is invalid!");
                    }

                }
                else
                {
                    throw new Exception("Username or password is invalid!");
                }
            }
            catch(Exception ex)
            {
                return Unauthorized(new
                {
                    Error = ex.Message
                });
            }
        }


        /// <summary>
        /// ADD NEW USER
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="ConfirmPassword"></param>
        /// <returns></returns>
        [HttpPost("SignUp")]
        public async Task<IActionResult> SignUp(
            string username, 
            string password, 
            string ConfirmPassword,
            string fullname,
            string email,
            string phone)
        {
            try
            {
                if (!ConfirmPassword.Equals(password)) throw new Exception("Confirm Password must match Password!");
                if ((await accountService.GetAccountByUser(username)) != null) throw new Exception("Username is already existed!");
                if (fullname.Trim().Equals("")) throw new Exception("Username must not be empty!");
                if (!Valid.email(email)) throw new Exception("Email is invalid!");
                if (!Valid.phone(phone)) throw new Exception("Phone is invalid with format ########## or ### ### #### or ###-###-####!");

                AccountDTO accountDTO = new AccountDTO
                {
                    Username = username,
                    Password = AuthenticationHelper.MD5Hash(password),
                    Role = Role.User.ToString(),
                    User = new UserDTO
                    {
                        Name = fullname,
                        Email = email,
                        Phone = phone
                    }
                };
                await accountService.AddAccount(accountDTO);

                return Ok(new
                {
                    Success = "User register sucessful"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// CHANGE PASSWORD - MUST AUTHENTICATE
        /// </summary>
        /// <param name="user"></param>
        /// <param name="password"></param>
        /// <param name="newPassword"></param>
        /// <returns></returns>
        [AuthorizationFilter]
        [Authorize]
        [HttpPut("ChangePassword")]
        public async Task<IActionResult> ChangePassword(
            string username, 
            string oldPassword, 
            string newPassword, 
            string confirmNewPassword)
        {
            try
            {
                if (newPassword.Equals(oldPassword)) throw new Exception("New password must not match with Old password! Try again.");
                if (!confirmNewPassword.Equals(newPassword)) throw new Exception("Confirm New Password must match with New Password! Try again.");

                AccountDTO user = await accountService.GetAccountByUser(username);
                if (user != null)
                {
                    if (user.Password.Equals(AuthenticationHelper.MD5Hash(oldPassword)))
                    {
                        //int userid = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                        //await tokenManager.DeleteToken(userid);
                        //SetTokenCookie(string.Empty, DateTime.Now.AddDays(-1));

                        AccountDTO accountDTO = new AccountDTO
                        {
                            Id = user.Id,
                            Username = user.Username,
                            Password = AuthenticationHelper.MD5Hash(newPassword),
                        };

                        await accountService.UpdateAccount(accountDTO);
                    }
                    else
                    {
                        throw new Exception("Wrong password! Try again.");
                    }
                }
                else
                {
                    throw new Exception("Wrong username or password! Try again.");
                }

                return Ok(new
                {
                    Success = "Change password sucessful"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Fail = ex.Message
                });
            }
        }

        /// <summary>
        /// lOGOUT - MUST AUTHENTICATE
        /// </summary>
        /// <returns></returns>
        [AuthorizationFilter]
        [Authorize]
        [HttpDelete("Logout")]
        public async Task<IActionResult> Logout()
        {
            try
            {
                int userid = int.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                await tokenManager.DeleteToken(userid);
                SetTokenCookie(string.Empty, DateTime.Now.AddDays(-1));

                return Ok(new
                {
                    Success = "logout success"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Fail = ex.Message
                });
            }
        }

        [HttpGet("ResetPasswordToken")]
        public async Task<IActionResult> ResetPasswordToken()
        {
            return Ok(new
            {
                Token = tokenManager.GeneratePasswordResetToken()
            }) ;
        }

        [HttpGet("ForgotPasswordUser")]
        public async Task<IActionResult> ForgotPasswordUser(string token)
        {
            try
            {
                Tokens tokens = tokenManager.GetUserValidTokenStorage(token);

                if(tokens != null)
                {
                    AccountDTO acc = await accountService.GetAccountById(tokens.UserId);

                    return Ok(new
                    {
                        username = acc.Username
                    }) ;
                }
                else
                {
                    throw new Exception("invalid token");
                }

                
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Fail = ex.Message
                });
            }
        }

        [HttpPut("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword(
            string username,
            string newPassword,
            string confirmNewPassword)
        {
            try
            {
                if (!confirmNewPassword.Equals(newPassword)) throw new Exception("Confirm New Password must match with New Password! Try again.");

                AccountDTO user = await accountService.GetAccountByUser(username);
                if (user != null)
                {
                    AccountDTO accountDTO = new AccountDTO
                    {
                        Id = user.Id,
                        Username = user.Username,
                        Password = AuthenticationHelper.MD5Hash(newPassword),
                    };

                    await accountService.UpdateAccount(accountDTO);
                }
                else
                {
                    throw new Exception("Wrong password! Try again.");
                }

                return Ok(new
                {
                    Success = "Change password sucessful"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    Fail = ex.Message
                });
            }
        }

        private void SetTokenCookie(string Token, DateTime Expires)
        {
            var CookieOption = new CookieOptions
            {
                HttpOnly = true,
                Expires = Expires
            };
            Response.Cookies.Append("accessToken", Token, CookieOption);
        }
    }
}
