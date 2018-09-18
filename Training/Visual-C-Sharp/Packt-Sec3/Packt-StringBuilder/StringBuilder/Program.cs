using System;
using System.Text;

namespace StringBuilder_usage
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("String concantination using String Builder");
			Console.WriteLine();

			StringBuilder builder = new StringBuilder();
			while (true)
			{
				Console.WriteLine("Type a word: ");
				string input = Console.ReadLine();
				if (input == "")
				{
					break;
				}
				else
				{
					builder.Append(input + " ");
				}
			}
			Console.WriteLine("Result: {0}", builder.ToString());
			Console.ReadKey();
		}
	}
}
