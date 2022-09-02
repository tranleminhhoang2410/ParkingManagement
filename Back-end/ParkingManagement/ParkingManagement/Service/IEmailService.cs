using ParkingManagement.Model.ViewModel;

namespace ParkingManagement.Service
{
    public interface IEmailService
    {
        void sendEmail(EmailModel mail);

    }
}
