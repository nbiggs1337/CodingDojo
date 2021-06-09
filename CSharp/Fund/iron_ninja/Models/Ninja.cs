using System;
using System.Collections.Generic;


namespace iron_ninja
{
    abstract class Ninja
    {
        protected int calorieIntake;
        public List<IConsumable> ConsumptionHistory;
        
        
        //Constructor
        public Ninja()
        {
            calorieIntake = 0;
            ConsumptionHistory = new List<IConsumable>();
            
        }
        
        //add a public 'getter' proporty called IsFull
        public abstract bool IsFull {get;}
        
        //Build out a Eat method
        
        public abstract void Consume(IConsumable item);
        
        
        
        
        
    }
}