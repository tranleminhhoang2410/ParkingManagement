using ParkingManagement.Model.DTO;

namespace ParkingManagement.Service
{
    public interface IAccountService
    {
        public Task<AccountDTO> GetAccount(AccountDTO accountDTO);
        public Task<Boolean> AddAccount(AccountDTO accountDTO);
        public Task<Boolean> UpdateAccount(AccountDTO accountDTO);
    }
}
