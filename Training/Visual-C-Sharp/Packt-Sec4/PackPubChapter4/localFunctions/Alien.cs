using System;
using System.Collections.Generic;
using System.Text;

namespace localFunctions
{
	public class Alien
	{
		public string Name { get; set; }
		public string Species { get; set; }
		public string HealthPoints { get; set; }

		public void Move()
		{

		}
		public void Attack()
		{

		}
		public void Run()
		{

		}
		public void Defend()
		{

		}
		public void Decide()
		{
			Random r = new Random();
			int num = r.Next(1, 10);
			if (isEven(num))
			{
				//Even number ->engage
				num = r.Next(1, 10);
				if (isEven(num))
				{
					Attack();
				}
				else
				{
					Defend();
				}
			}
			else
			{
				//Odd number -? run
				Run();
			}

			// instead of running a odd or even script each time to determine the next move - we write a function that can only be used inside this method. in this case it is a true/ false if even or not
			bool isEven(int value)
			{
				return (value % 2 == 0);
			}
		}
	}
}
