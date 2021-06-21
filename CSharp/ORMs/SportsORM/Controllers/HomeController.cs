using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;
using Microsoft.EntityFrameworkCore;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensL = _context.Leagues.Where(l => l.Name.Contains("Womens")).ToList();
            
            ViewBag.Hockey = _context.Leagues.Where(l => l.Sport.Contains("Hockey")).ToList();
            
            ViewBag.NotFoot = _context.Leagues.Where(l => !l.Sport.Contains("Football")).ToList();
            
            ViewBag.Conferences = _context.Leagues.Where(l => l.Name.Contains("Conference")).ToList();
            
            ViewBag.Atlantic = _context.Leagues.Where(l => l.Name.Contains("Atlantic")).ToList();
            
            ViewBag.Dallas = _context.Teams.Where(t => t.Location.Contains("Dallas")).ToList();
            
            ViewBag.Raptors = _context.Teams.Where(t => t.TeamName.Contains("Raptors")).ToList();
            
            ViewBag.CityBois = _context.Teams.Where(t => t.Location.Contains("City")).ToList();
            
            ViewBag.T = _context.Teams
                .Where(l => l.TeamName.StartsWith("T"))
                .ToList();
            
            ViewBag.AllTeams = _context.Teams.OrderBy(t => t.TeamName).ToList();
            
            ViewBag.AllTeamsDesc = _context.Teams.OrderByDescending(t => t.TeamName).ToList();
            
            ViewBag.Cooper = _context.Players.Where( p => p.LastName.Contains("Cooper")).ToList();
            
            ViewBag.Joshua = _context.Players.Where( p => p.FirstName.Contains("Joshua")).ToList();
            
            ViewBag.OtherPlayers = _context.Players.Where(P => !P.FirstName.Contains("Joshua")).Where(P => P.LastName.Contains("Cooper")).ToList();
            
            ViewBag.AandW = _context.Players.Where(p => p.FirstName.Contains("Alexander") || p.FirstName.Contains("Wyatt"));
            
            return View();
        }


        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            List<Team> AtlanticTeams = _context.Teams.Include(t => t.CurrLeague).Where(l => l.CurrLeague.Name.Contains("Atlantic Soccer Conference")).ToList();
            ViewBag.TeamsAtlantic = AtlanticTeams;
            
            
            List<Player> BostPengs = _context.Players.Include(p => p.CurrentTeam).Where(p => p.CurrentTeam.TeamName.Contains("Penguins") && p.CurrentTeam.Location.Contains("Boston")).ToList();
            ViewBag.BostPengs = BostPengs;
            
            List<Player> IntCBC = _context.Players.Include(p => p.CurrentTeam).Where(p => p.CurrentTeam.CurrLeague.Name.Contains("International Collegiate Baseball Conference")).ToList();
            ViewBag.IntCBC = IntCBC;
            
            List<Player> LopezACA = _context.Players.Include(p => p.CurrentTeam).Where(p => p.CurrentTeam.CurrLeague.Name.Contains("American Conference of Amateur Football") && p.LastName.Contains("Lopez")).ToList();
            ViewBag.LopezACA = LopezACA;
            
            List<Player> AllPlay = _context.Players.Include(p => p.CurrentTeam).Where(p => p.CurrentTeam.CurrLeague.Sport.Contains("Football")).ToList();
            ViewBag.AllPlay = AllPlay;
            
            List<Player> Teamz = _context.Players.Include( p => p.CurrentTeam).Where(p => p.FirstName == "Sophia").ToList();
            ViewBag.Sophia = Teamz;
            
            List<Player> SophLeauges = _context.Players.Include(p => p.CurrentTeam.CurrLeague).Where(p => p.FirstName == "Sophia").ToList();
            ViewBag.SophLeauges = SophLeauges;
            
            List<Player> NotFlores = _context.Players.Include(p => p.CurrentTeam).Where(p => p.LastName == "Flores" && p.CurrentTeam.TeamName != "Washington Roughriders").ToList();
            ViewBag.NotFlores = NotFlores;
            
            
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}