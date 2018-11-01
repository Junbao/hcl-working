function PopupCenter(pageURL, title, w, h) {
	var left = (screen.width / 2) - (w / 2);
	var top = (screen.height / 2) - (h / 2);
	var targetWin = window.open (pageURL, title, 'toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
	return targetWin;
}
$(document).ready(function () {
	var playerTypeDataName = "player-type";
	var videoUrlDataName = "video-url";

	var pagePopupDataName = "page-popup-url";

	var youtubePlayer = "youtube";
	var html5Player = "html5";
	var channel9Player = "channel9";
	var demomatePlayer = "demomate";
	var onePlayer = "oneplayer"; //One player code related

	var youtubeIframeID = "custom-youtube-iframe";
	var html5IframeID = "custom-html5-iframe";
	var htmlpageIframeID = "custom-htmlpage-iframe";
	var channel9IframeID = "custom-channel9-iframe";
	var demomateIframeID = "custom-demomate-iframe";
	var oneplayerIframeID = "custom_oneplayer_iframe"; //One player code related

	var pageIframeID = "page-frame-iframe";

	var popupContainerClass = 'custom-popup-background';
	var myPlayer;

	var pageContainerClass = 'page-frame-popup-background';

	var youtubeVideoIframe = $('#' + youtubeIframeID);
	var html5VideoIframe = $('#' + html5IframeID);
	var htmlpageIframe = $('#' + htmlpageIframeID);
	var channel9VideoIframe = $('#' + channel9IframeID);
	var demomateVideoIframe = $('#' + demomateIframeID);
	var oneplayerIframe = $('#' + oneplayerIframeID); //One player code related
	var videoDataTitle = "video-title"; //video title
	var pageIframe = $('#' + pageIframeID);
	$('.custom-popup-background .custom-popup-container').attr('role', 'dialog');	
	function openVideo() {
		$('.' + popupContainerClass).css("z-index", "1005");
		$('.' + popupContainerClass).css("opacity", "1");
	}
	function closeVideoFunction() {
		$('.' + popupContainerClass).css("opacity", "0");
		$('.' + pageContainerClass).css("opacity", "0");
		$('html').removeClass('no-scroll');
		setTimeout(function () {
			$('.' + popupContainerClass).css("z-index", "-1")
			$('html').removeClass('no-scroll');
			if (popupContainerClass == "mwf-popup-background") {  //One player code related              
                $("." + popupContainerClass).find(".glyph-cancel").attr("tabindex", "-1");
            }
		}, 500);
		youtubeVideoIframe.removeAttr('src');
		html5VideoIframe.removeAttr('src');
		htmlpageIframe.removeAttr("src");
		channel9VideoIframe.removeAttr('src');
		demomateVideoIframe.removeAttr('src');
		oneplayerIframe.removeAttr("src");//One player code related
        channel9VideoIframe.attr("tabindex", "-1");//One player code related
		setTimeout(function () { $('.' + pageContainerClass).css("z-index", "-1") }, 500);
		pageIframe.removeAttr('src');
		if ($(".currentvideoplaying").attr("data-auto-play") == "true") {
            if ($(".currentvideoplaying").find(".slick-slider").length > 0) {
				$(".currentvideoplaying").find(".slick-slider").slick("slickSetOption", "autoplay", false);
                $(".currentvideoplaying").find(".slick-slider").slick("play");
            }
        }
		$(".currentvideoplaying").removeClass("currentvideoplaying");
		$(".top-parent-element").removeAttr("data-video-playing");
		$("." + popupContainerClass).removeAttr("aria-label");
		/*341271 - Ramesh*/
		$('body .' + popupContainerClass).attr('aria-hidden', 'true');
        $('body .' + pageContainerClass).attr('aria-hidden', 'true');
		$('a.active-video').focus();
		$(".active-video").removeClass("active-video");
	}
	$('.' + popupContainerClass).find('.close-button').on('keydown', function (e) {
		if (e.keyCode == 13 || e.which == 13) {
			e.preventDefault();
			closeVideoFunction();
		}
	});
	$('.' + popupContainerClass).find('.close-button').on('click', closeVideoFunction); //One player code related
	var lan = $("html").attr("lang");
	$(".main-content").on('click', '.open-popup-video , .open-popup-video-black ', function (e) {
		e.preventDefault();
		var videoType = $(this).data(playerTypeDataName).toLowerCase();
		var videotitle = $(this).data(videoDataTitle);
		if (videoType !== onePlayer) { //condition for checking whether player typer is One player 
			popupContainerClass = "custom-popup-background"; //One player code related
			$('.' + popupContainerClass).find('.close-button').show().attr("tabindex", "0").focus();
			$('.' + popupContainerClass).find('span.close-button').attr("tabindex","-1");
			$('body .' + popupContainerClass).attr('aria-hidden', 'false'); /*341271*/
			$(this).parents().closest(".top-parent-element").attr("data-video-playing", "true");

			$(this).parents().closest(".top-parent-element").addClass("currentvideoplaying");
			$(".currentvideoplaying").attr("data-video-playing", "true");
			if ($(".currentvideoplaying").attr("data-auto-play") == "true") {
				$(".currentvideoplaying").find(".slick-slider").slick("slickSetOption", "autoplay", false);

				$(".slick-slider").slick("pause");
			}
			if (videoType === youtubePlayer) {
				var youtubeUrl = $(this).data(videoUrlDataName);
				youtubeVideoIframe.attr('src', "https://www.youtube.com/embed/" + youtubeUrl + "?rel=0&enablejsapi=1&hl=" + lan + "&cc_lang-pref=" + lan + "&cc_load_policy=1 ");
				myPlayer = new YT.Player(youtubeIframeID, {
					events: {
						'onReady': function (event) {
							// event.target.playVideo();
						},
						'onStateChange': function (event) {
							// Video is ended
									
						}
					}
				});

				youtubeVideoIframe.show();
				html5VideoIframe.hide();
				channel9VideoIframe.hide();
				demomateVideoIframe.hide();
				htmlpageIframe.hide();
				openVideo();
			}
			else if (videoType === html5Player) {
				var videoUrl = $(this).data(videoUrlDataName);
				if (videoUrl.indexOf(".html") > 0) {
					htmlpageIframe.attr('src', videoUrl);
					youtubeVideoIframe.hide();
					html5VideoIframe.hide();
					channel9VideoIframe.hide();
					demomateVideoIframe.hide();
					htmlpageIframe.show();
				}
				else {
					html5VideoIframe.attr('src', videoUrl);
					htmlpageIframe.hide();
					youtubeVideoIframe.hide();
					html5VideoIframe.show();
					channel9VideoIframe.hide();
					demomateVideoIframe.hide();
				}
			}
			else if (videoType === channel9Player) {
				videoUrl = $(this).data(videoUrlDataName);
				channel9VideoIframe.attr('src', videoUrl + "/player");
				channel9VideoIframe.attr("tabindex", "0");
				youtubeVideoIframe.hide();
				html5VideoIframe.hide();
				channel9VideoIframe.show();
				demomateVideoIframe.hide();
				openVideo();
			}
			else if (videoType === demomatePlayer) {
				videoUrl = $(this).data(videoUrlDataName);
				demomateVideoIframe.attr('src', videoUrl);

				youtubeVideoIframe.hide();
				html5VideoIframe.hide();
				channel9VideoIframe.hide();
				demomateVideoIframe.show();

			}
			$('.' + popupContainerClass +" .custom-popup-container").attr('aria-label', videotitle);	
            $('.' + popupContainerClass + '  iframe:visible').attr('title', videotitle);
            $(".custom-popup-container").attr("tabindex", '0');
            $(".custom-popup-container").focus();
			
			openVideo();
			
		}
		else if (videoType === onePlayer) {
			//**One Player 2nd approach using Iframe passing UUID(video id).**//     
			     
			// popupContainerClass = "mwf-popup-background";
			// $('.custom-popup-background').find('.close-button').attr("tabindex", "-1").hide();;
            // $('body .' + popupContainerClass).attr('aria-hidden', 'false'); /*341271*/
            // var videoUUID = $(this).attr("data-video-url");
            // var oneVideoIframeSrc = "https://www.microsoft.com/" + lan + "/videoplayer/embed/" + videoUUID + "?autoplay=false";;
            // oneplayerIframe.attr('src', oneVideoIframeSrc);
            // oneplayerIframe.css("width", "100%");
            // oneplayerIframe.css("height", "100%");
             htmlpageIframe.hide();
             youtubeVideoIframe.hide();
             html5VideoIframe.hide();
             channel9VideoIframe.hide();
             demomateVideoIframe.hide();
            // oneplayerIframe.show();
            // $("." + popupContainerClass).find("iframe").attr("tabindex", '0');
            // $("." + popupContainerClass).find(".glyph-cancel").attr("tabindex", '0').on('click keydown', function (e) {
            //     if (e.keyCode == 13 || e.keyCode == 27) {
			// 		e.preventDefault();
            //         closeVideoFunction();
            //     }
            // });
			// $('.' + popupContainerClass + '  iframe').attr('title', videotitle);
            // $('.' + popupContainerClass+ ' .one-player-popup-container').focus().attr('aria-label', videotitle);
            // $('.' + popupContainerClass).on('click', closeVideoFunction);
			// //One player code related
			
			_lightboxHide();
			
        }
		else {
			console.log("Error: invalid video player type");
			youtubeVideoIframe.hide();
			html5VideoIframe.hide();
			channel9VideoIframe.hide();
			demomateVideoIframe.hide();
			htmlpageIframe.hide();
			oneplayerIframe.hide(); //One player code related
		}
		
		//openVideo();
	});
	$('.' + popupContainerClass).on('click', closeVideoFunction);
	$('.custom-popup-container').on('click', function (event) {
		event.stopPropagation();
	});
	// $('.' + popupContainerClass).find('.close-button').on('click',function(e){
	// 	e.preventDefault(); 
	// 	closeVideoFunction()});
	$(document).on('keyup', function (evt) {
		if (evt.keyCode == 27) {
			closeVideoFunction();
		}

	});	
	
	/*functionality for page popup where the content is just a page instead of a video*/
	$(".main-content").on('click', '.open-page-popup', function (e) {
		e.preventDefault();

		var frameURL = $(this).data(pagePopupDataName);
		pageIframe.attr("src", frameURL);
		pageIframe.show();
		$('.' + pageContainerClass).css("z-index", "1005");
		$('.' + pageContainerClass).css("opacity", "1");
	});
	$('.' + pageContainerClass).on('click', closeVideoFunction);
	$('.' + pageContainerClass).find('.close-button').on('click', closeVideoFunction);
	
	/* start: marketo form auto close fuctionliaty*/
	window.addEventListener("message", receiveMessage, false);

	function receiveMessage(event) {
		if (event.data === "success") { // string from external page
			setTimeout(function () {
				closeVideoFunction();
			}, 3000);
		}
	}
	/* End: marketo form auto close fuctionliaty*/


});


$(document).ready(function () {
	try {
		var title = $(document).attr('title').split("|")[0];/**Twitter bug # 342881Fix */
		$('.popup-link').each(function () {
			var textContent = $(this).siblings('.popup-text').detach();
			var popupElement = "<div class='popup-element'><div><p>" + textContent.html() + "</p><span class='close-button'></span></div></div>";
			$(this).after(popupElement);
			$(this).on('click', function (e) {
				e.preventDefault();
				$(this).siblings('.popup-element').addClass('show-popup');
			});
		});

		$('.popup-element').on('click', function () {
			$('.popup-element').removeClass('show-popup');
		});
		$('.popup-element').children('div').on('click', function (event) {
			event.stopPropagation();
		});
		$('.popup-element').find(".close-button").on('click', function () {
			$('.popup-element').removeClass('show-popup');
		});
		$(document).on('keyup', function (evt) {
			if (evt.keyCode == 27) {
				$('.popup-element').removeClass('show-popup');
			}
		});
		// Oneplayer MWF popup related
        $(".glyph-cancel,.dummy-link-mwfBottom").on("focus", function (e) {

            if ($(this).hasClass("glyph-cancel"))
                $(".dummy-link-mwfBottom").attr("tabindex", "0");
            if ($(this).hasClass("dummy-link-mwfBottom")) {
                $(".glyph-cancel").attr("tabindex", "0").focus();
			}
        });
		$(".glyph-cancel").focusout(function () {
            $(".one-player-popup-container").attr("tabindex", "0");
        });
        $(".glyph-cancel,.one-player-popup-container,.dummy-link-mwfBottom,.dummy-link,.close-button").on("keydown", function (e) {
            if (e.shiftKey && e.keyCode == 9) {
                if ($(this).hasClass("glyph-cancel"))
                    $(".one-player-popup-container").find("iframe").attr("tabindex", "0").focus();
                if ($(this).hasClass("one-player-popup-container"))
                    $(".glyph-cancel").attr("tabindex", "0").focus();
				if ($(this).hasClass("close-button"))
					$(".").find("iframe").attr("tabindex", "0").focus();
				//if($(this).hasClass("dummy-link"))	
            }
            else if (e.keyCode == 9) {
                if ($(this).hasClass("glyph-cancel"))
                    $(".one-player-popup-container").find("iframe").attr("tabindex", "0").focus();
            }
        });
		//One player code related
	}
	catch (err) { }
	
	/* facebook*/


	$(".facebook").click(function (e) {
		var popupWidth = $(".custom-popup-video-container").find("video").width();
		var popupHeight = $(".custom-popup-video-container").find("video").height();
		e.preventDefault();
		/**Twitter bug # 342881Fix */
		if ($(".custom-popup-video-container").find("iframe").is(':visible')) {
			var iframeUrl = $(".custom-popup-video-container").find("iframe:visible").attr("src").split("?")[0];
			var encodedUrl = encodeURIComponent(iframeUrl);
			var fbFormattedUrl = "https://www.facebook.com/dialog/feed?app_id=114189562003069&link=" + encodedUrl + "&redirect_uri=http%3A%2F%2Fwww.facebook.com";
			PopupCenter(fbFormattedUrl, "Post to Facebook", popupWidth, popupHeight);
		}
		else {
			var VideoUrl = $(".custom-popup-video-container").find("video:visible").attr("src").split("?")[0];
			var encodedUrl1 = encodeURIComponent(VideoUrl);
			var fbFormattedUrl1 = "https://www.facebook.com/dialog/feed?app_id=114189562003069&link=" + encodedUrl1 + "&redirect_uri=http%3A%2F%2Fwww.facebook.com";
			PopupCenter(fbFormattedUrl1, "Post to Facebook", popupWidth, popupHeight);
		}
		$(this).attr("href", "");
		$(this).target = "_blank";
		//$(this).attr("href",fbFormattedUrl);
		PopupCenter(fbFormattedUrl, "Post to Facebook", popupWidth, popupHeight);
		//window.open(fbFormattedUrl, "Post to Facebook", "width=944,height=236");
		
	});

	$(".twitter").click(function (e) {
		var popupWidth = $(".custom-popup-video-container").find("video").width();
		var popupHeight = $(".custom-popup-video-container").find("video").height();
		e.preventDefault();
		/**Twitter bug # 342881Fix */
		if ($(".custom-popup-video-container").find("iframe").is(':visible')) {
			var iframeUrl = $(".custom-popup-video-container").find("iframe:visible").attr("src").split("?")[0];
			iframeUrl = iframeUrl.replace("player#autoplay", "");
			iframeUrl = iframeUrl.replace("youtube.com/embed/", "youtube.com/watch/");
			iframeUrl = iframeUrl.replace("youtube-nocookie.com/embed/", "youtube.com/watch/");
			var encodedUrl = encodeURIComponent(iframeUrl);
			var twitterFormattedUrl = "https://twitter.com/intent/tweet?text=" + title + encodedUrl;
			PopupCenter(twitterFormattedUrl, "Post to Facebook", popupWidth, popupHeight);
		}
		else {
			var VideoUrl = $(".custom-popup-video-container").find("video:visible").attr("src").split("?")[0];
			var encodedUrl1 = encodeURIComponent(VideoUrl);
			var twitterFormattedUrl1 = "https://twitter.com/intent/tweet?text=" + title + encodedUrl1;
			PopupCenter(twitterFormattedUrl1, "Post to Facebook", popupWidth, popupHeight);
		}	
		
		/**Twitter bug # 342881Fix */
		$(this).attr("href", "");
		$(this).target = "_blank";
		//$(this).attr("href",fbFormattedUrl);	
		
		//window.open(twitterFormattedUrl, "Post to Facebook", "width=944,height=236");
		
	});
});


var _lightboxHide = function () {
    var that, iframe, iframeSrc, dialog, dialogId, videoURL, dialogsHideEventSubscription = [];
    try {
        $(document).on("click", "[data-js-dialog-show*='default-lightbox']", function (event) {
            $("#default-lightbox").attr("aria-hidden", false);
            that = $(this);
            dialogId = "#" + that.attr("data-js-dialog-show");
            dialog = document.querySelector(dialogId);
            iframe = dialog.getElementsByTagName("div")[5];
            if (that.attr("data-video-title")) {
             //   $("#default-lightbox").attr("aria-label", that.attr("data-video-title"));
				$('.c-dialog [role="dialog"]').attr("aria-label", that.attr("data-video-title"));
            }

            $('.c-dialog [role="dialog"]').attr('tabindex','0').focus();

            videoURL = "https://www.microsoft.com/en-us/videoplayer/embed/" + that.attr("data-video-url");

            iframe.setAttribute("video-Id", videoURL);
            //$("#default-lightbox .glyph-cancel").focus(); //Accessibility purpose
            if (!!dialog && dialogsHideEventSubscription.indexOf(dialogId) == -1) {
                try {
                    dialog.mwfInstances.Dialog.subscribe({
                        onHidden: function () {
                            iframeSrc = dialog.getElementsByTagName("iframe")[0];
                            iframeSrc.setAttribute("src", "");
                        }
                    });
                    dialogsHideEventSubscription.push(dialogId);
                }
                catch (e) {

                }
            }

            $(".InlinePlayerAPI").each(function () {
                var playerData = {
                    options: {
                        autoplay: false,
                        mute: false,
                        loop: false,
                        market: $('html').attr('lang'),
                        useAdaptive: false,
                        playFullScreen: false
                    },
                    metadata: {
                        videoId: returnVideoId($(this).attr('video-Id'))
                    }
                };

                MsOnePlayer.render(
                    $(this).attr('id'), // id of the container div
                    playerData, // player data            
                    function (player) { // onPlayerReady callback function which returns back player instance on which APIs can be called
                        player.addPlayerEventListener(function (e) {
                            //	console.log('player event: ' + JSON.stringify(e))
                        });
                    }
                    );

                function returnVideoId(url) {
                    var getAnArray = url.split('/');
                    return getAnArray[getAnArray.length - 1];
                }
            });

        });
    }
    catch (e) {

    }
}

$(document).ready(function () {
    $(".InlinePlayerAPIinline").each(function () {
        var playerData = {
            options: {
                autoplay: true,
                mute: true,
                loop: true,
                market: $('html').attr('lang'),
                useAdaptive: true,
                controls: false,
                playpausetrigger: true,
                playFullScreen: false
            },
            metadata: {
                videoId: returnVideoId($(this).attr('video-Id'))
            }
        };
        MsOnePlayer.render(
            $(this).attr('id'), // id of the container div
            playerData, // player data            
            function (player) { // onPlayerReady callback function which returns back player instance on which APIs can be called
                player.addPlayerEventListener(function (e) {
                    //    console.log('player event: ' + JSON.stringify(e))
                });
            }
            );

        function returnVideoId(url) {
            var getAnArray = url.split('/');
            return getAnArray[getAnArray.length - 1];
        }
    });
});
$(document).ready(function () {
        _lightboxHide();

    $(".c-dialog button[data-js-dialog-hide]").on("click", function (e) {
        _lightboxHide();
        $("#default-lightbox").find("iframe").attr("src", "");
        $("#default-lightbox").attr('aria-hidden', 'true');
		$('html').removeClass('no-scroll')
    });

    $(".c-dialog.f-lightbox [role='presentation']").on("click", function (e) {
        _lightboxHide();
    });

    $("div[data-js-dialog-hide]").click(function () {
        try {
            var currentVideoId = "";
            currentVideoId = $("#" + $(this).parents(".c-dialog.f-lightbox").attr("id"));
            var ariaHidden = currentVideoId.attr("aria-hidden");
            if (ariaHidden !== false) {
                var popupVideoPlayerSrc = currentVideoId.find("iframe").attr("src");
                if (popupVideoPlayerSrc.length > 0) {
                    if (popupVideoPlayerSrc.toLowerCase().indexOf("?autoplay=1") >= 0 || popupVideoPlayerSrc.toLowerCase().indexOf("&autoplay=1") >= 0) {
                        var startindex = popupVideoPlayerSrc.toLowerCase().indexOf("?autoplay=1")
                        var temp = popupVideoPlayerSrc.substring(0, startindex)
                        popupVideoPlayerSrc = temp;
                    }
                    currentVideoId.find("iframe").attr("src", "");
                    currentVideoId.find("iframe").attr("src", popupVideoPlayerSrc);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $(".c-dialog button[data-js-dialog-hide]").click();
        }
    });
	 $('.c-dialog.f-lightbox>[role=presentation]').click(function(){
		   $(".c-dialog button[data-js-dialog-hide]").click();
	 });
    $("button[data-js-dialog-hide]").on('keydown', function (e) {
        if (e.keyCode == 9) {           
                $("button[data-js-dialog-hide]")[0].focus();          
        }
        if(e.shiftKey && e.keyCode==9){
            $(".dummy-lnk-tp").focus();
        }
    });
    
    $('.dummy-lnk').on('focus',function(){
        $("button[data-js-dialog-hide]").focus();        
    });
    
});
 