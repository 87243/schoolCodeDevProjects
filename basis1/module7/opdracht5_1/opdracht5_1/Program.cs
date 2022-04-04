using System;

namespace Opdracht5_2{
    class MainClass{
        public static void Main(string[] args){
            //declareer hier drie variabelen waarin je het aantal A, E of I gaat opslaan
            int amountOfA = 0;
            int amountOfE = 0;
            int amountOfI = 0;

            Console.WriteLine("Voer een volledige zin in:");
            string sentence = Console.ReadLine();
            //zet de zin om in alleen kleine letters of alleen hoofdletters
            string sentenceLower = sentence.ToLower();

            for(int i = 0; i < sentenceLower.Length; i++){
                string letter = sentenceLower.Substring(i, 1);

                //is de letter een A dan ....
                if(letter == "a"){
                    amountOfA++;
                }
                //is de letter een E dan ....
                if(letter == "e"){
                    amountOfE++;
                }
                //is de letter een I dan ....
                if(letter == "i"){
                    amountOfI++;
                }
            }

            Console.WriteLine($"\nAantal keer A is: {amountOfA}");
            Console.WriteLine($"Aantal keer E is: {amountOfE}");
            Console.WriteLine($"Aantal keer I is: {amountOfI}");
        }
    }
}