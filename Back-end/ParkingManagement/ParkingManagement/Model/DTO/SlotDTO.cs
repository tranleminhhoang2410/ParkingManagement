namespace ParkingManagement.Model.DTO
{
    public class SlotDTO
    {
        public int Id { get; set; }
        public Boolean Status { get; set; }
        public int VehicleTypeId { get; set; }
        public VehicleTypeDTO VehicleType { get; set; }
    }
}
