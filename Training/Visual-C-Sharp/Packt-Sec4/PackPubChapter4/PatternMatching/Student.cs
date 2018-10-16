using System;
using System.Collections.Generic;
using System.Text;

namespace PatternMatching
{
	public enum StudentLevel
	{
		HighSchool,
		Undergrad,
		Postgrad
	}
	public class Student : Person
	{
		public StudentLevel Level { get; set; }

		public Student(string firstName, string lastName, int age, StudentLevel level) : base(firstName, lastName, age)
		{
			Level = level;
		}
	}
}
