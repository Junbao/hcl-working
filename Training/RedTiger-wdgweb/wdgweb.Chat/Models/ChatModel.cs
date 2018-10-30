// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ChatModel.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines the HelloWorldModule type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------
namespace Microsoft.OneRenderFramework.Partner.wdgweb.Chat.Models
{
    using Microsoft.OneRenderFramework.Core;
    using Microsoft.OneRenderFramework.Core.Attributes;
    using Microsoft.OneRenderFramework.Core.Models;
    using Microsoft.OneRenderFramework.Core.Modules.Models;
    /// <summary>The Chat model.</summary>
    [ModuleDefinition(MODULENAME, MODULENAME)]
    public class ChatModel : Module
    {
        /// <summary>The module name.</summary>
        public const string MODULENAME = "Chat";

        #region Localization Fields -----------------------

        [LocalizedData("LOC_Chat_TextPicker_ButtonText", "Chat with sales", "Text for button")]
        public string LOC_Chat_TextPicker_ButtonText { get; set; }

        [LocalizedData("LOC_Chat_TextPicker_AriaLabel", "by sending this chat request", "Text for accessibility")]
        public string LOC_Chat_TextPicker_AriaLabel { get; set; }

        [LocalizedData("LOC_Chat_EmailPicker_ButtonText", "Contact Us", "Text for button")]
        public string LOC_Chat_EmailPicker_ButtonText { get; set; }

        [LocalizedData("LOC_Chat_EmailPicker_AriaLabel", "by filling out the form on the next page", "Text for accessibility")]
        public string LOC_Chat_EmailPicker_AriaLabel { get; set; }

        [LocalizedData("LOC_Chat_VoicePicker_AriaLabel", "call or add to Skype now", "Text for button")]
        public string LOC_Chat_VoicePicker_AriaLabel { get; set; }

        [LocalizedData("LOC_Chat_VoicePicker_ButtonPhoneInfo", "Available M-F from 6:00AM to 6:00PM", "Text for button")]
        public string LOC_Chat_VoicePicker_ButtonPhoneInfo { get; set; }

        [LocalizedData("LOC_Chat_ChatBox_Button_AriaLabel", "Collapse the Chat and Contact Sales Widget", "Text for button")]
        public string LOC_Chat_ChatBox_Button_AriaLabel { get; set; }

        [LocalizedData("LOC_Chat_ChatBox_Button_DataToggledLabel", "Expand the Chat and Contact Sales Widget to call Office 365 Sales", "Text for button")]
        public string LOC_Chat_ChatBox_Button_DataToggledLabel { get; set; }

        [LocalizedData("LOC_Chat_ChatBox_CloseButton_AriaLabel", "Collapse the Chat and Contact Sales Widget", "Text for button")]
        public string LOC_Chat_ChatBox_CloseButton_AriaLabel { get; set; }

        [LocalizedData("LOC_Chat_ChatBox_CloseButtonText", "Close", "Text for button")]
        public string LOC_Chat_ChatBox_CloseButtonText { get; set; }
        #endregion

        /// <summary> Show/Hide the Chat picker. </summary>
        [Metadata("ShowTextPicker")]
        public bool ShowTextPicker { get; set; }

        /// <summary> Show/Hide the Email picker. </summary>
        [Metadata("ShowEmailPicker")]
        public bool ShowEmailPicker { get; set; }

        /// <summary> Show/Hide Voice picker. </summary>
        [Metadata("ShowVoicePicker")]
        public bool ShowVoicePicker { get; set; }

        /// <summary> URL for the Contact Us email page. </summary>
        [Metadata("URLEMailPage")]
        public string URLEMailPage { get; set; }

        /// <summary> 
        /// Phone Number to be called.
        /// Default value = 1 855-270-0615.
        /// Override via Authoring.
        /// </summary>
        [Metadata("PhoneNumber")]
        public string PhoneNumber { get; set; }

        /// <summary> 
        /// SubText for Phone Number information. 
        /// Default value taken from Localization file.
        /// Override via Authoring.
        /// </summary>
        [Metadata("PhoneNumberInfo")]
        public string PhoneNumberInfo { get; set; }

        /// <summary> Flag used for validation. </summary>
        public bool isURLEMailPageValid { get; set; }
    }
}