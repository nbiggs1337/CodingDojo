using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace WeddingPlanner.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        
        public HomeController(MyContext context)
        {
            _context = context;
        }
        
        
        //Global Login Check:
        public User LoggedID()//Returns User model if valid - else null
        {
            int? LoggedID = HttpContext.Session.GetInt32("LoggedIn");//Setting LoggedID as userID
            User Logged = _context.Users.FirstOrDefault(u => u.UserID == LoggedID); //querying DB for user w/ matching ID
            return Logged; //Returning logged == logged user. 
        }
        
        public User LoggedInUser()
        {
            int? LoggedID = HttpContext.Session.GetInt32("LoggedIn");
            User logged = _context.Users.FirstOrDefault(u => u.UserID == LoggedID);
            return logged;
        }

        public int UserID()
        {
            int UserID = LoggedInUser().UserID;
            return UserID;
        }


        //Base Routes
        public IActionResult Index()
        {
            return View();
        }
        
        
        [HttpPost("reg/newuser")]
        public IActionResult NewUser(User newUser)
        {
            if (ModelState.IsValid)
            {
                var Exists = _context.Users.FirstOrDefault(u => u.Email == newUser.Email);
                if( Exists == null)
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                    _context.Add(newUser);
                    _context.SaveChanges();
                    HttpContext.Session.SetInt32("LoggedIn", newUser.UserID);
                    return RedirectToAction("Dashboard");
                }
                else {
                    ModelState.AddModelError("Email", "Email already in use! Please Login.");
                    return View("Index");
                }
                
            }
            else {
                return View("Index");
            }
        }
        
        [HttpPost("/login/user")]
        public IActionResult LoginUser(LUser UserSub)
        {
            if (ModelState.IsValid)
            {
                var UserInDB = _context.Users.FirstOrDefault(u => u.Email == UserSub.LoginEmail);
                
                if (UserInDB == null)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid Email/Password");
                    return View("Index");
                }
                var hasher = new PasswordHasher<LUser>();
                var result = hasher.VerifyHashedPassword(UserSub, UserInDB.Password, UserSub.LoginPassword);
                
                if (result == 0)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid Email/Password");
                    return View("Index");
                }
                else {
                    HttpContext.Session.SetInt32("LoggedIn", UserInDB.UserID);
                    return Redirect("/dashboard");
                }
            }
            else {
                return View("Index");
            }
        }
        
        
        [HttpGet("Dashboard")]
        public IActionResult Dashboard()
        {
            if (LoggedID() != null)
            {
                List<Wedding> Weddings = _context.Weddings.Include(w => w.Guests).ToList();
                ViewBag.UserID = (int)HttpContext.Session.GetInt32("LoggedIn");
                return View(Weddings);
            } else {
                
                return RedirectToAction("Index");
            }
        }
        
        //View One Wedding Details
        [HttpGet("/wedding/{WeddingID}")]
        public IActionResult ViewWedding(int WeddingID)
        {
            ViewBag.OneWedding = _context.Weddings.Include(w => w.Guests)
                .ThenInclude(w => w.User)
                .FirstOrDefault(w => w.WeddingID == WeddingID);
            return View("ViewWedding");
        }
        
        
        //Add new Wedding Routes
        
        [HttpGet("/wedding/new")]
        public IActionResult NewWedding()
        {
            if (LoggedID() != null)
            {   
                ViewBag.UserID = (int)HttpContext.Session.GetInt32("LoggedIn");
                return View("NewWedding");
            } else {
                return RedirectToAction("Logout");
            }
        }
        
        [HttpPost("/newwedding")]
        public IActionResult AddWedding(Wedding newWedding)
        {
            if (LoggedID() != null)
            {
                if (ModelState.IsValid)
                {
                    _context.Weddings.Add(newWedding);
                    _context.SaveChanges();
                    
                    return RedirectToAction("dashboard");
                } else {
                    ViewBag.UserID = (int)HttpContext.Session.GetInt32("LoggedIn");
                    return View("NewWedding");
                }
                
            } else {
                return RedirectToAction("Logout");
            }
        }
        //Delete route
        [HttpGet("/delete/{WeddingID}")]
        public IActionResult DeleteWedding(int WeddingID)
        {
            Wedding DeleteWedding = _context.Weddings
                .FirstOrDefault(w => w.WeddingID == WeddingID);
            if (DeleteWedding.UserID == UserID()) 
            {
                _context.Remove(DeleteWedding);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            } else {
                return Redirect("/logout");
            }
        }
        
        //RSVP Routes
        [HttpGet("/rsvp/{WeddingID}")]
        public IActionResult RSVPWedding(int WeddingID)
        {
            RSVP newRSVP = new RSVP();
            newRSVP.UserID = UserID();
            newRSVP.WeddingID = WeddingID;
            _context.RSVPs.Add(newRSVP);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        
        [HttpGet("/unrsvp/{WeddingID}")]
        public IActionResult unRSVPWedding(int WeddingID)
        {
            RSVP RSVP = _context.RSVPs
                .FirstOrDefault(r => r.WeddingID == WeddingID && r.UserID == UserID());
            _context.RSVPs.Remove(RSVP);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        
        
        
        //Logout Route
        
        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("");
        }
    }
}
