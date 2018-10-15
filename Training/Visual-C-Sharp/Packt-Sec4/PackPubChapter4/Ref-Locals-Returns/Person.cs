using System;
using System.Collections.Generic;
using System.Text;

namespace Ref_Locals_Returns
{
	public class Person
	{
		public string FirstName { get; private set; }
		public string LastName { get; private set; }
		private int _age;

		public Person(string firstName, string lastName, int age)
		{
			FirstName = firstName;
			LastName = lastName;
			_age = age;
		}
		// This is new to C# 7 - before we would cast the age private field to an Object and return that
		public ref int GetAge()
		{
			return ref _age;
		}

		public override string ToString()
		{
			return $"{FirstName} {LastName} / {_age}";	
		}
	}
}
