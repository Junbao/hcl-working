/*Bug 3266 Start */
$(document).ready(function () {
    $('a.c-back-to-top div').removeAttr('aria-label');
    /* global fix for img with empty alt text and empty aria-label value*/
    $('.main-content picture img').each(function () {
        if ($(this).attr('alt') == "") {
            $(this).attr('role', 'presentation');
        }
    });
    $('#mainContent,#Default_SHARE_FollowUsToolbar').find('*').children().each(function () {
        if ($(this).attr('aria-label') == "") {
            $(this).removeAttr('aria-label');
        }
    });
    /* global fix for img with empty alt text and empty aria-label value*/

    $('body .guid-identification').find('a').attr('aria-hidden', 'true');

    $("#CP_SideVideoWithCopy_1 .side-video-carousel .slick-slide .video-link a").not(".c-call-to-action").attr("tabindex", "-1");
    $('.CP_BGImgWithCopyAndButtons .open-popup-video').click(function () {

        $("a").removeClass("x-hidden-focus");
    });

    $('#CP_StickyNav_1 .tab-menu').focus(function () {
        if ($(this).text() == "") {
            $('div.main-tab a.tab-menu').click();
        }
    });

    $(".c-back-to-top").on("focus", function () {
        $(this).trigger("hover");
    });
    /*2571*/
    var righthighcontrast = $("#CP_StaticMenu .sqlstatic").attr("data-right-img-highcontrast");
    var lefthighcontrast = $("#CP_StaticMenu .sqlstatic").attr("data-left-img-highcontrast");
    $("#CP_StaticMenu .slick-next").append("<img class='high-contrast-wt' src=" + righthighcontrast + "/>");
    $("#CP_StaticMenu .slick-prev").append("<img class='high-contrast-wt' src=" + lefthighcontrast + "/>");

    /*temp fix to be updated again*/

    // $('.cp-sticky-nav .cp-sticky-nav-sub .tabs .tab.nb').attr('role','listitem');
    $('#CP_StickyNav_1 .tabs .tab:nth-child(6)').focusout(function () {
        $('#CP_StickyNav_1 .tab.main-tab').click();
    });

    $('#CP_StickyNav_1 a.tab-menu').each(function () {
        if ($(this).text() == "") {
            $(this).attr("tabindex", "-1");
        }
    })



    /*2638 bug start */
    // $("a.c-back-to-top").attr("aria-label", "back to top");
    // $("a.c-back-to-top").attr("title", "Back to Top");

    /*adding mozilla class to html */
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
        $('html').addClass('mozilla');
        var _arialabel = $('.sql-RightNavTab .sql-accordion-tab-list').attr('aria-label');
        $('.sql-RightNavTab .sql-accordion-tab-list ul').attr('aria-label', _arialabel);
    }
});
/*2638 bug End */

/*Bug 3266 End*/
/*bug 2590 */
var chekvis = $("#sql-image-tab-carousel .carousel-nav").css("visibility") == "visible"
if (chekvis == true) {
    $("#sql-image-tab-carousel .carousel-nav").attr("tabindex", "0");
}
/*2591*/
$("a.c-call-to-action[iframe_popup_link='enabled']").on("click", function () {
    $(".custom-popup-form-container iframe").attr("tabindex", "0");
});
$(".form-close-button").on("click", function () {
    $(".custom-popup-form-container iframe").attr("tabindex", "-1");
})
/*end 2591*/




/*for bug fix Bug 2422*/

$(document).ready(function (e) {
    /* updating tabindex propery of links in section #CP_ThreeBGImagesWithCopy */

    $('#sql-image-tab-carousel .carousel-thumbnails a.carousel-thumbnail-item').attr('role', 'tab');

    $('#CP_TopImage2ColWithCopy_1  p.c-subheading-1:nth-child(1)').each(function () {
        $(this).replaceWith($("<h2 class='c-subheading-1'>" + this.innerHTML + '</h2>'));

    });


    $('#CP_TopImage2ColWithCopy_1 p.c-subheading-1').each(function () {
        $(this).replaceWith($("<h3 class='c-subheading-1'>" + this.innerHTML + '</h3>'));

    });
    $('#CP_TopImage2ColWithCopy_7 p.c-subheading-1').each(function () {
        $(this).replaceWith($("<h2 class='c-subheading-1'>" + this.innerHTML + '</h2>'));

    });
    $('#CP_TopImage2ColWithCopy_13 p.c-subheading-1').each(function () {
        $(this).replaceWith($("<h3 class='c-subheading-1'>" + this.innerHTML + '</h3>'));

    });
    $('#CP_TopImage2ColWithCopy_19 p.c-subheading-1').each(function () {
        $(this).replaceWith($("<h3 class='c-subheading-1'>" + this.innerHTML + '</h3>'));

    });
    $("#CP_TopImage1ColWithCopy_1 p.h4").each(function () {
        $(this).replaceWith($("<h4 class='c-heading-4'>" + this.innerHTML + '</h4>'));

    });
    /*2587*/
    $("#CP_TopImage1ColWithCopy_1 p.h3").each(function () {
        $(this).replaceWith($("<h3 class='c-heading-3 hide-by-default show-element'>" + this.innerHTML + '</h3>'));

    });


    $('#CP_LinkList_1 p.c-subheading-2').each(function () {

        $(this).replaceWith($('<h3>' + this.innerHTML + '</h3>'));
        $('#CP_LinkList_1 h3').addClass('c-subheading-2');

    });
    $("#CP_TopImage2ColWithCopy_1 .body-tight-2").each(function () {

        $(this).replaceWith($('<h6>' + this.innerHTML + '</h6>'));
        $('#CP_TopImage2ColWithCopy_1 c-heading-6').addClass('body-tight-2 blue-text');

    });
    $(".section-button").find("a").each(function () {
        if ($(this).hasClass("c-call-to-action")) {
            $(this).attr("tabindex", "-1");
        }
    });
    /*2644*/
    $("#CP_TwoColVideo_1 h3").each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    })

    /*Bug 339337: For Removing Empty H3 tag issue*/
    $(".cp-footer h2").each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    })


    /*bug 3255*/
    // $(".sql-accordion-tab-list a.tab-item").on("click",function(){
    // 	
    // if(($(".sql-righttab .tab-panel-item:last-child") && $(".sql-righttab .tab-panel-item a.c-call-to-action:last-child")))
    // {	
    // $(".sql-righttab").find(".tab-panel-item.click-active a:nth-of-type(1)").focus();
    // }
    // })
    // 
    // $(".sql-accordion-tab-list a.tab-item").on("click",function(){
    // if(($(".sql-righttab .tab-panel-item:last-child") && $(".sql-righttab .tab-panel-item a.c-call-to-action:last-child")))
    // {
    // $(".sql-righttab").find(".tab-panel-item.click-active a.first-link").focus();
    // }
    // })
    /*bug 3255*/

    var popupContainer = 'custom-popup-container';
    $(document).on("click", ".open-popup-video", function () {
        var videoType;
        if ($(this).hasClass("open-popup-video")) {
            videoType = $(this).data("player-type").toLowerCase();
            if (videoType == "oneplayer")
                popupContainer = "c-dialog"
        }
        $(this).addClass("active-video");
        // $(".custom-popup-background a.close-button").focus();
        $(".custom-popup-background a.close-button").attr('aria-label', 'close');
        $(".custom-popup-background a.close-button").attr('role', 'button');
        $(".custom-popup-background #custom-youtube-iframe").attr("tabindex", "0");
        $('html').addClass('no-scroll');
    })

    $(document).on("click", ".open-page-popup", function () {
        $('html').addClass('no-scroll');
    })
    /*2642*/

    $(".accordion-main-panel .accordion-heading").each(function () {
        $(this).attr('role', 'button');
        if ($(this).hasClass("bg-right-arrow-black")) {
            $(this).attr("aria-expanded", "false");
        }
        if ($(this).hasClass("bg-down-arrow-black")) {
            $(this).attr("aria-expanded", "true");
        }
    })

    /* Change*/


    $(".accordion-main-panel .accordion-heading").on("click", function (evt) {

        var $ele = $(event.target);
        if ($(this).hasClass("bg-right-arrow-black")) {
            setTimeout(function () {
                $($ele).attr("aria-expanded", "false");
            }, 500);
        }
        if ($(this).hasClass("bg-down-arrow-black")) {
            setTimeout(function () {
                $($ele).attr("aria-expanded", "true");
            }, 500);
        }
    });

    $("body").on("click", function () {

        setTimeout(function () {
            $(".accordion-main-panel .accordion-heading").each(function () {

                if ($(this).hasClass("bg-right-arrow-black")) {

                    $(this).attr("aria-expanded", "false");
                }
                if ($(this).hasClass("bg-down-arrow-black")) {
                    $(this).attr("aria-expanded", "true");
                }
            })
        }, 100);

    });


    /*2647 */
    $(window).on("resize", function () {
        if ($(window).width() < 540) {
            if ($("#SQL_HerocarouselWithButtons_1 h4.body").text().length > 130) {
                $("#SQL_HerocarouselWithButtons_1 h4.body").addClass("override-mwf");
                $("#SQL_HerocarouselWithButtons_1 .half-text-padding").addClass("override-text-padding");
            }
        }
        /*bug 2590 */
        var chekvis = $("#sql-image-tab-carousel .carousel-nav").css("visibility") == "visible"
        if (chekvis == true) {
            $("#sql-image-tab-carousel .carousel-nav").attr("tabindex", "0");
        }

        if ($(window).width() > 540) {
            $("#SQL_HerocarouselWithButtons_1 h4.body").removeClass("override-mwf");
            $("#SQL_HerocarouselWithButtons_1 .half-text-padding").removeClass("override-text-padding");
        }

    })
    /* end 2647 */
    $(document).ready(function () {
        /*2647 */
        if ($(window).width() < 540) {
            if ($("#SQL_HerocarouselWithButtons_1 h4.body").text().length > 130) {
                $("#SQL_HerocarouselWithButtons_1 h4.body").addClass("override-mwf");
                $("#SQL_HerocarouselWithButtons_1 .half-text-padding").addClass("override-text-padding");
            }
        }
        /*end of 2647 */



        /*2571 start*/
        $("#CP_StaticMenu #static_menu_1 .slick-prev").append("<img src='//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RET8jK?ver=6de9'/>");
        $("#CP_StaticMenu #static_menu_1 .slick-next").append("<img src='//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RETaUZ?ver=959b'/>");

        /*2571 End*/

        /*2618 */
        // $("#CP_RightNavTab_1 a").each(function(){
        // if($(this).attr("aria-label")=="")
        // {
        // $(this).attr("aria-label",$(this).text())
        // }
        // })



        /* 25
         bug Start*/
        $(".accordion-main-panel a.accordion-header").each(function () {
            $(this).hasClass("bg-down-arrow-white") == true ? $(this).attr("aria-expanded", "true") : $(this).attr("aria-expanded", "false");
            $(this).hasClass("bg-right-arrow-white") == true ? $(this).attr("aria-expanded", "false") : $(this).attr("aria-expanded", "true");
        });

        $(".accordion-main-panel a.accordion-header").each(function () {
            $(this).click(function () {
                $(this).hasClass("bg-down-arrow-white") == true ? $(this).attr("aria-expanded", "true") : $(this).attr("aria-expanded", "true");
                $(this).hasClass("bg-right-arrow-white") == true ? $(this).attr("aria-expanded", "false") : $(this).attr("aria-expanded", "true");
            });
        });
        /* 2575 bug End*/
    });




    /*marketo form*/


    $("a.open-marketo-popup").on("click", function () {
        var x = $(this);
        setTimeout(function () {
            var opValmarketo = $("#marketo-overlay").css("display");
            if (opValmarketo == 0) {

                $("#close-marketo").attr("tabindex", "0");

            }
            if (opValmarketo == 1) {
                $("#close-marketo").attr("tabindex", "-1");
            }
            $("#close-marketo").attr("tabindex", "0");
            $("#close-marketo").focus();
            x.addClass("active-marketo");

            // $("#marketo-overlay .marketo-last-lnk").on("focus",function(){
            // 	$("#close-marketo").focus();

            //  })

        }, 500)
    });
    $("#close-marketo").click(function () {
        $("#close-marketo").attr("tabindex", "-1");
        setTimeout(function () {
            $(".active-marketo").focus();
            $(".active-marketo").removeClass("active-marketo");
        }, 500);
    });
    /*marketo form end*/


    $("a.open-popup-video").on("click", function () {
        $('html').removeClass('no-scroll');
        var opVal = $(".custom-popup-background").css("opacity");
        if (opVal == 0) {
            $(".close-button").attr("tabindex", "0");
            $("a.dummy-link-top").attr("tabindex", "0");
            $("ul.social-popup-share li a").attr("tabindex", "0");
        }
    });

    /*srikanth 341899*/
    var popupContainer = 'custom-popup-container';
    $("a.open-popup-video, div.open-popup-video, a.open-inline-video, div.open-inline-video").on("click", function () {
        var videoType;
        if ($(this).hasClass("open-popup-video")) {
            videoType = $(this).data("player-type").toLowerCase();
            if (videoType == "oneplayer")
                popupContainer = "c-dialog"
        }
        $(this).addClass("active-video");
        // $('.' + popupContainer).bind("keydown", function (e) {
        // 	if (e.shiftKey && e.keyCode == 9) {
        // 		e.preventDefault();
        // 		$(this).focus();
        // 	}
        // });

        var popuptitle = $(this).attr('aria-label');
        var videotitle = $(this).attr('data-video-title');

        if (videoType == "oneplayer") {
            $('.' + popupContainer + '.one-player-popup-container').find('iframe').attr('title', videotitle);
        } else {
            $('.' + popupContainer + ' .custom-popup-video-container iframe').first().attr('title', videotitle);
        }
        $('.' + popupContainer).attr('aria-label', popuptitle);

    });
    /*end*/

    $(".close-button").on("click", function (e) {
        e.preventDefault();
        $(".active-video").focus();
        $(".active-video").removeClass("active-video");
        $('html').removeClass('no-scroll');


        var opVal = $(".custom-popup-background").css("opacity");
        if (opVal == 1) {
            $(".close-button").attr("tabindex", "-1");
            $("a.dummy-link-top").attr("tabindex", "-1");
            $("ul.social-popup-share li a").attr("tabindex", "-1");

        }
        $(".custom-popup-background #custom-youtube-iframe").attr("tabindex", "-1");
        $(".page-frame-popup-background iframe").attr("tabindex", "-1");
    });

    $("a.open-page-popup").on("click", function () {
        $(this).addClass('active-page-popup');
        $(".page-frame-popup-background iframe").attr("tabindex", "0");
        $(".page-frame-popup-container a").attr("tabindex", "0");
        $(".page-frame-popup-container .close-button").attr('tabindex', '0')
        $('.page-frame-popup-container a.dummy-link').attr('tabindex', '0');
        $(".page-frame-popup-container .close-button").focus();
    });

    $(".page-frame-popup-container .close-button").on('click', function () {
        $('a.active-page-popup').focus();
        $('a.active-page-popup').removeClass('active-page-popup');
        $(this).attr('tabindex', '-1');
        $('.page-frame-popup-container a.dummy-link').attr('tabindex', '-1');
        $(".page-frame-popup-background iframe").attr("tabindex", "-1");
        $(".page-frame-popup-container a").attr("tabindex", "-1");
    });



});

$(document).ready(function () {
    /*marketo form*/
    $("#marketo-overlay").on('keypress', '#close-marketo', function (e) {
        if (e.keyCode == 13) {
            $("#close-marketo").click();
        }

    });
    $(".page-frame-popup-background").on("keypress", ".close-button", function (e) {
        if (e.keyCode == 13) {
            $(".close-button").click();
            //4875 bug
            $("a.open-page-popup").focus();
        }
    });

    /*marketo form end*/
    /*video popup*/
    $(".custom-popup-container").on('keypress', '.close-button', function (e) {
        if (e.keyCode == 13) {
            $(".close-button").click();
            $('html').removeClass('no-scroll');
        }
    });

    /*bug 2573*/
    $("#CP_Accordion_1 .expand-collapse-holder a").click(function (e) {

        $(".accordion-main-panel .ui-accordion-header:first-child").focus();

    });

    $(".cp-sticky-nav-sub").on('keypress', '.tab.main-tab', function (e) {
        if (e.keyCode == 13) {
            $(".tab.main-tab").click();
        }
    });

    $(".ie11-browser .cp-sticky-nav-sub").on('keydown', '.tab.main-tab', function (e) {
        if (e.keyCode == 13 || e.which == 13) {
            $(".tab.main-tab").trigger("onmouseup");
        }
    });
    /*video popup end*/
})
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $(".custom-popup-form-container iframe").attr("tabindex", "-1");
        $(".page-frame-popup-background iframe").attr("tabindex", "-1");
        var opVal = $(".custom-popup-background").css("opacity");
        if (opVal == 1) {
            $(".close-button").attr("tabindex", "-1");
            $("ul.social-popup-share li a").attr("tabindex", "-1");
            $('html').removeClass('no-scroll');
        }
        $(".custom-popup-background #custom-youtube-iframe").attr("tabindex", "-1");
        $(".active-video").focus();
        $(".active-video").removeClass("active-video");
    }


});


$(document).keydown(function (e) {
    if (e.keyCode == 27) {

        var opVal = $("#marketo-overlay").css("display");
        if (opVal == 1) {
            $("#close-marketo").attr("tabindex", "-1");

        }

    }
    if (e.keyCode == 13) {

    }

});



$(window).on("load", function () {
    $('.staticmenu .sqlstatic > div > ul').find("button[aria-label]").each(function () {
        var arialabelText = $(this).attr("aria-label");
        $(this).find('img').each(function () {
            $(this).attr('alt', arialabelText);
        });
    });

    $("#CP_ThreeBGImagesWithCopy a.mscom-link").each(function () {
        if ($(this).text() != "") {
            $(this).attr('tabindex', '0')
        }
        if ($(this).attr('href') == null) {
            $(this).attr('tabindex', '-1')
        }
    });
    $("#CP_SideVideoWithCopy_1 .side-video-carousel .slick-slide .video-link a").not(".c-call-to-action").attr("tabindex", "-1");

    /*sql server 2016 features cortana 6 tabs section*/
    $('#CP_Cortana_6Tabs_1 .menu-bg .livearea .slick-list li.slick-slide ').attr('role', 'tab');

    $('#CP_Cortana_6Tabs_1 .menu-bg .livearea .slick-list li.slick-slide a').on('click', function () {
        setTimeout(function () {
            $('#CP_Cortana_6Tabs_1 .tab-container .activeTab.tab-content li.x-type-center a').first().focus()
        }, 500);


    });

    if ((window.matchMedia("-ms-high-contrast: active").matches) == true) {
        $('html').addClass('high-contrast');
    } else {
        $('html').addClass('normal');
    }



});


$(document).ready(function () {
    $('#sql-image-tab-carousel .carousel-thumbnails a.carousel-thumbnail-item').attr('tabindex', '0');

    /*3928 Start*/
    if ($('#CP_ThreeBGImagesWithCopy .section-3 a.mscom-link').attr('href') == "") {
        $('#CP_ThreeBGImagesWithCopy .section-3 a.mscom-link').removeAttr('href');
    }
    /*3928 End*/

    /*default page image section*/
    $('#SQL_SideImageWithCopyV1_1_1 a.c-call-to-action.theme-transparent').on('focus', function () {
        $(this).closest('.overlay').css('opacity', '1');
    });

    $('#SQL_SideImageWithCopyV1_1_1 a.c-call-to-action.theme-transparent').on('focusout', function () {
        $(this).closest('.overlay').css('opacity', '');
    });

});


$(window).on('load', function () {
    if ($(".slickcarousel .slick-track .slick-current").hasClass("theme-dark")) {
        $(".slickcarousel").find("button.slick-arrow").addClass("btn-dark");
        $(".slickcarousel").find(".slick-dots li").addClass("btn-dark");
    }
    if (!$(".slickcarousel .slick-track .slick-current").hasClass("theme-dark")) {
        $(".slickcarousel").find("button.slick-arrow").addClass("btn-light");
        $(".slickcarousel").find(".slick-dots li").addClass("btn-light");
    }
    $(".slickcarousel button.slick-arrow,.slickcarousel .slick-dots li").on("click", function () {
        if ($(this).closest('.slickcarousel').find('.slick-current').hasClass("theme-dark")) {
            $(this).closest(".slickcarousel").find("button.slick-arrow").addClass("btn-dark");
            $(this).closest(".slickcarousel").find(".slick-dots li").addClass("btn-dark");
        }
        if (!$(this).closest('.slickcarousel').find('.slick-current').hasClass("theme-dark")) {
            $(this).closest(".slickcarousel").find("button.slick-arrow").addClass("btn-light");
            $(this).closest(".slickcarousel").find(".slick-dots li").addClass("btn-light");
        }
    });
});


$(document).ready(function () {

    $(document).on("click", "a.open-inline-video", function (e) {
        e.preventDefault();
        $(this).addClass("current-video");
        setTimeout(function () {
            $(".inline-video-container").find("a").focus();
        }, 150);

    });

    $(document).on("click", ".inline-video-container a", function () {
        setTimeout(function () {
            $(".current-video").focus();
            $(".current-video").removeClass("current-video")
        }, 50);
    });

    /* Bug 339489 start */
    $(document).on('keydown', '.inline-video-container a', function (e) {
        console.log(e.keyCode)
        if (e.keyCode == 27) {
            setTimeout(function () {
                $(".current-video").focus();
                $(".current-video").removeClass("current-video")
            }, 50);
        }
    });
    /* Bug 339489 End*/

    /*3894 bug fix*/

    // var tabIndex = 0;

    // $('.sql-righttab .tab-panel-item.active a.mscom-link:last-child').focusout(function(){
    // $('.sql-lefttab a.tab-item.click-active').next('a').focus();
    // });

    // $('.sql-lefttab a.tab-item').on('click', function(){
    // tabIndex = $(this).index();
    // $('.sql-righttab .tab-panel-item').eq(tabIndex).find('a.mscom-link:first').focus();
    // });

    // $('.sql-lefttab a.tab-item:first-child').click(function(){	
    // 	setTimeout(function(){
    // $('.sql-righttab .tab-panel-item:first-child a.mscom-link:first-child').focus();	
    // 		
    // 	},10)
    // 	
    // });

    // $('.sql-lefttab a.tab-item').click(function(){
    // $('.sql-righttab .tab-panel-item a.mscom-link:first-child').focus();
    // $('.sql-righttab .tab-panel-item a.mscom-link:last-child').focusout(function(){
    // $('.sql-lefttab a.tab-item.click-active').next('a').focus();
    // });
    // });
    /*3894 bug fix End*/

    /*3987bug*/
    var disabledVal = 0;
    $('.media-carousel-enable-navigation .slick-next.slick-arrow, .side-video-carousel .slick-next.slick-arrow, .cp_media_carousel_with_responsive .slick-next.slick-arrow, .three-reasons-container .slick-next.slick-arrow').on('click', function () {
        if (!$(this).hasClass('slick-disabled')) {
            $(this).parent('.slick-slider').find('.slick-prev.slick-arrow').focus();
        }
        if ($(this).hasClass('slick-disabled')) {
            if (disabledVal == 0) {
                $(this).parent('.slick-slider').find('.slick-prev.slick-arrow').focus();
                disabledVal = 1;
            }
        }
    });

    $('.media-carousel-enable-navigation .slick-prev.slick-arrow, .side-video-carousel .slick-prev.slick-arrow, .cp_media_carousel_with_responsive .slick-prev.slick-arrow, .three-reasons-container .slick-prev.slick-arrow').on('click', function () {
        disabledVal = 0;
    });
    /*3989 bug*/

    /*4024 Start*/
    $(".accordion-container a.accordion-expandAll").on('click', function () {
        $(".accordion-main-panel a.accordion-header").each(function () {
            $(this).attr("aria-expanded", "true");
        });
    });

    $(".accordion-container a.accordion-collapseAll").on('click', function () {
        $(".accordion-main-panel a.accordion-header").each(function () {
            $(this).attr("aria-expanded", "false");
        });
    });
    /*4024 end*/

    /*4011 Start*/
    if ($('#CP_ThreeBGImagesWithCopy .c-mosaic-placement.section-3 h4.c-heading-4').text() == "") {
        $('#CP_ThreeBGImagesWithCopy .c-mosaic-placement.section-3 h4.c-heading-4').remove();
    }

    if ($('#CP_PageTitle h3.text-right.hide-by-default.show-element').text() == "") {
        $('#CP_PageTitle h3.text-right.hide-by-default.show-element').remove();
    }
    /*4011 End*/

    /*4026 Start*/
    $('#CP_MediaCarouselWithCopy_1 .carousel-wrapper .slick-list .slick-slide').each(function () {
        if ($(this).find('.text-content h3.title').text() == "") {
            $(this).find('.text-content h3.title').remove();
        }
    });
    /*4026 End*/




    /*4016 Start*/
    // if ($('#CP_StickyNav_1 .cp-sticky-nav-sub').attr('data-collapse') == "true") {
    // 	$('#CP_StickyNav_1 .cp-sticky-nav-sub .main-tab .tab-menu').attr('aria-expanded', 'false');
    // }
    // if ($('#CP_StickyNav_1 .cp-sticky-nav-sub').attr('data-collapse') == "false") {
    // 	$('#CP_StickyNav_1 .cp-sticky-nav-sub .main-tab .tab-menu').attr('aria-expanded', 'true');
    // }

    // $('#CP_StickyNav_1 .cp-sticky-nav-sub .main-tab .tab-menu').click(function () {

    //     if ($(this).closest('.cp-sticky-nav-sub').attr('data-collapse') == "true") {
    //         $(this).attr('aria-expanded', 'false');
    //         if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
    //             $(this).attr('aria-label', 'collapsed');
    //             $(this).focus();
    //         }
    //     }
    //     if ($(this).closest('.cp-sticky-nav-sub').attr('data-collapse') == "false") {
    //         $(this).attr('aria-expanded', 'true');
    //         if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
    //             $(this).attr('aria-label', 'expanded');
    //             $(this).focus()
    //         }
    //     }
    // });
    // $('#CP_StickyNav_1 .cp-sticky-nav-sub .main-tab .tab-menu').on('keydown', function (e) {
    //     if (e.keyCode == 13) {
    //         if ($(this).closest('.cp-sticky-nav-sub').attr('data-collapse') == "true") {
    //             $(this).attr('aria-expanded', 'false');
    //             if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
    //                 $(this).attr('aria-label', 'collapsed');
    //                 $(this).focus();
    //             }
    //         }
    //         if ($(this).closest('.cp-sticky-nav-sub').attr('data-collapse') == "false") {
    //             $(this).attr('aria-expanded', 'true');
    //             if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
    //                 $(this).attr('aria-label', 'expanded');
    //                 $(this).focus()
    //             }
    //         }
    //     }
    // });
    /*4016 End*/
    // Rewriting event listener line 712 - bug 349936 - JAB 6/28/18
    // $('#stickyMobilePageLink').on('click', function () {
    //     if ($(this).attr('aria-expanded') == 'false') {
    //         $(this).attr('aria-expanded', 'true');
    //         $("#stickyNotice").text("expanded");
    //     } else if ($(this).attr('aria-expanded') == 'true') {
    //         $(this).attr('aria-expanded', 'false');
    //         $("#stickyNotice").text("collapsed");
    //     }
    //     $("#quicklinks a").attr('tabindex', '0');
    //     // setTimeout(function() {
    //     //     $("#quicklinks a").filter(":first").focus();
    //     // }, 500);
    // });
    // $('#stickyMobilePageLink').on('keydown', function (e) {
    //     var hiding = $('.cp-sticky-nav .cp-sticky-nav-sub').attr('data-collapse');
    //     if (e.keyCode == 13 || e.keycode == 32) {
    //         // $('#stickyMobilePageLink').trigger('click');
    //         if (hiding == 'true') {
    //             $('.cp-sticky-nav .cp-sticky-nav-sub').attr('data-collapse', 'false');
    //         } else if (hiding == 'false') {
    //             $('.cp-sticky-nav .cp-sticky-nav-sub').attr('data-collapse', 'true');
    //         }
    //         $('#stickyMobilePageLink').trigger('click');
    //         // $('.cp-sticky-nav .cp-sticky-nav-sub').attr('data-collapse','false');
    //     }
    // });

    $('#quicklinks').on('keydown', function (e) {
        if (e.keyCode == 39 || e.keycode == 40) {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("working down");
        } else if (e.keyCode == 37 || e.keycode == 38) {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("working up");
        }
    });



    /*4019 Start*/
    $('a.c-back-to-top').on('focus', function () {
        $(this).css('opacity', '1')
    });
    /*4019 End*/




    $('#CP_RightNavTab_1 .sql-accordion-tab-list a.tab-item').each(function () {
        $(this).attr('aria-label', $(this).find('.texting').text().trim());
    });




    /*Default page, image tab carousel click issue*/
    $('#sql-image-tab-carousel .carousel-thumbnail-list .carousel-thumbnail-item').click(function (e) {
        e.preventDefault();
    });


});



function slickaccessibility() {
    setTimeout(function () {
        $("ul.slick-dots").each(function () {
            var count = $(this).children().length

            $(this).children().each(function () {
                var currentslide = $(this).index() + 1;
                var currentslidetext = "slide " + currentslide;
                var fullariatext = currentslidetext + " of " + count;
                $(this).find("button").attr("aria-label", fullariatext);
                $(this).find("button").attr("title", fullariatext); /*341792*/

            });
        });
    }, 100);
}
$(window).load(function () {
    slickaccessibility();
    $('.slick-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var currentslide = $(this);
        // setTimeout(function() {
        //     currentslide.find(".slick-slide").each(function() {
        //         if ($(this).hasClass("slick-active")) {

        //             $(this).find("a").each(function() {

        //                     $(this).focus();
        //                   return false; 

        //             });

        //            return false; 
        //         }
        //     });
        // }, 100);	

    });
    /*srikanth 342844*/
    // $('.slick-slider .slick-arrow ,.slick-dots').on('click',function(){
    // var $this=$(this);
    // setTimeout(function(){
    // 	$this.closest(".slick-slider").find(".slick-list .slick-slide.slick-active a").first().focus();
    // },600)
    // });
    /*sravan 346372*/
    $('.cortana-6tabs .inner-menu-ul li').each(function () {
        if ($(this).attr('role') == "option") {
            $(this).removeAttr('role');
        }
        $(".inner-menu-ul").attr("role", "tablist");
        $(".inner-menu-ul li").attr("role", "tab");
    })

});
/*Accessibility bug-339176-SQL Server Training certification_Issues.xlsx*/
$(window).load(function () {
    $(".cp-media-carousel-with-frames").on("keypress", ".carousel-button", function () {
        $(this).click();
    });
    /*$(".cp-media-carousel-with-frames .carousel-frame").each(function () {
	if($(this).prop('data-carousel-position') == 'active')
	{
	   var currentContainer = $(this)
		 $(currentContainer).find(".carousel-thumbnail a").each(function (){
			
					if ($(".carousel-thumbnail a").hasClass("open-popup-video")) {
						 $(this).attr("tabindex", "0");
					}
					else{
						 console.log("22");
						 $(".carousel-thumbnail a").attr("tabindex", "-1");
						 $(".carousel-content a").focus();
					}
			   });
	}	
   });*/

    carouselfocus();

});

function carouselfocus() {
    $(".cp-media-carousel-with-frames .carousel-group .carousel-frame").each(function () {

        $(this).find(".cp-media-carousel-with-frames .c-call-to-action").attr("tabindex", "-1");

        if ($(this).attr("data-carousel-position") == "active") {
            $(this).find(".cp-media-carousel-with-frames a.c-call-to-action").attr("tabindex", "0");
        }

    });
}
$(".cp-media-carousel-with-frames .carousel-prev , .cp-media-carousel-with-frames .carousel-next").on('click', function () {

    carouselfocus();

});


/*Bug 339337: For Removing Empty td tag issue*/
$(window).on("load", function () {
    var dataindex;
    var removed = 0;
    $(".CP_AccordionWithTable th").each(function () {
        if ($(this).html() == "") {
            dataindex = $(this).attr("data-index");

            $(this).remove();
            removed = 1;
        }
    });
    if (removed == 1) {
        $(".CP_AccordionWithTable td").each(function () {
            if ($(this).attr("data-index") == dataindex) {

                $(this).remove();
            }
        });
    }
});

/*Bug 339337: For Removing Empty th tag issue*/
$(window).on("load", function () {
    try {

        $(".sql-RightNavTab,.sql-five-pillar-overlay-content-1").each(function () {
            $(this).find("p.c-paragraph-3").each(function () {
                if ($(this).text() == "") {
                    $(this).remove();
                }
            });
        });
        $(".cp-three-bg-images-with-copy").each(function () {
            if ($(this).find(".section-3").find(".c-paragraph-3.section-content").text() == "") {
                $(this).find(".section-3").find(".c-paragraph-3.section-content").remove();
            }
            if ($(this).find(".section-3").find(".section-button").find(".mscom-link").text() == "") {
                $(this).find(".section-3").find(".section-button").remove();
            }
        });

        $(".accordion-container").each(function () {
            if ($(this).find(".accordion-foot-notes").find("p").text() == "") {
                $(this).find(".accordion-foot-notes").remove();
            }
        });
    } catch (e) {

    }
});

/*341792*/
$(document).ready(function () {
    $("#mainContent").find(".slick-slider button.slick-prev").attr('title', 'Previous');
    $("#mainContent").find(".slick-slider button.slick-next").attr('title', 'Next');
});
/*Manikanta reddy - 341892*/
$(document).ready(function () {
    $('#CP_ThreeBGImagesWithCopy p').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    });
    $('#CP_CaseStudy1ColWithLinks_1 .content p').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    });
});
// Srikanth
$(document).on('click', '#CP_Cortana_6Tabs_1 .tab-container .tab-content li.x-type-center a', function () {
    var menutext = $(this).find('p').text();
    $('.tab-container .inner-menu-ul li').find('a').attr('aria-label', menutext);
    setTimeout(function () {
        $('#CP_Cortana_6Tabs_1 .tab-container .activeTab.tab-content .inner-tab-container .activeTab.tab-content a.mscom-link').first().focus();
    }, 500);
});

$(document).ready(function () {
    var jcarousel_prev = $('.sql-RightNavTab .RightNavTab-carousel .jcarousel-control-prev').text();
    setTimeout(function () {
        if ($('.sql-RightNavTab .RightNavTab-carousel .jcarousel-control-prev').css('opacity') == "0.5") {
            $('.sql-RightNavTab .RightNavTab-carousel .jcarousel-control-prev').attr('aria-label', 'previous disabled');
        } else {
            $('.sql-RightNavTab .RightNavTab-carousel .jcarousel-control-prev').attr('aria-label', jcarousel_prev);
        }

    }, 200);

    // manikantha
    $('#CP_ThreeBGImagesWithCopy p').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    });
    $('#CP_CaseStudy1ColWithLinks_1 .content p').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    });
    $('.CP_BGImgWithCopyAndButtons .heroContent p').each(function () {
        if ($(this).find('span').text() == "") {
            $(this).remove();
        }
    });
});
// Naazia 341622
$(window).on("load", function () {
    $("#mainContent .fixed-support-links ul li a").each(function () {
        var statictext = $(this).attr('ms.title');
        $(this).attr("title", statictext);
    });


});
/*Task no: 341751*/
// Appending mrkto-width class to adjust the marketo popup container width specifically.
$(document).ready(function () {
    $('.main-content a.open-page-popup').each(function () {
        if ($(this).hasClass('mrkto-popup')) {
            $('.page-frame-popup-container').addClass('mrkto-width');
        }
    });

    // Below code is to append css style dynamically to DOM inside iframe - works only when both DOM structures in same Domain.
    $('.page-frame-popup-container.mrkto-width #page-frame-iframe').load(function () {
        $(this).contents().find('head').append($("<style type='text/css'>  .form-wrapper{margin:0 auto;}  </style>"))
    });

    /*342532*/
    if ($("#mainContent").find("p a").hasClass("c-call-to-action")) {

    } else if ($("#mainContent").find("p a").hasClass("c-hyperlink")) {
        $("#mainContent").find("p a").addClass("anchor_underline");
    } else {
        $("#mainContent").find("p a").addClass("anchor_underline c-hyperlink");
    }
    /*342532*/
});

/*2017-11-01 JS added code*/
// 	$('CP_TopImage2ColWithCopy_1 p.c-subheading-1, #CP_TopImage2ColWithCopy_2 p.c-subheading-1, #CP_TopImage2ColWithCopy_3 p.c-subheading-1,#CP_TopImage2ColWithCopy_4 p.c-subheading-1,#CP_TopImage2ColWithCopy_5 p.c-subheading-1, #CP_TopImage2ColWithCopy_13 p.c-subheading-1,#CP_TopImage2ColWithCopy_6 p.c-subheading-1').each(function () {
// 	$(this).replaceWith($('<h2 class="c-subheading-1">' + this.innerHTML + '</h2>'));
// });


/*srikanth carousel sequence change*/
$(window).load(function () {
    $('.hero-carousel-with-button, .hero-carousel').each(function () {
        if ($(this).find('ul').hasClass('slick-dots')) {
            $(".slick-active .links a").attr("tabindex", "-1");
            $(".slickcarousel .slick-prev").attr("tabindex", "-1");
            $(".slickcarousel .slick-next").attr("tabindex", "-1");
            $(".slick-dots button").attr("tabindex", "-1");
            $(".slick-dots .slick-active button").attr("tabindex", "0");
            $(".slick-dots .slick-active button").blur(function (e) {
                $(this).attr("tabindex", "0");
            });
            $(".slick-active .links a").on('focus', function (e) {
                $(".slick-active .links a").attr("tabindex", "-1");
                $(".slick-dots button").attr("tabindex", "-1");
                e.preventDefault();
            });
            $(".slick-active .links a").blur(function (e) {
                $(".links a").attr("tabindex", "-1");
                $(".slick-dots button").attr("tabindex", "-1");
                $(".slick-dots .slick-active button").attr("tabindex", "0");
            });
            $(".slick-dots button").on('keydown', function (e) {
                // if (e.shiftKey && e.which == 9) {
                // 	$(".slick-active .links a").on('focus', function (e) {
                // 		$(".slick-active .links a").blur();
                // 		$(".slick-dots .slick-active button").attr("tabindex", "0");
                // 	});
                // }
                if ((e.which == 39) || (e.which == 40)) {
                    $(".slick-dots .slick-active").next().children().attr("tabindex", "0").focus().trigger('click');
                }
                if ((e.which == 37) || (e.which == 38)) {
                    $(".slick-dots .slick-active").prev().children().attr("tabindex", "0").focus().trigger('click');
                }
                if (e.which == 9) {
                    $(".slick-dots button").blur(function () {
                        $(".slick-active .links a").attr("tabindex", "0");
                        $(".slick-active .links a").focus();
                        $(".slick-dots button").attr("tabindex", "-1");
                        $(".slick-active .links a").focus();
                    })
                    $(".slick-active .links a").on('focus', function (e) {
                        $(".slick-active .links a").attr("tabindex", "-1");
                        $(".slick-dots button").attr("tabindex", "-1");

                    });
                    $(".slick-active .links a").blur(function (e) {
                        $(".links a").attr("tabindex", "-1");
                        $(".slick-dots button").attr("tabindex", "-1");
                        $(".slick-dots .slick-active button").attr("tabindex", "0");
                    });
                }
            });

            $(".slick-dots li:last button").on('keydown', function (e) {
                if ((e.which == 39) || (e.which == 40)) {
                    $(".slick-dots li:first").children().attr("tabindex", "0").focus().trigger('click');
                }
            });
            $(".slick-dots li:first button").on('keydown', function (e) {
                if ((e.which == 37) || (e.which == 38)) {
                    $(".slick-dots li:last").children().attr("tabindex", "0").focus().trigger('click');
                }
            });
        }
    });
});


/*344086*/
$(document).ready(function () {
    $(".sql-RightNavTab .RightNavTab-carousel .Tab-carousel .desktop-slide-carousel .img-content ").each(function () {

        if ($(this).find("img").attr('alt') == "") {

            $(this).find('img').removeAttr('alt');
        }
    })
});
$(document).ready(function () {

    $(".mozilla .ms-grid").attr("tabindex", "-1");

    /*345421 */
    if ($('html').hasClass('high-contrast')) {
        $('.cp-three-bg-images-with-copy .c-mosaic').each(function () {
            $(this).find(".theme-dark").removeClass('theme-dark');

        })
    }
});
$(window).load(function () {
    //$(".carousel-navigation .carousel-next").attr("tabindex",-1);
    $(".carousel-frame").attr("tabindex", -1);
})
/*345459*/
$(document).ready(function () {
    $('#CP_ThreeBGImagesWithCopy h3').each(function () { // For each element
        if ($(this).text().trim() === '')
            $(this).remove(); // if it is empty, it removes it
    });

});

$(document).ready(function () {
    changeSupToAnchor();

    $('.cp_media_carousel_with_responsive .carousel-wrapper .slick-slide').each(function () {
        var ariadisc = $(this).attr('id');
        $(this).attr('aria-describedby', ariadisc);

    });
});

function changeAsteriskToSup() {
    $('a.c-call-to-action').each(function () {
        var getCtaText = $(this).text();
        var CtaText = "";
        if (getCtaText[getCtaText.length - 1] == "*") {
            CtaText = getCtaText.slice(0, -1);
            CtaText += '<sup>*</sup>';
            $(this).html(CtaText);
        }
    });
}

function changeSupToAnchor() {
    //changeAsteriskToSup();
    var getFootnoteText = "Footnote";
    var getInnerTxt = "";
    var convertedHtml = "";
    var supItemsArray = [];
    var supFootnotesArray = [];
    var supFootnotesTextArray = [];
    var flag = false;
    var _supLinkText = "";
    var _supLinkTextLength;

    $('.supLink').each(function (i) {
        supFootnotesArray[i] = $(this).text();
        _supLinkText = $(this).text();
        _supLinkTextLength = _supLinkText.length - 1;
        var _newsupLinkText = _supLinkText.substr(1, _supLinkTextLength - 1);
        supFootnotesTextArray[i] = $(this).parent().text();
        $(this).attr("href", "#ret-ft" + _newsupLinkText);
        $(this).closest('p').attr('id', 'ft' + _newsupLinkText);
        $(this).attr('aria-label', "Return to referrer " + getFootnoteText + " " + _newsupLinkText);
        $(this).find('strong.supFn').replaceWith('<span class="supFn">' + $(this).text() + '</span>');
    });

    $('sup').each(function () {
        getInnerTxt = $(this).text();
        getInnerTxt = getInnerTxt.replace('*(', '');
        getInnerTxt = getInnerTxt.replace(')', '');
        supItemsArray = getInnerTxt.split(', ');
        if (!$(this).parent().hasClass('c-tooltip')) {
            for (let i = 0; i < supItemsArray.length; i++) {
                for (let j = 0; j < supFootnotesArray.length; j++) {
                    if (supItemsArray[i] == supFootnotesArray[j]) {
                        var supAria = supItemsArray[i];
                        var supLen;
                        supLen = supAria.length - 1;
                        var _newsupAria = supAria.substr(1, supLen - 1);
                        supLen = "";
                        // convertedHtml+= "<a href='javascript:void(0)' class='c-hyperlink supBLink'>"+
                        // 				"<span class='supText'>"+ supItemsArray[i] +"</span></a>"+"<span>, </span>";
                        convertedHtml += "<a id=" + 'ret-ft' + _newsupAria + " aria-label='" + getFootnoteText + " " + _newsupAria + "' href=" + '#ft' + _newsupAria + " class='c-hyperlink supBLink'>" +
                            "<span class='supText'>" + supItemsArray[i] + "</span></a>" + "<span>, </span>";
                        flag = true;
                        break;
                    }
                }
            }
        } else {
            for (let i = 0; i < supItemsArray.length; i++) {
                for (let j = 0; j < supFootnotesArray.length; j++) {
                    if (supItemsArray[i] == supFootnotesArray[j]) {
                        var _supAria = supItemsArray[i];
                        var _supLen;
                        _supLen = _supAria.length - 1;
                        var newsupAria = _supAria.substr(1, _supLen - 1);
                        _supLen = "";
                        supFootnotesTextArray[j] = supFootnotesTextArray[j].replace(/\&nbsp;/g, ' ');
                        convertedHtml += "<div aria-label='" + getFootnoteText + " " + newsupAria + "' class='supBLink'>" +
                            "<span class='supText'>" + supItemsArray[i] + "</span></a>" + "<span>, </span>";
                        flag = true;
                        break;
                    }
                }
            }

        }
        if (flag) {
            $(this).html(convertedHtml);
            convertedHtml = "";
            flag = false;
        }
    });
    $('sup').find('span:last').remove();
}


$(document).on('click', '.supBLink', function (e) {
    //e.preventDefault();
    //var innerContent = $(this).find('.supText').text();
    var innerContent = $(this).text();
    //var $stickyNav = $('#non-mwf-wfb-common-sticky-nav-ID');
    if ($('.lastClicked').length > 0) {
        $('.lastClicked').removeClass('lastClicked');

    }
    $(this).addClass('lastClicked');
    var referencedFnSup = "";
    $('.supFn').each(function () {

        if ($(this).text() === innerContent) {

            referencedFnSup = $(this);
            // referencedFnSup.parent().parent().attr('tabindex','0');
            // referencedFnSup.parent().parent().focus();
            // referencedFnSup.parent().parent().attr('tabindex','-1');
            // setInterval(function(){ 
            // 	
            // 	referencedFnSup.parents('p.caption').focus();
            // 	}, 100);
            setTimeout(function () {

                referencedFnSup.parent().parent().attr('tabindex', '0');
                // referencedFnSup.parent().parent().focus();	
                // referencedFnSup.parent().parent().attr('tabindex','-1');

                referencedFnSup.parents('p.caption').focus();
            }, 500);
            //$(this).parents('.accordion-footnotes').focus();
            // if($stickyNav.length < 0){
            // 	var offset = referencedFnSup.offset();
            // 	var positioning = offset.top;
            // 	window.scrollTo(0,positioning);
            // }
        }
        // $(this).closest('p').addClass("ieFocus").attr("tabindex","0").focus().css("border","2px dashed #000");
        //$(this).closest('p').addClass('ieFocus');
        // $(this).closest('p').focusin(function(e){
        // 	$(this).closest('p').find('.ieFocus').attr("tabindex","0").focus().css("border","2px dashed #000");
        // });  
    });
});


$('.CP_AccordionWithTable .accordion-footnotes .caption.ieFocus').on('focusout', function () {
    $(this).focus().css("border", "2px dashed #000");
});

$(document).on('click', '.supLink', function (e) {
    e.preventDefault();
    var lastClickedSup = $('.lastClicked');
    var innerContent = $(this).find('.supFn').text();
    var referencedBdSup = "";
    var ele;
    var $stickyNav = $('#non-mwf-wfb-common-sticky-nav-ID');
    if (innerContent == $('.lastClicked .supText').text() || innerContent == $('.lastClicked').text()) {
        lastClickedSup.trigger("focus");
        // changes
        var offset = $('.lastClicked').offset();
        setTimeout(function () {
            var positioning = offset.top - 100;
            if ($stickyNav.length > 0) {
                positioning = offset.top - ($stickyNav.height() + 10);
            }
            window.scrollTo(0, positioning);
        }, 1000);
        //
        lastClickedSup.removeClass('lastClicked');
        innerContent.closest('p.caption').attr('tabindex', '-1');
    } else {
        $('sup .supText').each(function () {
            if (innerContent === $(this).text()) {
                referencedBdSup = $(this);
                referencedBdSup.parent().trigger("focus");
                var offset = referencedBdSup.parent().offset();
                var positioning = offset.top - 100;
                if ($stickyNav.length > 0) {
                    positioning = offset.top - ($stickyNav.height() + 10);
                }

                if (referencedBdSup.is(':visible')) {
                    window.scrollTo(0, positioning);
                    return false;
                }
            }
        });
    }

});


// $('.CP_AccordionWithTable .accordion-footnotes p.caption').on('focusout',function(){
// 	$(this).attr('tabindex','-1');
// });
// $(document).on('focus','.CP_AccordionWithTable .accordion-footnotes p.caption .supLink',function(){
// 	setTimeout(function(){
// 		$(this).closest('p.caption').attr('tabindex','-1');
// 	},600);
// });




/*Removing <a> tags with empty ids*/
$(window).load(function () {
    // 	setTimeout(function(){
    // 	$('.CP_AccordionWithTable .accordion-footnotes .caption').attr('tabindex','-1');
    // 	},600);
    $('.main-content a.deeplink-element').each(function () {
        if ($(this).attr("id") == "" || $(this).attr("id") == undefined || $(this).attr("id") == null) {
            $(this).remove();
        }
    });

    // $('.supFn').each(function () {
    // 	$(this).parents('p.caption').attr('tabindex', '0');
    // });

});
/*Removing <a> tags with empty ids*/
$(window).load(function () {
    $('.main-content a.deeplink-element').each(function () {
        if ($(this).attr("id") == "" || $(this).attr("id") == undefined || $(this).attr("id") == null) {
            $(this).remove();
        }
    });
});

/*346110*/
$(document).ready(function () {
    // $('.cp-sticky-nav .tabs .tab.nb').each(function () {
    // 	if ($(this).find('a').attr('data-active') == "true") {
    // 		$(this).attr('aria-current', 'page');
    // 	} 
    // 	
    // });
    /* removed as per the MSCOM auidt report*/
    /*$('.mozilla .cp-sticky-nav .tabs .tab.nb ').each(function () {
    	$(this).attr('role', 'tab');
    });*/
    $('.main-content p.caption').on('keydown', function (e) {
        if (e.keyCode == 9) {
            //$(this).attr('tabindex', '-1');
            $(this).removeAttr('tabindex');
        }
    });

    $('.main-content p.caption').on('blur', function (e) {
        //$(this).attr('tabindex', '-1');
        $(this).removeAttr('tabindex');
    });

});
/*end */

$(document).ready(function () {
    $('.CP_AccordionWithTable .accordion-main-panel a').on('keydown', function (e) {
        if (e.keyCode == 13) {
            setTimeout(function () {
                $(this).focus();
            }, 500);
        }
    });
    var LPChat = $('#CP_StaticSupportLinks_1_VG .static-support-links-3');
    setTimeout(function () {
        if (LPChat.find('#lpChatButton').children().length == 0 || LPChat.find('#lpChatButton') == undefined) {
            LPChat.remove();
        }
    }, 2200);
});

// $('#CP_StaticSupportLinks_1_VG .static-support-links-3').on('load', function () {
// 		if ($(this).find('#lpChatButton') == "" || $(this).find('#lpChatButton') == undefined || $(this).find('#lpChatButton') == null) {
// 			$(this).closest("li").remove();			
// 		}
// });

$(document).ready(function () {
    $(".cp-media-carousel-with-frames .c-sequence-indicator button").on("keydown", function (e) {
        if ((e.which == 39) || (e.which == 40)) {

            $(".cp-media-carousel-with-frames .carousel-next").trigger('click');
            setTimeout(function () {
                $('.cp-media-carousel-with-frames .carousel-frame > .carousel-content a').attr('id', '');
            }, 100);

            $('.cp-media-carousel-with-frames .carousel-frame').each(function () {
                var this_ = $(this);
                var num_negative = $(this).attr('data-carousel-position');
                if (num_negative == -1 || num_negative == -2) {
                    this_.find('.cp-media-carousel-with-frames .carousel-content a').attr('id', '');
                    this_.find('.cp-media-carousel-with-frames .video-link a').attr('id', '');
                }

            });
            e.stopImmediatePropagation();
        }
        if ((e.which == 37) || (e.which == 38)) {

            $(".cp-media-carousel-with-frames .carousel-prev ").trigger('click');
            setTimeout(function () {
                $('.cp-media-carousel-with-frames .carousel-frame > .carousel-content a').attr('id', '');
            }, 100);
            $('.cp-media-carousel-with-frames .carousel-frame').each(function () {
                var this_ = $(this);
                var num_negative = $(this).attr('data-carousel-position');
                if (num_negative == -1 || num_negative == -2) {
                    this_.find('.cp-media-carousel-with-frames .carousel-content a').attr('id', '');
                    this_.find('.cp-media-carousel-with-frames .video-link a').attr('id', '');
                }

            });
            e.stopImmediatePropagation();
        }
    });

    $('.cp-media-carousel-with-frames .carousel-next, .carousel-prev').on('click', function () {
        setTimeout(function () {
            $('.cp-media-carousel-with-frames .carousel-frame > .carousel-content a').attr('id', '');
        }, 100);
        $('.cp-media-carousel-with-frames .carousel-frame').each(function () {
            var this_ = $(this);
            var num_negative = $(this).attr('data-carousel-position');
            if (num_negative == -1 || num_negative == -2) {
                this_.find('.cp-media-carousel-with-frames .carousel-content a').attr('id', '');
                this_.find('.cp-media-carousel-with-frames .video-link a').attr('id', '');
            }

        });
    });
});

$(window).load(function () {
    $(".cp-media-carousel-with-frames .carousel-prev, .carousel-next").attr("tabindex", "-1");

    setTimeout(function () {
        $('.cp-media-carousel-with-frames .carousel-frame > .carousel-content a').attr('id', '');
    }, 100);

    $('.cp-media-carousel-with-frames .carousel-frame').each(function () {
        var this_ = $(this);
        var num_negative = $(this).attr('data-carousel-position');
        if (num_negative == -1 || num_negative == -2) {
            this_.find('.cp-media-carousel-with-frames .carousel-content a').attr('id', '');
            this_.find('.cp-media-carousel-with-frames .video-link a').attr('id', '');
        }

    });

    $('.carousel-content').each(function () {

        if ($(this).find('p').length !== 0) {
            $(this).addClass('true_paragraph');
            $(this).parents('.carousel-group').addClass('true_paragraph_group');
        } else {
            $(this).addClass('false_paragraph');
        }

    });
});
$(document).ready(function () {
    $("#CP_MediaCarouselWithFrames_1 .carousel-navigation picture").attr("role", "button");
})

$(document).ready(function () {
    $(".CP_AccordionWithTable .accordion-header.accordion-heading").each(function () {
        $(this).find('p').removeClass('c-paragraph-3');
    });
    $(".accordion.v2 .accordion-main-panel .accordion-header").each(function () {
        $(this).find('p').removeClass('c-paragraph-3');
    });
    if ($(".accordion.v2 .accordion-container .accordion-headline-bar h2.accordion-headline").text() == "") {
        $(".accordion.v2 .headline-holder").remove();
    }

    $('.cp_media_carousel_with_responsive .slick-dots li.slick-active button').on('keydown', function (e) {
        if (e.shiftKey && e.keyCode == 9) {
            if ($('.slick-dots').is(':visible')) {
                // $('.mediaslide .text-content .links a').attr("tabindex", "-1");}
                // $("#" + melementid + " .slick-dots .slick-active button").attr("tabindex", "0");
                setTimeout(function () {
                    $("#CP_MediaCarouselWithCopy_1 .mediaslide a").attr("tabindex", "-1");
                    $("#CP_MediaCarouselWithCopy_1 .carousel-wrapper .slick-prev").attr("tabindex", "-1");
                    $("#CP_MediaCarouselWithCopy_1 .carousel-wrapper .slick-next").attr("tabindex", "-1");
                    $("#CP_MediaCarouselWithCopy_1 .slick-dots button").attr("tabindex", "-1");
                    $("#CP_MediaCarouselWithCopy_1 .slick-dots .slick-active button").attr("tabindex", "0");
                }, 300);

            }
        }
    });

    $('.mediaslide .text-content .links ').children('a:first').on('keydown', function (e) {
        if (e.shiftKey && e.keyCode == 9) {
            if ($('.slick-dots').is(':visible')) {
                // $('.mediaslide .text-content .links a').attr("tabindex", "-1");}
                // $("#" + melementid + " .slick-dots .slick-active button").attr("tabindex", "0");

                $("#CP_MediaCarouselWithCopy_1 .mediaslide a").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .carousel-wrapper .slick-prev").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .carousel-wrapper .slick-next").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .slick-dots button").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .slick-dots .slick-active button").attr("tabindex", "0");
            }
        }

    });

    $('.cp_media_carousel_with_responsive .mediaslide.slick-active a').on('keydown', function (e) {
        if (e.shiftKey && e.keyCode == 9) {
            if ($('.slick-dots').is(':visible')) {
                // $('.mediaslide .text-content .links a').attr("tabindex", "-1");}
                // $("#" + melementid + " .slick-dots .slick-active button").attr("tabindex", "0");

                $("#CP_MediaCarouselWithCopy_1 .mediaslide a").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .carousel-wrapper .slick-prev").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .carousel-wrapper .slick-next").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .slick-dots button").attr("tabindex", "-1");
                $("#CP_MediaCarouselWithCopy_1 .slick-dots .slick-active button").attr("tabindex", "0");
            }
        }
    });


});

$(window).resize(function () {
    $('.cp_media_carousel_with_responsive').each(function () {
        var $melement = $(this);
        mcarouselOrder($melement);
    });
    setTimeout(function () {
        $('.cp_media_carousel_with_responsive .carousel-wrapper ul.slick-dots li button').removeAttr('role');
        $('.cp_media_carousel_with_responsive .carousel-wrapper ul.slick-dots li button').removeAttr('type');

    }, 500);
});

$(window).load(function () {
    $(".cp_media_carousel_with_responsive .slick-slider ul.slick-dots li").attr("role", "tab");
    $('.cp_media_carousel_with_responsive').each(function () {
        var $melement = $(this);
        mcarouselOrder($melement);
    });
    $('.cp_media_carousel_with_responsive .carousel-wrapper ul.slick-dots li button').removeAttr('role');
    $('.cp_media_carousel_with_responsive .carousel-wrapper ul.slick-dots li button').removeAttr('type');
});

function mcarouselOrder($melement) {
    var melementid = $melement.attr("id");
    if ($melement.find('ul').hasClass('slick-dots')) {
        $("#" + melementid + " .mediaslide a").attr("tabindex", "-1");
        $("#" + melementid + " .carousel-wrapper .slick-prev").attr("tabindex", "-1");
        $("#" + melementid + " .carousel-wrapper .slick-next").attr("tabindex", "-1");
        $("#" + melementid + " .slick-dots button").attr("tabindex", "-1");
        $("#" + melementid + " .slick-dots .slick-active button").attr("tabindex", "0");

        $("#" + melementid + " .slick-active a").blur(function (e) {
            // $( a").attr("tabindex", "-1");
            $("#" + melementid + " .slick-dots button").attr("tabindex", "-1");
            $("#" + melementid + " .slick-dots .slick-active button").attr("tabindex", "0");
        });
        $("#" + melementid + " .slick-dots button").on('keydown', function (e) {

            if ((e.which == 39) || (e.which == 40)) {
                $("#" + melementid + " .slick-dots .slick-active").next().children().attr("tabindex", "0").focus().trigger('click');
            }
            if ((e.which == 37) || (e.which == 38)) {
                $("#" + melementid + " .slick-dots .slick-active").prev().children().attr("tabindex", "0").focus().trigger('click');
            }
            if (e.which == 9) {
                $("#" + melementid + " .slick-dots .slick-active button").blur(function () {
                    if ($("#" + melementid + " .mediaslide.slick-current").first().find("a").hasClass('video-poster-link')) {
                        $("#" + melementid + " .mediaslide.slick-current").first().find("a.video-poster-link").first().attr("tabindex", "0").focus();
                        $("#" + melementid + " .mediaslide.slick-active a").attr("tabindex", "0");
                        //$("#" + melementid + " .mediaslide.slick-current a").focus();
                        $("#" + melementid + " .slick-dots button").attr("tabindex", "-1");
                    } else {
                        $("#" + melementid + " .mediaslide.slick-current").first().find("a").first().attr("tabindex", "0").focus();
                        $("#" + melementid + " .mediaslide.slick-active a").attr("tabindex", "0");
                        //$("#" + melementid + " .mediaslide.slick-current a").focus();
                        $("#" + melementid + " .slick-dots button").attr("tabindex", "-1");
                    }
                })
                $("#" + melementid + " .slick-active a").on('focus', function (e) {
                    // $("#" + melementid + " .slick-active a").attr("tabindex", "-1");
                    $("#" + melementid + " .slick-dots button").attr("tabindex", "-1");

                });
                $("#" + melementid + " .slick-active a").blur(function (e) {
                    // $("#" + melementid + " a").attr("tabindex", "-1");
                    $("#" + melementid + " .slick-dots button").attr("tabindex", "-1");
                    $("#" + melementid + " .slick-dots .slick-active button").attr("tabindex", "0");
                });
            }
        });

        $("#" + melementid + " .slick-dots li:last button").on('keydown', function (e) {
            if ((e.which == 39) || (e.which == 40)) {
                $("#" + melementid + " .slick-dots li:first").children().attr("tabindex", "0").focus().trigger('click');
            }
        });
        $("#" + melementid + " .slick-dots li:first button").on('keydown', function (e) {
            if ((e.which == 37) || (e.which == 38)) {
                $("#" + melementid + " .slick-dots li:last").children().attr("tabindex", "0").focus().trigger('click');
            }
        });
    }
}

/** Custom popup focus related code */
$(document).ready(function () {
    try {
        $(".custom-popup-container a.close-button,.social-popup-share li a.twitter,.social-popup-share li a.facebook").on('keydown', function (e) {
            if ((e.shiftKey && e.which == 9) || (e.shiftKey && e.keyCode == 9)) {
                e.stopImmediatePropagation();
                if ($(this).hasClass("close-button"))
                    $("a.dummy-link-top").attr('tabindex', '0').focus();
                else if ($(this).hasClass("twitter")) {
                    setTimeout(function () {
                        $(this).parent().prev().find("a").focus();
                    }, 100)
                } else if ($(this).hasClass("twitter")) {
                    setTimeout(function () {
                        $(".custom-popup-container").find("iframe:visible").focus();
                    }, 100)
                }
                // e.stopImmediatePropagation();

            }
        });
    } catch (e) {}

});

/*tootip for static support link */
$(document).ready(function () {
    $(".static-support-links-1").on("focus", function () {
        $(this).trigger("hover");
    });
    $(".static-support-links-2").on("focus", function () {
        $(this).trigger("hover");
    });

    $('a.open-popup-video').click(function () {
        $("a.dummy-link-top").attr("tabindex", "-1");
        $("a.dummy-link").on("focus", function () {
            $(".custom-popup-container a.close-button").focus();

        });

        $("a.dummy-link-top").on("focus", function () {
            $(".social-popup-share li a.twitter").focus();
        });
        $('.social-popup-share li a.facebook').on("keydown", function () {
            if ((e.shiftKey && e.which == 9) || (e.shiftKey && e.keyCode == 9)) {
                $(".custom-popup-container iframe:visible").attr('tabindex', '0').focus().blur();
            }
        });
        $(".custom-popup-container a.close-button").on("keydown", function (e) {
            $("a.dummy-link-top").attr("tabindex", "0");
            if (e.keyCode == 9) {

                e.stopImmediatePropagation();
                if ($(this).hasClass("close-button")) {
                    $(".custom-popup-container iframe:visible").attr('tabindex', '0').focus();
                    $("a.dummy-link-top").attr("tabindex", "0");
                }
            }

        });

        $(".custom-popup-container a.close-button,.social-popup-share li a.twitter,.social-popup-share li a.facebook").on('keydown', function (e) {
            if ((e.shiftKey && e.which == 9) || (e.shiftKey && e.keyCode == 9)) {
                e.stopImmediatePropagation();
                if ($(this).hasClass("close-button"))
                    $("a.dummy-link-top").attr("tabindex", "0").focus();
                else if ($(this).hasClass("twitter")) {
                    setTimeout(function () {
                        $(this).parent().prev().find("a").focus();
                    }, 100)
                } else if ($(this).hasClass("facebook")) {
                    setTimeout(function () {
                        $(".custom-popup-container").find("iframe:visible").focus();
                    }, 100)
                }
            }
        });
    });

})
$(window).on("load", function () {

    $(".custom-popup-background .social-share .social-popup-share a.facebook").on("focus", function () {
        $('.popup-tooltip').addClass("focustooltip");
    });
    $(".custom-popup-background .social-share .social-popup-share a.facebook").on("blur", function () {
        $('.popup-tooltip').removeClass("focustooltip");
    });

    $(".custom-popup-background .social-share .social-popup-share a.facebook").on("mouseover", function () {
        $('.popup-tooltip').addClass("focustooltip");
    });
    $(".custom-popup-background .social-share .social-popup-share a.facebook").on("mouseleave", function () {
        $('.popup-tooltip').removeClass("focustooltip");
    });

    $(".custom-popup-background .social-share .social-popup-share a.twitter").on("focus", function () {
        $('.popup-tooltip2').addClass("focustooltip2");
    });
    $(".custom-popup-background .social-share .social-popup-share a.twitter").on("blur", function () {
        $('.popup-tooltip2').removeClass("focustooltip2");
    });

    $(".custom-popup-background .social-share .social-popup-share a.twitter").on("mouseover", function () {
        $('.popup-tooltip2').addClass("focustooltip2");
    });
    $(".custom-popup-background .social-share .social-popup-share a.twitter").on("mouseleave", function () {
        $('.popup-tooltip2').removeClass("focustooltip2");
    });
})
/*Manikanta Reddy*/
$(document).ready(function () {
    $(".accordion .accordion-container .accordion-main-panel .accordionpanel").each(function () {
        $(this).find("p.c-paragraph-3").each(function () {
            if ($(this).text() == "") {
                $(this).remove();
            }
        });
    });
});
/*Footer headline issue*/
$(window).load(function () {
    $('#CP_Footer_1,#CP_Footer_2').each(function () {
        if ($(this).find('.c-heading-3').text() == "") {
            $(this).find('.c-heading-3').remove();
        }
        if ($(this).find('.c-heading-3').length < 1) {
            $(this).removeAttr('aria-labelledby');
        }
    });

    if ($('html.ie11-browser').hasClass('high-contrast')) {
        var cpmf = '.cp-media-carousel-with-frames .carousel-group .carousel-frame';
        var cpmfblackimg = '//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE28fNd?ver=1829';
        $(cpmf).each(function () {
            if ($(this).find('.carousel-thumbnail .video-link').hasClass('black')) {
                $(this).find('.carousel-thumbnail .video-link picture:last-child source').attr('srcset', cpmfblackimg);
                $(this).find('.carousel-thumbnail .video-link picture:last-child img').attr('src', cpmfblackimg).attr('srcset', cpmfblackimg);;

            }
        });
    }


    if ($('html').hasClass('edge-browser')) {
        $('.sql-RightNavTab .sql-lefttab .sql-accordion-tab-list .tab-item').attr('role', 'tab');
        $('.sql-RightNavTab .sql-lefttab .sql-accordion-tab-list li').removeAttr('role');
    }

});