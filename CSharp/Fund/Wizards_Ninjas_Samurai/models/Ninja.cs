using System;

namespace Wizards_Ninjas_Samurai
{
    public class Ninja : Human
    {
        Random rand = new Random();
        
        public Ninja(string name) : base("Ninja", 3, 3, 175, 100)
        {
            Name = name;
            Console.WriteLine($"My name is {name}, my health is {health}, my strength is {Strength}, Intelligence is {Intelligence}, Dexterity is {Dexterity}. ");
        }
        
        public override int Attack(Human target)
        {
            int dmg = Dexterity * 5;
            int add = rand.Next(1,5);
            if (add == 1)
            {
                dmg += 10;
                Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage & dealt and additional {add} points of damage! {target.Name}'s health is now {target.Health}");
            }
            else {
                Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage! {target.Name}'s health is now {target.Health}");
            }
            return target.Health;
        }
        
        
        public int Steal(Human target)
        {
            target.Health -= 5;
            Health += 5;
            Console.WriteLine($"{Name} stole {target.Name}s health by 5 points! {target.Name}s health is now {target.Health}, while {Name}s health is now {Health}!");
            return target.Health;
        }
        
        
    }
}