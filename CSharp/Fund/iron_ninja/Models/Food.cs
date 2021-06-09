using System;
namespace iron_ninja
{
    public class Food : IConsumable
    {
        public string Name {get; set;}
        public int Calories {get; set;}
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy {get; set;}
        public bool IsSweet {get; set;}
        // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
        
        public string GetInfo()
        {
            return $"{Name} (Food). Calories: {Calories}. Spicy? {IsSpicy}, Sweet? {IsSweet}";
        }
        
        public Food(string n, int cal, bool spice, bool sweet)
        {
            Name = n;
            Calories = cal;
            IsSpicy = spice;
            IsSweet = sweet;
        }
        
        
        
    }


}