using System;
using System.Collections.Generic;

namespace Restaurant.Models
{
    public partial class User
    {
        public User()
        {
            UserPermissions = new HashSet<UserPermission>();
            UserRoles = new HashSet<UserRole>();
        }

        public int UserId { get; set; }
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Source { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public DateTime? LastDirectoryUpdate { get; set; }
        public string UserImage { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime? UpdateDate { get; set; }
        public int? UpdateUserId { get; set; }
        public short IsActive { get; set; }

        public virtual ICollection<UserPermission> UserPermissions { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
