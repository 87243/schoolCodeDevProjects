using System;

namespace opdracht2_1{
    class Program{
        static void Main(string[] args){
            Console.WriteLine("Kies uit maand (1) of dag (2).");
            int choice = int.Parse(Console.ReadLine());
            switch(choice){
                case 1:
                    //Druk de tekst "Voer een getal in van 1 tot en met 12" af op het scherm.
                    Console.WriteLine("\nVoer een getal in van 1 tot en met 12");

                    //Lees de invoer in van de gebruiker.
                    string chosenNumberString = Console.ReadLine();

                    //Zet de invoer om naar het juiste type variabele (indien nodig).
                    int chosenNumber = int.Parse(chosenNumberString);

                    //Een array met alle maanden.
                    string[] months = {"januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"};

                    //Check of het ingevoerde getal hoger dan 0 en lager dan 13 is.
                    switch(chosenNumber){
                        //Als dat zo is: Schrijf naar de console de maand uit de array.
                        case int n when n >= 1 && n <= 12:
                            Console.WriteLine("\n\n" + months[chosenNumber - 1]);
                            break;
                        //Als dat niet zo is: Schrijf naar de console dat het ingevoerde getal geen maand van het jaar is.
                        case int n when n < 1 || n > 12:
                            Console.WriteLine("\n\nDit getal geeft geen maand van het jaar aan.");
                            break;
                    }
                    break;

                case 2:
                    //Druk de tekst "Voer een getal in van 1 tot en met 7" af op het scherm.
                    Console.WriteLine("\nVoer een getal in van 1 tot en met 7");

                    //Lees de invoer in van de gebruiker.
                    string chosenNumberString2 = Console.ReadLine();

                    //Zet de invoer om naar het juiste type variabele (indien nodig).
                    int chosenNumber2 = int.Parse(chosenNumberString2);

                    //Een array met alle dagen.
                    string[] days = {"maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"};

                    //Check of het ingevoerde getal hoger dan 0 en lager dan 8 is.
                    switch (chosenNumber2)
                    {
                        //Als dat zo is: Schrijf naar de console de dag uit de array.
                        case int n when n >= 1 && n <= 7:
                            Console.WriteLine("\n\n" + days[chosenNumber2 - 1]);
                            break;
                        //Als dat niet zo is: Schrijf naar de console dat het ingevoerde getal geen dag van het maand is.
                        case int n when n < 1 || n > 7:
                            Console.WriteLine("\n\nDit getal geeft geen dag van het maand aan.");
                            break;
                    }
                    break;

                case int n when n < 1 || n > 2:
                    Console.WriteLine("\n\nJe kan alleen kiezen uit maand (1) of dag (2).");
                    break;
            }
        }
    }
}