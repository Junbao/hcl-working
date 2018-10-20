using System;

namespace InlineoutVariables
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Inline out Variables - example 4.4.1");
			//This is the orginal way to write this - int are declared first
			//int sum, diff;
			//calculate(8, 2, out sum, out diff);

			//C#7 version of this same
			//calculate(8, 2, out int sum, out int diff);

			//we can also use var instead of int to infer the type save time
			calculate(8, 2, out var sum, out var diff);

			Console.WriteLine($"Sum: {sum}");
			Console.WriteLine($"Diff: {diff}");
			Console.ReadKey();
		}
		private static void calculate(int a, int b, out int sum, out int diff)
		{
			sum = a + b;
			diff = a - b;
		}
	}
}
