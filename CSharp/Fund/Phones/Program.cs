using System;

namespace Phones
{
    class Program
    {
        static void Main(string[] args)
        {
            Galaxy S20 = new Galaxy("S20+", 98, "Verizon", "Dooo do doo dooooo");
            Nokia fivedot3 = new Nokia("3.5", 60, "Boost Mobile", "RingRingBananaFoneee" );
            
            S20.DisplayInfo();
            Console.WriteLine(S20.Unlock());
            Console.WriteLine(S20.Ring());
            Console.WriteLine("");
            
            fivedot3.DisplayInfo();
            Console.WriteLine(fivedot3.Unlock());
            Console.WriteLine(fivedot3.Ring());
            Console.WriteLine("");
            
            
            
            
            
            
            
        }
    }
}
