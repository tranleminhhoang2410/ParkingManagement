using Paking.DTO.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking.Service
{
    public interface IManagerInvoiceService
    {
        public Task<string> AddNewInvoice(ManagerInvoiceDTO invoiceDTO);
        public Task<IEnumerable<ManagerInvoiceDTO>> GetAll();
        public Task<ManagerInvoiceDTO> GetById(int id);
    }
}
