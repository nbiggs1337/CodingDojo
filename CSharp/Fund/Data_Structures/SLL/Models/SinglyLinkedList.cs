using System;
namespace SLL
{
    public class SinglyLinkedList
    {
        public SllNode Head;
        public SinglyLinkedList() 
        {
            // your code here
            Head = null;
        }
        // SLL methods go here. As a starter, we will show you how to add a node to the list.
        public void Add(int value) 
        {
            SllNode newNode = new SllNode(value);
            if(Head == null) 
            {
                Head = newNode;
            } 
            else
            {
                SllNode runner = Head;
                while(runner.Next != null) {
                    runner = runner.Next;
                }
                runner.Next = newNode;
            }
        } 
        
        public void RemoveTail()
        {
            if ( Head.Next == null)
            {
                Head = null;
            }
            else {
                SllNode runner = Head;
                while(runner.Next.Next != null){
                    runner = runner.Next;
                }
                runner.Next = null;
                
            }
        }
        
        public void PrintValues()
        {
            SllNode runner = Head;
            while (runner.Next != null) {
                Console.WriteLine("Current Node: " + runner.Value);
                runner = runner.Next;
            }
        }
        
        public void PrintNextValue()
        {
            SllNode runner = Head;
            while (runner.Next != null) {
                Console.WriteLine("Current Node: "+ runner.Value + "  .Next Value: " + runner.Next.Value);
                runner = runner.Next;
            }
        }
        
    }


}