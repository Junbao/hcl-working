using DependencyInjection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DependencyInjection.Services
{
	public interface IEntertainmentService
	{
		IEnumerable<Game> GetGames();
		IEnumerable<Movie> GetMovies();
	}
}