using Paking.DTO.DTOs;

namespace Parking.Service
{
    public interface IVehicleTypeService
    {
        public Task<IEnumerable<VehicleTypeDTO>> GetAll();
        public Task<VehicleTypeDTO> GetById(int id);
        public Task<Boolean> Update(VehicleTypeDTO vehicleTypeDTO);
    }
}
