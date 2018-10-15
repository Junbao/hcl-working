using System;

namespace Ref_Locals_Returns
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Working with Ref locals and Returns - Example 4.3.1");
			Console.WriteLine("");
			Person p = new Person("John", "Smith", 23);
			//2 different ways to call age
			int age = p.GetAge(); //calling it as a variable
			ref int ageRef = ref p.GetAge(); // caling it as a reference and allows use to change value here but not change the original
			
			//Change between the 2 options to see how age is called
			//age++;
			ageRef++;
			Console.WriteLine(p);
			Console.ReadKey();
		}
	}
}
