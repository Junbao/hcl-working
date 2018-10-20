// --------------------------------------------------------------------------------------------------------------------
// <copyright file="HelloWorldModule.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines the HelloWorldModule type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.Models
{
	using Microsoft.OneRenderFramework.Core;
	using Microsoft.OneRenderFramework.Core.Attributes;
	using Microsoft.OneRenderFramework.Core.Models;
	using Microsoft.OneRenderFramework.Core.Modules.Models;

	/// <summary>The hello world module.</summary>
	[ModuleDefinition(ModuleName, ModuleName)]
	public class HelloWorldModule : Module
	{
		/// <summary>The module name.</summary>
		public const string ModuleName = "HelloWorld";

		/// <summary>Show/hide description.</summary>
		[Metadata("HideDescription")]
		public bool HideDescription { get; set; }

		/// <summary>Gets or sets the greeting, this is read via the resource files</summary>
		[LocalizedData("helloword_greeting", "Good Morning", "Greeting text for Hello World Module")]
		public string Greeting { get; set; }

		///<value>The CMS provider for ModuleTitle.</value>
		[DataSource("primary")]
		public DataProvider<ModuleTitle> CmsProvider { get; set; }

		// This allows configuration of Mapped DataProvider, any data provider which can map into FoundationCollection can be configured for this DataProvider in RedTiger
		// [DataSource("id", "sourceGroup")]
		// public DataProvider<FoundationCollection> links { get; set; }


		// This property allows a specific DataProvider to be configured in RedTiger
		// [DataSource("DataSourceName", "DataSourceKey")]
		// public CmsDataProvider<FoundationCollection> DataSourceName { get; set; }
	}
}