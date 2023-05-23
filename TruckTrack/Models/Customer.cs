using System.ComponentModel.DataAnnotations;

namespace TruckTrack.Models
{
    public class Customer
    {
        [Key]
        public  int CustId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? BusinessName { get; set; }
        public string? Address1 { get; set; }
        public string? Address2 { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? ZipCode { get; set; }
        public string? Route { get; set; }
        public Nullable<int> Stop { get; set; }


    }
}
