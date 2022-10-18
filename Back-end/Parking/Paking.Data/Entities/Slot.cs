using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paking.Data.Entities
{
    public class Slot
    {
        public Slot()
        {
            this.Invoices = new HashSet<Invoice>();
        }
        [Key]
        public string Id { get; set; }
        public int Status { get; set; }
        public int VehicleTypeId { get; set; }
        public VehicleType VehicleType { get; set; }
        public ICollection<Invoice> Invoices { get; set; }
    }
}
