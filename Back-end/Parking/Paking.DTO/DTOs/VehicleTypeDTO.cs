﻿namespace Paking.DTO.DTOs
{
    public class VehicleTypeDTO
    {
        public int Id { get; set; }
        public string? TypeName { get; set; }
        public double PricePerHour { get; set; }
        public double PricePerDay { get; set; }
        public double PricePerWeek { get; set; }
    }
}
