using System;

namespace opdracht5_2{
    class MainClass{
        public static void Main(string[] args){
            Console.WriteLine("Voer een zin in:");
            string sentence = Console.ReadLine();
            string character = "";
            // Add 2 enters at the beginning
            string sentenceWithEnters = "\n\n"+sentence;
            string sentenceWithEntersAndUppers = "";

            for(int i = 0; i < sentenceWithEnters.Length; i++){
                character = sentenceWithEnters.Substring(i, 1);
                // Check if character is a space, if so then add an enter and then add the first character after the space as an uppercase letter, and finally skip the next character by incrementing the i variable
                if(character == " "){
                    sentenceWithEntersAndUppers += "\n";
                    sentenceWithEntersAndUppers += sentenceWithEnters.Substring(i + 1, 1).ToUpper();
                    i++;
                }
                // If character is not a space, then add the current character to the sentenceWithEntersAndUppers variable
                else{
                    sentenceWithEntersAndUppers += sentenceWithEnters.Substring(i, 1);
                }
            }
            // Print the result to the console
            Console.WriteLine(sentenceWithEntersAndUppers);
        }
    }
}