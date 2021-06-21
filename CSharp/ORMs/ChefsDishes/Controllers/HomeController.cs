using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChefsDishes.Models;
using Microsoft.EntityFrameworkCore;


namespace ChefsDishes.Controllers
{
    public class HomeController : Controller
    {

        private MyContext _context;
        
        public HomeController(MyContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            ViewBag.Chefs = _context.Chefs.Include(c => c.CreatedDishes).ToList();
            return View();
        }
        
        //// Chef routes
        [HttpGet("new")]
        public IActionResult New() 
        {
            return View("New");
        }
        
        
        
        [HttpPost("addchef")]
        public IActionResult AddChef(Chef newChef)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newChef);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else {
                return View("New");
            }
        }
        
        
        ///Start dishes routes
        
        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            ViewBag.Dishes = _context.Dishes.Include(d => d.Chef).ToList();
            return View("Dishes");
        }
        
        
        [HttpGet("newdish")]
        public IActionResult NewDish()
        {
            ViewBag.Chefs = _context.Chefs.ToList();
            return View("NewDish");
        }
        
        
        [HttpPost("adddish")]
        public IActionResult AddDish(Dish newDish)
        {
            if (ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("dishes");
            
            
        }
        else {
            ViewBag.Chefs = _context.Chefs.ToList();
            return View("newdish");
        }
        }
        
        

        public IActionResult Privacy()
        {
            return View();
        }
        
    }
}
