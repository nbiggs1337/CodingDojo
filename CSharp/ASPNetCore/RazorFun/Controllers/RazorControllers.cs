using Microsoft.AspNetCore.Mvc;

namespace RazorFun.Controllers
{
    public class RazorController : Controller
    {
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            return View("Index");
        }
    }
}