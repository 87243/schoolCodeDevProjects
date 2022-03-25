using System;

namespace opdracht4_2{
    class MainClass{
        public static void Main(string[] args){
            int aantalX = 23; //Dit was eerst: int aantalX = 21;
			int aantalY = 15;
			for(int y = 0; y < aantalY; y++){ //Dit was eerst: for(int y = 0; y < aantalX; y++){
                if(y < aantalY - 4){
                    for(int x = 0; x < aantalX; x++){
                        if(y < aantalY - 4){
                            //top van de boom
                            if(x < (aantalX / 2) - y || x > (aantalX / 2) + y){
                                Console.Write("  "); //Dit was eerst: Console.Write("* ");
                            }
                            else{
                                Console.Write("* "); //Dit was eerst: Console.Write("  ");
                            }
                            Console.WriteLine();
                        }
                    }
                }
                if(y > aantalY - 4 && y < aantalY){
                    //stam
                    Console.WriteLine("                    * * *");
                    // Dit was eerst:
                    // if(x > (aantalX / 2) - (aantalX / 10) || x < (aantalX / 2) + (aantalX / 10)){
                    // 	Console.WriteLine("* ");
                    // }
                    // else{
                    // 	Console.Write("  ");
                    // }
                }
			}
		}
    }
}