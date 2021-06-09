using System;
using System.Collections.Generic;

namespace iron_ninja
{
    public class Buffet
    {
        public static Random rand = new Random();
        public List<Food> Menu;
        
        
        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Kimchi", 100, true, false),
                
                new Food("Chicken", 200, true, true),
                
                new Food("Pizza", 400, true, false),
                
                new Food("Potatos", 300, false, false),
                
                new Food("Apple", 100, false, true),
                
                new Food("Sausage", 200, true, false),
                
                new Food("Ice Cream", 350, false, true)
            };
            
        }
        
        public Food Serve()
        {
            return Menu[rand.Next(0,Menu.Count)];
            
        }
        
        
        
        
    }
}