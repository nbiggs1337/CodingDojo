using System;
namespace Phones.Models
{
    public class Nokia : Phone, IRingable 
    {
        public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
            : base(versionNumber, batteryPercentage, carrier, ringTone) {IsUnlocked = false;}
        
        public static string SilentTone = "buzzzzz";
        
        private bool IsUnlocked;
        public string Ring() 
        {
            // your code here
            return IsUnlocked? Ringtone:SilentTone;
        }
        public string Unlock() 
        {
            // your code here
            IsUnlocked = true;
            return $"Nokia {Version} unlocked with passcode.";
        }
        public override void DisplayInfo() 
        {
            // your code here    
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
            Console.WriteLine($"Nokia {Version}");
            Console.WriteLine($"Battery Percentage: {Battery}%");
            Console.WriteLine($"Carrier: {Carrier}");
            Console.WriteLine($"Ringtone: {Ringtone}");
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        }
        
        
        
        
    }
}