using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_Class_SubClass
{
	public class Student : Person
	{
		public string University { get; set; }
		public double AvgGrade { get; set; }

		public Student(string firstName, string lastName, int age) : base(firstName, lastName, age)
		{

		}
		public override void SayHello()
		{
			Console.WriteLine("Hello, I am a student");
		}
	}
}
