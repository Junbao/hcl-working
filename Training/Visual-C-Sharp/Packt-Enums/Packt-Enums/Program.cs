using System;

namespace Packt_Enums
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Creating Enums (enumerations)");
			Console.WriteLine();

			Movies movie = new Movies("Star Wars", 1977, MovieGenre.SciFi);
			printMovieGenre(movie);

			Console.ReadKey();
		}

		private static void printMovieGenre(Movies movie)
		{
			switch (movie.Genre)
			{
				case MovieGenre.Action:
					break;
				case MovieGenre.Animai:
					break;
				case MovieGenre.Comedy:
					break;
				case MovieGenre.Drama:
					break;
				case MovieGenre.SciFi:
					break;
				case MovieGenre.Travel:
					break;
				default:
					break;
			}
		}
	}
}
