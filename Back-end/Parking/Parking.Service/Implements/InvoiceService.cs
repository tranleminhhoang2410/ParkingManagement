using Microsoft.EntityFrameworkCore;
using Paking.Data.Entities;
using Paking.DTO.DTOs;
using Paking.DTO.Mapper;
using Parking.DbAccess.Db_Context;

namespace Parking.Service.Implements
{
    public class InvoiceService : BaseRepoDbContext, IInvoiceService
    {
        public InvoiceService(AppDbContext context) : base(context)
        {
        }

        public async Task<string> AddNewInvoice(InvoiceDTO invoiceDTO)
        {
            try
            {
                Vehicle? vehicle = await _db.Vehicles.FirstOrDefaultAsync(c => c.Id.Equals(invoiceDTO.VehicleId));
                if (vehicle == null) return "Vehicle not existed";

                Slot? slot = await _db.Slots.FirstOrDefaultAsync(c => c.Id.Equals(invoiceDTO.SlotId));
                if (slot.Status == true) return slot.Id + "Slot is full!";

                Invoice invoice = new Invoice
                {
                    SlotId = invoiceDTO.SlotId,
                    VehicleId = invoiceDTO.VehicleId,
                    CheckinTime = DateTime.Parse(DateTime.Now.ToString("MM/dd/yyyy HH:mm:ss"))
                };

                await _db.Invoices.AddAsync(invoice);
                await _db.SaveChangesAsync();
                return "add invoice success!";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public async Task<Dictionary<string, int>> CalculateparkingTime(DateTime? checkin, DateTime? checkout)
        {
            TimeSpan timeSpan = ((DateTime)checkout).Subtract((DateTime)checkin);

            Dictionary<string, int> time = new Dictionary<string, int>();

            time.Add("second", timeSpan.Seconds);
            time.Add("minutes", timeSpan.Minutes);
            time.Add("hours", timeSpan.Hours);
            time.Add("days", timeSpan.Days % 365 % 30 % 7);
            time.Add("weeks", timeSpan.Days % 365 % 30 / 7);
            time.Add("months", timeSpan.Days % 365 / 30);
            time.Add("years", timeSpan.Days / 365);
            time.Add("totalDays", timeSpan.Days);

            return time;
        }

        public async Task DeleteInvoice(int id)
        {
            try
            {
                Invoice invoice = await _db.Invoices.FirstOrDefaultAsync(i => i.Id == id);

                if (invoice == null) throw new Exception("No invoice id:"+id+" found");

                _db.Invoices.Remove(invoice);
                _db.SaveChangesAsync();

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public async Task<IEnumerable<InvoiceDTO>> GetByVehicleId(string vehicleId)
        {
            List<InvoiceDTO?> invoices = await _db.Invoices
               .Include(c => c.Vehicle)
               .Where(c => c.VehicleId == vehicleId)
               .Select(c => ToDTO.Map(c))
               .ToListAsync();
            return invoices;
        }

        public async Task<InvoiceDTO> GetIsParkingInvoiceBySlot(string slotId)
        {
            InvoiceDTO? invoice = ToDTO.Map(await _db.Invoices
                .Include(c => c.Vehicle)
                .FirstOrDefaultAsync(c => c.SlotId.Equals(slotId) && c.CheckoutTime == null));
            return invoice;
        }

        public async Task<string> UpdateInvoice(InvoiceDTO invoiceDTO)
        {
            try
            {
                Invoice? invoice = await _db.Invoices.FirstOrDefaultAsync(c => c.Id.Equals(invoiceDTO.Id));
                if (invoice == null) return "no invoice";

                invoice.CheckoutTime = invoiceDTO.CheckoutTime;
                invoice.TotalPaid = invoiceDTO.TotalPaid;

                await _db.SaveChangesAsync();
                return "update invoice success";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }


    }
}
