using System;

namespace Packt_MultipleValuesFromMethod_ONE
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Getting multiple values from a single Method using ONE keyword");

			int a = 8;
			int b = 2;
			int sum, diff, prod;
			doEverything(a, b, out sum, out diff, out prod);
			Console.WriteLine("Sum: {0}", sum);
			Console.WriteLine("Diff: {0}", diff);
			Console.WriteLine("Prod: {0}", prod);

			Console.ReadKey();
		}

		static void doEverything(int a, int b, out int sum, out int diff, out int prod)
		{
			sum = a + b;
			diff = a - b;
			prod = a * b;
		}
	}
}
