using Microsoft.EntityFrameworkCore;
using Paking.DTO.DTOs;
using Paking.DTO.Mapper;
using Parking.DbAccess.Db_Context;

namespace Parking.Service.Implements
{
    public class CityService : BaseRepoDbContext,ICityService
    {

        public CityService(AppDbContext db) : base(db)
        {
        }

        public async Task<IEnumerable<CityDTO>> GetAllCities()
        {
            List<CityDTO?> cities = await _db.Cities
                .Include(c => c.Districts)
                .ThenInclude(c => c.Wards)
                .Select(c => ToDTO.Map(c))
                .ToListAsync();
            return cities;
        }

        public async Task<CityDTO> GetCityById(int id)
        {
            CityDTO? city = ToDTO.Map(await _db.Cities
                .Include(c => c.Districts)
                .ThenInclude(c => c.Wards)
                .FirstOrDefaultAsync(c => c.Id == id));
            return city;
        }
    }
}
