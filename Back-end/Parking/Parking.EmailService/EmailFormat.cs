namespace Parking.EmailService
{
    public static class EmailFormat
    {
        public static string ForgotPassword(string username, string token)
        {
            string forgotLink = "http://localhost:3000/password/forgot?token=" + token;
            return
                "<p>Hello <span style='font-weight: bold'>" + username + "</span><p></hr>" +
                "<p>Click here to reset your password:</p>" +
                "<a href=\"" + forgotLink + "\">" + forgotLink + "</a>" +
                "<p>If you didn't request a password reset, please ignore this email</p></br>" +
                "<p>This is automatically email from the system, do not reply!</p></br>" +
                "<p>Parking website Administrator</p>";
        }
    }
}
