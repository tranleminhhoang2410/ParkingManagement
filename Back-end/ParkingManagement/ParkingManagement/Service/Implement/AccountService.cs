using Microsoft.EntityFrameworkCore;
using ParkingManagement.Data;
using ParkingManagement.Model;
using ParkingManagement.Model.DTO;

namespace ParkingManagement.Service.Implement
{
    public class AccountService : BaseServiceContext, IAccountService
    {
        public AccountService(AppDbContext context) : base(context)
        {
        }

        public async Task<string> AddAccount(AccountDTO accountDTO)
        {
            try
            {
                Account? account = await _db.Accounts.FirstOrDefaultAsync(c => c.Username.Equals(accountDTO.Username));
                if (account != null) return "Account Exited";

                Account newAccount = new Account
                {
                    Username = accountDTO.Username,
                    Password = accountDTO.Password,
                    Role = accountDTO.Role,
                    User = new User
                    {
                        Email = accountDTO.User.Email,
                        Phone = accountDTO.User.Phone,
                        Name = accountDTO.User.Name
                    }
                };

                _db.Accounts.AddAsync(newAccount);
                await _db.SaveChangesAsync();
                return "success";

            }
            catch (Exception e)
            {
                return e.Message;
            }            
        }

        public Task<AccountDTO> GetAccount(AccountDTO accountDTO)
        {
            throw new NotImplementedException();
        }

        public Task<string> UpdateAccount(AccountDTO accountDTO)
        {
            throw new NotImplementedException();
        }
    }
}
