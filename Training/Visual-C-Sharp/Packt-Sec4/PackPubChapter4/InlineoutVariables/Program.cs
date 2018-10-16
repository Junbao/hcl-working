using System;

namespace InlineoutVariables
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Inline out Variables - example 4.4.1");

			int sum, diff;
			calculate(8, 2, out sum, out diff);
			Console.WriteLine("$");
			Console.ReadKey();
		}
		private static void calculate(int a, int b, out int sum, out int diff)
		{
			sum = a + b;
			diff = a - b;
		}
	}
}
