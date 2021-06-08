

using System;


namespace Wizards_Ninjas_Samurai
{
    class Program
    {
        static void Main(string[] args)
        {
            Ninja noah = new Ninja("noah");
            Human john = new Human("john");
            Samurai bob = new Samurai("bob");
            Wizard jason = new Wizard("jason");
            Console.WriteLine(noah.Health);
            john.Attack(noah);
            bob.Attack(noah);
            jason.Attack(bob);
            noah.Attack(john);
            noah.Steal(jason);
            bob.Meditate();
            jason.Heal(noah);
            noah.Attack(bob);
            noah.Steal(bob);
            noah.Attack(john);
            jason.Attack(john);
            bob.Attack(john);
            bob.Meditate();
            bob.Attack(john);
            noah.Steal(john);
            john.Attack(noah);
            jason.Attack(john);
            jason.Heal(bob);
        }
    }
}
