using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_Enums
{
	// enums re Types so they use skull case - first letter is capitalized
	public enum MovieGenre
	{
		Action,
		Animai,
		Comedy,
		Drama,
		SciFi,
		Travel
	}
	public class Movies
	{
		public string Title { get; set; }
		public int Year { get; set; }
		public MovieGenre Genre { get; set; }


		public Movies(string title, int year, MovieGenre genre)
		{
			Title = title;
			Year = year;
			Genre = genre;
		}
	}
}
