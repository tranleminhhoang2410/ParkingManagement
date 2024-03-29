﻿

using Paking.DTO.DTOs;

namespace Parking.Service
{
    public interface IVehicleService
    {
        public Task<IEnumerable<VehicleDTO>> GetAllByUserID(int userID);
        public Task<VehicleDTO> GetById(string Id);
        public Task<IEnumerable<VehicleDTO>> GetAll();
        public Task<string> AddNewUserVehicle(VehicleDTO vehicleDTO, int userID);
        public Task Remove(string Id);
        public Task<string> SetVehicleIsParking(string Id, bool isParkingStatus); 
    }
}
