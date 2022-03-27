using System;

namespace opdracht4_4{
    class MainClass{
        public static void Main(string[] args){
            string text = "";
            int i = 0;
            while (i < 5){
                text += "\nThe number is " + i;
                i++;
                if (i == 3){
                    break;
                }
            }
            Console.WriteLine(text);
        }
    }
}