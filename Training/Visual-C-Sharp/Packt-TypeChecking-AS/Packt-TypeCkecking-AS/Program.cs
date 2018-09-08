using System;

namespace Packt_TypeCkecking_AS
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Now using Type Checking with AS operator");

			object obj = new Person("Jack", "Somebody", 45);
			doSomething(obj);
			Console.ReadKey();
		}
		private static void doSomething(object o)
		{
			Person p = o as Person;
			if (p == null)
			{
				throw new ArgumentException("Arguement is not a Person");
			}
			Console.WriteLine("{0}, {1}", p.FirstName, p.LastName);
			Console.WriteLine(p.FirstName + " " + p.LastName + " " + p.Age);
		}
	}
}
