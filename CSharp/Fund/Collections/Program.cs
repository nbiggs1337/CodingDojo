using System;
using System.Collections.Generic;



namespace Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            //////
            //3 basic arrays
            //=================
            int[] arr1 = {0,1,2,3,4,5,6,7,8,9}; //Arr with 0-9
            
            
            string[] arr2 = new string[] {"Tim", "Martin", "Nikki", "Sara"};//Arr with given names
            
            
            bool[] arr3 = new bool[10];// Arr with true/false alternating up to 10 
            arr3[0] = false;
            for (int i=1;i<=9;i++)
            {
                if (arr3[i-1] == true)
                {
                    arr3[i] = false;
                }
                else 
                {
                    arr3[i] = true;
                }
                
            }
            
            //Checker - plug and play arr#
            foreach (var item in arr3)
            {
                Console.WriteLine(item);
            }
            
            /////////////////////////////
            //List of Flavors
            //=================
            List<string> flavors = new List<string>();
            flavors.Add("Vanilla");
            flavors.Add("Choco");
            flavors.Add("Blue Moon");
            flavors.Add("Peppermint");
            flavors.Add("Mint");
            
            Console.WriteLine(flavors.Count); //Length of list
            
            Console.WriteLine(flavors[3]); // Output 3rd flavor
            
            flavors.RemoveAt(3); //Remove 3rd flavor **sob sob** its a good one... what a cruel world..
            
            Console.WriteLine(flavors.Count);//Output new flavor count
            
            
            //Another checker! Proving sadly, peppermint is gone, and im in tears...
            foreach (var item in flavors)
            {
                Console.WriteLine(item);
            }
            
            
            //////////////////////////
            //User Info Dict
            //=====================
            Dictionary<string,string> dict = new Dictionary<string,string>(); //init dict
            
            for (int j = 0; j<arr2.Length;j++) //Set each as key/value pair.
            {
                dict.Add(arr2[j],flavors[j]);
            }
            
            
            
            
            foreach (KeyValuePair<string,string> item in dict) //Loop through - I personally have to side with Nikki on this arguement. 
            {
                Console.WriteLine(item.Key +": "+item.Value);
            }
            
            
            
            
            
        }
    }
}
