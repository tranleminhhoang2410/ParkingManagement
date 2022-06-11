using Microsoft.EntityFrameworkCore;
using ParkingManagement.Data;
using ParkingManagement.Model;
using ParkingManagement.Model.DTO;
using ParkingManagement.Utils.Mapper;

namespace ParkingManagement.Service.Implement
{
    public class SlotService : BaseServiceContext, ISlotService
    {
        public SlotService(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<SlotDTO>> GetAll()
        {
            List<SlotDTO?> slots = await _db.Slots
                .Include(c => c.VehicleType)
                .Select(c => ToDTO.Map(c))
                .ToListAsync();
            return slots;
        }

        public async Task<IEnumerable<SlotDTO>> GetAllByTypeId(int typeId)
        {
            List<SlotDTO?> slots = await _db.Slots
                .Include(c => c.VehicleType)
                .Where(c => c.VehicleTypeId == typeId)
                .Select(c => ToDTO.Map(c))   
                .ToListAsync();
            return slots;
        }

        public async Task<SlotDTO> GetByID(string id)
        {
            SlotDTO? slot = ToDTO.Map(await _db.Slots
                .Include(c => c.VehicleType)
                .FirstOrDefaultAsync(c => c.Id.Equals(id)));
            return slot;
        }

        public async Task<Boolean> UpdateSlot(SlotDTO slot)
        {
            string slotId = (slot.SlotGroup + slot.SlotPos).Trim();

            Slot? _slot = await _db.Slots.FirstOrDefaultAsync(c => c.Id.Equals(slotId));
            if (_slot == null) return false;

            _slot.Status = slot.Status;

            await _db.SaveChangesAsync();
            return true;
        }
    }
}
