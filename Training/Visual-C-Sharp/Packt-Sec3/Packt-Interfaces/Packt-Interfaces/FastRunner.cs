using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_Interfaces
{
	class FastRunner : IRunner
	{
		public void Run(int distance)
		{
			Console.WriteLine("I run fast and will run for {0} miles", distance);
		}
	}
}