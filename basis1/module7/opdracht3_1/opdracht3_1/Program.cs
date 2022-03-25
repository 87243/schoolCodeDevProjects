using System;

namespace opdracht3_1{
    class MainClass{
        public static void Main(string[] args){
            //Druk de tekst "Voer een getal in" af op het scherm
            Console.WriteLine("Voer een getal in");
            //Lees de invoer in van de gebruiker
            string countString = Console.ReadLine();
            //Zet de invoer om naar het juiste type variabele (indien nodig)
            int count = int.Parse(countString);
            int countHalf = count / 2;
            Console.WriteLine();
            for(int y = 0; y < count; y++){ //maak deze for-lus verder af
                for(int x = 0; x < count; x++){ //maak deze for-lus verder af
                    if(x == 0 || y == 0 || x == count - 1 || y == count - 1){
                        //Controleer hier voor welke x en y waarden er een * afgedrukt moet worden (buitenkant van het vierkant)
                        Console.Write("*  ");
                    }
                    else if(x == y || count - x == y + 1){
                        //Controleer hier voor welke x en y waarden de diagonalen getekend moeten worden
                        Console.Write("*  ");
                    }
                    else{
                        //druk een spatie af
                        Console.Write("   ");
                    }
                }
                //spring naar de volgende regel
                Console.WriteLine();
            }
        }
    }
}
