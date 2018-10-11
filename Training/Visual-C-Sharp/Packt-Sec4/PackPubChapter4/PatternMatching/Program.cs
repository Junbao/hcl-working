using System;

namespace PatternMatching
{
	class Program
	{
		static void Main(string[] args)
		{
			Person p = new Employee("John", "Smith", 23, EmployeeType.Hourly);
			//describePerson(p);
			describeEmployee(p);
			Console.ReadKey();
		}

		private static void describeEmployee(Person p)
		{
			if (p is Employee e)
			{
				if (e.Type == EmployeeType.Hourly)
				{
					Console.WriteLine($"{e} is an hourly employee");
				}
				else
				{
					Console.WriteLine($"{e} is a salaried employee");
				}
			}
			else
			{
				Console.WriteLine($"{p} is not an employee");
			}
		}

		private static void describePerson(Person p)
		{
			switch (p)
			{
				case Student s when s.Level == StudentLevel.HighSchool:
					Console.WriteLine($"{s} is a high school student");
					break;
				case Student s when s.Level == StudentLevel.Undergrad:
					Console.WriteLine($"{s} is an undergraduate student");
					break;
				case Student s when s.Level == StudentLevel.Postgrad:
					Console.WriteLine($"{s} is a postgraduate student");
					break;
				case Employee e:
					Console.WriteLine($"{e} is an employee");
					break;
				case Athlete a:
					Console.WriteLine($"{a} is an athlete");
					break;
				case Person person:
					Console.WriteLine($"{p} is just a person");
					break;
				default:
					throw new ArgumentException("p is not a person");
			}
		}
	}
}
