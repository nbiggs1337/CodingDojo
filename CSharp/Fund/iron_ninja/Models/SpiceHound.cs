using System;

namespace iron_ninja

{
    class SpiceHound : Ninja
    {
        public override bool IsFull
        {
            get 
            {
                if (calorieIntake > 1200)
                {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        
        public override void Consume(IConsumable item)
        {
            if (IsFull == false)
            {
                if (item.IsSpicy)
                {
                    calorieIntake += item.Calories-5;
                }
                else {
                    calorieIntake += item.Calories;
                }
                ConsumptionHistory.Add(item);
                item.GetInfo();
                Console.WriteLine($"Mmmmm. That {item.Name} was tasty!");
            }
            else {
                Console.WriteLine($"I cannot consume {item.Name}... I am tooo full!");
            }
        }
        
        
        
        
        
        
        
        
        
    }
}