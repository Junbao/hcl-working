// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Initialization.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld
{
	using System.Collections.Generic;
	using Microsoft.OneRenderFramework.Core;
	using Microsoft.OneRenderFramework.Core.Modules.Models;
	using Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.Mappers;
	using Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.Mocks;
	using Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.Models;

	/// <summary>The initialization.</summary>
	public class Initialization : PartnerInitializationBase
	{
		/// <summary>The Onerf Partner site name.</summary>
		public const string SiteName = "MyPartner.HelloWorld";

		/// <summary>Generic initialize method for registering mappers and getting access to the configuration at initialization</summary>
		/// <param name="moduleInitializationParams">The module initialization parameters.</param>
		public override void Initialize(IInitializationParameters moduleInitializationParams)
		{
		}

		/// <summary>Registers the module bindings for the current library</summary>
		/// <param name="moduleBinder">The module binder.</param>
		/// <returns>The <see cref="IEnumerable{T}"/>.</returns>
		public override IEnumerable<ModuleBinding> GetModuleBindings(IModuleBinder moduleBinder)
		{
			return new[]
					   {
						   moduleBinder.RegisterModule<HelloWorldModule>(
							   HelloWorldModule.ModuleName,
							   HelloWorldModuleMapper.MapHelloWorldModule)
					   };
		}

		/// <summary>
		/// Registers the mocks.
		/// </summary>
		/// <param name="mockContainer">The mock container.</param>
		public override void RegisterMocks(IDependencyContainer mockContainer)
		{
			mockContainer.RegisterInstance<ModuleTitle>("Sample-ModuleTitle", ModuleTitleMockHelper.GetMockModuleTitle());
		}
	}
}