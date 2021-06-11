using System.ComponentModel.DataAnnotations;

namespace Dojo_Survey_Model.Models

{
    public class Survey
    {
        // your Survey fields go here
        [Required]
        [MinLength(2)]
        public string Name {get;set;}
        
        [Required]
        public string Location {get;set;}
        
        [Required]
        public string Language {get;set;}
        
        [MinLength(20)]
        public string Comments {get;set;}
        
    }


}