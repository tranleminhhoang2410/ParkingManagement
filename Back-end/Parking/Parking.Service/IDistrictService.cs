using Paking.DTO.DTOs;

namespace Parking.Service
{
    public interface IDistrictService
    {
        public Task<IEnumerable<DistrictDTO>> GetAllDistricts();
        public Task<DistrictDTO> GetDistrictById(int id);
        public Task<IEnumerable<DistrictDTO>> GetDistrictByCityId(int id);
    }
}
