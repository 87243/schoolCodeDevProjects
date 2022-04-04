using System;

namespace eindopdracht{
    class MainClass{
        public static void Main(string[] args){
            Console.WriteLine("Voer 4 getallen in van 1 tot en met 6 gescheiden door een spatie (als getal of als tekst)");
            string inputString = Console.ReadLine();
            string inputStringWithoutSpaces = inputString.Replace(" ", "");

            Console.WriteLine(inputStringWithoutSpaces);
        }
    }
}