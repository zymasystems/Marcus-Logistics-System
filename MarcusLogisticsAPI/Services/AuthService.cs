using Microsoft.EntityFrameworkCore;
using MarcusLogisticsAPI.Models;
using MarcusLogisticsAPI.DTOs;

namespace MarcusLogisticsAPI.Services
{
   public class AuthService : IAuthService
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthService(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<LoginResponseDto?> Login(LoginDto loginDto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email && u.Password == loginDto.Password);
            
            if (user == null) return null;

            var token = GenerateJwtToken(user);

            return new LoginResponseDto
            {
                Token = token,
                UserId = user.Id,
                Role = user.Role
            };
        }

        public async Task<RegisterResponseDto> Register(RegisterDto registerDto)
        {
            // Check if user already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == registerDto.Email);
            if (existingUser != null)
            {
                throw new Exception("User with this email already exists");
            }

            var user = new User
            {
                Name = registerDto.Name,
                Email = registerDto.Email,
                Password = registerDto.Password,
                Role = registerDto.Role
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new RegisterResponseDto
            {
                Message = "User created successfully",
                UserId = user.Id
            };
        }

        public string GenerateJwtToken(User user)
        {
            // Simplified token generation - in production, use proper JWT implementation
            return $"jwt_token_for_{user.Id}";
        }
    }
}
