// --------------------------------------------------------------------------------------------------------------------
// <copyright file="HelloWorldModuleViewModel.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines the HelloWorldModuleViewModel type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.ViewModels
{
	using System.Collections.Generic;

	using Microsoft.OneRenderFramework.Core.ViewModels;

	public class HelloWorldModuleViewModel : ModuleViewModel
	{
		public HelloWorldModuleViewModel()
		{
			this.JavaScriptStatic = "MyPartner.HelloWorld/modules/helloworld";
			this.CssStatic = "MyPartner.HelloWorld/modules/helloworld";
			this.View = "MyPartner.HelloWorld/modules/helloworld";

			// TODO: Add Required MWF components here for CSS and JS
			//  this.RequiredComponents.AddRange(new[] { ComponentNames.Image });
		}

		/// <summary>Show/hide description.</summary>
		public bool HideDescription { get; set; }

		/// <summary>Gets or sets the greeting.</summary>
		public string Greeting { get; set; }

		/// <summary>Module text.</summary>
		public string Text { get; set; }

		/// <summary>Module description.</summary>
		public string Description { get; set; }
	}
}