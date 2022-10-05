using Microsoft.EntityFrameworkCore;
using Paking.DTO.DTOs;
using Paking.DTO.Mapper;
using Parking.DbAccess.Db_Context;


namespace Parking.Service.Implements
{
    public class DistrictService : BaseRepoDbContext, IDistrictService
    {
        public DistrictService(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<DistrictDTO>> GetAllDistricts()
        {
            List<DistrictDTO?> districts = await _db.Districts
                .Include(c => c.Wards)
                .Select(c => ToDTO.Map(c))
                .ToListAsync();
            return districts;
        }

        public async Task<IEnumerable<DistrictDTO>> GetDistrictByCityId(int id)
        {
            List<DistrictDTO?> districts = await _db.Districts
                .Include(c => c.Wards)
                .Where(c => c.CityId == id)
                .Select(c => ToDTO.Map(c))      
                .ToListAsync();
            return districts;
        }

        public async Task<DistrictDTO> GetDistrictById(int id)
        {
            DistrictDTO? district = ToDTO.Map(await _db.Districts
                .Include(c => c.Wards)
                .FirstOrDefaultAsync(c => c.Id == id));
            return district;
        }
    }
}
