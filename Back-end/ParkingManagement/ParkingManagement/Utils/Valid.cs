using System.Net.Mail;
using System.Text.RegularExpressions;

namespace ParkingManagement.Utils
{
    public static class Valid
    {
        public static bool email(string email)
        {
            bool isValid = true;
            try
            {
                var mail = new MailAddress(email);
                bool isValidEmail = mail.Host.Contains(".");
                if (!isValidEmail)
                {
                    isValid = false;
                }
            }
            catch (Exception)
            {
                isValid = false;
            }
            return isValid;
        }

        public static bool phone(string strPhoneNumber)
        {
            string MatchPhoneNumberPattern = "^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
            if (strPhoneNumber != null) return Regex.IsMatch(strPhoneNumber, MatchPhoneNumberPattern);
            else return false;
        }
    }
}
