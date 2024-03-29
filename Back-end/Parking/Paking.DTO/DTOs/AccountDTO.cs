﻿using System.ComponentModel.DataAnnotations;

namespace Paking.DTO.DTOs
{
    public class AccountDTO
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }
        public UserDTO User { get; set; }
    }
}
