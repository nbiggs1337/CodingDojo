using System;

namespace Wizards_Ninjas_Samurai
{
    public class Samurai : Human
    {
        public Samurai(string name) : base("Samurai", 3, 3, 3, 200)
        {
            Name = name;
            Console.WriteLine($"My name is {name}, my health is {health}, my strength is {Strength}, Intelligence is {Intelligence}, Dexterity is {Dexterity}. ");
        }
        
        public override int Attack(Human target)
        {
            if (target.Health > 50)
            {
                return base.Attack(target);
            }
            else {
                target.Health = 0;
                return target.Health;
            }
            
        }
        
        
        public int Meditate()
        {
            Health = 200;
            Console.WriteLine($"{Name} is meditating, restoring their health back to a full 200 points!");
            return Health;
        }
        
    }
}