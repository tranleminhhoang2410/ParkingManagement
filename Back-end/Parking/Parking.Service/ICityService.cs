using Paking.DTO.DTOs;

namespace Parking.Service
{
    public interface ICityService
    {
        public Task<IEnumerable<CityDTO>> GetAllCities();
        public Task<CityDTO> GetCityById(int id);
    }
}
