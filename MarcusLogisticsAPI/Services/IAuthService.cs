using MarcusLogisticsAPI.Models;
using MarcusLogisticsAPI.DTOs;

namespace MarcusLogisticsAPI.Services
{
    public interface IAuthService
    {
        Task<LoginResponseDto?> Login(LoginDto loginDto);
        Task<RegisterResponseDto> Register(RegisterDto registerDto);
        string GenerateJwtToken(User user);
    }
}
