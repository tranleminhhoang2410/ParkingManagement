using Paking.Data.Entities;
using Paking.DTO.DTOs;
using System.Security.Claims;

namespace Parking.Security
{
    public interface ITokenManager
    {
        string GenerateNewToken(AccountDTO account);
        string GeneratePasswordResetToken();
        ClaimsPrincipal VerifyToken(string token);
        public Task AddUserValidTokenStorage(int userId);
        public Task DeleteToken(int userId);
        public Task SavePasswordResetToken(int userId, string token);
        public Tokens GetUserValidTokenStorage(int userId);
        public Tokens GetUserValidTokenStorage(string token);
        public void SaveTokenInClient(string token);
    }
}
