using Microsoft.AspNetCore.Mvc;
using System;
using Dojo_Survey_Model.Models;


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
        [Route("result")]
        public IActionResult Result(Survey yourSurvey)
        {
            Console.WriteLine(".....Submitting & Redirecting......");
            
            return View("Result", yourSurvey);
        }
        
    }
    
    
}