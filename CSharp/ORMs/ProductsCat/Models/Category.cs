using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ProductsCat.Models
{
    public class Category
    {
        [Key]
        public int CategoryID {get;set;}
        
        [Required]
        public string Name {get;set;}
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        
        public List<Association> Associations {get;set;}
        
    }
    
    
}