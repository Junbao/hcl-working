using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DependencyInjection.Models;
using DependencyInjection.Services;

namespace DependencyInjection.Controllers
{
	[Route("mypages")]
	public class PagesController : Controller
	{
		private IEntertainmentService _service;

		//The service will be injected to the constructor
		public PagesController(IEntertainmentService service)
		{
			_service = service;
		}

		[Route("mygames", Name = "MyGames")]
		public IActionResult Games()
		{
			ViewData["games"] = _service.GetGames();
			return View();
		}

		[Route("mymovies", Name = "MyMovies")]
		public IActionResult Movies()
		{
			var movies = _service.GetMovies();
			return View(movies);
		}
	}
}