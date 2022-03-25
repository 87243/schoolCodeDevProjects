using System;

namespace opdracht1_1{
    class Program{
        static void Main(string[] args){
            Console.WriteLine("Kies uit cilinder (1) of kegel (2).");
            int choice = int.Parse(Console.ReadLine());
            switch(choice){
                case 1:
                    //Vraag de gebruiker om invoer van de hoogte en lees deze in.
                    Console.WriteLine("\nWat is de hoogte van de cilinder?");
                    string hoogteString = Console.ReadLine();

                    //Doe hetzelfde met de straal van de cilinder.
                    Console.WriteLine("\nWat is de straal van de cilinder?");
                    string straalString = Console.ReadLine();

                    //Verander de ingelezen waarden om van een string naar een gebroken getal.
                    double hoogte = double.Parse(hoogteString);
                    double straal = double.Parse(straalString);

                    //Bereken de oppervlakte van de cirkel.
                    double oppervlakteCirkel = Math.PI * straal * 2;

                    //Bereken de omtrek van de cirkel.
                    double omtrekCirkel = 2 * Math.PI * straal;

                    //Bereken de oppervlakte van de wand (dit is een rechthoek als je deze zou uitvouwen).
                    double oppervlakteWand = hoogte * omtrekCirkel;

                    //Bereken de oppervlakte van de cilinder.
                    double oppervlakteCilinder = oppervlakteWand + 2 * oppervlakteCirkel;

                    //Bereken de inhoud van de cilinder.
                    double inhoudCilinder = oppervlakteCirkel * hoogte;

                    //Druk de oppervlakte van de cilinder af op het scherm.
                    Console.WriteLine("\n\nOppervlakte cilinder = " + oppervlakteCilinder);

                    //Druk de inhoud van de cilinder af op het scherm.
                    Console.WriteLine("\nInhoud cilinder = " + inhoudCilinder);
                    break;

                case 2:
                    //Vraag de gebruiker om invoer van de hoogte en lees deze in.
                    Console.WriteLine("\nWat is de hoogte van de kegel?");
                    string hoogteKegelString = Console.ReadLine();

                    //Doe hetzelfde met de straal van de kegel.
                    Console.WriteLine("\nWat is de straal van de kegel?");
                    string straalKegelString = Console.ReadLine();
                    
                    //Verander de ingelezen waarden om van een string naar een gebroken getal.
                    double hoogteKegel = double.Parse(hoogteKegelString);
                    double straalKegel = double.Parse(straalKegelString);

                    double oppervlakteKegel = Math.PI * straalKegel * (straalKegel + Math.Sqrt(Math.Pow(straalKegel, 2) + Math.Pow(hoogteKegel, 2)));

                    double oppervlakteGrondvlakKegel = Math.PI * Math.Pow(straalKegel, 2);

                    double inhoudKegel = oppervlakteGrondvlakKegel * hoogteKegel / 3;

                    // Druk de oppervlakte van de kegel af op het scherm.
                    Console.WriteLine("\n\nOppervlakte kegel = " + oppervlakteKegel);

                    Console.WriteLine("\nOppervlakte grondvlak kegel = " + oppervlakteGrondvlakKegel);

                    // Druk de inhoud van de kegel af op het scherm.
                    Console.WriteLine("\nInhoud kegel = " + inhoudKegel);
                    break;

                case int n when n < 1 || n > 2:
                    Console.WriteLine("\n\nJe kan alleen kiezen uit cilinder (1) of kegel (2).");
                    break;
            }
        }
    }
}