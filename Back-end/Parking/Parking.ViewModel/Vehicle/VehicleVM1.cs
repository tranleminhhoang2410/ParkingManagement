using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking.ViewModel.Vehicle
{
    public class VehicleVM1
    {
        public string VehicleId { get; set; }
        public string Owner { get; set; }
        public string? VehicleName { get; set; }
        public string? VehicleBrand { get; set; }
        public int IsParking { get; set; }
    }
}
