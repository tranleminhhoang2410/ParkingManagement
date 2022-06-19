using ParkingManagement.Model.DTO;

namespace ParkingManagement.Service
{
    public interface IAccountService
    {
        public Task<AccountDTO> GetAccount(AccountDTO accountDTO);
        public Task<string> AddAccount(AccountDTO accountDTO);
        public Task<string> UpdateAccount(AccountDTO accountDTO);
    }
}
