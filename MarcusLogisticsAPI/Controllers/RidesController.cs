using Microsoft.AspNetCore.Mvc;
using MarcusLogisticsAPI.Models;
using MarcusLogisticsAPI.DTOs;
using Microsoft.EntityFrameworkCore;

namespace MarcusLogisticsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RidesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RidesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ride>>> GetRides()
        {
            return Ok(await _context.Rides.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<RideResponseDto>> CreateRide(CreateRideDto createRideDto)
        {
            var ride = new Ride
            {
                CustomerId = createRideDto.CustomerId,
                PickupLocation = createRideDto.PickupLocation,
                DropoffLocation = createRideDto.DropoffLocation,
                ScheduledTime = createRideDto.ScheduledTime,
                Status = "Pending"
            };

            _context.Rides.Add(ride);
            await _context.SaveChangesAsync();

            var response = new RideResponseDto
            {
                RideId = ride.Id,
                Status = ride.Status
            };

            return StatusCode(201, response);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateRideStatus(int id, [FromBody] UpdateStatusDto updateDto)
        {
            var ride = await _context.Rides.FindAsync(id);
            
            if (ride == null)
                return NotFound();
            
            ride.Status = updateDto.Status;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Ride updated successfully" });
        }
    }

    public class UpdateStatusDto
    {
        public string Status { get; set; } = string.Empty;
    }
}
