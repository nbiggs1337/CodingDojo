using System;

namespace HelloCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            for(int val = 0; val < 10; val++)
            {
                //Prints the next random value between 2 and 8
                Console.WriteLine(rand.Next(2,8));
            }
        }
    }
}
