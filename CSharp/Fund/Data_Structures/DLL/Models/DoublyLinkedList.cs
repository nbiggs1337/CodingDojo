using System;

namespace DLL
{
    public class DoublyLinkedList
    {
        public DllNode Head;
        
        public DoublyLinkedList()
        {
            Head = null;
        }
        
        
        public void Add(int value)
        {
            DllNode newNode = new DllNode(value);
            if (Head == null){
                Head = newNode;
            }
            else {
                DllNode runner = Head;
                while (runner.Next != null){
                    runner = runner.Next;
                }
                runner.Next = newNode;
                newNode.Prev = runner;
            }
        }
        
        public bool Remove(int target)
        {
            DllNode temp = Head;
            if ( temp != null && temp.Value == target){
                Head = temp.Next;
                Head.Prev = null;
                return true;
            }
            while ( temp != null && temp.Value != target){
                temp = temp.Next;
            }
            if (temp == null){
                return false;
            }
            if (temp.Next != null){
                temp.Next.Prev = temp.Prev;
            }
            if (temp.Prev != null){
                temp.Prev.Next = temp.Next;
            }
            return true;
        }
        
        
        public void PrintValues()
        {
            DllNode runner = Head;
            while (runner.Next != null){
                if (runner.Prev == null){
                    Console.WriteLine("Current Node: " + runner.Value + "   Prev Value: null "  + "    Next Value: "+ runner.Next.Value);
                    runner = runner.Next;
                }
                else {
                    Console.WriteLine("Current Node: " + runner.Value + "   Prev Value: " + runner.Prev.Value + "    Next Value: "+ runner.Next.Value);
                    runner = runner.Next;
                }
            }
        }
        
        
        public void Reverse()
        {
            DllNode prev = null;
            DllNode current = Head;
            DllNode temp = null;
            while (current != null){
                temp = current.Next;
                current.Next = prev;
                prev = current;
                current = temp;
            }
            Head = prev;
        }
        
        
        
    }
}