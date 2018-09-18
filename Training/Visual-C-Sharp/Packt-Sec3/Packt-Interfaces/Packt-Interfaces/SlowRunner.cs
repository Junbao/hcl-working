using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_Interfaces
{
	public class SlowRunner : IRunner
	{
		public void Run(int distance)
		{
			Console.WriteLine("I run slowly but will run for {0} miles", distance);
		}
	}
}
