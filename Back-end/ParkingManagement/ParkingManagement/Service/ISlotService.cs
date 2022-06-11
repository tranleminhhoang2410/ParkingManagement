using ParkingManagement.Model;
using ParkingManagement.Model.DTO;

namespace ParkingManagement.Service
{
    public interface ISlotService
    {
        public Task<IEnumerable<SlotDTO>> GetAll();
        public Task<IEnumerable<SlotDTO>> GetAllByTypeId(int typeId);
        public Task<SlotDTO> GetByID(string id);
        public Task<Boolean> UpdateSlot(SlotDTO slot); 
    }
}
