// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ChatMapper.cs" company="Microsoft Corporation">
//   Copyright Microsoft Corporation, all rights reserved.
// </copyright>
// <summary>
//   Defines the Chat Mapper type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------
namespace Microsoft.OneRenderFramework.Partner.wdgweb.Chat.Mappers
{
    using System;
    using System.Net;
    using System.Text.RegularExpressions;
    using Microsoft.OneRenderFramework.Core.Contexts;
    using Microsoft.OneRenderFramework.Core.ViewModels;
    using Microsoft.OneRenderFramework.Partner.wdgweb.Chat.Models;
    using Microsoft.OneRenderFramework.Partner.wdgweb.Chat.ViewModels;
    /// <summary>The Chat module mapper.</summary>
    public class ChatMapper
    {
        /// <summary>Mapper is the Business Logic Layer for the module, this is where the template and data gets mapped to the View Model.</summary>
        /// <param name="model">The model.</param>
        /// <param name="mappingContext">The module Context.</param>
        /// <returns>The <see cref="ChatViewModel"/>.</returns>
        public static ChatViewModel MapChatModule(ChatModel model, IMappingContext mappingContext)
        {
            #region Set Default Values & Validation

            // Default phone number (hard coded)
            if (string.IsNullOrWhiteSpace(model.PhoneNumber))
            {
                model.PhoneNumber = "1 855-270-0615";
            }
            // Default Phone number info (pulls value from Localization file)
            if (string.IsNullOrWhiteSpace(model.PhoneNumberInfo))
            {
                model.PhoneNumberInfo = model.LOC_Chat_VoicePicker_ButtonPhoneInfo;
            }
            // Default URL for email (hard coded)
            if (string.IsNullOrWhiteSpace(model.URLEMailPage))
            {
                model.URLEMailPage = "https://go.microsoft.com/fwlink/p/?linkid=518644&amp;clcid=0x0409";                
            }
            // Validate URL is alive
            if(ValidateURL(model.URLEMailPage))
            {
                model.isURLEMailPageValid = true;
            }
            else
            {
                model.isURLEMailPageValid = false;
            }

            #endregion

            var viewModel = new ChatViewModel()
            {
                // ViewModel                        <-- maps -->                  Model
                ShowTextPicker                           = model.ShowTextPicker,
                ShowEmailPicker                          = model.ShowEmailPicker,
                ShowVoicePicker                          = model.ShowVoicePicker,
                URLEMailPage                             = model.URLEMailPage,
                PhoneNumber                              = model.PhoneNumber,
                PhoneNumberInfo                          = model.PhoneNumberInfo,
                isURLEMailPageValid                      = model.isURLEMailPageValid,
                LOC_Chat_EmailPicker_AriaLabel           = model.LOC_Chat_EmailPicker_AriaLabel,
                LOC_Chat_EmailPicker_ButtonText          = model.LOC_Chat_EmailPicker_ButtonText,
                LOC_Chat_TextPicker_AriaLabel            = model.LOC_Chat_TextPicker_AriaLabel,
                LOC_Chat_TextPicker_ButtonText           = model.LOC_Chat_TextPicker_ButtonText,
                LOC_Chat_VoicePicker_AriaLabel           = model.LOC_Chat_VoicePicker_AriaLabel,
                LOC_Chat_VoicePicker_ButtonPhoneInfo     = model.LOC_Chat_VoicePicker_ButtonPhoneInfo,
                LOC_Chat_ChatBox_Button_AriaLabel        = model.LOC_Chat_ChatBox_Button_AriaLabel,
                LOC_Chat_ChatBox_Button_DataToggledLabel = model.LOC_Chat_ChatBox_Button_DataToggledLabel,
                LOC_Chat_ChatBox_CloseButton_AriaLabel   = model.LOC_Chat_ChatBox_CloseButton_AriaLabel,
                LOC_Chat_ChatBox_CloseButtonText         = model.LOC_Chat_ChatBox_CloseButtonText
            };

            return viewModel;
        }

        /// <summary>
        /// This method will check a URL to see if it is active or responsive
        /// </summary>
        /// <param name="url">The path to check</param>
        /// <returns>True/False</returns>
        private static bool ValidateURL(string url)
        {
            try
            {
                HttpWebRequest request = HttpWebRequest.Create(url) as HttpWebRequest;
                request.Timeout = 5000; // Set the timeout to 5 seconds to keep the user from waiting too long for the page to load
                request.Method = "HEAD"; // Get only the header information -- no need to download any content (faster)

                using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
                {
                    int statusCode = (int)response.StatusCode;
                    if (statusCode >= 100 && statusCode < 400) //Good requests
                    {
                        return true;
                    }                    
                }
            }
            catch
            {
                return false;
            }
            return false;
        }

        /// <summary>
        /// Validate format of US Phone number WITH area code.
        /// </summary>
        /// <param name="phoneNumber"></param>
        /// <returns>True/False</returns>
        private static bool ValidatePhoneNumber(string phoneNumber)
        {
            var isValidPhoneNumber = Regex.Match(phoneNumber, @"^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$");
            if (isValidPhoneNumber.Success) return true;
            return false;            
        }
    }
}