using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise1
{
	class Program
	{
		static void Main(string[] args)
		{
			string usersName;
			int usersAge;
			string friendsName;
			int friendsAge;

			Console.WriteLine("Enter your name: ");
			usersName = Console.ReadLine();
			Console.WriteLine("Enter your age: ");
			usersAge = Convert.ToInt32(Console.ReadLine());

			Console.WriteLine("Enter your friends name: ");
			friendsName = Console.ReadLine();
			Console.WriteLine("Enter your friends age: ");
			friendsAge = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine();

			Console.WriteLine("There are " + (usersAge + friendsAge) + " years between you");

			Console.ReadKey();


		}
	}
}
