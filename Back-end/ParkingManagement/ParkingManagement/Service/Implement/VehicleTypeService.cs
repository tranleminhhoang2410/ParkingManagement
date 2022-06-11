using Microsoft.EntityFrameworkCore;
using ParkingManagement.Data;
using ParkingManagement.Model.DTO;
using ParkingManagement.Utils.Mapper;

namespace ParkingManagement.Service.Implement
{
    public class VehicleTypeService : BaseServiceContext, IVehicleTypeService
    {
        public VehicleTypeService(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<VehicleTypeDTO>> GetAll()
        {
            List<VehicleTypeDTO?> types = await _db.VehicleTypes
                .Select(c => ToDTO.Map(c))
                .ToListAsync();
            return types;
        }

        public async Task<VehicleTypeDTO> GetById(int id)
        {
            VehicleTypeDTO? vehicleType = ToDTO.Map(await _db.VehicleTypes
                .FirstOrDefaultAsync(c => c.Id == id));
            return vehicleType;
        }
    }
}
