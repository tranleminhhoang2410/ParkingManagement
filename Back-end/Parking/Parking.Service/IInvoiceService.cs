
using Paking.DTO.DTOs;

namespace Parking.Service
{
    public interface IInvoiceService
    {
        public Task<IEnumerable<InvoiceDTO>> GetAll();
        public Task<IEnumerable<InvoiceDTO>> GetByVehicleId(string vehicleId);
        public Task<IEnumerable<InvoiceDTO>> GetByUserId(int userId);
        public Task<InvoiceDTO> GetById(int Id);
        public Task<InvoiceDTO> GetIsParkingInvoiceBySlot(string slotId);
        public Task<string> AddNewInvoice(InvoiceDTO invoiceDTO);
        public Task<string> UpdateInvoice(InvoiceDTO invoiceDTO);
        public Task DeleteInvoice(int id);
        public Task<Dictionary<string, int>> CalculateparkingTime(DateTime? checkin, DateTime? checkout);
    }
}
