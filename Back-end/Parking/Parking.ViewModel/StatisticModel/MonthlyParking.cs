﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking.ViewModel.StatisticModel
{
    public class MonthlyParking
    {
        public int Month { get; set; }
        public List<TypeStatistic> datas { get; set; }
    }
}
