namespace MarcusLogisticsAPI.Models
{
    public class Ride
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string PickupLocation { get; set; } = string.Empty;
        public string DropoffLocation { get; set; } = string.Empty;
        public DateTime ScheduledTime { get; set; }
        public string Status { get; set; } = "Pending";
    }
}
