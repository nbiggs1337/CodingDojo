using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ModelViewFun.Models;

namespace ModelViewFun.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            Data test = new Data()
            {
                data = "While you can pass along an instance of a model created using a model class as a base (such as a User was passed along on the previous page), there is no limit to what can be passed along as a ViewModel. Think of ViewModel similarly to how we use ViewBag. The only major difference is that only one type of model can be passed along to a single page. But we will cover ways around this in the coming chapters. "
            };
            
            return View("Index", test);
        }
        
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numbers = new int[]
            {
                1,2,3,4,5
            };
            
            return View(numbers);
        }
        
        [HttpGet("user")]
        public IActionResult OneUser()
        {
            User user = new User
            {
                FirstName = "John",
                LastName = "Doe"
            };
            
            return View(user);
        }
        
        [HttpGet("users")]
        public IActionResult Users()
        {
            User user = new User
            {
                FirstName = "John",
                LastName = "Doe"
            };
            User user2 = new User
            {
                FirstName = "Bob",
                LastName = "Doe"
            };
            User user3 = new User
            {
                FirstName = "Noah",
                LastName = "Doe"
            };
            
            List<User> people = new List<User>(){user, user2, user3};
            // ViewBag.people = people;
            return View(people);
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
