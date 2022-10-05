
using Paking.DTO.DTOs;

namespace Parking.Service
{
    public interface IWardService
    {
        public Task<IEnumerable<WardDTO>> GetAllWards();
        public Task<WardDTO> GetWardById(int id);
        public Task<IEnumerable<WardDTO>> GetWardByDistrictId(int id);
    }
}
