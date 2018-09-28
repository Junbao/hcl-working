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
			readAsFile();
			writeFile();
			readFile();
			Console.ReadKey();
        }

		//Writing to a file
		private static void writeFile()
		{
			StreamWriter write = new StreamWriter("readCode.txt", true);// default is false - and overrides content Adding true makes it append the text to current file
			write.WriteLine("writing another line to the current file");
			write.Close();
			Console.WriteLine("finished writing to the file");
		}

		//Reading a file
		//working with using vs Close() - this makes it easier to not forget about closing the stream
		private static void readFile()
		{
			using (StreamReader reader = new StreamReader("readCode.txt"))// had to copy this file into the debug folder
			{
				string contents = reader.ReadToEnd();
				Console.WriteLine("The Following is the contents of BJJ text file - ");
				Console.WriteLine(contents);
			}
		}

		//Async version of same - notice addition of async and await keywords
		private async static void readAsFile()
		{
			using (StreamReader readAsync = new StreamReader("readCode.txt"))// had to copy this file into the debug folder
			{
				string contents = await readAsync.ReadToEndAsync();
				Console.WriteLine("The Following is the content of the file, but happened in Async");
				Console.WriteLine(contents);
			}
		}



	}
}
