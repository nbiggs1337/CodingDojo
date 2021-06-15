using System;

namespace Passcode
{
    public class Passcodes
    {
        public static Random rand = new Random();
        public string Code;
        public static string M = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        public Passcodes()
        {
            for (int i = 0; i < 15; i++)
            {
                char r = M[rand.Next(0, M.Length)];
                Code += r;
            }
        }
    }
}