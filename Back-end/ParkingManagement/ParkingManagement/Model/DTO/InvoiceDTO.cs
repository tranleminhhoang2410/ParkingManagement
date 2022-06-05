namespace ParkingManagement.Model.DTO
{
    public class InvoiceDTO
    {
        public int Id { get; set; }
        public DateTime CheckinTime { get; set; }
        public DateTime CheckoutTime { get; set; }
        public string? VehicleId { get; set; }
        public int SlotId { get; set; }
        public SlotDTO Slot { get; set; }
    }
}
