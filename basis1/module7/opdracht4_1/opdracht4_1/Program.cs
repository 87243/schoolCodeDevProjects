using System;

namespace opdracht4_1{
    class MainClass{
        public static void Main(string[] args){
            Console.WriteLine("Voer een getal in");
            string getalString = Console.ReadLine();
            float getal = float.Parse(getalString); // Dit was eerst: int getal = int.Parse(getalString);
            float delenDoor = 2; // Dit was eerst: int delenDoor = 2;

            bool stoppen = false; // Dit was eerst: bool stoppen = true;

            while(!stoppen){
                float antwoord = getal / delenDoor;
                Console.WriteLine(getal.ToString() + " gedeeld door " + delenDoor + " is " + antwoord);
                delenDoor++; // Dit was er eerst niet.
                if(antwoord < 1){ //Dit was eerst: if(antwoord < 0){
                    stoppen = true;   
                }
            }
        }
    }
}