// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Initialization.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.wdgweb.Chat
{
    using System.Collections.Generic;
    using Microsoft.OneRenderFramework.Core;
    using Microsoft.OneRenderFramework.Core.Modules.Models;
    using Microsoft.OneRenderFramework.Partner.wdgweb.Chat.Mappers;
    using Microsoft.OneRenderFramework.Partner.wdgweb.Chat.Mocks;
    using Microsoft.OneRenderFramework.Partner.wdgweb.Chat.Models;

    /// <summary>The initialization.</summary>
    public class Initialization : PartnerInitializationBase
    {
        /// <summary>The Onerf Partner site name.</summary>
        public const string SiteName = "wdgweb.Chat";

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
                           moduleBinder.RegisterModule<ChatModel>(
                               ChatModel.MODULENAME,
                               ChatMapper.MapChatModule)
                       };
        }

        /// <summary>
        /// Registers the mocks.
        /// </summary>
        /// <param name="mockContainer">The mock container.</param>
        public override void RegisterMocks(IDependencyContainer mockContainer)
        {
            //TODO: sd - Do we even need a MOCK?
            //mockContainer.RegisterInstance<ModuleTitle>("Sample-ModuleTitle", ChatMockHelper.GetMockChat());
        }
    }
}