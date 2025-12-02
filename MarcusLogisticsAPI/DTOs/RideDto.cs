namespace MarcusLogisticsAPI.DTOs
{
    public class CreateRideDto
    {
        public int CustomerId { get; set; }
        public string PickupLocation { get; set; } = string.Empty;
        public string DropoffLocation { get; set; } = string.Empty;
        public DateTime ScheduledTime { get; set; }
    }

    public class RideResponseDto
    {
        public int RideId { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}
