using Microsoft.AspNetCore.Mvc;
using System;


namespace Dojo_Survey.Contollers
{
    
    public class SurveyController : Controller
    {
        
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            return View("Index");
        }
        
        
        [HttpPost]
        [Route("Result")]
        public IActionResult Result(string name, string language, string location, string comments)
        {
            Console.WriteLine(".....Submitting & Redirecting......");
            ViewBag.name = name;
            ViewBag.location = location;
            ViewBag.language = language;
            ViewBag.comments = comments;
            return View("Result");
        }
        
    }
    
    
}