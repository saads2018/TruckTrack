using NpgsqlTypes;
using System.ComponentModel.DataAnnotations;

namespace TruckTrackAPIs.Models
{
    public class DeliveryDetails
    {
        [Key]
        public int ID { get; set; }
        public int DeliveryID { get; set; }
        public string? TruckNumber { get; set; }
        public int StartingMileage { get; set; }
        public string? FuelTank_Starting { get; set; }
        public int EndingMileage { get; set; }
        public string? FuelTank_Ending { get; set; }
    }
}
