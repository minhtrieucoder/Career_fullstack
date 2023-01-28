using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_CareerZONE.Models;

namespace API_CareerZONE.Data
{
    public class BlogPostsContext : DbContext
    {
        public BlogPostsContext (DbContextOptions<BlogPostsContext> options)
            : base(options)
        {
        }

        public DbSet<API_CareerZONE.Models.BlogPost> BlogPosts { get; set; } = default!;
    }
}
