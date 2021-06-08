

using System;
using human.models;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {
            Human noah = new Human("noah");
            Human john = new Human("john");
            Console.WriteLine(noah.GetHealth);
            john.Attack(noah);
            
            
        }
    }
}
