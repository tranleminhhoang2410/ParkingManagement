using System.ComponentModel.DataAnnotations;

namespace Paking.Data.Entities
{
    public class Tokens
    {
        [Key]
        public int Id { get; set; }
        public string? JWT { get; set; }
        public string? PasswordResetToken { get; set; }
        public DateTime? ResetTokenExpires { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
