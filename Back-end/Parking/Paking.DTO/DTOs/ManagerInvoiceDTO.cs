using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paking.DTO.DTOs
{
    public class ManagerInvoiceDTO
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? VehicleId { get; set; }
        public string? SlotId { get; set; }
        public DateTime? CheckinTime { get; set; }
        public DateTime? CheckoutTime { get; set; }
        public double TotalPaid { get; set; }
    }
}
