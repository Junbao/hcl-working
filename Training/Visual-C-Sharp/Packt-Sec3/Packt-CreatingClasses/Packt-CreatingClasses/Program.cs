using System;

namespace Packt_CreatingClasses
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Creating Classes");

			//Person person = new Person();
			//person.FirstName = "John";
			//person.LastName = "Smith";
			//person.Age = 44;

			//Console.WriteLine("{0} {1} - age: {2}", person.FirstName, person.LastName, person.Age);


			Console.WriteLine("No using a constructor");
			Console.WriteLine();

			Person person = new Person("Jon", "Jones", 55, 50000);
			Console.WriteLine("{0} {1} - age: {2} - salary: {3}", person.FirstName, person.LastName, person.Age, person._salary);


			Console.ReadKey();
		}
	}
}
