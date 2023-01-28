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
    public class JobsController : ControllerBase
    {
        private readonly JobsContext _context;

        public JobsController(JobsContext context)
        {
            _context = context;
        }

        // GET: backend-api/Jobs/GetAllJob
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Job>>> GetAllJob()
        {
            return await _context.Jobs.ToListAsync();
        }

        // GET: backend-api/Jobs/GetJobByID/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Job>> GetJobByID(Guid id)
        {
            var job = await _context.Jobs.FindAsync(id);

            if (job == null)
            {
                return NotFound();
            }

            return job;
        }

        // PUT: backend-api/Jobs/UpdateJob/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateJob(Guid id, Job job)
        {
            if (id != job.Id)
            {
                return BadRequest();
            }

            _context.Entry(job).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: backend-api/Jobs/CreateNewJob
        [HttpPost]
        [EnableCors("MyPolicy")]

        public async Task<ActionResult<Job>> CreateNewJob(Job job)
        {
            _context.Jobs.Add(job);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobByID", new { id = job.Id }, job);
        }

        // DELETE: backend-api/Jobs/DeleteJob/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJob(Guid id)
        {
            var job = await _context.Jobs.FindAsync(id);
            if (job == null)
            {
                return NotFound();
            }

            _context.Jobs.Remove(job);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JobExists(Guid id)
        {
            return _context.Jobs.Any(e => e.Id == id);
        }
    }
}
