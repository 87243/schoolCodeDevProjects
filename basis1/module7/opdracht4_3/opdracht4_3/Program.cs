using System;

namespace opdracht4_3{
    class MainClass{
        public static void Main(string[] args){
            DateTime date = DateTime.Now;
            int hour = date.Hour;

            if(hour >= 6 && hour < 12){
                Console.WriteLine("Goedemorgen");
            }
            else if(hour >= 12 && hour < 18){
                Console.WriteLine("Goedemiddag");
            }
            else if(hour >= 18 && hour < 23){
                Console.WriteLine("Goedeavond");
            }
            else{
                Console.WriteLine("Goedenacht");
            }
        }
    }
}