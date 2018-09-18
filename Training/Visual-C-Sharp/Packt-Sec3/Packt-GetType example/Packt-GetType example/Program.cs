using System;

namespace Packt_GetType_example
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("GetType examplea");
			Console.WriteLine();

			bool myBool = true;
			Console.WriteLine("bool: {0}", myBool.GetType());

			byte myByte = 4;
			Console.WriteLine("byte: {0}", myByte.GetType());

			sbyte mySByte = 9;
			Console.WriteLine("sbyte {0}", mySByte.GetType());

			int myInt = 8;
			Console.WriteLine("int: {0}", myInt.GetType());

			uint myUnsignedInt = 28;
			Console.WriteLine("uint: {0}", myUnsignedInt.GetType());

			float myFloat = 3.14f;
			Console.WriteLine("float: {0}", myFloat.GetType());

			double myDouble = 28.456874296;
			Console.WriteLine("double: {0}", myDouble.GetType());

			decimal myDecimal = 2845932870952.456874296M;
			Console.WriteLine("decimal: {0}", myDecimal.GetType());

			short myShort = 9;
			Console.WriteLine("short: {0}", myShort.GetType());

			ushort myUnsignedShort = 10;
			Console.WriteLine("ushort: {0}", myUnsignedShort.GetType());

			long myLong = 1000000000000000;
			Console.WriteLine("long: {0}", myLong.GetType());

			ulong myUnsignedLong = 2000000000000000;
			Console.WriteLine("ulong: {0}", myUnsignedLong.GetType());

			char myChar = 'A';
			Console.WriteLine("char: {0}", myChar.GetType());

			string myString = "Just a check";
			Console.WriteLine("string: {0}", myString.GetType());


			Console.ReadLine();
		}
	}
}
