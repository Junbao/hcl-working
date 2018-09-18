using System;

namespace Packt_EnterProperties
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Starting to use Proprties in a Class");
			Console.WriteLine();

			Person person = new Person("Terry", "Cummings", 57);
			person.Age = 17;
			Console.WriteLine("{0} {1} - age: {2}", person.FirstName, person.LastName, person.Age);
			if (person.Age < Person.MinAge) // The static Age is part of the class, not an instance (person) of Person
			{
				Console.WriteLine("Sorry, too young");
			}
			Console.ReadKey();
		}
	}
}
