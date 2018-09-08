using System;

namespace Packt_Structs
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Introducing Structs");
			Console.WriteLine();

			Coordinates cor = new Coordinates();
			cor.Longitude = 45.67895;
			cor.Latitude = 38.79523;
			//Console.WriteLine("Current location is: ( {0}, {1})", cor.Longitude, cor.Latitude);
			Console.WriteLine("Initial location is: ( {0}, {1})", cor.Longitude, cor.Latitude);
			changeCoordinates(cor);
			Console.WriteLine("After location is: ( {0}, {1})", cor.Longitude, cor.Latitude);
			//
			Console.ReadKey();

		}
		private static void changeCoordinates(Coordinates cor)
		{
			cor.Longitude = 0;
			cor.Latitude = 0;
		}
	}
}
