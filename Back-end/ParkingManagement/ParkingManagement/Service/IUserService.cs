﻿using ParkingManagement.Model.DTO;

namespace ParkingManagement.Service
{
    public interface IUserService
    {
        public Task<UserDTO> GetUserById(int Id);
        public Task<UserDTO> GetUserByEmail(string email);
        public Task<UserDTO> GetUserByPhone(string phone);
        public Task<Boolean> AddUser(UserDTO userDTO);
        public Task<Boolean> UpdateUser(UserDTO userDTO);
    }
}
