using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChefsDishes.Models 
{
    public class Chef
    {
        [Key]
        public int ChefID { get; set; }
        
        [Required]
        public string FirstName {get;set;}
        
        [Required]
        public string LastName {get;set;}
        
        [Required]
        public DateTime DateOfBirth {get;set;}
        
        public List<Dish> CreatedDishes {get;set;}
        
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        
        
    }
}