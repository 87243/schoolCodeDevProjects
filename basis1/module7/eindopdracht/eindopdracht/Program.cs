using System;
using System.Text.RegularExpressions;

namespace eindopdracht{
    class MainClass{
        public static void Main(string[] args){
            Console.WriteLine("Voer 4 getallen in van 1 tot en met 6 gescheiden door een spatie (als getal of als tekst)");
            string inputString = Console.ReadLine();

            RegexOptions options = RegexOptions.None;
            Regex regex = new Regex("[ ]{2,}", options);
            inputString = regex.Replace(inputString, " ");
            string[] numbers = inputString.Split(" ");

            for(int i = 0; i < numbers.Length; i++){
                if(numbers[i] != "1" && numbers[i] != "2" && numbers[i] != "3" && numbers[i] != "4" && numbers[i] != "5" && numbers[i] != "6"){
                    if(numbers[i] == "een"){
                        numbers[i] = "1";
                    }
                    else if(numbers[i] == "twee"){
                        numbers[i] = "2";
                    }
                    else if(numbers[i] == "drie"){
                        numbers[i] = "3";
                    }
                    else if(numbers[i] == "vier"){
                        numbers[i] = "4";
                    }
                    else if(numbers[i] == "vijf"){
                        numbers[i] = "5";
                    }
                    else if(numbers[i] == "zes"){
                        numbers[i] = "6";
                    }
                    else{
                        Console.WriteLine($"\nJe mag alleen getallen vanaf 1 tot en met 6 kiezen");
                        return;
                    }
                }
            }
            
            Console.WriteLine($"\n****************************");
            Console.WriteLine($"*     **     **     **     *");
            Console.WriteLine($"*  {numbers[0]}  **  {numbers[1]}  **  {numbers[2]}  **  {numbers[3]}  *");
            Console.WriteLine($"*     **     **     **     *");
            Console.WriteLine($"****************************");
        }
    }
}