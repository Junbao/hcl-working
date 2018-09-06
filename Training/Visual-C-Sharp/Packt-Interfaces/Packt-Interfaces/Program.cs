using System;

namespace Packt_Interfaces
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Working with interface - IRUNNER");
			Console.WriteLine();

			Person slow = new Person("Micheal", "Jordon", 56, new SlowRunner());

			Person fast = new Person("John", "Hughes", 55, new FastRunner());
			Dog d = new Dog("Otsu", new FastRunner());

			d.Run(2);
			slow.Run(5);
			fast.Run(10);
			Console.ReadKey();
		}
	}
}
