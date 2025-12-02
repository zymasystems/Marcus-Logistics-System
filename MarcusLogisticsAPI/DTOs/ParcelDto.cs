namespace MarcusLogisticsAPI.DTOs
{
    public class CreateParcelDto
    {
        public int CustomerId { get; set; }
        public string PickupLocation { get; set; } = string.Empty;
        public string DropoffLocation { get; set; } = string.Empty;
        public decimal Weight { get; set; }
    }

    public class ParcelResponseDto
    {
        public int ParcelId { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}
