using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    
    public class LUser
    {
        
        [Required]
        [EmailAddress]
        public string LoginEmail {get;set;}
        
        [Required]
        [DataType(DataType.Password)]
        public string LoginPassword {get;set;}
        
        
        
    }
    
    
}