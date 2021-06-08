using System;
using System.Collections.Generic;


namespace hungry_ninja
{
    public class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;
        
        
        //Constructor
        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>();
            
        }
        
        //add a public 'getter' proporty called IsFull
        public bool IsFull
        {
            get { return calorieIntake > 1200; }
        }
        
        //Build out a Eat method
        
        public void Eat(Food item)
        {
            if (IsFull != true) {
                calorieIntake = calorieIntake+item.Calories;
                FoodHistory.Add(item);
                if (item.IsSpicy && item.IsSweet)
                {
                    Console.WriteLine($"Mmmmm, {item.Name} is SWEET & SpIcYY!");
                }
                else if (item.IsSpicy)
                {
                    Console.WriteLine($"MMM, {item.Name} is HOTT");
                }
                else if (item.IsSweet)
                {
                    Console.WriteLine($"MMM, {item.Name} is SWEET!");
                }
                else {
                    Console.WriteLine($"{item.Name} is quite bland.");
                }
            }
            else if (IsFull == true){
                Console.WriteLine($"This ninja is full & cannot eat anymore!!");
            }
            
        }
        
        
        
        
    }
}