// --------------------------------------------------------------------------------------------------------------------
// <copyright file="HelloWorldModuleMapper.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines the HelloWorldModuleMapper type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.Mappers
{
	using Microsoft.OneRenderFramework.Core.Contexts;
	using Microsoft.OneRenderFramework.Core.ViewModels;
	using Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.Models;
	using Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.ViewModels;

	/// <summary>The hello world module mapper.</summary>
	internal static class HelloWorldModuleMapper
	{
		/// <summary>Mapper is the Business Logic Layer for the module, this is where the template and data gets mapped to the View Model.</summary>
		/// <param name="model">The model.</param>
		/// <param name="moduleContext">The module Context.</param>
		/// <returns>The <see cref="ModuleViewModel"/>.</returns>
		internal static ModuleViewModel MapHelloWorldModule(HelloWorldModule model, IMappingContext moduleContext)
		{
			var viewModel = new HelloWorldModuleViewModel
			{
				HideDescription = model.HideDescription,
				Greeting = model.Greeting,
				Text = model.CmsProvider?.Data?.Text,
				Description = model.CmsProvider?.Data?.Description
			};

			return viewModel;
		}
	}
}