using Microsoft.AspNetCore.Mvc;
using MarcusLogisticsAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MarcusLogisticsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUserRole(int id, [FromBody] UpdateRoleDto updateDto)
        {
            var user = await _context.Users.FindAsync(id);
            
            if (user == null)
                return NotFound();
            
            user.Role = updateDto.Role;
            await _context.SaveChangesAsync();

            return Ok(new { message = "User role updated successfully" });
        }
    }

    public class UpdateRoleDto
    {
        public string Role { get; set; } = string.Empty;
    }
}
