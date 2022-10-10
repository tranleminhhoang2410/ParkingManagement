namespace Paking.DTO.DTOs
{
    public class InvoiceDTO
    {
        public int Id { get; set; }
        public DateTime? CheckinTime { get; set; }
        public DateTime? CheckoutTime { get; set; }
        public string? VehicleId { get; set; }
        public string SlotId { get; set; }
        public double TotalPaid { get; set; }
        public int? VehicleTypeId { get; set; }
    }
}
