using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
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
            if (ModelState.IsValid)
            {
                Console.WriteLine(".....Submitting & Redirecting......");
                
                return View("Result", yourSurvey);
            }
            else {
                Console.WriteLine(".....Submit invalid...... Loading Errors......");
                return View("Index");
            }
            
        }
        
    }
    
    
}