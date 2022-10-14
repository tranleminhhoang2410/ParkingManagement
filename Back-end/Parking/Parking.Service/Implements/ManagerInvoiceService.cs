using Microsoft.EntityFrameworkCore;
using Paking.Data.Entities;
using Paking.DTO.DTOs;
using Paking.DTO.Mapper;
using Parking.DbAccess.Db_Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking.Service.Implements
{
    public class ManagerInvoiceService : BaseRepoDbContext, IManagerInvoiceService
    {
        public ManagerInvoiceService(AppDbContext context) : base(context)
        {
        }

        public async Task<string> AddNewInvoice(ManagerInvoiceDTO invoiceDTO)
        {
            ManagerInvoice invoice = new ManagerInvoice
            {
                Id = invoiceDTO.Id,
                CheckinTime = invoiceDTO.CheckinTime,
                CheckoutTime = invoiceDTO.CheckoutTime,
                SlotId = invoiceDTO.SlotId,
                TotalPaid = invoiceDTO.TotalPaid,
                UserName = invoiceDTO.UserName,
                VehicleId = invoiceDTO.VehicleId
            };
            await _db.ManagerInvoices.AddAsync(invoice);
            await _db.SaveChangesAsync();
            return "add manager invoice success!";
        }

        public async Task<IEnumerable<ManagerInvoiceDTO>> GetAll()
        {
            List<ManagerInvoiceDTO?> invoiceDTOs = await _db.ManagerInvoices
                .Select(c => ToDTO.Map(c))
                .ToListAsync();
            return invoiceDTOs;
        }

        public async Task<ManagerInvoiceDTO> GetById(int id)
        {
            ManagerInvoiceDTO invoiceDTO = ToDTO.Map(await _db.ManagerInvoices.FirstOrDefaultAsync(c => c.Id == id));
            return invoiceDTO;
        }
    }
}
