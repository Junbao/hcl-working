using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RoutingViews.Models;

namespace RoutingViews.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Games()
        {
			ViewData["games"] = new List<Game>()
			{
				new Game() { Title = "The Witcher", Genre = "RPG" },
				new Game() { Title = "Need for Speed", Genre = "Racing" },
				new Game() { Title = "Crysis", Genre = "FPS" },

			};
            return View();
        }
		// There are a couple of ways to create the list the following could be the same format as the games list.  Just a different option.
		public IActionResult Movies()
		{
			var movies = new List<Movie>()
			{
				new Movie() { Title = "Star Wars", Ranking = 1 },
				new Movie() { Title = "Inception", Ranking = 2 },
				new Movie() { Title = "Ghost in a Shell", Ranking = 3 },

			};
			return View(movies);
		}
	}
}