using Packt_Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_Interfaces
{
	public class Person : IRunner
	{
		public static int MinAge = 18;
		public static int MaxAge = 70;

		private readonly string _firstName;
		private readonly string _lastName;
		private IRunner _runner;

		public string FirstName
		{
			get
			{
				return _firstName;
			}
		}

		public string LastName
		{
			get
			{
				return _lastName;
			}
		}

		public int Age { get; set; }

		// This is the constructor
		public Person(string firstName, string lastName, int age, IRunner runner)
		{
			_firstName = firstName;
			_lastName = lastName;
			Age = age;
			_runner = runner;
		}


		public virtual void SayHello()
		{
			Console.WriteLine("Hello I'm a Person");
		}

		public override string ToString()
		{
			return FirstName + " " + LastName + " - age: " + Age;
		}

		public void Run(int distance)
		{
			_runner.Run(distance);
			//Console.WriteLine("I am running for {0} miles", distance);
		}
		
	}
}
