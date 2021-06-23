using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class User
    {
        [Key]
        public int UserID {get;set;}
        
        [Required(ErrorMessage = "is required.")]
        public string FirstName {get;set;}
        
        [Required(ErrorMessage = "is required.")]
        public string LastName {get;set;}
        
        [Required(ErrorMessage = "is required.")]
        [EmailAddress]
        public string Email {get;set;}
        
        [Required]
        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage ="Password must be 8 characters or longer!")]
        public string Password {get;set;}
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        
        public List<RSVP> Attending {get;set;}
        
        
        [NotMapped]
        [Required]
        [Compare("Password", ErrorMessage ="& Password must match")]
        [DataType(DataType.Password)]
        public string Confirm {get;set;}
        
    }
    
}