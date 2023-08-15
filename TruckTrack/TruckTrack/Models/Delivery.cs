using NpgsqlTypes;
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
        public string? DeliveryStatus { get; set; }
        public string? DriverUserName { get; set; }
        public string? RouteAddresses { get; set; }
        public NpgsqlPoint[]? Coordinates { get; set; }
        public string[]? Invoices { get; set; }
        public string[]? CoordinateTimes { get; set; }
        public string[]? CoordinateSpeeds { get; set; }
        public string[]? AtLocation { get; set; }

    }
}
