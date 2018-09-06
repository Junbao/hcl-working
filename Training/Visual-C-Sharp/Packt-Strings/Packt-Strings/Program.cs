using System;

namespace Packt_Strings
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Lets Talk Strings");
			Console.WriteLine();
			string result = "";
			while(true)
			{
				Console.WriteLine("Type a word: ");
				string input = Console.ReadLine();
				if(input == "")
				{
					break;
				}
				else
				{
					result += input + " ";
				}
			}
			Console.WriteLine("Result: {0}", result);
			Console.ReadKey();
		}
	}
}
