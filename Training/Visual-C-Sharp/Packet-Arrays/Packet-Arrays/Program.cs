using System;

namespace Packet_Arrays
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Let's Talk Arrays");
			Console.WriteLine();

			char[] charArray = new char[] { 'a', 'b', 'c' };
			Console.WriteLine("Array of characters size: {0}", charArray.Length);
			Console.WriteLine();

			char[] secondArray = new char[4];
			Console.WriteLine("Second Array started with only 4 spots and no data: {0}", secondArray.Length);
			secondArray[0] = 'b';
			secondArray[1] = 'a';
			secondArray[2] = 'p';
			secondArray[3] = 'r';

			for (int i = 0; i < secondArray.Length; i++)
			{
				Console.WriteLine(secondArray[i]);
			}

			Console.ReadLine();
		}
	}
}
