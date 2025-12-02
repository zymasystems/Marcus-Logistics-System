using Microsoft.EntityFrameworkCore;
using MarcusLogisticsAPI.Models;

namespace MarcusLogisticsAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Ride> Rides { get; set; }
        public DbSet<Parcel> Parcels { get; set; }

         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure User entity
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(u => u.Id);
                entity.Property(u => u.Name).IsRequired().HasMaxLength(100);
                entity.Property(u => u.Email).IsRequired().HasMaxLength(100);
                entity.Property(u => u.Password).IsRequired().HasMaxLength(100);
                entity.Property(u => u.Role).IsRequired().HasMaxLength(50);
            });

            // Configure Ride entity
            modelBuilder.Entity<Ride>(entity =>
            {
                entity.HasKey(r => r.Id);
                entity.Property(r => r.PickupLocation).IsRequired().HasMaxLength(200);
                entity.Property(r => r.DropoffLocation).IsRequired().HasMaxLength(200);
                entity.Property(r => r.Status).IsRequired().HasMaxLength(50);
            });

            // Configure Parcel entity
            modelBuilder.Entity<Parcel>(entity =>
            {
                entity.HasKey(p => p.Id);
                entity.Property(p => p.PickupLocation).IsRequired().HasMaxLength(200);
                entity.Property(p => p.DropoffLocation).IsRequired().HasMaxLength(200);
                entity.Property(p => p.Status).IsRequired().HasMaxLength(50);
            });

            // Seed initial data only if the table is empty
            modelBuilder.Entity<User>().HasData(
                new User 
                { 
                    Id = 1, 
                    Name = "John Doe", 
                    Email = "john@example.com", 
                    Password = "password123", 
                    Role = "customer" 
                }
            );
        }
    }
}
