﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
//This is from the namespace of the new service FooService.cs
using FirstWebApp.Services;
using System.Text;

namespace FirstWebApp
{
	public class Startup
	{
		//1. Constructor
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		//4.Basic Configuration
		public IConfiguration Configuration { get; }

		//2. ConfigureServices method
		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.Configure<CookiePolicyOptions>(options =>
			{
				// This lambda determines whether user consent for non-essential cookies is needed for a given request.
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});

			services.AddTransient<FooService>();// registering our new service
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);


		}

		//3. Configure
		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, FooService fooService)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
				app.UseHsts();
			}

			app.UseHttpsRedirection();
			app.UseStaticFiles(); // css, javascript, images, etc that reside in directory
			app.UseCookiePolicy();

			app.Run(async (context) =>
			{
				//throw new Exception();
				var names = fooService.GetNames();
				StringBuilder builder = new StringBuilder();
				foreach (var name in names)
				{
					if (Configuration.GetValue<bool>("CapitalizeWords"))
					{
						builder.Append(name.ToUpper() + " ");
					}
					else
					{
						builder.Append(name + " ");
					}
				}
				await context.Response.WriteAsync(builder.ToString());
			});

			//app.UseMvc(routes =>
			//{
			//	routes.MapRoute(
			//		name: "default",
			//		template: "{controller=Home}/{action=Index}/{id?}");
			//});
		}
	}
}
