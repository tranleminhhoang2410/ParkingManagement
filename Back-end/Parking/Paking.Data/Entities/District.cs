using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paking.Data.Entities
{
    public class District
    {
        public District()
        {
            this.Wards = new HashSet<Ward>();
        }

        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public int CityId { get; set; }
        public City City { get; set; }
        public ICollection<Ward> Wards { get; set; }
    }
}
