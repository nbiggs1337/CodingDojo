using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LogReg.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace LogReg.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        
        public HomeController(MyContext context)
        {
            _context = context;
        }
        
        public User LoggedID()
        {
            int? LoggedID = HttpContext.Session.GetInt32("LoggedIn");
            User Logged = _context.Users.FirstOrDefault(u => u.UserID == LoggedID);
            return Logged;
        }
        
        
        [HttpGet("")]

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
                    return RedirectToAction("Success");
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
        
        [HttpGet("/login")]
        public IActionResult Login()
        {
            return View();
        }
        
        [HttpPost("/login/user")]
        public IActionResult LoginUser(LoginUser UserSub)
        {
            if (ModelState.IsValid)
            {
                var UserInDB = _context.Users.FirstOrDefault(u => u.Email == UserSub.LoginEmail);
                
                if (UserInDB == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Login");
                }
                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(UserSub, UserInDB.Password, UserSub.LoginPassword);
                
                if (result == 0)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Login");
                }
                else {
                    HttpContext.Session.SetInt32("LoggedIn", UserInDB.UserID);
                    return Redirect("/Success");
                }
            }
            else {
                return View("Login");
            }
        }
        
        [HttpGet("Success")]
        public IActionResult Success()
        {
            if (LoggedID() != null)
            {
                return View("Success");
            }
            return RedirectToAction("Login");
        }
        
        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("");
        }
        
        
        
        
        [HttpGet("Privacy")]
        public IActionResult Privacy()
        {
            return View();
        }

        
    }
}
