using System;

namespace DLL
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            
            DoublyLinkedList testList = new DoublyLinkedList();
            
            for (int i = 0; i < 11; i++){
                testList.Add(i);
            }
            
            // testList.PrintValues();
            // Console.WriteLine("===========================");
            // Console.WriteLine(testList.Remove(10));
            // testList.PrintValues();
            
            testList.PrintValues();
            Console.WriteLine("===========================");
            testList.Reverse();
            testList.PrintValues();
            
            
        }
    }
}
