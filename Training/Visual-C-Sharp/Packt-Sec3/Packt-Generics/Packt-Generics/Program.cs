using System;
using System.Collections.Generic;

namespace Packt_Generics
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Introducing Generics");

			List<string> games = new List<string>();
			games.Add("Logans Run");
			games.Add("Donkey Kong");
			games.Add("Carnival Games");
			games.Add("MineCraft");

			foreach (string game in games)
			{
				Console.WriteLine(game);
			}

			List<int> randomNumbers = new List<int>();

			Random r = new Random();
			randomNumbers.Add(r.Next(1, 10));
			randomNumbers.Add(r.Next(1, 10));
			randomNumbers.Add(r.Next(1, 10));
			randomNumbers.Add(r.Next(1, 10));
			randomNumbers.Add(r.Next(1, 10));

			Console.WriteLine();

			foreach (int n in randomNumbers)
			{
				Console.Write("{0} ", n);
			}

			Console.ReadKey();

		}
	}
}
