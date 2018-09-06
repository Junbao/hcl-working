using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_Interfaces
{
	public class Dog
	{
		public string Name { get; set; }
		private IRunner _runner;

		// the constructor
		public Dog(string name, IRunner runner)
		{
			Name = name;
			_runner = runner;
		}

		public void Run(int distance)
		{
			_runner.Run(distance);
		}
	}
}
