using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking.ViewModel.StatisticModel
{
    public class MonthlyParking
    {
        public string Month { get; set; }
        public int Car { get; set; }
        public int Bus { get; set; }
        public int Truck { get; set; }
    }
}
