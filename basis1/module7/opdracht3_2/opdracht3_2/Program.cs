using System;

namespace opdracht3_2{
    class MainClass{
        public static void Main(string[] args){
            int getal = 0;
            //declareer de andere variabelen die nodig zijn
            string getalString = " ";
            int aantal = 0;
            int kleinsteGetal = 0;
            int grootsteGetal = 0;
            int getallenLengte = 0;
            int totaal = 0;
            int gemiddeldeGetal = 0;

            while(getal >= 0 && getal <= 100){
                //Druk de tekst "Voer een getal in" af op het scherm
                Console.WriteLine("Voer een getal in");
                //Lees de invoer in van de gebruiker
                getalString = Console.ReadLine();
                //Zet de invoer om naar het juiste type variabele 
                getal = int.Parse(getalString);

                if(getal > 0 && getal <= 100){
                    //kleinste en grootste
                    if(aantal == 0){
                        //startwaarden bij eerste invoer
                        kleinsteGetal = getal;
                        grootsteGetal = getal;
                    }

                    aantal++;

                    //vergelijk het ingevoerde getal met de kleinste waarde
                    if(getal < kleinsteGetal){
                        //stel de kleinste waarde opnieuw in (indien nodig)
                        kleinsteGetal = getal;
                    }

                    //Doe hetzelfde voor de grootste waarde
                    if(getal > grootsteGetal){
                        grootsteGetal = getal;
                    }

                    //druk de kleinste waarde af
                    Console.WriteLine("\n\nKleinste getal: "+kleinsteGetal);
                    //druk de grootste waarde af
                    Console.WriteLine("Grootste getal: "+grootsteGetal);
                    //tel het aantal getallen die ingevoerd zijn (in een aparte variabele)
                    
                    //tel het getal bij het totaal op (totaal is een aparte variabele)
                    totaal += getal;
                    //bereken het gemiddelde en druk deze af
                    gemiddeldeGetal = totaal / aantal;
                    Console.WriteLine("Gemiddelde getal: "+gemiddeldeGetal+"\n");
                }
            }
            if(getal > 100){
                Console.WriteLine("Je mag alleen getallen invoeren van 0 tot 100");
            }
            else{
                Console.WriteLine("\n\nBedankt voor het gebruiken van deze applicatie");
            }
        }
    }
}