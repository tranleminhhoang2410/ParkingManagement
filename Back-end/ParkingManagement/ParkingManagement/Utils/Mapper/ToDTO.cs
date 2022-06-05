using ParkingManagement.Model;
using ParkingManagement.Model.DTO;

namespace ParkingManagement.Utils.Mapper
{
    public static class ToDTO
    {
        public static AccountDTO? Map(Account account)
        {
            AccountDTO? accountDTO = null;

            if (account != null)
            {
                accountDTO = new AccountDTO
                {
                    Id = account.Id,
                    Password = account.Password,
                    Username = account.Username,
                    Role = account.Role,
                    User = Map(account.User)
                };
            }   
            
            return accountDTO;
        }

        public static UserDTO? Map(User user)
        {
            UserDTO? userDTO = null;

            if(user != null)
            {
                userDTO = new UserDTO
                {
                    Id = user.Id,
                    Email = user.Email,
                    Address = user.Address,
                    Name = user.Name,
                    Feedback = user.Feedback,
                    Phone = user.Phone,
                };

                foreach (Vehicle vehicle in user.Vehicles)
                {
                    userDTO.Vehicles.Add(Map(vehicle));
                }
            }

            return userDTO;
        }

        public static VehicleDTO? Map(Vehicle vehicle)
        {
            VehicleDTO? vehicleDTO = null;

            if(vehicle != null)
            {
                vehicleDTO = new VehicleDTO
                {
                    Id = vehicle.Id,
                    VehicleBrand = vehicle.VehicleBrand,
                    VehicleName = vehicle.VehicleName,
                    VehicleTypeId = vehicle.VehicleTypeId,
                    VehicleType = Map(vehicle.VehicleType)
                };

                foreach (Invoice invoice in vehicle.Invoices)
                {
                    vehicleDTO.Invoices.Add(Map(invoice));
                }
            }
            
            return vehicleDTO;
        }

        public static VehicleTypeDTO? Map(VehicleType vehicleType)
        {
            VehicleTypeDTO? vehicleTypeDTO = null;

            if(vehicleType != null)
            {
                vehicleTypeDTO = new VehicleTypeDTO
                {
                    Id = vehicleType.Id,
                    PricePerHour = vehicleType.PricePerHour,
                    TypeName = vehicleType.TypeName
                };

            }

            return vehicleTypeDTO;
        }

        public static InvoiceDTO? Map(Invoice invoice)
        {
            InvoiceDTO? invoiceDTO = null;

            if(invoice != null)
            {
                invoiceDTO = new InvoiceDTO
                {
                    Id = invoice.Id,
                    CheckinTime = invoice.CheckinTime,
                    CheckoutTime = invoice.CheckoutTime,
                    SlotId = invoice.SlotId,
                    VehicleId = invoice.VehicleId,
                    Slot = Map(invoice.Slot)
                };
            }

            return invoiceDTO;
        }

        public static SlotDTO? Map(Slot slot)
        {
            SlotDTO? slotDTO = null;

            if(slot != null)
            {
                slotDTO = new SlotDTO
                {
                    Id = slot.Id,
                    Status = slot.Status,
                    VehicleType = Map(slot.VehicleType),
                    VehicleTypeId = slot.VehicleTypeId
                };
            }
            
            return slotDTO;
        }

        public static WardDTO? Map(Ward ward)
        {
            WardDTO? wardDTO = null;

            if(ward != null)
            {
                wardDTO = new WardDTO
                {
                    Id = ward.Id,
                    Name = ward.Name
                };
            }
            
            return wardDTO;
        }

        public static DistrictDTO? Map(District district)
        {
            DistrictDTO? districtDTO = null;
            
            if(district != null)
            {
                districtDTO = new DistrictDTO
                {
                    Id = district.Id,
                    Name = district.Name
                };

                foreach (Ward ward in district.Wards)
                {
                    districtDTO.Wards.Add(Map(ward));
                }
            }
            
            return districtDTO;
        }

        public static CityDTO? Map(City city)
        {
            CityDTO? cityDTO = null;

            if(city != null)
            {
                cityDTO = new CityDTO
                {
                    Id = city.Id,
                    Name = city.Name
                };

                foreach (District district in city.Districts)
                {
                    cityDTO.Districts.Add(Map(district));
                }
            }
            
            return cityDTO;
        }
    }
}
