using System;
using System.IO;

namespace Packt_Working_With_Files
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Section 3-7 Working with Files");
			Console.WriteLine("");

			readFile();
			Console.ReadKey();
        }
		private static void readFile()
		{
			StreamReader reader = new StreamReader("bjj.txt");
			string contents = reader.ReadToEnd();
			Console.WriteLine("The Following is the contents of BJJ text file - ");
			Console.WriteLine(contents);
			reader.Close(); //This closes the reading operation and restores the memory allocation.
		}
    }
}
