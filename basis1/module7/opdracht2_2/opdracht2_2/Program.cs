using System;

namespace opdracht2_2{
    class Program{
        static void Main(string[] args){
            //Druk de tekst "Voer een woord in" af op het scherm.
            //Lees de invoer in van de gebruiker.
            //Bovenstaande in totaal 6x met een for loop en een array;

            //Een array met 6 values.
            string[] words = {"0", "1", "2", "3", "4", "5"};
            //Druk de eerste "Voer een woord in." uit zonder \n aan het begin.
            Console.WriteLine("Voer een woord in.");
            //Voeg de eerste ingevulde woord aan de array toe.
            words[0] = Console.ReadLine();
            //Een for loop om de rest van de "Voer een woord in." en 'de ingevulde woorden in de array te zetten' uit te voeren.
            for(int i = 1; i < 6; i++){
                Console.WriteLine("\nVoer een woord in.");
                words[i] = Console.ReadLine();
            }
            //Sorteer het array.
            Array.Sort(words);
            //Maak een variabele aan.
            string allWords = "";
            //Zet elk woord uit de array in de variabele met een spatie tussen elk woord.
            for(int i = 0; i < words.Length; i++){
                allWords += words[i] + " ";
            }
            //Print de variabele met elk woord uit de array in de variabele met een spatie tussen elk woord.
            Console.WriteLine("\n\n" + allWords);
        }
    }
}
