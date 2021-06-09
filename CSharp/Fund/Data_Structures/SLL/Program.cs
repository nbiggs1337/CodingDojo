using System;

namespace SLL
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            
            SinglyLinkedList testList = new SinglyLinkedList();
            
            for (int i = 0; i < 11; i++){
                testList.Add(rand.Next(0,11));
            }
            
            testList.PrintNextValue();
            Console.WriteLine("------------------");
            testList.RemoveTail();
            testList.PrintNextValue();
            // testList.RemoveTail();
            // testList.PrintNextValue();
            // testList.RemoveTail();
            // testList.PrintNextValue();
            
        }
    }
}
