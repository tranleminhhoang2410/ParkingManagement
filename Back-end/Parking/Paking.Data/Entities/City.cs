using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paking.Data.Entities
{
    public class City
    {
        public City()
        {
            this.Districts = new HashSet<District>();
        }

        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public ICollection<District> Districts { get; set; }
    }
}
