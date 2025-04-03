// Controllers/BowlersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission_8_Penner.Models;

namespace Mission_8_Penner.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BowlersController : ControllerBase
    {
        private readonly BowlingLeagueContext _context;

        public BowlersController(BowlingLeagueContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bowler>>> GetBowlers()
        {
            // Get bowlers who are on the Marlins or Sharks teams
            return await _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToListAsync();
        }
    }
}