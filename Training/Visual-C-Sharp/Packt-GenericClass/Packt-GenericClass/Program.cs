using System;

namespace Packt_GenericClass
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Writing First Generic Class");
			Console.WriteLine();

			MyStack<string> names = new MyStack<string>();
			names.Push("Jack");
			names.Push("Miriam");
			names.Push("Kai");
			names.Push("Denise");
			names.Push("Debrah");

			while (!names.IsEmpty())
			{
				string name = names.Pop();
				Console.WriteLine(name); //first in last out
			}

			Console.ReadKey();
		}
	}
}
