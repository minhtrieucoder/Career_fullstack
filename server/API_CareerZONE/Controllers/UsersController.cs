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
    public class UsersController : ControllerBase
    {
        private readonly UsersContext _context;

        public UsersController(UsersContext context)
        {
            _context = context;
        }

        // GET: backend-api/Users/GetAllUser
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUser()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: backend-api/Users/GetUserByID/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById(Guid id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: backend-api/Users/UpdateUser/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: backend-api/Users/SignIn
        [HttpPost]
        public async Task<ActionResult<IEnumerable<User>>> SignIn(string Email)
        {
            var users = await _context.Users.Where(i => i.EmailAddress == Email).ToListAsync();

            if (users == null)
            {
                return NotFound(); ;
            }
            return users;
        }

        // POST: backend-api/Users/CreateNewUser
        [HttpPost]
        public async Task<ActionResult<User>> CreateNewUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserById", new { id = user.Id }, user);
        }

        // DELETE: backend-api/Users/DeleteUser/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
