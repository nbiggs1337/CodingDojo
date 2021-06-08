using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            RandArray();
            // CoinFlip();
            // TossMultipleCoins(3);
            Names();
        }
        
        public static int[] RandArray()
        {
            Random rand = new Random();
            int[] array = new int[10];
            
            for (int val = 0; val < 10; val++)
            {
                array[val] = rand.Next(5,26);
                // Console.WriteLine(array[val]); ///Turn me on to check values for accuracy !
            }
            int max = array[0];
            int min = 26;
            int sum = 0;
            foreach (int item in array)
            {
                sum = sum + item;
                if (item > max)
                {
                    max = item;
                }
                else if (item < min)
                {
                    min = item;
                }
            }
            Console.WriteLine("Random Array - Max: " + max + "   Min: " + min + "   Sum: " + sum);
            return array;
            
        }
        
        
        public static string CoinFlip()
        {
            Random rand = new Random();
            Console.WriteLine("Tossing a coin....");
            int rawresult = rand.Next(1,3);
            if (rawresult == 1)
            {
                Console.WriteLine("Result: Heads!");
                return "heads";
            }
            else {
                Console.WriteLine("Result: Tails!");
                return "tails";
            }
        }
        
        public static double TossMultipleCoins(int num)
        {
            
            double heads = 0;
            double tails = 0;
            double ratio = 0;
            
            for (int i = 0; i <= num; i++)
            {
                string result = CoinFlip();
                if (result == "heads")
                {
                    heads++;
                }
                else if (result == "tails")
                {
                    tails++;
                }
            }
            ratio = heads/num;
            Console.WriteLine(ratio);
            return ratio;
        }
        
        public static List<string> Names()
        {
            Random rand = new Random();
            
            List<string> people = new List<string>();
            people.Add("Todd");
            people.Add("Tiffany");
            people.Add("Charlie");
            people.Add("Geneva");
            people.Add("Sydney");
            
            for (int n = people.Count - 1; n > 0; n--)
            {
                int k = rand.Next(n+1);
                string temp = people[n];
                people[n] = people[k];
                people[k] = temp;
            }
            
            for (int i = 0;i < people.Count; i++)
            {
                if (people[i].Length <= 5)
                {
                    people.Remove(people[i]);
                }
            }
            
            
            foreach (string item in people)
            {
                Console.WriteLine(item);
            }
            return people;
        }
        
        
        
        
    }
}
