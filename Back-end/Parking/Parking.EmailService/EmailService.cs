using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;

namespace Parking.EmailService
{
    public class EmailService : IEmailService
    {
        public void sendEmail(EmailModel mail)
        {
            var email = new MimeMessage();

            email.From.Add(new MailboxAddress("Parking Email ***Noreply***", "vehicle.parking.k15@gmail.com"));
            email.To.Add(MailboxAddress.Parse(mail.To));
            email.Subject = mail.Subject;
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = mail.Body };

            using var smtp = new SmtpClient();
            smtp.CheckCertificateRevocation = false;
            smtp.Connect(
                "smtp.gmail.com"
            );
            smtp.Authenticate(
                "vehicle.parking.k15@gmail.com",
                "odqeqkpabdagdjhq"
            );
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
