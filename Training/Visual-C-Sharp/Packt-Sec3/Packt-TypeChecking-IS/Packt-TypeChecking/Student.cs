using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_TypeChecking
{
	public class Student : Person
	{
		public string University { get; set; }
		public double Grade { get; set; }

		public Student(string firstName, string lastName, int age, string university, double grade) : base(firstName, lastName, age)
		{
			University = university;
			Grade = grade;
		}
	}
}
