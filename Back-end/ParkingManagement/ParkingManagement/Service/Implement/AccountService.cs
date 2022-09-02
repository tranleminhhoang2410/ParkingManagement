using Microsoft.EntityFrameworkCore;
using ParkingManagement.Data;
using ParkingManagement.Model;
using ParkingManagement.Model.DTO;
using ParkingManagement.Utils.Mapper;

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

        public async Task<AccountDTO> GetAccount(string username, string password)
        {
            AccountDTO accountDTO = ToDTO.Map(await _db.Accounts.Include(c => c.User).FirstOrDefaultAsync(c => c.Username.Equals(username) && c.Password.Equals(password)));
            return accountDTO;
        }

        public async Task<AccountDTO> GetAccountById(int userId)
        {
            AccountDTO accountDTO = ToDTO.Map(await _db.Accounts.Include(c => c.User).FirstOrDefaultAsync(c => c.Id==userId));
            return accountDTO;
        }

        public async Task<AccountDTO> GetAccountByUser(string username)
        {
            AccountDTO accountDTO = ToDTO.Map(await _db.Accounts.Include(c => c.User).FirstOrDefaultAsync(c => c.Username.Equals(username)));
            return accountDTO;
        }

        public async Task<bool> UpdateAccount(AccountDTO accountDTO)
        {
            Account? _account = await _db.Accounts.FirstOrDefaultAsync(c => c.Id.Equals(accountDTO.Id));
            if (_account == null) return false;

            _account.Password = accountDTO.Password;

            await _db.SaveChangesAsync();
            return true;
        }
    }
}
