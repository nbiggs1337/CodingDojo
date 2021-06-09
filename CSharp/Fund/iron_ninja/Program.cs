using System;


namespace iron_ninja
{
    class Program
    {
        static void Main(string[] args)
        {
            Buffet buff = new Buffet();
            SpiceHound noah = new SpiceHound();
            SweetTooth Kristen = new SweetTooth();
            // Console.WriteLine(buff.Serve().Name);
            
            while (!noah.IsFull)
            {
                
                noah.Consume(buff.Serve());
            }
            noah.Consume(buff.Serve());
            
            while(!Kristen.IsFull)
            {
                Kristen.Consume(buff.Serve());
            }
            Kristen.Consume(buff.Serve());
            
            
            
        }
    }
}
