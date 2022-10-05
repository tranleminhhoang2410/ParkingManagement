
using Paking.DTO.DTOs;
using Parking.ViewModel;

namespace Parking.Service
{
    public interface ISlotService
    {
        public Task<IEnumerable<SlotDTO>> GetAll();
        public Task<IEnumerable<SlotDTO>> GetAllByTypeId(int typeId);
        public Task<SlotDTO> GetByID(string id);
        public Task<Boolean> UpdateSlot(SlotDTO slot);
        public Task<string> SetParkingSlotStatus(string id, bool status);
        public IEnumerable<LotRow> toView(List<SlotDTO> slotDTOs);
    }
}
