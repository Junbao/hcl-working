using System;

namespace Packt_MethodOverloading
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("An example of Method Overloading");
			Console.WriteLine();
			printNumber(1);
			printNumber(1,2);
			printNumber(1,2,3);
			Console.ReadKey();
		}

		static void printNumber(int a)
		{
			Console.WriteLine(a);
		}

		static void printNumber(int a, int b)
		{
			int result = a + b;
			Console.WriteLine(result);
		}

		static void printNumber(int a, int b, int c)
		{
			int result = a * b * c;
			Console.WriteLine(result);
		}
	}
}
