using ParkingManagement.Model.DTO;

namespace ParkingManagement.Service
{
    public interface IAccountService
    {
        public Task<AccountDTO> GetAccount(string username, string password);
        public Task<AccountDTO> GetAccountByUser(string username);
        public Task<AccountDTO> GetAccountById(int userId);
        public Task<string> AddAccount(AccountDTO accountDTO);
        public Task<bool> UpdateAccount(AccountDTO accountDTO);
    }
}
