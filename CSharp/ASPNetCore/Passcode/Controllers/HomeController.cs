using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Passcode.Models;
using Microsoft.AspNetCore.Http;



namespace Passcode.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        // public static int count = 1;
        
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            
            if(HttpContext.Session.GetInt32("count") == null)
                HttpContext.Session.SetInt32("count", 1);   
            else
                {
                    int? count = HttpContext.Session.GetInt32("count");
                    count ++;
                    HttpContext.Session.SetInt32("count", (int)count);   
                }
                
            ViewBag.Count = HttpContext.Session.GetInt32("count");
            // ViewBag.Count = count;
            ViewBag.Passcode = new Passcodes();
            return View();
        }
        
        [HttpPost]
        [Route("submit")]
        public IActionResult Submit()
        {
            // count++;
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
