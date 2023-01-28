using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_CareerZONE.Data;
using API_CareerZONE.Models;
using Microsoft.AspNetCore.Cors;

namespace API_CareerZONE.Controllers
{
    [EnableCors("MyPolicy")]
    [ApiController]
    [Route("backend-api/[controller]/[action]")]
    public class FilterJobsController : ControllerBase
    {
        private readonly JobsContext _context;

        public FilterJobsController(JobsContext context)
        {
            _context = context;
        }

        // GET: backend-api/FilterJobs/FilterByType/byType
        [HttpGet("byType")]
        public async Task<ActionResult<IEnumerable<Job>>> FilterByType(string types)
        {
            var listType = types.Split(',');
            var jobs = await _context.Jobs.Where(i => listType.Contains(i.JobType)).ToListAsync();

            if (jobs.Count == 0)
            {
                return NotFound();
            }

            return jobs;
        }


        // GET: backend-api/FilterJobs/FilterByLocation/byLocation
        [HttpGet("byLocation")]
        public async Task<ActionResult<IEnumerable<Job>>> FilterByLocation(string locations)
        {
            var listLocation = locations.Split(',');
            var jobs = await _context.Jobs.Where(i => listLocation.Contains(i.JobLocation)).ToListAsync();

            if (jobs.Count == 0)
            {
                return NotFound();
            }

            return jobs;
        }

        // GET: backend-api/FilterJobs/FilterByLevel/byLevel
        [HttpGet("byLevel")]
        public async Task<ActionResult<IEnumerable<Job>>> FilterByLevel(string levels)
        {
            var listLevel = levels.Split(',');
            var jobs = await _context.Jobs.Where(i => listLevel.Contains(i.JobLevel)).ToListAsync();

            if (jobs.Count == 0)
            {
                return NotFound();
            }

            return jobs;
        }

        // GET: backend-api/FilterJobs/FilterByCategory/byCategory
        [HttpGet("byCategory")]
        public async Task<ActionResult<IEnumerable<Job>>> FilterByCategory(string categories)
        {
            var listCategory = categories.Split(',');
            var jobs = await _context.Jobs.Where(i => listCategory.Contains(i.JobCategory)).ToListAsync();

            if (jobs.Count == 0)
            {
                return NotFound();
            }

            return jobs;
        }

        private bool JobExists(Guid id)
        {
            return _context.Jobs.Any(e => e.Id == id);
        }
    }
}
