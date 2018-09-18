using System;

namespace Packt_Class_SubClass
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Adding a Sub Class - Class Person with Sub Class Student");
			Console.WriteLine();

			Student std = new Student("Denise", "Perez", 45);
			std.University = "Tacoma Community";
			std.AvgGrade = 8;
			std.SayHello();

			Console.WriteLine(std + " attending {0} and holding an average grade of {1} out of 10", std.University, std.AvgGrade);

			Console.ReadKey();
		}
	}
}
