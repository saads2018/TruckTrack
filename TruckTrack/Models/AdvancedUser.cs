using Microsoft.AspNetCore.Identity;

namespace TruckTrack.Models
{
    public class AdvancedUser:IdentityUser
    {
        public string? FullName { get; set; }
        public Nullable<bool> Driver { get; set; }
        public Nullable<bool> SalesPerson { get; set; }
        public Nullable<bool> Admin { get; set; }
        public string? Picture { get; set; }
    }
}
