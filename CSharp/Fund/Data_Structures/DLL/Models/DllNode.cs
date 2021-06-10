namespace DLL
{
    public class DllNode
    {
        public int Value;
        public DllNode Next;
        public DllNode Prev;
        public DllNode(int val) 
        {
        // your code here
            Value = val;
            Next = null;
            Prev = null;
        }
    }


}