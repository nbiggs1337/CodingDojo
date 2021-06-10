using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace firstASP.Controllers
{
    public class HelloController : Controller 
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            List<int> myNumbers = new List<int>{1,2,3,4,5,6,7};
            Random rand = new Random();
            ViewBag.Whatever = myNumbers[rand.Next(0,myNumbers.Count)];
            return View();
        }

        [HttpGet("first")]
        public string First()
        {
            return "Hello from another page in your first C# project!";
        }

        [HttpGet("Landing")]
        public string Landing()
        {
            return "You were redirected!";
        }

        [HttpGet("form")]
        public IActionResult Form()
        {
            return View();
        }

        [HttpPost("sendData")]
        public IActionResult sendData(string TextField, int NumberField)
        {
            Console.WriteLine($"Text: {TextField}, Number: {NumberField}");
            ViewBag.Text = TextField;
            ViewBag.Num = NumberField;
            return View("Results");
        }

        [HttpGet("redirectPage")]
        public RedirectToActionResult RedirectPage()
        {
            return RedirectToAction("Landing");
        }
    }
}