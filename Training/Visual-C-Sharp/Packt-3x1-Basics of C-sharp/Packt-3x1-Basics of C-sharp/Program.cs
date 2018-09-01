using System;

namespace Packt_3x1_Basics_of_C_sharp
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Working with Data Types");
			int myInt = 42;
			Console.WriteLine("myInt = {0}", myInt);
			Console.WriteLine();

			int a = 8;
			int b = 2;
			Console.WriteLine("{0} + {1} = {2}", a, b, a + b);
			Console.ReadKey();
		}
	}
}
