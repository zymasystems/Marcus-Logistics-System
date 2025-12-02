namespace MarcusLogisticsAPI.Models
{
    public class Parcel
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string PickupLocation { get; set; } = string.Empty;
        public string DropoffLocation { get; set; } = string.Empty;
        public decimal Weight { get; set; }
        public string Status { get; set; } = "Pending";
    }
}
