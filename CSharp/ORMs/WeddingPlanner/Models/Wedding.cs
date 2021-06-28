using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class FutureDate : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if ((DateTime)value < DateTime.Now)
                return new ValidationResult("Date must be in the future");
            return ValidationResult.Success;
        }
    }
    
    public class Wedding
    {
        [Key]
        public int WeddingID {get;set;}
        
        [Required]
        public string WedderOne {get;set;}
        
        [Required]
        public string WedderTwo {get;set;}
        
        [Required]
        [DataType(DataType.Date)]
        [WedDate]
        public DateTime Date {get;set;}
        
        [Required]
        public string Address {get;set;}
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        
        
        public int UserID {get;set;}
        
        public User Planner {get;set;}
        
        public List<RSVP> Guests {get;set;}
        
    }
    
}