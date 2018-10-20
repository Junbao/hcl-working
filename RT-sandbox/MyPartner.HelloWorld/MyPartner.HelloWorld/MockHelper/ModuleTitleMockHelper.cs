// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ModuleTitleMockHelper.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines mocks.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.MyPartner.HelloWorld.Mocks
{
	using Microsoft.OneRenderFramework.Core.Modules.Models;

	/// <summary> The Module title mock helper. </summary>
	public class ModuleTitleMockHelper
	{
		/// <summary>Gets Mock Module title.</summary>
		/// <returns>Module title.</returns>
		public static ModuleTitle GetMockModuleTitle()
		{
			return new ModuleTitle
			{
				Text = "Mock Module Title",
				Description = "Mock Module Title Paragraph"
			};
		}
	}
}
