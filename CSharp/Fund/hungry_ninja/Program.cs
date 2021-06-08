using System;


namespace hungry_ninja
{
    class Program
    {
        static void Main(string[] args)
        {
            Buffet buff = new Buffet();
            Ninja noah = new Ninja();
            Console.WriteLine(buff.Serve().Name);
            while (!noah.IsFull)
            {
                noah.Eat(buff.Serve());
            }
            noah.Eat(buff.Serve());
            
            
            
        }
    }
}
