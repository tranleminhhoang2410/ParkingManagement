using Microsoft.IdentityModel.Tokens;
using Paking.Data.Entities;
using Paking.DTO.DTOs;
using Parking.DbAccess.Db_Context;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Parking.Security
{
    public class TokenManager : BaseRepoDbContext, ITokenManager
    {
        private JwtSecurityTokenHandler tokenHandler;
        private byte[] secretKey;

        public TokenManager(AppDbContext context) : base(context)
        {
            tokenHandler = new JwtSecurityTokenHandler();
            secretKey = Encoding.ASCII.GetBytes("ThisIsTheSecretKey:917364");
        }

        public async Task AddUserValidTokenStorage(int userId)
        {
            Tokens token = new Tokens
            {
                UserId = userId
            };

            _db.AccountTokens.AddAsync(token);
            await _db.SaveChangesAsync();
        }

        public async Task DeleteToken(int userId)
        {
            Tokens UserToken = _db.AccountTokens.FirstOrDefault(t => t.UserId == userId);
            UserToken.JWT = null;

            _db.SaveChanges();
        }

        public string GenerateNewToken(AccountDTO account)
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, account.User.Id.ToString()),
                    new Claim(ClaimTypes.Role, account.Role)
                }),
                Expires = DateTime.UtcNow.AddHours(3),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(secretKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            var jwtTokenString = tokenHandler.WriteToken(token);

            Tokens UserToken = _db.AccountTokens.FirstOrDefault(t => t.UserId == account.User.Id);
            UserToken.JWT = "bearer " + jwtTokenString;

            _db.SaveChanges();

            return jwtTokenString;
        }

        public string GeneratePasswordResetToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }

        public Tokens GetUserValidTokenStorage(int userId)
        {
            return _db.AccountTokens.FirstOrDefault(c => c.UserId == userId);
        }

        public Tokens GetUserValidTokenStorage(string token)
        {
            return _db.AccountTokens.FirstOrDefault(c => c.PasswordResetToken == token && c.ResetTokenExpires>DateTime.Now);
        }

        public async Task SavePasswordResetToken(int userId, string token)
        {
            Tokens UserToken = _db.AccountTokens.FirstOrDefault(t => t.UserId == userId);
            UserToken.PasswordResetToken = token;
            UserToken.ResetTokenExpires = DateTime.Now.AddHours(2);

            _db.SaveChangesAsync();
        }

        public void SaveTokenInClient(string token)
        {
          
        }

        public ClaimsPrincipal VerifyToken(string token)
        {
            string[] tokenPart = token.Split(' ');

            Tokens checkToken = _db.AccountTokens.FirstOrDefault(t => t.JWT == token);

            if (checkToken != null)
            {
                var claims = tokenHandler.ValidateToken(tokenPart[1],
                new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(secretKey),
                    ValidateLifetime = true,
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validateJwtToken);
                return claims;
            }
            else
            {
                throw new Exception();
            }
        }


    }
}
