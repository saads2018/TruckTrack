using NpgsqlTypes;
using System.ComponentModel.DataAnnotations;

namespace TruckTrackAPIs.Models
{
    public class RouteDeliveredDetails
    {
        [Key]
        public int ID { get; set; }
        public int DeliveryID { get; set; }
        public int CustomerID { get; set; }
        public string? InvoiceNo { get; set; }
        public string? AmountReceived { get; set; }
        public string? ReturnedItems { get; set; }
    }
}
