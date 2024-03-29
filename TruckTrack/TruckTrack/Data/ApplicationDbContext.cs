﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TruckTrack.Models;
using TruckTrackAPIs.Models;

namespace TruckTrack.Data
{
    public class ApplicationDbContext : IdentityDbContext<AdvancedUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<DeliveryDetails> deliveryDetails { get; set; }
        public DbSet<Customer> customersList { get; set; }
        public DbSet<Delivery> deliveriesList { get; set; }
        public DbSet<RouteDeliveredDetails> routeDeliveredDetails { get; set; }

    }
}