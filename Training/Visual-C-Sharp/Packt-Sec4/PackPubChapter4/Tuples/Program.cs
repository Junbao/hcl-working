using System;

namespace Tuples
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Introducing Tuples");
			Console.WriteLine("");

			var car = getCar();
			Console.WriteLine($"Model: {car.Item1}");
			Console.WriteLine($"Price: {car.Item2}");
			Console.WriteLine($"Currency: {car.Item3}");

			Console.WriteLine("");
			var bike = getBike();
			Console.WriteLine($"Model: {bike.Brand}");
			Console.WriteLine($"Price: {bike.Model}");
			Console.WriteLine($"Currency: {bike.Price}");

			Console.WriteLine("");
			Console.WriteLine("Deconstructed version");
			(string Brand, string Model, double Price) = getBike();
			Console.WriteLine($"Model: {Brand}");
			Console.WriteLine($"Price: {Model}");
			Console.WriteLine($"Currency: {Price}");

			Console.ReadLine();
		}
		// unnamed
		private static (string, double, string) getCar()
		{
			return ("Telsa Model S", 750000, "USD");
		}

		//named tuples
		private static (string Brand, string Model, double Price) getBike()
		{
			return ("Honda", "Valkyrie", 20000);
		}
	}
}
