using ParkingManagement.Model.DTO;

namespace ParkingManagement.Service
{
    public interface IInvoiceService
    {
        public Task<IEnumerable<InvoiceDTO>> GetAll();
        public Task<IEnumerable<InvoiceDTO>> GetByVehicleId(string vehicleId);
        public Task<IEnumerable<InvoiceDTO>> GetByUserId(int userId);
        public Task<InvoiceDTO> GetById(int Id);
        public Task<Boolean> AddNewInvoice(InvoiceDTO invoiceDTO);
        public Task<Boolean> UpdateInvoice(InvoiceDTO invoiceDTO);
    }
}
