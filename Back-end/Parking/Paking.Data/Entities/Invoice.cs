using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paking.Data.Entities
{
    public class Invoice
    {
        [Key]
        public int Id { get; set; }
        public DateTime? CheckinTime { get; set; }
        public DateTime? CheckoutTime { get; set; }
        public string? VehicleId { get; set; }
        public Vehicle Vehicle { get; set; }
        public string? SlotId { get; set; }
        public Slot Slot { get; set; }
        public double TotalPaid { get; set; }
    }
}
