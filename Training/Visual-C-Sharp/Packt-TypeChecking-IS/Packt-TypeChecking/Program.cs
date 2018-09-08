using System;

namespace Packt_TypeChecking
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Using Type Checking - is operators");

			Person p = new Person("John", "Doe", 32);
			if (p is Person)
			{
				Console.WriteLine("p is a Person");
			}
			else
			{
				Console.WriteLine("p is not a Person");
			}

			Student s = new Student("Denise", "Perez", 42, "Tacoma U", 10);
			if (s is Student)
			{
				Console.WriteLine("s is a Student");
			}
			else
			{
				Console.WriteLine("s is not a Student");
			}
			if (s is Person)
			{
				Console.WriteLine("s is a Person");
			}
			else
			{
				Console.WriteLine("s is not a Person");
			}
			if (p is Student)
			{
				Console.WriteLine("p is a Student");
			}
			else
			{
				Console.WriteLine("p is not a Student");
			}

			Console.ReadKey();
		}
	}
}
