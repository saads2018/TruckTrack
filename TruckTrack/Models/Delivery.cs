using System.ComponentModel.DataAnnotations;

namespace TruckTrack.Models
{
    public class Delivery
    {
        [Key]
        public int DeliveryId { get; set; }
        public string? DeliveryDriver { get; set; }
        public string? DeliveryRoutes { get; set; }
        public string? DeliveryTimes { get; set; }
        public bool DeliveryStatus { get; set; }
        public string? DriverUserName { get; set; }

    }
}
