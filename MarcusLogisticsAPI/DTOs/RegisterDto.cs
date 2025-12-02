namespace MarcusLogisticsAPI.DTOs
{
    public class RegisterDto
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Role { get; set; } = "customer";
    }

    public class RegisterResponseDto
    {
        public string Message { get; set; } = string.Empty;
        public int UserId { get; set; }
    }
}
