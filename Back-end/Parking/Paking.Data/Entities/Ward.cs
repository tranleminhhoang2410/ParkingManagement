using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paking.Data.Entities
{
    public class Ward
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public int DistrictId { get; set; }
        public District District { get; set; }
    }
}
