using System;
using System.Text;

namespace Packt__Value_vs_ReferrenceTypes
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("The difference between Value and Refference Types");
			Console.WriteLine();

			double myDouble = 4.56;
			Console.WriteLine("myDouble in Main: {0}", myDouble);
			//incrementDouble(myDouble);
			//Console.WriteLine("myDouble in Main: {0} - Showing value has not changed", myDouble);
			incrementDouble(ref myDouble);
			Console.WriteLine("myDouble in Main using ref: {0}", myDouble); //Note 'ref' added to argument in incrementDouble Method

			StringBuilder builder = new StringBuilder();
			builder.Append("Hello ");
			builder.Append("C# ");
			addExclamationMarks(builder);
			Console.WriteLine("StringBuilder in Main: {0}", builder.ToString());

			Console.ReadKey();
		}

		static void incrementDouble(ref double d)
		{
			d++;
			Console.WriteLine("myDouble in incrementDouble: {0}", d);
		}

		static void addExclamationMarks(StringBuilder b)
		{
			b.Append("!!!!!!");
		}
	}
}
