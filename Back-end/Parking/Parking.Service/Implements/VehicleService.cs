﻿using Microsoft.EntityFrameworkCore;
using Paking.Data.Entities;
using Paking.DTO.DTOs;
using Paking.DTO.Mapper;
using Parking.DbAccess.Db_Context;

namespace Parking.Service.Implements
{
    public class VehicleService : BaseRepoDbContext, IVehicleService
    {
        public VehicleService(AppDbContext context) : base(context)
        {
        }

        public async Task<string> AddNewUserVehicle(VehicleDTO vehicleDTO, int userID)
        {
            try
            {
                Vehicle? vehicle = await _db.Vehicles.FirstOrDefaultAsync(c => c.Id.Equals(vehicleDTO.Id));
                if (vehicle != null) return "Vehicle Existed";

                Vehicle newVehicle = new Vehicle
                {
                    Id = vehicleDTO.Id,
                    VehicleBrand = vehicleDTO.VehicleBrand,
                    VehicleName = vehicleDTO.VehicleName,
                    IsParking = false,
                    UserID = userID,
                    VehicleTypeId = vehicleDTO.VehicleTypeId
                };
                _db.Vehicles.AddAsync(newVehicle);
                await _db.SaveChangesAsync();
                return "success";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public async Task<IEnumerable<VehicleDTO>> GetAll()
        {
            List<VehicleDTO?> vehicles = await _db.Vehicles
                .Include(c => c.VehicleType)
                .Include(c => c.Invoices)
                .Select(c => ToDTO.Map(c))
                .ToListAsync();
            return vehicles;
        }

        public async Task<IEnumerable<VehicleDTO>> GetAllByUserID(int userID)
        {
            List<VehicleDTO?> vehicles = await _db.Vehicles
                .Where(c => c.UserID == userID)
                .Include(c => c.VehicleType)
                .Include(c => c.Invoices)
                .Select(c => ToDTO.Map(c))
                .ToListAsync();
            return vehicles;
        }

        public async Task<VehicleDTO> GetById(string Id)
        {
            VehicleDTO? vehicle = ToDTO.Map(await _db.Vehicles
                .Include(c => c.VehicleType)
                .Include(c => c.Invoices)
                .Include(c => c.User)
                .FirstOrDefaultAsync(c => c.Id.Equals(Id)));
            return vehicle;
        }

        public async Task Remove(string Id)
        {
            try
            {
                Vehicle vehicle = await _db.Vehicles.Include(c => c.Invoices).FirstOrDefaultAsync(i => i.Id == Id && i.IsParking == false);
                if (vehicle == null)
                {
                    throw new Exception("No vehicle found or your vehicle is parking. Action denied!");
                }
                _db.Invoices.RemoveRange(vehicle.Invoices);
                _db.Vehicles.Remove(vehicle);
                _db.SaveChangesAsync();
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }

        }

        public async Task<string> SetVehicleIsParking(string Id, bool isParkingStatus)
        {
            try
            {
                Vehicle? v = await _db.Vehicles.Include(c => c.Invoices).FirstOrDefaultAsync(c => c.Id.Equals(Id));
                if (v == null) throw new Exception("no vehicle found");

                v.IsParking = isParkingStatus;

                await _db.SaveChangesAsync();
                return "vehicle isParking update success! ";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}
