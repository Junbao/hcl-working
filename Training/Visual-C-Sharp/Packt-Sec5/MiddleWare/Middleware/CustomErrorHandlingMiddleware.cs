using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiddleWare.Middleware
{
	public class CustomErrorHandlingMiddleware
	{
		private readonly RequestDelgate _next;

		public CustomErrorHandlingMiddleware(RequestDelegate next)
		{
			_next = next;
		}
		public async Task Invoke(HttpContext context)
		{
			try
			{
				await _next(context);
			}
			catch(Exception e)
			{
				await context.Response.WriteAsync("Ooooops");

	}
}