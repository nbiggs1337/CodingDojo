
using System;
namespace Phones

{
    public class Galaxy : Phone, IRingable 
    {
        public Galaxy(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
            : base(versionNumber, batteryPercentage, carrier, ringTone) {IsUnlocked = false;}
            
            
        public static string SilentTone = "bzzzzzzz";
        
        private bool IsUnlocked;
        public string Ring() 
        {
            return IsUnlocked? Ringtone:SilentTone;
        }
        
        public string Unlock() 
        {
            // your code here
            IsUnlocked= true;
            return $"Galaxy {Version} unlocked with fingerprint scanner.";
        }
        public override void DisplayInfo() 
        {
            // your code here
            Console.WriteLine("##############################");
            Console.WriteLine($"Galaxy {Version}");
            Console.WriteLine($"Battery Percentage: {Battery}%");
            Console.WriteLine($"Carrier: {Carrier}");
            Console.WriteLine($"Ringtone: {Ringtone}");
            Console.WriteLine("##############################");
        }
        
        
        
        
    }
}