using System;

namespace human.models
{
    class Human
{
    // Fields for Human
    public string Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    private int health;
    
    
    // add a public "getter" property to access health
    public int GetHealth
    {
        get { return health; }
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
    public int Attack(Human target)
    {
        target.health = target.health-(Strength*5);
        Console.WriteLine($"Rude. {target.Name}'s health is now {target.health}");
        return target.health;
    }
}


}