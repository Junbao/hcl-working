using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DependencyInjection.Models;

namespace DependencyInjection.Services
{
	public class EntertainmentService : IEntertainmentService
	{
		public IEnumerable<Game> GetGames()
		{
			return new List<Game>()
			{
				new Game() { Title = "The Witcher", Genre = "RPG" },
				new Game() { Title = "Need for Speed", Genre = "Racing" },
				new Game() { Title = "Crysis", Genre = "FPS" }
			};
		}

		public IEnumerable<Movie> GetMovies()
		{
			return new List<Movie>()
			{
				new Movie() { Title = "Star Wars", Ranking = 1 },
				new Movie() { Title = "Inception", Ranking = 2 },
				new Movie() { Title = "Ghost In A Shell", Ranking = 3 }
			};
		}
	}
}