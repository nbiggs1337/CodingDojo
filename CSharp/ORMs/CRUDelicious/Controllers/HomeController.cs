using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        
            public HomeController(MyContext context)
            {
                _context = context;
            }
        
        [HttpGet("")]

        public IActionResult Index()
        {
            ViewBag.AllDishes = _context.Dishes.ToList();
            return View();
        }
        
        
        [HttpGet("new")]
        public IActionResult NewDish()
        {
            
            return View("New");
        }
        
        
        [HttpPost("add")]
        public IActionResult AddDish(Dish newDish)
        {
            if (ModelState.IsValid)
            {
                Console.WriteLine("...New Dish Added to DB - Redirecting User.....");
                _context.Add(newDish);
                _context.SaveChanges();
                return Redirect($"dish/{newDish.DishID}");
                
                
            }
            else {
                return View("New");
            }
        }
        
        
        [HttpGet("dish/{DishID}")]
        public IActionResult ViewDish(int DishID)
        {
            ViewBag.OneDish = _context.Dishes.FirstOrDefault(d => d.DishID == DishID);
            return View("OneDish");
        }
        
        
        [HttpGet("edit/{DishID}")]
        public IActionResult Edit(int DishID)
        {
            Dish EditDish = _context.Dishes.FirstOrDefault(d => d.DishID == DishID);
            
            return View("Edit", EditDish);
        }
        
        [HttpPost("update/{DishID}")]
        public IActionResult CommitUpdate(int DishID, Dish editDish)
        {
            Dish DishToEdit = _context.Dishes.FirstOrDefault( d => d.DishID == DishID);
            DishToEdit.Name = editDish.Name;
            DishToEdit.Chef = editDish.Chef;
            DishToEdit.Tastiness = editDish.Tastiness;
            DishToEdit.Calories = editDish.Calories;
            DishToEdit.Description = editDish.Description;
            DishToEdit.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return Redirect($"/dish/{DishID}");
        }
        
        
        [HttpPost("delete/{DishID}")]
        public IActionResult DeleteDish(int DishID)
        {
            Dish DeleteDish = _context.Dishes.SingleOrDefault(d => d.DishID == DishID);
            _context.Dishes.Remove(DeleteDish);
            _context.SaveChanges();
            return Redirect("/");
        }
        
        
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
