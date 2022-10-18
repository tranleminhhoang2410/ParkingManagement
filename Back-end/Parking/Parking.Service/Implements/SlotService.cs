using Microsoft.EntityFrameworkCore;
using Paking.Data.Entities;
using Paking.DTO.DTOs;
using Paking.DTO.Mapper;
using Parking.DbAccess.Db_Context;
using Parking.ViewModel;

namespace Parking.Service.Implements
{
    public class SlotService : BaseRepoDbContext, ISlotService
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

            foreach(SlotDTO s in slots)
            {
                Invoice invoice = (await _db.Invoices
                .FirstOrDefaultAsync(c => c.SlotId.Equals(s.Area+s.Position) && c.CheckoutTime == null));

                if (invoice == null) continue;

                s.userId = (await _db.Vehicles
                .Include(c => c.VehicleType)
                .Include(c => c.Invoices)
                .Include(c => c.User)
                .FirstOrDefaultAsync(c => c.Id.Equals(invoice.VehicleId))).UserID;
            }

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

        public async Task<string> SetParkingSlotStatus(string id, int status)
        {
            try
            {
                Slot? s = await _db.Slots.FirstOrDefaultAsync(c => c.Id.Equals(id));
                if (s == null) throw new Exception("no slot found");

                s.Status = status;

                await _db.SaveChangesAsync();
                return "slot status update susscess! ";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public IEnumerable<LotRow> toView(List<SlotDTO> slotDTOs)
        {

            SlotDTO temp = new SlotDTO();
            List<LotRow> ListRows = new List<LotRow>(); 

            foreach (SlotDTO slot in slotDTOs)
            {
                if (slot.Position % 2 == 1)
                {
                    temp = slot;
                }
                else
                {
                    LotRow row = new LotRow
                    {
                        area = slot.Area[0],
                        type = slot.VehicleTypeName,
                        cells = new List<LotCell>
                        {
                            new LotCell
                            {
                                status = temp.Status,
                                number = temp.Position,
                                userId = temp.userId
                            },
                            new LotCell
                            {
                                status = slot.Status,
                                number = slot.Position,
                                userId = slot.userId
                            }
                        }
                    };

                    ListRows.Add(row);
                }
            }

            return ListRows;
        }

        public async Task<Boolean> UpdateSlot(SlotDTO slot)
        {
            string slotId = (slot.Area + slot.Position).Trim();

            Slot? _slot = await _db.Slots.FirstOrDefaultAsync(c => c.Id.Equals(slotId));
            if (_slot == null) return false;

            _slot.Status = slot.Status;

            await _db.SaveChangesAsync();
            return true;
        }
    }
}
