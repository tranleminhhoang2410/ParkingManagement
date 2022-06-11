namespace ParkingManagement.Model.DTO
{
    public class SlotDTO
    {
        public string SlotGroup { get; set; }
        public string SlotPos { get; set; }
        public Boolean Status { get; set; }
        public int VehicleTypeId { get; set; }
        public VehicleTypeDTO VehicleType { get; set; }
    }
}
