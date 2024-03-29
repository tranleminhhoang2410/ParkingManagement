﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paking.Data.Entities
{
    public class Vehicle
    {
        public Vehicle()
        {
            this.Invoices = new HashSet<Invoice>();
        }

        [Key]
        public string? Id { get; set; }
        //public string? VehicleCode { get; set; }
        public string? VehicleName { get; set; }
        public string? VehicleBrand { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
        public int VehicleTypeId { get; set; }
        public VehicleType VehicleType { get; set; }
        public ICollection<Invoice> Invoices { get; set; }
        public Boolean IsParking { get; set; }
    }
}
