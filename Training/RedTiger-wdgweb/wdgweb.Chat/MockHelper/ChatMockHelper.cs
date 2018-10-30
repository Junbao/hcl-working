// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ChatMockHelper.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines mocks.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.wdgweb.Chat.Mocks
{
    //TODO: SD: I don't think we will need a MOCK for this module
    using Microsoft.OneRenderFramework.Core.Modules.Models;

    /// <summary> The Chat mock helper. </summary>
    public class ChatMockHelper
    {
        /// <summary>Gets Mock Module title.</summary>
        /// <returns>Module title.</returns>
        public static ModuleTitle GetMockChat()
        {
            return new ModuleTitle
            {
                Text = "Mock Module Title",
                Description = "Mock Module Title Paragraph"
            };
        }
    }
}