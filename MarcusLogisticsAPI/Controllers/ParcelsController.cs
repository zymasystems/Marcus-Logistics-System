using Microsoft.AspNetCore.Mvc;
using MarcusLogisticsAPI.Models;
using MarcusLogisticsAPI.DTOs;
using Microsoft.EntityFrameworkCore;

namespace MarcusLogisticsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParcelsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ParcelsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Parcel>>> GetParcels()
        {
            return Ok(await _context.Parcels.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<ParcelResponseDto>> CreateParcel(CreateParcelDto createParcelDto)
        {
            var parcel = new Parcel
            {
                CustomerId = createParcelDto.CustomerId,
                PickupLocation = createParcelDto.PickupLocation,
                DropoffLocation = createParcelDto.DropoffLocation,
                Weight = createParcelDto.Weight,
                Status = "Pending"
            };

            _context.Parcels.Add(parcel);
            await _context.SaveChangesAsync();

            var response = new ParcelResponseDto
            {
                ParcelId = parcel.Id,
                Status = parcel.Status
            };

            return StatusCode(201, response);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateParcelStatus(int id, [FromBody] UpdateStatusDto updateDto)
        {
            var parcel = await _context.Parcels.FindAsync(id);
            
            if (parcel == null)
                return NotFound();
            
            parcel.Status = updateDto.Status;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Parcel updated successfully" });
        }
    }
}

