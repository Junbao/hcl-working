using System;

namespace Packt_CreateMethods
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Creating our own Method");
			Console.WriteLine();
			myMethod();
			printNumber(6);
			int num = 64;
			printNumber(num);
			Console.ReadKey();
		}

		static void myMethod()
		{
			Console.WriteLine("This is really basic!");
		}

		static void printNumber(int num)
		{
			Console.WriteLine("Number: {0}", num);
		}
	}
}
