using MailKit.Net.Smtp;
using MimeKit;
using ParkingManagement.Model.ViewModel;

namespace ParkingManagement.Service.Implement
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _config;

        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public void sendEmail(EmailModel mail)
        {
            var email = new MimeMessage();

            email.From.Add(new MailboxAddress("Parking Email ***Noreply***", _config.GetSection("EmailUsername").Value));
            email.To.Add(MailboxAddress.Parse(mail.To));
            email.Subject = mail.Subject;
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = mail.Body };

            using var smtp = new SmtpClient();
            smtp.CheckCertificateRevocation = false;
            smtp.Connect(
                _config.GetSection("EmailHost").Value
            );
            smtp.Authenticate(
                _config.GetSection("EmailUsername").Value,
                _config.GetSection("EmailPassword").Value
            );
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
