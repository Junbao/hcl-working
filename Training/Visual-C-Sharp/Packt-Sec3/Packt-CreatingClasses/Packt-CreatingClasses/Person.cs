using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_CreatingClasses
{
	public class Person
	{
		public string FirstName;
		public string LastName;
		public int Age;

		public decimal _salary; //changed from private to public to test Program

		//An easier way is using a Constructor - following

		public Person()
		{

		}
		public Person(string firstName, string lastName, int age, decimal salary=45000)
		{
			FirstName = firstName;
			LastName = lastName;
			Age = age;

			//default value
			//this.salary = salary; 
			// using this because the argument has same name as field
			//or  - refactor to change the name highlightfield F2
			_salary = salary; //this is a standard format for C#

		}
	}
}
