$(document).ready(function () {
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

    $('a.c-back-to-top div').removeAttr('aria-label');
    //$('.main-content .slick-dots li button').removeAttr('aria-selected');
    /* 2715*/
    if (!$("#CP_HeroCarouselWithCopy_1 .slides .video-poster-link").hasClass("open-popup-video")) {
        $("#CP_HeroCarouselWithCopy_1 .slides .video-poster-link").attr("tabindex", "-1");
    }

    $(".custom-popup-container").on('keydown', '.close-button', function (e) {
        if (e.keyCode == 13) {
            $(".custom-popup-container").unbind(e.preventDefault());
            $(".close-button").click();
            setTimeout(function () {
                $(".active-video").focus();
                $(".active-video").removeClass("active-video");
                $('html').removeClass('no-scroll');
            }, 650);
        }
    });




    $(".slide-bar").on("keypress", ".bar-circle-main", function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("click");
        }
    });
    $("#CP_CircleLayersWithSlideText").on("keypress", ".circle-label", function (e) {
        if (e.keyCode == 13) {
            $(this).click();
        }
    })
    /*3091*/
    $("#CP_Table_2Col_1").on("keypress", "#selected-price", function (e) {
        if (e.keyCode == 13) {
            $("#selected-price").trigger("click");
        }
    });


    /*image popup*/
    $(".partner-info .partner-icon ").on("click", function () {
        $(this).addClass("activeImagepopup");
        $('html').addClass('no-scroll');
    });
    // $(".popup-overlay").on("keypress", ".close-button", function (e) {
    // 	if (e.keyCode == 13) {
    // 		$(".activeImagepopup").focus();
    // 		$("activeImagepopup").removeClass("activeImagepopup");
    // 	}
    // });
    /*3689 bug */

    $('#CP_ImageTabs_1 .tab-controls a.tabs').each(function () {
        if ($(this).hasClass('active')) {
            $(this).attr('aria-selected', 'true')
            $(this).siblings().attr('aria-selected', 'false')
        }
        $('#CP_ImageTabs_1 .tab-controls a.tabs').attr('role', 'tab') //4708
        $(this).on('click', function () {
            if ($('#CP_ImageTabs_1 .tab-controls a.tabs').hasClass('active')) {
                $(this).attr('aria-selected', 'true')
                $(this).siblings().attr('aria-selected', 'false')
            }
        })
    });


    $("#CP_ImageTabs_1 .tab-controls").on("keydown", ".tabs", function (e) {
        if (e.keyCode == 13) {
            setTimeout(function () {
                $(".tab-datas .tab-data-container.active").find("a.c-call-to-action").first().focus();
            }, 500)
        }
    });

    // $('.text-center .tab-datas .tab-data-container .tab-data a.mscom-link:last-child').focusout(function () {
    // $('#CP_ImageTabs_1 .tab-controls').find('.tabs.active').next('a.tabs').focus();
    // });

    /*image popup end*/

    /*3475*/

    $(".ul-drop-down .Category-list li").on("click", function () {
        $("#selected-Category").focus();
    });
    /*3475 end*/
    $("#selected-price").on("click", function () {
        if ($(this).next(".price-list").css("display") == "none") {
            $("#selected-price").attr("aria-expanded", "false");
        } else {
            $("#selected-price").attr("aria-expanded", "true");
        }
    });


    $("#CP_Table_2Col_1 .price-list").on("keypress", "li", function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("click");
            $("#selected-price").focus();
        }
    });

    $("#CP_Table_2Col_1 .price-list li:last").focusout(function () {
        $("#selected-price").trigger("click");
    });
    /*3091 end*/
    $("a.open-popup-video, div.open-popup-video").on("click", function () {
        $('html').addClass('no-scroll');
    });
    var popupContainer = 'custom-popup-container';
    $("a.open-popup-video, div.open-popup-video, #CP_Footer_1  div.open-popup-video, #CP_Cortana_6Tabs_1 a.open-popup-video, a.open-inline-video, div.open-inline-video").on("click", function (e) {
        var videoType;
        if ($(this).hasClass("open-popup-video")) {
            videoType = $(this).data("player-type").toLowerCase();
            if (videoType == "oneplayer")
                popupContainer = "c-dialog"
        }
        $(this).addClass("active-video");
        $('.' + popupContainer).bind("keydown", function (e) {
            if (e.shiftKey && e.keyCode == 9) {
                e.preventDefault();
                $(this).focus();
            }
        });
        // setTimeout(function (e) {
        // 	$("."+popupContainer).unbind(e.preventDefault());
        // }, 200);
        /*srikanth 341997*/
        var popuptitle = $(this).attr('aria-label');
        var videotitle = $(this).attr('data-video-title');

        if (videoType == "oneplayer") {
            $('.' + popupContainer + '.one-player-popup-container').find('iframe').attr('title', videotitle);
        } else {
            $('.' + popupContainer + ' .custom-popup-video-container iframe').first().attr('title', videotitle);
        }
        $('.' + popupContainer).attr('aria-label', popuptitle);
        $("a.dummy-link-top").attr('tabindex', '-1');
    })
    /*2686*/
    $("a.dummy-link").on("focus", function () {
        $("a.close-button").focus();
        //$("a.dummy-link-top").attr('tabindex','0');
    });


    $('.custom-popup-container a.close-button').on({
        focus: function () {
            $('.custom-popup-container').attr('tabindex', '-1');
            $("a.dummy-link-top").attr('tabindex', '0');
        },
        keydown: function (e) {
            if (e.shiftKey && e.keyCode == 9) {
                $('.custom-popup-container').attr('tabindex', '-1');
                setTimeout(function () {
                    $("a.dummy-link-top").attr('tabindex', '0').focus();
                    // $("a.dummy-link-top").focus();
                    $('.custom-popup-container').unbind(e.preventDefault());
                }, 20);
            }
            if (e.keyCode == 13) {
                $('.custom-popup-container').unbind(e.preventDefault());
                $(".close-button").click();
            }
        }

    });

    $('.close-button-wrapper a.dummy-link-image-top').on('focus', function () {
        $('.content-container.light-background a.c-call-to-action:last-child').focus();
    });

    $('.custom-popup-container').on({
        focus: function (e) {
            e.preventDefault();
            $("a.dummy-link-top").attr('tabindex', '-1');
        },
        keydown: function (e) {
            if (e.shiftKey && e.keyCode == 9) {
                e.preventDefault();
                $(this).focus();
            }
        }
    });


    $(".custom-popup-container a.dummy-link-top").on("focus", function () {
        $(".social-popup-share li a.twitter").focus();
    });

    /*2986 bug Start */
    if ($('#CP_MediaCarouselWithCopy_1 h3').text() == "") {
        $('#CP_MediaCarouselWithCopy_1 h3').remove();
    }
    if ($('#CP_MediaCarouselWithCopy_1 h2').text() == "") {
        $('#CP_MediaCarouselWithCopy_1 h2').remove();
    }
    if ($("#CP_TopImage1ColWithCopy_1 .c-heading-3").text() == "") {
        $("#CP_TopImage1ColWithCopy_1 .c-heading-3").remove();
    }
    if ($(".cp_media_carousel_with_responsive h3").text() == "") {
        $(".cp_media_carousel_with_responsive h3").remove();
    }
    if ($(".cp_media_carousel_with_responsive h2").text() == "") {
        $(".cp_media_carousel_with_responsive h2").remove();
    }
    if ($("#CP_Table_5Col_1 .table-main-title h2").text() == "") {
        $("#CP_Table_5Col_1 .table-main-title h2").remove();
    }
    if ($('#CP_3SectionsCopy_1 h3').text() == "") {
        $('#CP_3SectionsCopy_1 h3').remove();
    }
    if ($('#CP_3SectionsCopy_1 h2').text() == "") {
        $('#CP_3SectionsCopy_1 h2').remove();
    }
    /*2986 bug End*/
    /*2796*/
    $(".expand-collapse-holder a").click(function (e) {

        $(".accordion-main-panel .ui-accordion-header:first-child").focus();

    });

    $(".expand-collapse-holder a.accordion-expandAll").on("click", function () {
        $(".accordion-main-panel .ui-accordion-header").attr("aria-expanded", "true");
    });
    $(".expand-collapse-holder a.accordion-collapseAll").on("click", function () {
        $(".accordion-main-panel .ui-accordion-header").attr("aria-expanded", "false");
    });
    /*2796 end*/


    $('#CP_Cortana_6Tabs_1 ul.main-menu-ul li.hide-by-default a').attr('role', 'tab');

    // if ($("html").hasClass("high-contrast")){
    // $("#CP_ThreeBGImagesWithCopy img").css("display", "none");
    // }	

    /*2855 Bug*/
    $("#Product-Roadmap-Devpmnt_CP_AccordionWithFilter_1_0").attr("role", "menubar");
    $("#Product-Roadmap-Devpmnt_CP_AccordionWithFilter_1_0").attr("aria-haspopup", "true");
    /*2855 Bug End*/
    /*bug 3075*/
    // $(".high-contrast #CP_HeroCarouselWithCopy_1 .video-poster-link.open-popup-video").append("<img src='//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE155Je?ver=ac61'/>")
    /*bug 3075*/

    /*bug 2758*/
    $(".open-popup-video").each(function () {
        $(this).attr("href", "#");
    })
    /*bug end 2758*/
    $('.popup-overlay .panel-popup .close-button-wrapper .close-button').on('keydown', function (e) {
        if (e.shiftKey && e.keyCode == 9) {
            e.preventDefault();
            $('.panel-popup .close-button-wrapper a.dummy-link-image-top').focus();
        }
    });
    /* 2804 Starting */
    /*after pageloads */
    $(".accordion-main-panel a.accordion-header").each(function () {
        $(this).attr("role", "button");
        setTimeout(function () {
            $(this).hasClass("bg-down-arrow-white") == 1 ? $(this).prev().children("img.bg-down-arrow-white").css("display", "block") && $(this).prev().children("img.bg-right-arrow-white").css("display", "none") : $(this).prev().children("img.bg-right-arrow-white").css("display", "block") && $(this).prev().children("img.bg-down-arrow-white").css("display", "none");
        }, 1000);
    });

    $(".accordion-main-panel a.accordion-header").click(function () {
        setTimeout(function () {
            $(this).hasClass("bg-down-arrow-white") == 1 ? $(this).prev().children("img.bg-down-arrow-white").css("display", "block") && $(this).prev().children("img.bg-right-arrow-white").css("display", "none") : $(this).prev().children("img.bg-right-arrow-white").css("display", "block") && $(this).prev().children("img.bg-down-arrow-white").css("display", "none");
        }, 1000);
    });

    $("img.imageIcon").click(function () {
        $(this).parent().next().click();
    });
    /* 2804 End */



    /*2764 */
    $("#CP_Cortana_6Tabs_1 .main-menu-ul li").each(function () {
        if ($(this).hasClass("current")) {
            $(this).attr("aria-selected", "true").siblings().attr("aria-selected", "false");
        }
    });
    $("#CP_Cortana_6Tabs_1 .main-menu-ul li").on("click", function () {
        $(this).attr("aria-selected", "true").siblings().attr("aria-selected", "false");
        var $sel = $(this).attr("id");
        var $tab = $(this).closest(".menu-bg").siblings(".tab-container");
        $($tab).find("." + $sel).find(".current a").focus();
    });




    /*2837 bug*/
    $(".cp-accordionwithfilter .cp-filter .filterproducts").children().click(function () {
        $(".cp-accordionwithfilter .cp-filter .selected-product").focus();
    });
    $(".cp-accordionwithfilter .cp-filter .filterproducts").children().on('keydown', '.filter-product', function (e) {
        if (e.keyCode == 13) {
            $(".cp-accordionwithfilter .cp-filter a.selected-product").focus();
        }
    });
    if ($(".slickcarousel .slick-track .slick-current").hasClass("theme-dark")) {
        $(".slickcarousel").find("button.slick-arrow").addClass("btn-light");
        $(".slickcarousel").find(".slick-dots li").addClass("btn-light");
    }
    if (!$(".slickcarousel .slick-track .slick-current").hasClass("theme-dark")) {
        $(".slickcarousel").find("button.slick-arrow").addClass("btn-dark");
        $(".slickcarousel").find(".slick-dots li").addClass("btn-dark");
    }

    $(".slickcarousel button.slick-arrow,.slickcarousel .slick-dots li").on("click", function () {

        setTimeout(function () {
            slicktabindex();
        }, 500)


        if ($(this).closest(".slickcarousel").find("slick-current").hasClass("theme-dark")) {
            $(this).closest(".slickcarousel").find("button.slick-arrow").addClass("btn-light");
            $(this).closest(".slickcarousel").find(".slick-dots li").addClass("btn-light");
        }
        if (!$(this).closest(".slickcarousel").find("slick-current").hasClass("theme-dark")) {
            $(this).closest(".slickcarousel").find("button.slick-arrow").addClass("btn-dark");
            $(this).closest(".slickcarousel").find(".slick-dots li").addClass("btn-dark");
        }
    });
    /*2391 Start*/
    $(".open-popup-video, a.video-poster-link.open-popup-video").on("click", function () {
        $(".custom-popup-background .close-button").focus();
        $(".custom-popup-background #custom-youtube-iframe").attr("tabindex", "0");
    });
    /*2391 End*/

    /*2377 Start*/

    // if($(".title").children().attr("class") == "h6 fw-6 pt-0 mt-0 align-center"){
    // 	if($(".title").children().is("p")){
    // $(".title").children().replaceWith($("<h6>"+ $(".title").children().text() + "</h6>"));
    // $(".title").children().addClass("h6 fw-6 pt-0 mt-0 align-center fw-600-c");
    // /*$(".title").children().css("font-weight", "600");*/
    // }
    // }


    $('#CP_TopImage2ColWithCopy_7 p.c-subheading-1, #CP_TopImage2ColWithCopy_3 p.c-subheading-1, #CP_TopImage2ColWithCopy_4 p.c-subheading-1,#CP_TopImage2ColWithCopy_1 p.c-subheading-1,#CP_TopImage2ColWithCopy_2 p.c-subheading-1, #CP_TopImage2ColWithCopy_13 p.c-subheading-1,#CP_TopImage2ColWithCopy_6 p.c-subheading-1, #CP_TopImage2ColWithCopy_8 p.c-subheading-1, #CP_TopImage2ColWithCopy_12 p.c-subheading-1').each(function () {
        $(this).replaceWith($('<h2 class="c-subheading-1">' + this.innerHTML + '</h2>'));
    });
    $('#CP_TopImage2ColWithCopy_7 p.c-heading-4, #CP_TopImage2ColWithCopy_3 p.c-heading-4, #CP_TopImage2ColWithCopy_4 p.c-heading-4,#CP_TopImage2ColWithCopy_1 p.c-heading-4,#CP_TopImage2ColWithCopy_2 p.c-heading-4, #CP_TopImage2ColWithCopy_13 p.c-heading-4,#CP_TopImage2ColWithCopy_6 p.c-heading-4,#CP_TopImage1ColWithCopy_1 ul p.c-heading-4').each(function () {
        $(this).replaceWith($('<h4 class="c-heading-4">' + this.innerHTML + '</h4>'));
    });
    $('#CP_TopImage1ColWithCopy_1 p.h4, #CP_TopImage1ColWithCopy_1 p.c-heading-4').each(function () {
        $(this).replaceWith($('<h3 class="c-heading-4">' + this.innerHTML + '</h3>'));
    });
    $('#CP_TopImage2ColWithCopy_7 p.c-subheading-3, #CP_TopImage2ColWithCopy_3 p.c-subheading-3, #CP_TopImage2ColWithCopy_4 p.c-subheading-3,#CP_TopImage2ColWithCopy_1 p.c-subheading-3,#CP_TopImage2ColWithCopy_2 p.c-subheading-3, #CP_TopImage2ColWithCopy_13 p.c-subheading-3,#CP_TopImage2ColWithCopy_6 p.c-subheading-3').each(function () {
        $(this).replaceWith($('<h4 class="c-subheading-3 light-font">' + this.innerHTML + '</h4>'));
    });
    /*346226 */
    $('#CP_TopImage2ColWithCopy_7 strong.blue-text, #CP_TopImage2ColWithCopy_3 strong.blue-text, #CP_TopImage2ColWithCopy_4 strong.blue-text,#CP_TopImage2ColWithCopy_1 strong.blue-text,#CP_TopImage2ColWithCopy_2 strong.blue-text, #CP_TopImage2ColWithCopy_13 strong.blue-text,#CP_TopImage2ColWithCopy_6 strong.blue-text').each(function () {
        $(this).wrap("<span class='f-w-400 pt-0 db'></span>");
    });
    /*346226 */
    $('#CP_TopImage2ColWithCopy_2 p.c-subheading-2').each(function () {
        $(this).replaceWith($('<h3 class =' + '"' + this.className + '"' + ' >' + this.innerHTML + '</h3>'));
    });
    $('#CP_TopImage2ColWithCopy_1 p.c-subheading-2').each(function () {
        $(this).replaceWith($('<h4 class =' + '"light-font ' + this.className + '"' + ' >' + this.innerHTML + '</h4>'));
    });
    $('#CP_TopImage2ColWithCopy_2 p.c-heading-3').each(function () {
        $(this).replaceWith($('<h2 class =' + '"' + this.className + '"' + ' >' + this.innerHTML + '</h2>'));
    });

    $('#CP_LinkList_1 p.c-subheading-2').each(function () {
        $(this).replaceWith($('<h3 class =' + '"' + this.className + '"' + ' >' + this.innerHTML + '</h3>'));
        $('#CP_LinkList_1 h3.c-subheading-2').addClass("pt-15-c");
    });

    $('#CP_SideTableWithCopy_1 p.h4, #CP_SideTableWithCopy_1 p.c-heading-4').each(function () {
        $(this).replaceWith($('<h3 class =' + '"st-font ' + this.className + '"' + ' >' + this.innerHTML + '</h3>'));
    });

    /*2377 End */

    /*2797*/
    $(".accordion-main-panel a.accordion-header").each(function () {
        if ($(this).hasClass("bg-right-arrow-white")) {
            $(this).attr("aria-expanded", "false");
        }
        if ($(this).hasClass("bg-down-arrow-white")) {
            $(this).attr("aria-expanded", "true");
        }
    })
    $(".accordion-main-panel a.accordion-header").click(function () {
        $(".accordion-main-panel a.accordion-header").each(function () {
            if ($(this).hasClass("bg-right-arrow-white")) {
                $(this).attr("aria-expanded", "false");
            }
            if ($(this).hasClass("bg-down-arrow-white")) {
                $(this).attr("aria-expanded", "true");
            }
        })
    })


    $(".accordion-main-panel a.accordion-header").each(function () {
        if ($(this).hasClass("bg-right-arrow-black")) {
            $(this).attr("aria-expanded", "false");
        }
        if ($(this).hasClass("bg-down-arrow-black")) {
            $(this).attr("aria-expanded", "true");
        }
    })
    $(".accordion-main-panel a.accordion-header").click(function () {
        $(".accordion-main-panel a.accordion-header").each(function () {
            if ($(this).hasClass("bg-right-arrow-black")) {
                $(this).attr("aria-expanded", "false");
            }
            if ($(this).hasClass("bg-down-arrow-black")) {
                $(this).attr("aria-expanded", "true");
            }
        })
    });
    $('.accordion-container .accordion-main-panel a').on('click', function () {
        $(this).focus();
        setTimeout(function () {
            if ($(this).attr('aria-expanded') == 'true') {

                $(this).attr('aria-expanded', 'true');

            }
            if ($(this).attr('aria-expanded') == 'false') {

                $(this).attr('aria-expanded', 'false');
            }
        }, 800);
    });

    /*end of 2797*/

    /*2783*/
    $("#CP_Table_6Col_1 h3").each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    })

    $("#CP_SideTableWithCopy_1 .middle-container h3").each(function () {
        if ($(this).text() == "") {
            $(this).next('p').addClass("mt-2");
            $(this).remove();
        }
    })
    /*2845 end*/

    $("a.open-popup-video, div.open-popup-video, #CP_Footer_1  div.open-popup-video, #CP_Cortana_6Tabs_1 a.open-popup-video, a.video-poster-link.open-popup-video").on("click", function () {

        var opVal = $(".custom-popup-background").css("opacity");
        if (opVal == 0) {
            $(".close-button").attr("tabindex", "0");
            $("a.dummy-link-top").attr("tabindex", "-1");
            $("ul.social-popup-share li a").attr("tabindex", "0");
        }
    });
    /*bug 2914*/
    var opVal1 = $(this).siblings(".filterproducts").css("display") == "block";
    if (opVal1 == true) {
        $("#CP_AccordionWithFilter_1 .selected-product").attr("aria-expanded", "false");
    }
    if (opVal1 == false) {
        $("#CP_AccordionWithFilter_1 .selected-product").attr("aria-expanded", "true");
    }

    $("#CP_AccordionWithFilter_1 .selected-product").on("click", function () {
        var opVal1 = $(this).siblings(".filterproducts").css("display") == "block";
        if (opVal1 == true) {
            $("#CP_AccordionWithFilter_1 .selected-product").attr("aria-expanded", "false");
        }
        if (opVal1 == false) {
            $("#CP_AccordionWithFilter_1 .selected-product").attr("aria-expanded", "true");
        }
    })

    /*bug 2914*/
    $(".close-button").on("click", function () {

        var opVal = $(".custom-popup-background").css("opacity");
        if (opVal == 1) {
            $(".custom-popup-background #custom-youtube-iframe").attr("tabindex", "-1");
            $(".close-button").attr("tabindex", "-1");
            $("a.dummy-link-top").attr("tabindex", "-1");
            $("ul.social-popup-share li a").attr("tabindex", "-1");
            $(".custom-popup-background #custom-youtube-iframe").attr("src", "");
            $(".custom-popup-background").attr("style", "");
            setTimeout(function () {
                $(".active-video").focus();
                $(".active-video").removeClass("active-video");
                $('html').removeClass('no-scroll');
            }, 650);
        }
    });

    /*Bug: 341270 - Ramesh - 2017-09-11*/
    var browserName = navigator.userAgent.toLowerCase();
    if (browserName.indexOf('firefox') >= 1) {
        $('.accordion.v2 .accordion-container .accordion-header').on('keydown', function (e) {
            var currentElement = e.currentTarget;
            if (e.keyCode == 13) {
                var currenttext = $(currentElement).text();
                $(currentElement).attr('aria-label', currenttext);
            }
        });
    }

    /*342749 - Ramesh*/
    $('.main-table-container').each(function () {
        if ($(this).find('.terms_and_conditions fieldset').text() == "") {
            $(this).find('fieldset').remove();
        }
        if ($(this).find('.terms_and_conditions legend').text() == "") {
            $(this).find('legend').remove();
        }
    });


});


$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        var opVal = $(".custom-popup-background").css("opacity");
        if (opVal == 1) {
            $(".close-button").attr("tabindex", "-1");
            $("a.dummy-link-top").attr("tabindex", "-1");
            $(".custom-popup-background #custom-youtube-iframe").attr("tabindex", "-1");
            $("ul.social-popup-share li a").attr("tabindex", "-1");
            $(".active-video").focus();
            $(".active-video").removeClass("active-video");
            $('html').removeClass('no-scroll');
        }
        $(".activeImagepopup").focus();
        $("activeImagepopup").removeClass("activeImagepopup");

    }
});

/*3492 fix */



$(document).on("focus", ".c-back-to-top", function () {
    if ($(this).attr("aria-disabled") == "true") {
        $(this).attr('aria-disabled', 'false');
        $(this).css('opacity', '1');
    }
});
/**3511 */
$(document).ready(function () {
    $(".staticmenu").each(function () {
        $(this).find("#static_menu_1").children().each(function () {
            if ($(this).find("a").text() == null || $(this).find("a").text() == undefined || $(this).find("a").text() == "") {
                $(this).remove();
            }
        });
    });
});

$(window).load(function () {
    $(".locale-list").find("li").each(function () {
        if ($(this).find("a").attr("aria-label") == null || $(this).find("a").attr("aria-label") == undefined || $(this).find("a").attr("aria-label") == "") {
            $(this).find("a").attr("aria-label", $(this).find("a").text());
        }
    });
    $("#mainContent").find(".slickcarousel.slick-slider ul.slick-dots button").attr("tabindex", "0");
    /* 343732*/
    // $("#mainContent").find(".slickcarousel.slick-slider ul.slick-dots button").attr("aria-required", "false");
    $("#mainContent").find(".slickcarousel.slick-slider ul.slick-dots li").attr("aria-hidden", "false");

    // $('.cp-image-tab-carousel .carousel-arrow-slider').attr('aria-hidden', 'true');
    // $('.cp-image-tab-carousel .carousel-arrow-slider img').attr('role', 'presentation');
    $(".slick-track .slick-slide").removeAttr("aria-describedby"); /*srikanth bug:343173*/
});





$(document).ready(function () {
    // 343808 
    $('#CP_AccordionWithTabs .accordion-main-panel .accordionpanel .left-content').find('p:first').attr('role', 'listitem');
    $("#CP_AccordionWithFilter_1 div.cp-lefttab a.selected-product").attr('role', 'menubar');

    if ($('#CP_MediaCarouselWithCopy_1 h3').text() == "") {
        $('#CP_MediaCarouselWithCopy_1 h3').remove();
    }


    $('#CP_ImgGalleryWithOverlay_2 a.partner-icon').each(function () {
        $(this).attr('title', $(this).find('img.partner-thumbnail').attr('title'));
    });
})

function slicktabindex() {
    try {
        $(".hero-carousel").each(function () {

            $(this).find(".hero-carousel-slides").each(function () {

                $(this).find(".video-poster-link").each(function () {
                    if (!($(this).hasClass("open-popup-video") || $(this).hasClass("open-inline-video"))) {
                        $(this).removeAttr("tabindex");
                    }
                });
            });
        });
    } catch (e) {}
}


$(window).load(function () {
    slicktabindex();
    /***************Temporary fix for helper slides duplicate H1 tags*********/
    var $HelperH1 = $('.slick-slider .slick-cloned').find('div h1')
    var $HelperH2 = $HelperH1.next();
    var helperH1Classes = $HelperH1.attr("class");
    var helperH2Classes = $HelperH2.attr("class");
    var helperH1Text = $HelperH1.text();
    var helperH2Text = $HelperH2.text();
    $HelperH1.replaceWith($('<h2 class="' + helperH1Classes + '">' + helperH1Text + '</h2>'));
    $HelperH2.replaceWith($('<h3 class="' + helperH2Classes + '">' + helperH2Text + '</h3>'));
    /***************Temporary fix for helper slides duplicate H1 tags*********/
});


$(document).ready(function () {
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

    /*3922 Start*/
    $('#CP_TwoColVideo_1 a.mscom-link.c-call-to-action').each(function () {
        if ($(this).hasClass('open-popup-video') == false) {
            if ($(this).attr('ms.ea_offer') == 'vid') {
                $(this).attr('ms.ea_offer', 'prd');
            }
        }
    });
    /* 3922 End*/

    /*3946 bug Start*/

    $('#CP_Cortana_6Tabs_1 .activeTab .inner-menu-ul li.x-type-center.hide-by-default a').each(function () {
        if ($(this).text() !== "") {
            if ($(this).attr('tabindex') == '-1') {
                $(this).attr('tabindex', '0');
            }
        }
    });
    $('#CP_Cortana_6Tabs_1 .main-menu-ul li.hide-by-default a').click(function () {
        $('#CP_Cortana_6Tabs_1 .activeTab .inner-menu-ul li.x-type-center.hide-by-default a').each(function () {
            if ($(this).text() !== "") {
                if ($(this).attr('tabindex') == '-1') {
                    $(this).attr('tabindex', '0');
                }
            }
        });
    });
    /*3946 Bug end*/

    /* 3959 Start*/
    var ind = 0;
    var childLength = 0;
    $('.tab-panel').children().eq(0).addClass('tab-panel-item-active').show().siblings().hide();
    $('.white-tablist .tab-list .tab-listitem, .blue-tablist .tab-list .tab-listitem').on('click', function () {
        ind = $(this).index();
        $('.tab-panel').children().eq(ind).addClass('tab-panel-item-active').show().siblings().removeClass('tab-panel-item-active').hide();
        $('.tab-panel').children().eq(ind).find('a:first').focus();

    });
    childLength = $('.white-tablist .tab-list').children('.tab-listitem').length;
    $('.tab-panel').children('.tab-panel-item').find('a:last').focusout(function (e) {
        if (ind + 1 <= childLength - 1) {
            $('.white-tablist .tab-list .tab-listitem').eq(ind + 1).find('a').focus();
        }
    });
    /* 3959 End*/

    $('.white-tablist .tab-list .tab-listitem').on('click', function () {
        $('.tab-panel .tab-panel-item-active a.accordion-header.ui-accordion-header:first').attr('aria-expanded', 'true');
    })
    $('.white-tablist .tab-list .tab-listitem a:last').on('keydown', function (e) {
        if (e.keycode == 9) {
            $('.right-content a').blur();
        }
    });

    var clickCount = 0;
    $('.three-reasons-container .slick-next.slick-arrow').on('click', function () {
        var slideCount = 0;
        clickCount = clickCount + 1
        slideCount = $(this).prev().find('.slick-track .slide-item[role=option]').length;
        if (clickCount < slideCount - 1) {
            $(this).parent('.slick-slider').find('.slick-prev.slick-arrow').focus();
        }
    });

    /*4228 Start*/

    $('#CP_LinkList_1 p.c-subheading-3').each(function () {
        $(this).replaceWith($('<h3 class =' + '"' + this.className + '"' + ' >' + this.innerHTML + '</h3>'));
        $('#CP_LinkList_1 h3.c-subheading-3').addClass("pt-15-c");
    });

    /*4228 End*/

    /*4232 Start*/
    // $('#CP_TryBuyFilter_1 .tryBuyFilter1-drop .desorting a[aria-label="close button"]').attr('role', 'button');
    /*4232 End*/

    try {
        /*3980 Start*/
        //  $('#CP_ImageTabs_1 .tab-controls a.tabs.active').focusout(function(){
        //  $('.text-center .tab-datas .tab-data-container.active a.mscom-link:first').focus();
        //  })

        // $('#CP_ImageTabs_1 .tab-controls .tabs').each(function(){
        // $(this).on('click', function(){
        // $('.text-center .tab-datas .tab-data-container.active a.mscom-link:first').focus();
        // });
        // });
        // 
        // $('.text-center .tab-datas .tab-data-container .tab-data a.mscom-link:last-child').focusout(function(){
        // $('#CP_ImageTabs_1 .tab-controls').find('.tabs.active').next('a.tabs').focus();
        // });
        /*3980 End*/

        /* #CP_StaticMenu Section background color changing to black using the classname to address luminosity issue*/
        if ($('#CP_StaticMenu').hasClass('bg-grey-d2')) {
            $('#CP_StaticMenu').removeClass('bg-grey-d2');
            $('#CP_StaticMenu').addClass('bg-grey-50');
        }


        /*4046 Start*/
        if ($('#CP_TopImage2ColWithCopy_7 .c-subheading-1').is('h1')) {
            $('#CP_TopImage2ColWithCopy_7 h1.c-subheading-1').each(function () {
                $(this).replaceWith($('<h3 class =' + '"' + this.className + '"' + ' >' + this.innerHTML + '</h3>'));
                $('#CP_LinkList_1 h3.c-subheading-2').addClass("pt-15-c");
            });
        }
        /*4046 End*/

        /*4047 Start*/
        $('#CP_SideCopywithColumns_2 h6').each(function () {
            if ($(this).text() == "") {
                $(this).remove();
            }
        })
        /*4047 End*/

        /*3983 Start*/ //sidevideo
        if ($('#CP_SideVideoWithCopy_1 .slick-list .slick-slide a.play-icon').hasClass('open-popup-video') == false) {
            $('#CP_SideVideoWithCopy_1 .slick-list .slick-slide a.play-icon').removeAttr('tabindex');
            $('#CP_SideVideoWithCopy_1 .side-video-slick button.slick-arrow').on('click', function () {
                setTimeout(function () {
                    $('#CP_SideVideoWithCopy_1 .slick-list .slick-slide a.play-icon').removeAttr('tabindex');
                }, 500)
            });
        }
        /*3983 End*/
        /*3969 Start*/
        $('#CP_Cortana_6Tabs_1 .inner-menu-ul li.x-type-center a').on('click', function () {
            setTimeout(function () {
                // $('.inner-tab-container .tab-content.activeTab').find('a.mscom-link:first').focus();
                $(this).focus();
            }, 500);
        });

        /*3969 End*/

        /*4011 Start*/
        if ($('#CP_PageTitle h3.text-right').text() == "") {
            $('#CP_PageTitle h3.text-right').remove();
        }

        if ($('#CP_Table_3Col_1 h4').text() == "") {
            $('#CP_Table_3Col_1 h4').remove();
        }

        /*4011 End  */

        /*4821 bug*/
        $("#CP_PageTitle h3").each(function () {
            $(this).replaceWith($('<h1 class="c-heading-3">' + this.innerHTML + '</h1>'));
        });

        /*4821 end*/

        /*338874 Bug Fix Start*/
        if ($('.accordion .accordion-foot-notes p').is(':empty')) {
            $('.accordion-foot-notes p').css('display', 'none');
        }
        /*338874 Bug Fix End*/

        /*339115 Bug Fix Start*/
        $('.three-reasons-container').each(function () {
            $(this).find(".text-container").each(function () {
                if ($(this).find("p").is(':empty')) {
                    $(this).find("p").css('display', 'none');
                }
            });
        });
        /*339115 Bug Fix End*/

    } catch (e) {}




});


/*339678 Bug fix Start*/
$(document).ready(function () {
    try {
        $('.cp_media_carousel_with_responsive').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
$(document).ready(function () {
    try {
        $('.cp-newsfeed').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
$(document).ready(function () {
    try {
        $('.hero-carousel').each(function () {
            $(this).find(".links.light-bg-cs p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).parent().addClass("mt-2");
                    $(this).remove();
                }
            });
        });
        $('.hero-carousel').each(function () {
            $(this).find("h3").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});


/*339678 Bug fix End*/
/*339786 Bug fix start*/
$(document).ready(function () {
    try {
        $('.cp-four-reasons-1').each(function () {
            $(this).find("h2").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
            $(this).find("h3").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
            $(this).find("p").each(function () {
                var $this = $(this)
                if ($this.is(':empty')) {
                    $this.remove();
                }
            });
        });
    } catch (e) {

    }
});

/*339786 Bug fix end*/
/*339747 Bug fix start*/
$(document).ready(function () {
    try {
        $('.case-study').each(function () {
            $(this).find("h4").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });

        /*Bug 343841*/
        $('.cp-table-6col .livearea').each(function () {
            if ($(this).find("p").is(':empty')) {
                $(this).find("p").remove();
            }
        });
        $('.image-gallery-overlay .panel-popup .content-container').each(function () {
            if ($(this).find("p").is(':empty')) {
                $(this).find("p").remove();
            }
        });
    } catch (e) {

    }
});
/*339747 Bug fix end*/

/*339823 imagetabs accessibility issue*/
function tabheight() {
    setTimeout(function () {
        var minheight = 0;
        $(".image-tabs .tab-controls").children("a").find(".icons .icontext").css("height", "auto");
        $(".image-tabs .tab-controls").children("a").each(function () {
            var liheight = $(this).find(".icons .icontext").outerHeight();
            minheight = minheight > liheight ? minheight : liheight;
        });
        $(".image-tabs .tab-controls").children("a").find(".icons .icontext").css("height", minheight);
    });
}
/*339823 imagetabs accessibility issue*/
/*339800 accessibility issue starts*/
$(document).ready(function () {
    try {
        $('.image-gallery-overlay').each(function () {
            $(this).find("h3").each(function () {
                if ($(this).is(':empty')) {
                    // $('.partner-icons').addClass("mt-3");
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});


/*339800 accessibility issue ends*/
/*339505 accessibility issue ends*/
$(document).ready(function () {
    try {
        $('.top-image-2column-with-copyv1').each(function () {
            $(this).find("h3").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
            /*339503 accessibility issue ends*/
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
            /*339503 accessibility issue ends*/
        });

    } catch (e) {

    }
});
/*339505 accessibility issue ends*/
/*339504 accessibility issue starts*/
$(document).ready(function () {
    try {
        $('.cp-side-media-with-copy').each(function () {
            $(this).find("h3").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
            $(this).find("h2").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
$(document).ready(function () {
    try {
        $('.three-reasons-container').each(function () {
            $(this).find("h2").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
        $('.three-reasons-container').each(function () {
            $(this).find("h3").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
/*339504 accessibility issue ends*/
/*339511 accessibility issue starts*/
$(document).ready(function () {
    try {
        $('.cp-sidetablewithcopy').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});

$(document).ready(function () {
    try {
        $('.hero-1-col').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
/*339504 accessibility issue ends*/
/* 339523 accessibility issue starts */
$(document).ready(function () {
    try {
        $('.case-study-col-with-links').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
/* 339523 accessibility issue ends */
/* 339503 accessibility issue starts */
$(document).ready(function () {
    try {
        $('.CP-link-list').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
$(document).ready(function () {
    try {
        $('.top-image-2column-with-copyv2').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});

$(document).ready(function () {
    try {
        $('.cp-top-image-col1-copy').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});

$(document).ready(function () {
    try {
        $('.cp-5reasons').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
/* 339503 accessibility issue ends */

/*341792*/
$(document).ready(function () {
    $("#mainContent").find(".slick-slider button.slick-prev").attr('title', 'Previous');
    $("#mainContent").find(".slick-slider button.slick-next").attr('title', 'Next');

    /*342532*/
    if ($("#mainContent").find("p a").hasClass("c-call-to-action")) {

    } else if ($("#mainContent").find("p a").hasClass("c-hyperlink")) {
        $("#mainContent").find("p a").addClass("anchor_underline");
    } else {
        $("#mainContent").find("p a").addClass("anchor_underline c-hyperlink");
    }
    /*342532*/
});

/*343281 carousel sequence change*/
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

/*Functional Bug fixes*/
$(document).ready(function () {
    var $legend = $(this).find("div.terms_and_conditions").find("fieldset legend");
    if ($legend.text() == "" || $legend.text().length == 0)
        $legend.hide();
    else
        $legend.show();
})
/*Functional Bug fixes*/

/*srikanth 343296: */
if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
    $('html').addClass('mozilla');
}
$(document).ready(function () {
    try {
        $('.image-tabs .tab-controls').attr('role', 'tablist');
        $('.cortana-6tabs div ul').attr('role', 'tablist');
        $('.cortana-6tabs div ul li a').attr('role', 'tab');
        $('.cortana-6tabs div ul li').attr('role', 'tab');
        $('.cortana-6tabs div ul li a').removeAttr('role', 'tab');
        $('.cortana-6tabs .inner-menu-ul  li').attr('role', 'tab');
        $('.cortana-6tabs .tab-container .activeTab .inner-tab-container .v-align div ul').removeAttr('role');
        // $('.cp_leftNavTab ul.tab-list').attr('role', 'tabitem'); /*commented due to edge and FF SR issue*/
        $('.cp-RightNavTab .cp-lefttab .cp-accordion-tab-list').attr('role', 'tablist');
        $('.hero-carousel-with-button div ul li').attr('role', 'tab');

        $('.cp-table-6col').each(function () {
            $(this).find("p").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
        var linktext;
        $(".cortana-6tabs .main-menu-ul li").on("click", function () {
            linktext = $('.cortana-6tabs .activeTab .inner-menu-ul li.current').text();
            $('.cortana-6tabs .activeTab .inner-menu-ul li.current a').attr('aria-label', linktext + " selected");
        });
        $('.cortana-6tabs .activeTab .inner-menu-ul li').on("click", function () {
            linktext = $('.cortana-6tabs .activeTab .inner-menu-ul li.current').text();
            $('.cortana-6tabs .activeTab .inner-menu-ul li.current a').attr('aria-label', linktext + " selected");
        });


        $("#CP_MediaCarouselWithCopy_1 .slick-dots li").attr("aria-hidden", "false");
        $('.main-table-container tr td:has(img)').addClass('applybackground');
        $('.cp-two-col-video .cp-col2-left div:has(img), .cp-two-col-video .cp-col2-right div:has(img)').addClass('applybackground');
        $('.cp-RightNavTab .cp-righttab .active div:has(img)').addClass('applybackground');
        $('.case-study .case-details .case-details-row div:has(img)').addClass('applybackground');
        $('.cp-side-media-with-copy .cp-col2-right .video-link:has(img)').addClass('applybackground');

        /*343739*/
        $('.cp_leftNavTab .tab-list .tab-listitem a').removeAttr('role');
        $('.m-skip-to-main').attr("aria-label", "skip-to-main-content");
        $(".main-content a.c-call-to-action:after").attr("tabindex", "-1");

        $(".image-gallery-overlay .partners .partner-info a").on("click", function () {
            $(this).addClass("activeImagepopup");
        });

        $(".popup-overlay .panel-popup .close-button-wrapper a.close-button").on("click", function () {
            $(".image-gallery-overlay .partners .partner-info a.activeImagepopup").focus();
            $(".image-gallery-overlay .partners .partner-info a").removeClass("activeImagepopup");
        });

        $(".popup-overlay .panel-popup .close-button-wrapper a.close-button").on("keydown", function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                $(this).click();
                //$(".image-gallery-overlay .partners .partner-info a.activeImagepopup").focus();
                //$(".image-gallery-overlay .partners .partner-info a").removeClass("activeImagepopup");				
            }
        });

        /*343810*/
        $(".accordion .accordion-container a.open-popup-video").on("click", function () {
            $(".custom-popup-container").focus();
        });
        $(".accordion .accordion-container a.open-popup-video").on("keydown", function () {
            if (e.keyCode == 13)
                $(".custom-popup-container").focus();
        });
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


$(document).ready(function () {

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

    if (devicePixelRatio > 1.4) {
        $('.carousel-body').css("max-width", "80%");
    }

    // /* Zoom 200 fix */
    // .carousel - body.c - paragraph - 3 {
    //     max - width: 90 % ;
    //     margin: 0 auto;
    // }

});

$(window).load(function () {

    $(".cp_media_carousel_with_responsive .slick-slider ul.slick-dots li").attr("role", "tab");
    $('.cp_media_carousel_with_responsive').each(function () {
        var $melement = $(this);
        mcarouselOrder($melement);
    });

    $('.three-reasons-container, .cp-four-reasons-1, .five-reasons-container').each(function () {
        var $element = $(this);
        reasonscarouselOrder($element);
        //console.log($element);
    });
    /*346615*/
    if ($('#CP_Footer_2 div h2').text() == "") {
        $('#CP_Footer_2 div h2').remove();
    }
});

function reasonscarouselOrder($element) {
    var elementid = $element.attr("id");
    if ($element.find('ul').hasClass('slick-dots')) {
        $("#" + elementid + " .carouselslide .links a").attr("tabindex", "-1");
        $("#" + elementid + " .slick-arrow").attr("tabindex", "-1");
        $("#" + elementid + " .slick-dots button").attr("tabindex", "-1");
        $("#" + elementid + " .slick-dots .slick-active button").attr("tabindex", "0");

        $("#" + elementid + " .slick-active .links a").blur(function (e) {
            $("#" + elementid + " .slick-dots button").attr("tabindex", "-1");
            $("#" + elementid + " .slick-dots .slick-active button").attr("tabindex", "0");
        });
        $("#" + elementid + " .slick-dots button").on('keydown', function (e) {
            if ((e.which == 39) || (e.which == 40)) {
                $("#" + elementid + " .slick-dots .slick-active").next().children().attr("tabindex", "0").focus().trigger('click');
            }
            if ((e.which == 37) || (e.which == 38)) {
                $("#" + elementid + " .slick-dots .slick-active").prev().children().attr("tabindex", "0").focus().trigger('click');
            }
            if (e.which == 9) {
                $("#" + elementid + " .slick-dots .slick-active button").blur(function () {
                    $("#" + elementid + " .carouselslide.slick-current").first().find("a").first().attr("tabindex", "0").focus();
                    $("#" + elementid + " .carouselslide.slick-active a").attr("tabindex", "0");
                    $("#" + elementid + " .slick-dots button").attr("tabindex", "-1");
                    if ($("#" + elementid + "a").length == "0") {

                        $(".slick-dots .slick-active button").attr("tabindex", "0").blur();
                    }

                })
                $("#" + elementid + " .slick-active .links a").on('focus', function (e) {
                    $("#" + elementid + " .slick-dots button").attr("tabindex", "-1");
                });
                $("#" + elementid + " .slick-active .links a").blur(function (e) {
                    $("#" + elementid + " .slick-dots button").attr("tabindex", "-1");
                    $("#" + elementid + " .slick-dots .slick-active button").attr("tabindex", "0");
                });
            }
        });

        $("#" + elementid + " .slick-dots li:last button").on('keydown', function (e) {
            if ((e.which == 39) || (e.which == 40)) {
                $("#" + elementid + " .slick-dots li:first").children().attr("tabindex", "0").focus().trigger('click');
            }
        });
        $("#" + elementid + " .slick-dots li:first button").on('keydown', function (e) {
            if ((e.which == 37) || (e.which == 38)) {
                $("#" + elementid + " .slick-dots li:last").children().attr("tabindex", "0").focus().trigger('click');
            }
        });
        $('.carouselslide[data-slick-index="0"] .text-container .links a:first').on('keydown', function (e) {
            if (e.shiftKey && e.keyCode == 9) {
                console.log("hi")
                if ($('.slick-dots').is(':visible')) {
                    $('.carouselslide .text-container .links a').attr("tabindex", "-1");
                }
            }

        });
    }
}

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

        $("#" + melementid + " .slick-dots li button").on('keydown', function (e) {
            var _currentEle;
            var _currentIndex;
            var _slickdotscount;
            if (e.keyCode == 39 || e.keyCode == 40) {
                _currentEle = e.currentTarget;
                _currentIndex = $(_currentEle).closest('li').index();
                _slickdotscount = $("#" + melementid + " .slick-dots li").length - 1;
                $("#" + melementid + " .slick-dots li").eq(_currentIndex).next().children().attr("tabindex", "0").focus().trigger('click');
                if (_currentIndex == _slickdotscount) {
                    $("#" + melementid + " .slick-dots li").eq(0).children().attr("tabindex", "0").focus().trigger('click');
                }
            }
            if (e.keyCode == 37 || e.keyCode == 38) {
                _currentEle = e.currentTarget;
                _currentIndex = $(_currentEle).closest('li').index();
                _slickdotscount = $("#" + melementid + " .slick-dots li").length - 1;
                $("#" + melementid + " .slick-dots li").eq(_currentIndex).prev().children().attr("tabindex", "0").focus().trigger('click');
                if (_currentIndex == 0) {
                    $("#" + melementid + " .slick-dots li").eq(_slickdotscount).children().attr("tabindex", "0").focus().trigger('click');
                }
            }
        });

        $('.mediaslide .text-content .links ').children('a:first').on('keydown', function (e) {
            if (e.shiftKey && e.keyCode == 9) {
                if ($('.slick-dots').is(':visible')) {
                    $('.mediaslide .text-content .links a').attr("tabindex", "-1");
                }
                $("#" + melementid + " .slick-dots .slick-active button").attr("tabindex", "0");
            }

        });
    }
}

/*345170*/
$(document).ready(function () {
    $('.accordion .accordion-container .accordion-main-panel button span').each(function () {
        $(this).replaceWith($('<span class="c-paragraph-3"><strong>' + this.innerHTML + '</strong></span>'));
    });
    /*345351*/
    $('.top-image-2column-with-copyv1 .lsc p b').each(function () {
        $(this).replaceWith($('<strong>' + this.innerHTML + '</strong>'));
    });
    $('.top-image-2column-with-copyv1 .rsc p b').each(function () {
        $(this).replaceWith($('<strong>' + this.innerHTML + '</strong>'));
    });
    /*345351*/
});

$(document).ready(function () {
    $(".slick-dots li").attr("role", "tab");

});

/*345220 */
$(document).ready(function () {
    if (navigator.userAgent.indexOf('Edge') !== -1) {
        $(".cp-disclaimer-notes").attr("role", "group");
    }
});


$(document).ready(function () {
    $('#Default_SHARE_FollowUsToolbar').find(".no-padding").prepend($('<span class="x-screen-reader" id="SHARE_FollowUsToolbar_heading">Social media links</span>'));

    var idVal = $("#Default_SHARE_FollowUsToolbar .no-padding span.x-screen-reader").attr('id');
    $('#Default_SHARE_FollowUsToolbar').attr("aria-labelledby", idVal);

})
$(document).ready(function () {
    changeAsteriskToSup();
    changeSupToAnchor();
    $('.main-content p.caption').on('keydown', function (e) {
        if (e.keyCode == 9) {
            //$(this).attr('tabindex','-1');
            $(this).removeAttr('tabindex');
        }
    });

    $('.main-content p.caption').on('blur', function (e) {
        //$(this).attr('tabindex','-1');			
        $(this).removeAttr('tabindex');
    });
    // $('.main-content a.mscom-link').each(function(){

    // 	if ( $(this).attr('target') == '_blank' ){
    // 		if( $(this).attr('aria-label')==""){

    // 		}
    // 	else{
    // 		var arialabelExternallink=$(this).attr('aria-label');
    // 		$(this).attr('aria-label',arialabelExternallink+" opens in new tab");
    // 	}
    // 	}

    // }); 

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
        $(this).closest('p').removeAttr('tabindex');
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
        innerContent.closest('p.caption').removeAttr('tabindex');
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


$(window).load(function () {

    $('.cp-two-col-video').each(function () {
        $(this).find("h2").each(function () {
            if ($(this).is(':empty')) {
                $(this).remove();
            }
        });
    });


    $('.cp_media_carousel_with_responsive .carousel-wrapper ul.slick-dots li button').removeAttr('role');
    $('.cp_media_carousel_with_responsive .carousel-wrapper ul.slick-dots li button').removeAttr('type');
    $("#CP_StaticMenu .nav ul#static_menu_1 li a").on("keydown", function (e) {

        if ((e.which == 39 || e.which == 40) || (e.keyCode == 39 || e.keyCode == 40) || (e.charCode == 39 || e.charCode == 40)) {
            $(this).closest('li').next().find("a").focus();
        }
        if ((e.which == 37 || e.which == 38) || (e.keyCode == 37 || e.keyCode == 38) || (e.charCode == 37 || e.charCode == 38)) {
            console.log("event fired");
            $(this).closest('li').prev().find("a").focus();
        }

        if (e.shiftKey && e.keyCode == 9) {
            // e.stopImmediatePropagation();
            $(this).blur();
        }

    });

    /*Removing <a> tags with empty ids*/

    $('.main-content a.deeplink-element').each(function () {
        if ($(this).attr("id") == "" || $(this).attr("id") == undefined || $(this).attr("id") == null) {
            $(this).remove();
        }
    });
    $(".case-study-col-with-links").each(function () {
        if ($(this).find("span strong").hasClass("fw-6")) {
            $(this).find("span strong").removeClass("normal-font");
        }

    });
    $(".cp-side-media-with-copy span,.case-study-col-with-links span").each(function () {
        if ($(this).find("strong.sub-head-show").is(':empty')) {
            $(this).remove();
        }

    });

});
/* Removing <a> tags with empty ids */
/*346306 */

$(window).resize(function () {
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    if (browserZoomLevel == 200) {
        $('.three-reasons-container .slick-slider ul.slick-dots ').find("li").attr("role", "tab");
        $('.three-reasons-container .slick-slider ul.slick-dots li').find("button").removeAttr("role");

    }

});
$(document).ready(function () {
    if (navigator.userAgent.toLowerCase().indexOf('trident') != -1) {
        console.log("IE browser");
        $('.custom-popup-container a.close-button').on('focus', function () {
            $('.custom-popup-container').removeAttr('role');
            $('.custom-popup-container').removeAttr('aria-label');
        });
    } else {
        $('.custom-popup-container a.close-button').on('focus', function () {
            $('.custom-popup-container').removeAttr('role');
            $('.custom-popup-container').removeAttr('aria-label');
        });
    }
});

/*tootip for static support link */
$(document).ready(function () {
    $(".static-support-links-1").on("focus", function () {
        $(this).trigger("hover");
    });
    $(".static-support-links-2").on("focus", function () {
        $(this).trigger("hover");
    });

    var LPChat = $('#CP_StaticSupportLinks_1_VG .static-support-links-3');
    setTimeout(function () {
        if (LPChat.find('#lpChatButton').children().length == 0 || LPChat.find('#lpChatButton') == undefined) {
            LPChat.remove();
        }
    }, 2200);
});

$(window).on("load", function () {

    $('.c-call-to-action.open-popup-video').each(function () {
        if (!$(this).hasClass('theme-transparent')) {
            $(this).attr('role', 'button');
        }
    });
});
/*end*/


/*  Removing Empty td tag for accordionwithtable*/
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
$(document).ready(function () {
    $(".CP_AccordionWithTable .accordion-header.accordion-heading").each(function () {
        $(this).find('p').removeClass('c-paragraph-3');
    });
});
/*end */
/*AccordionWithTable */
$(document).on("click", ".mobile_table_header", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".subitems").slideToggle(500);
    var currindex = $(this).attr("data-index");
    var activetext = $(this).text();
    //$(this).hide().siblings().show();

    $(this).parents().closest(".CP_AccordionWithTable").addClass("actb");
    $(".actb").find(".selectedacctab").text(activetext);
    $(".actb").find(".selectedacctab").removeClass("bg-down-arrow-black").addClass("bg-right-arrow-black");
    $(".actb").find("td[data-index]").removeClass("active");
    $(".actb").find("td[data-index]").each(function () {
        var tdindex = $(this).attr("data-index");
        if (tdindex == currindex) {

            $(this).addClass("active");
        }
    });
    $(".actb").removeClass("actb");

});
$(document).on("click", ".selectedacctab", function (e) {
    $(this).width()
    $(".subitems").slideToggle(500);
    e.preventDefault();
    e.stopPropagation();
    var icon = $('.selectedacctab-section').find("a");
    icon.toggleClass("bg-right-arrow-black bg-down-arrow-black");
});
/*end*/

$(window).load(function () {
    $('#CP_Footer_1,#CP_Footer_2,#CP_Footer_3').each(function () {
        if ($(this).find('.c-heading-3').text() == "") {
            $(this).find('.c-heading-3').remove();
        }
        if ($(this).find('.c-heading-3').length < 1) {
            $(this).removeAttr('aria-labelledby');
        }
    });
});