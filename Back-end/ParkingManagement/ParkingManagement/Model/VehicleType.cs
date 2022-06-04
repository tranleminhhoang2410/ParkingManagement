﻿using System.ComponentModel.DataAnnotations;

namespace ParkingManagement.Model
{
    public class VehicleType
    {
        public VehicleType()
        {
            this.Slots = new HashSet<Slot>();
            this.Vehicles = new HashSet<Vehicle>();
        }
        [Key]
        public int Id { get; set; }
        public string? TypeName { get; set; }
        public double PricePerHour { get; set; }
        public ICollection<Slot> Slots { get; set; }
        public ICollection<Vehicle> Vehicles { get; set; }
    }
}
