using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ProductsCat.Models
{
    public class Product
    {
        [Key]
        public int ProductID {get;set;}
        
        [Required]
        public string Name {get;set;}
        
        [Required]
        public string Description {get;set;}
        
        [Required]
        public decimal Price {get;set;}
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        
        public List<Association> Associations {get;set;}
        
        
        
    }
}