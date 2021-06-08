using System;
using System.Collections.Generic;

namespace hungry_ninja
{
    public class Buffet
    {
        public static Random rand = new Random();
        public List<Food> Menu;
        
        
        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Rice", 100, false, false),
                
                new Food("Chicken", 200, false, false),
                
                new Food("Pizza", 300, false, false),
                
                new Food("Potatos", 200, false, false),
                
                new Food("Apple", 100, false, true),
                
                new Food("Sausage", 200, true, false),
                
                new Food("Tomato", 100, false, true)
            };
            
        }
        
        public Food Serve()
        {
            return Menu[rand.Next(0,Menu.Count)];
            
        }
        
        
        
        
    }
}