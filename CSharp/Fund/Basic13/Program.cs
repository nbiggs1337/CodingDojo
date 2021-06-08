using System;

namespace Basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            //////////FOR EACH BASIC IN BASIC13 { SEPERATED BY NEWLINE};
            // PrintNumbers();
            
            // PrintOdds();
            
            // PrintSum();
            
            int[] array = {24,543,-600,23,11,2,3,43,5};
            // LoopArray(array);
            
            // Console.WriteLine(FindMax(array));
            
            // int[] array2 = {2, 10, 3};
            // GetAverage(array);
            // GetAverage(array2);
            
            // OddArray();
            
            int[] nums = {1, 3, 5, 7};
            // int y = 3;
            // Console.WriteLine(GreaterThanY(nums, y));
            
            // SquareArrayValues(nums);
            
            // EliminateNegatives(array);
            
            // MinMaxAverage(nums);
            // MinMaxAverage(array);
            
            // ShiftValues(nums);
            // ShiftValues(array);
            
            NumToString(array);
            
            
            
        }
        
        public static void PrintNumbers()
        {
            // Print all of the integers from 1 to 255.
            for(int i = 1; i < 256; i++)
            {
                Console.WriteLine(i);
            }
        }
        
        public static void PrintOdds()
        {
            // Print all of the odd integers from 1 to 255.
            for (int i = 1; i < 256; i++)
            {
                if (i % 2 != 0)
                {
                    Console.WriteLine(i);
                }
            }
        }
        
        
        public static void PrintSum()
        {
            // Print all of the numbers from 0 to 255, 
            // but this time, also print the sum as you go. 
            // For example, your output should be something like this:
            // New number: 1 Sum: 1
            // New Number: 2 Sum: 3
            int sum = 0;
            for (int i = 0; i < 256; i++)
            {
                sum = sum + i;
                Console.WriteLine("New Number: "+ i + " Sum: " + sum);
            }
            
        }
        
        public static void LoopArray(int[] numbers)
        {
            // Write a function that would iterate through each item of the given integer array and 
            // print each value to the console. 
            foreach (int item in numbers)
            {
                Console.WriteLine(item);
            }
            
        }
        
        
        public static int FindMax(int[] numbers)
        {
            // Write a function that takes an integer array and prints and returns the maximum value in the array. 
            // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), 
            // or even a mix of positive numbers, negative numbers and zero.
            int max = 0;
            foreach (int item in numbers)
            {
                if (item > max)
                {
                    max = item;
                }
            }
            return max;
        }
        
        public static void GetAverage(int[] numbers)
        {
            // Write a function that takes an integer array and prints the AVERAGE of the values in the array.
            // For example, with an array [2, 10, 3], your program should write 5 to the console.
            int len = numbers.Length;
            int sum = 0;
            foreach (int item in numbers)
            {
                sum = sum + item;
            }
            int avg = sum/len;
            Console.WriteLine(avg);
        }
        
        public static int[] OddArray()
        {
            // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255. 
            // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
            int[] odds = new int[128];
            for (int i = 0; i <129; i++)
            {
                for (int j = 1; j < 256; j++)
                {
                    if (j % 2 != 0)
                    {
                        odds[i] = j;
                        i++;
                    }
                }
                
            }
            // foreach (int item in odds)
            // {
            //     Console.WriteLine(item);
            // }
            return odds;
        }
        
        public static int GreaterThanY(int[] numbers, int y)
        {
            // Write a function that takes an integer array, and a integer "y" and returns the number of array values 
            // That are greater than the "y" value. 
            // For example, if array = [1, 3, 5, 7] and y = 3. Your function should return 2 
            // (since there are two values in the array that are greater than 3).
            int count = 0;
            foreach (int item in numbers)
            {
                if (item > y)
                {
                    count++;
                }
            }
            return count;
            
        }
        
        public static void SquareArrayValues(int[] numbers)
        {
            // Write a function that takes an integer array "numbers", and then multiplies each value by itself.
            // For example, [1,5,10,-10] should become [1,25,100,100]
            for (int i = 0; i < numbers.Length;i++)
            {
                int squared = numbers[i]*numbers[i];
                numbers[i] = squared;
                Console.WriteLine(numbers[i]);
            }
        }
        
        public static void EliminateNegatives(int[] numbers)
        {
            // Given an integer array "numbers", say [1, 5, 10, -2], create a function that replaces any negative number with the value of 0. 
            // When the program is done, "numbers" should have no negative values, say [1, 5, 10, 0].
            for (int i = 0; i < numbers.Length;i++)
            {
                if (numbers[i] < 0)
                {
                    numbers[i] = 0;
                }
            }
            foreach (int item in numbers)
            {
                Console.WriteLine(item);
            }
        }
        
        public static void MinMaxAverage(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array, 
            // the minimum value in the array, and the average of the values in the array.
            int min = numbers[0];
            int max = 0;
            int sum = 0;
            int avg = 0;
            foreach (int item in numbers)
            {
                if (item > max)
                {
                    max = item;
                }
            }
            foreach (int item in numbers)
            {
                if (item < min)
                {
                    min = item;
                }
            }
            foreach (int item in numbers)
            {
                sum = item+sum;
            }
            avg = sum/numbers.Length;
            Console.WriteLine("Max: " + max + "  Min: " + min + "  Avg: " + avg);
        }
        
        public static void ShiftValues(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, 7, -2], 
            // Write a function that shifts each number by one to the front and adds '0' to the end. 
            // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function, 
            // it should become [5, 10, 7, -2, 0].
            for (int i = 0; i < numbers.Length-1; i++)
            {
                numbers[i] = numbers[i+1];
            }
            numbers[numbers.Length-1] = 0;
            
            foreach (int item in numbers)
            {
                Console.WriteLine(item);
            }
        }       
        
        public static object[] NumToString(int[] numbers)
        {
            // Write a function that takes an integer array and returns an object array 
            // that replaces any negative number with the string 'Dojo'.
            // For example, if array "numbers" is initially [-1, -3, 2] 
            // your function should return an array with values ['Dojo', 'Dojo', 2].
            object[] nums = new object[numbers.Length];
            for (int i =0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    nums[i] = "Dojo";
                }
                else {
                    nums[i] = numbers[i];
                }
            }
            foreach (var item in nums)
            {
                Console.WriteLine(item);
            }
            return nums;
        }
        
        
        
        
    }
}
