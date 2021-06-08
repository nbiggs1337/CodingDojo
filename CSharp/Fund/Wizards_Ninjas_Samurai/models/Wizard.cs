using System;

namespace Wizards_Ninjas_Samurai
{
    public class Wizard : Human
    {
        public Wizard(string name) : base("Wizard", 3, 25, 3, 50)
        {
            Name = name;
            Console.WriteLine($"My name is {name}, my health is {health}, my strength is {Strength}, Intelligence is {Intelligence}, Dexterity is {Dexterity}. ");
        }
        
        
        
        
        public override int Attack(Human target)
        {
            int dmg = target.Intelligence * 5;
            target.Health -= dmg;
            Health += dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage & gained {dmg} health for themselves! {target.Name}'s health is now {target.Health}");
            return target.Health;
        }
        
        
        public int Heal(Human target)
        {
            int heal = Intelligence * 10;
            target.Health += heal;
            Console.WriteLine($"{Name} healed {target.Name} by {heal} points!");
            return target.Health;
        }
        
        
        
    }
}