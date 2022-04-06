using System;

namespace opdracht3_1{
    class MainClass{
        public static void Main(string[] args){
            //Druk de tekst "Voer een getal in" af op het scherm
            Console.WriteLine("Voer een getal in");
            //Lees de invoer in van de gebruiker
            string sizeString = Console.ReadLine();
            //Zet de invoer om naar het juiste type variabele (indien nodig)
            int size = int.Parse(sizeString);
            int countHalf = size / 2;
            Console.WriteLine();
            //Teken een dak
            for(int y = size / 2; y < size; y++){
                for(int x = 0; x < size; x++){
                    if(x == y || size - x == y + 1){
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
            //Teken een huis
            for(int y = 0; y < size; y++){ //maak deze for-lus verder af
                for(int x = 0; x < size; x++){ //maak deze for-lus verder af
                    if(x == 0 || y == 0 || x == size - 1 || y == size - 1){
                        //Controleer hier voor welke x en y waarden er een * afgedrukt moet worden (buitenkant van het vierkant)
                        Console.Write("*  ");
                    }
                    else if(x == y || size - x == y + 1){
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
