using System.ComponentModel.DataAnnotations;

namespace ParkingManagement.Model
{
    public class Invoice
    {
        [Key]
        public int Id { get; set; }
        public DateTime CheckinTime { get; set; }
        public DateTime CheckoutTime { get; set; }
        public string? VehicleId { get; set; }
        public Vehicle Vehicle { get; set; }
        public int SlotId { get; set; }
        public Slot Slot { get; set; }
    }
}
