using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChefsDishes.Models 
{
    public class Dish
    {
        [Key]
        public int DishID {get;set;}
        
        [Required]
        public string Name {get;set;}
        
        [Required]
        [Range(1,99999)]
        public int Calories {get;set;}
        
        [Required]
        public int Tastiness {get;set;}
        
        [Required]
        public string Description {get;set;}
        
        [Required]
        public int ChefID {get;set;}
        
        public Chef Chef {get;set;}
        
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        
        
        
        
    }
}