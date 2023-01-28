using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_CareerZONE.Models;

namespace API_CareerZONE.Data
{
    public class JobsContext : DbContext
    {
        public JobsContext (DbContextOptions<JobsContext> options)
            : base(options)
        {
        }

        public DbSet<API_CareerZONE.Models.Job> Jobs { get; set; } = default!;
    }
}
