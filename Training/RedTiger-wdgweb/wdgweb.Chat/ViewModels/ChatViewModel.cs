// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ChatViewModel.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines the Chat ViewModel type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Microsoft.OneRenderFramework.Partner.wdgweb.Chat.ViewModels
{
    using System.Collections.Generic;
    using Microsoft.OneRenderFramework.Core.Attributes;
    using Microsoft.OneRenderFramework.Core.Contexts;
    using Microsoft.OneRenderFramework.Core.ViewModels;

    public class ChatViewModel : ModuleViewModel
    {
        public ChatViewModel()
        {
            const string CONTENTPATH = "wdgweb.Chat/modules/Chat";
            this.JavaScriptStatic = CONTENTPATH;
            this.CssStatic = CONTENTPATH;
            this.View = CONTENTPATH;

            //TODO: SD - Below is original way, not sure if we need this at all.
            //TODO: SortedDictionary - Check out what "rtchat" is
            ////const string CHATPATH = "wdgweb.Chat/modules/";
            ////this.CssStatics.Add(CHATPATH+"Chat");
            ////this.JavaScriptStatics.Add(CHATPATH+"Chat");
            ////var isChatDebug = context.RequestContext.HttpRequest.QueryString["rtchat"]?.Length > 0;
            ////if (isChatDebug)
            ////{
            ////    this.JavaScriptStatics.Add(CHATPATH+ "ChatText");
            ////    //TODO: This was originally called "chat" but would interfere with the module name "Chat"
            ////    // So we need to verify how this gets processed.
            ////}
            ////this.JavaScriptStatics.Add(CHATPATH+"ContactSales");
            ////this.View = CHATPATH + "ChatView";

            // TODO: Add Required MWF components here for CSS and JS
            //  this.RequiredComponents.AddRange(new[] { ComponentNames.Image });
        }

        #region Localization Fields -----------------------

        /// <summary>
        /// Localization for Button Text
        /// </summary>
        public string LOC_Chat_TextPicker_ButtonText { get; set; }

        /// <summary>
        /// Localization for Button Accessibility Text
        /// </summary>
        public string LOC_Chat_TextPicker_AriaLabel { get; set; }

        /// <summary>
        /// Localization for Button Text
        /// </summary>
        public string LOC_Chat_EmailPicker_ButtonText { get; set; }

        /// <summary>
        /// Localization for Button Accessibility Text
        /// </summary>
        public string LOC_Chat_EmailPicker_AriaLabel { get; set; }

        /// <summary>
        /// Localization for Button Accessibility Text
        /// </summary>
        public string LOC_Chat_VoicePicker_AriaLabel { get; set; }

        /// <summary>
        /// Localization for Button Text
        /// </summary>
        public string LOC_Chat_VoicePicker_ButtonPhoneInfo { get; set; }

        /// <summary>
        /// Localization for ChatBox aria-label
        /// </summary>
        public string LOC_Chat_ChatBox_Button_AriaLabel { get; set; }

        /// <summary>
        /// Localization for ChatBox data-toggled-label
        /// </summary>
        public string LOC_Chat_ChatBox_Button_DataToggledLabel { get; set; }

        /// <summary>
        /// Localization for ChatBox data-toggled-label
        /// </summary>
        public string LOC_Chat_ChatBox_CloseButton_AriaLabel { get; set; }

        /// <summary>
        /// Localization for ChatBox data-toggled-label
        /// </summary>
        public string LOC_Chat_ChatBox_CloseButtonText { get; set; }

        #endregion

        /// <summary> Show/Hide the Chat picker </summary>
        [Metadata("ShowTextPicker")]
        public bool ShowTextPicker { get; set; }

        /// <summary> Show/Hide the Email picker </summary>
        [Metadata("ShowEmailPicker")]
        public bool ShowEmailPicker { get; set; }

        /// <summary> Show Voice picker <summary>
        [Metadata("ShowTelePicker")]
        public bool ShowVoicePicker { get; set; }

        /// <summary> URL for the Contact Us email page. </summary>
        [Metadata("URLEMailPage")]
        public string URLEMailPage { get; set; }

        /// <summary> Phone Number. </summary>
        [Metadata("PhoneNumber")]
        public string PhoneNumber { get; set; }

        /// <summary> SubText for Phone Number information. </summary>
        [Metadata("PhoneNumberInfo")]
        public string PhoneNumberInfo { get; set; }

        /// <summary> Flag used for validation. </summary>
        public bool isURLEMailPageValid { get; set; }
    }
}