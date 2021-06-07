using System;
using System.Collections.Generic;



namespace Boxing_Unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> mylist = new List<object>();
            
            mylist.Add(7);
            mylist.Add(28);
            mylist.Add(-1);
            mylist.Add(true);
            mylist.Add("Chair");
            
            foreach (var item in mylist)
            {
                if (item is int)
                {
                    Console.WriteLine(item);
                }
                else if (item is string)
                {
                    Console.WriteLine(item);
                }
                else if (item is bool)
                {
                    Console.WriteLine(item);
                }
            }
            int sum = 0;
            foreach (var item in mylist)
            {
                if (item is int)
                {
                    int value = (int)item;
                    sum = sum + value;
                }
            }
            Console.WriteLine(sum);
            
            
            
        }
    }
}
