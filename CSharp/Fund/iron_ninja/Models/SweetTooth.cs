using System;
namespace iron_ninja
{
    class SweetTooth : Ninja
    {
        
        //Override on any abstract member - based on get/set type - logic goes in 
        // override, parent class just provides REQUIREMENT
        public override bool IsFull 
        {
            get 
            {
                if (calorieIntake > 1500) 
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
                if (item.IsSweet == true)
                {
                    calorieIntake += item.Calories+10;
                }
                else {
                    calorieIntake += item.Calories;
                }
                ConsumptionHistory.Add(item);
                item.GetInfo();
                Console.WriteLine($"Mmm. That was a tasty {item.Name}!");
            }
            else {
                Console.WriteLine($"I cannot consume {item.Name}... I am tooo full!");
            }
            
        }
        
        
        
        
    }
}