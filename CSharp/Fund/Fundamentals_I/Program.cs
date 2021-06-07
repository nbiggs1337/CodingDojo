using System;

namespace Fundamentals_I
{
    class Program
    {
        static void Main(string[] args)
        {
            //Loop 1-255
            
            for (int i = 1; i < 256; i++)
            {
                Console.WriteLine(i);
            }
            
            //Loop printing numbers divisable by 3 or 5, not both
            
            for (int j = 1; j <= 100; j++)
            {
                if ((j % 3) == 0 && (j % 5) == 0)
                {}
                else if ((j % 3) == 0 || (j % 5) == 0)
                {
                    Console.WriteLine(j);
                }
            }
            
            // Mod previous look to print Fizz for 3, Buzz for 5, and FizzBuzz for both
            int k = 1;
            while (k <= 100)
            {
                if ((k % 3) == 0)
                {
                    if ((k % 5) == 0)
                    {
                        Console.WriteLine("FizzBuzz");
                        k++;
                    }
                    else 
                    {
                        Console.WriteLine("Fizz");
                        k++;
                    }
                }
                else if ((k % 5) == 0)
                {
                    Console.WriteLine("Buzz");
                    k++;
                }
                else {
                    k++;
                }
                
            }
        }
    }
}
