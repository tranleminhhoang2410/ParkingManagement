using System.Net.Mail;
using System.Text.RegularExpressions;

namespace Parking.API.Utils
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

        public static bool vehicleId(string vehicleId)
        {
            string MatchVehicleIdPattern = "\\(?([0-9]{2})[A-Z]\\)?[-]?([0-9]{4}||[0-9]{5})$";
            if (vehicleId != null) return Regex.IsMatch(vehicleId, MatchVehicleIdPattern);
            else return false;
        }
    }
}
