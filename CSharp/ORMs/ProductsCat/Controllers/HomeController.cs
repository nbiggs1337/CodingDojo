using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductsCat.Models;
using Microsoft.EntityFrameworkCore;


namespace ProductsCat.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        
        public HomeController(MyContext context)
        {
            _context = context;
        }
        
        
        
        
        //Base View Routes
        public IActionResult Index()
        {
            ViewBag.Products = _context.Products.ToList();
            
            return View();
        }
        
        [HttpGet("categories")]
        public IActionResult Categories()
        {
            ViewBag.Categories = _context.Categories.ToList();
            
            return View("Categories");
        }
        
        //Base MtoM View Routes
        [HttpGet("/category/{CategoryID}")]
        public IActionResult OneCategory(int CategoryID)
        {
            
            ViewBag.OneCat = _context.Categories
                .Include(c => c.Associations)
                .ThenInclude(a => a.Product)
                .FirstOrDefault(c => c.CategoryID == CategoryID);
            
            ViewBag.AllProducts = _context.Products
                .Include(p => p.Associations)
                .ThenInclude(a => a.Category)
                .Where(a => a.Associations.All(a => a.CategoryID != CategoryID)).ToList();
            
            
            return View("OneCat");
        }
        
        [HttpGet("/product/{ProductID}")]
        public IActionResult OneProd(int ProductID)
        {
            //Add logic 
            ViewBag.OneProduct = _context.Products
                .Include(p => p.Associations)
                .ThenInclude(a => a.Category)
                .FirstOrDefault(p => p.ProductID == ProductID);
            
            ViewBag.AllCats = _context.Categories
                .Include(c => c.Associations)
                .ThenInclude(a => a.Product)
                .Where(a => a.Associations.All(a => a.ProductID != ProductID)).ToList();
            
            return View("OneProd");
        }
        
        
        //Post Routes
        
        [HttpPost("category/addproduct")]
        public IActionResult AddProductCat(Association newAss)
        {
            _context.Add(newAss);
            _context.SaveChanges();
            return Redirect($"/category/{newAss.CategoryID}");
        }
        
        
        [HttpPost("product/addcategory")]
        public IActionResult AddCategoryProd(Association newAss)
        {
            _context.Add(newAss);
            _context.SaveChanges();
            return Redirect($"/product/{newAss.ProductID}");
        }
        
        
        [HttpPost("addcategory")]
        public IActionResult AddCategory(Category newCat)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newCat);
                _context.SaveChanges();
                return RedirectToAction("Categories");
            }
            return View("Categories");
        }
        
        [HttpPost("addproduct")]
        public IActionResult AddProduct(Product newProd)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newProd);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("Index");
        }
        
        

        public IActionResult Privacy()
        {
            return View();
        }

        
        
    }
}
