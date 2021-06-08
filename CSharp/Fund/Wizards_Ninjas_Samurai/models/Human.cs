using System;

namespace Wizards_Ninjas_Samurai
{
    public class Human
{
    // Fields for Human
    public string Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    protected int health;
    
    Random rand = new Random();
    // add a public "getter" property to access health
    public int Health
    {
        get { return health; }
        set { health = value; }
    }
    
    // Add a constructor that takes a value to set Name, and set the remaining fields to default values
    public Human(string name)
    {
        Name = name;
        Strength = 3;
        Intelligence = 3;
        Dexterity = 3;
        health = 100;
        
        Console.WriteLine($"My name is {name}, my health is {health}, my strength is {Strength}, Intelligence is {Intelligence}, Dexterity is {Dexterity}. ");
    }
    
     
    // Add a constructor to assign custom values to all fields
    public Human(string n, int s, int intel, int dex, int h)
    {
        Name = n;
        Strength = s;
        Intelligence = intel;
        Dexterity = dex;
        health = h;
    }
     
    // Build Attack method
    public virtual int Attack(Human target)
    {
        int dmg = Strength * 3;
        target.health -= dmg;
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage! {target.Name}'s health is now {target.health}");
        return target.health;
    }
}


}