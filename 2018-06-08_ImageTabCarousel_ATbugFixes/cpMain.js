/**RTL SPECIFIC JS */
jQuery.fn.replacepadding = function () {
    var current = $(this);
    current.each(function () {
        if (!$(this).hasClass("paddreplaced")) {
            var pclass = $(this).attr("class");
            $(this).addClass("replaced");
            pclass = pclass.replace(/\pl-/g, "lp-");
            pclass = pclass.replace(/\pr-/g, "pl-");
            pclass = pclass.replace(/\lp-/g, "pr-");
            $(this).attr("class", "");
            $(this).addClass(pclass);
            $(this).addClass("paddreplaced");
        }
    });
}
jQuery.fn.replacemargin = function () {
    var current = $(this);
    current.each(function () {
        if (!$(this).hasClass("marreplaced")) {
            var pclass = $(this).attr("class");
            $(this).addClass("replaced");
            pclass = pclass.replace(/\ml-/g, "lm-");
            pclass = pclass.replace(/\mr-/g, "ml-");
            pclass = pclass.replace(/\lm-/g, "mr-");
            $(this).attr("class", "");
            $(this).addClass(pclass);
            $(this).addClass("marreplaced");
        }
    });
}


$(document).ready(function () {
    newsfeedContentHeight();
    // addPadding();
    if ($("body").hasClass("rtl")) {
        $("[class*=' pl-']").replacepadding();
        $("[class*=' pr-']").replacepadding();
        $("[class*=' l-pl-']").replacepadding();
        $("[class*=' l-pr-']").replacepadding();
        $("[class*=' m-pl-']").replacepadding();
        $("[class*=' m-pr-']").replacepadding();
        $("[class*=' s-pl-']").replacepadding();
        $("[class*=' s-pr-']").replacepadding();
        $("[class*=' xs-pl-']").replacepadding();
        $("[class*=' xs-pr-']").replacepadding();

        $("[class*=' ml-']").replacemargin();
        $("[class*=' mr-']").replacemargin();
        $("[class*=' l-ml-']").replacemargin();
        $("[class*=' l-mr-']").replacemargin();
        $("[class*=' m-ml-']").replacemargin();
        $("[class*=' m-mr-']").replacemargin();
        $("[class*=' s-ml-']").replacemargin();
        $("[class*=' s-mr-']").replacemargin();
        $("[class*=' xs-ml-']").replacemargin();
        $("[class*=' xs-mr-']").replacemargin();
    }

});



/**RTL SPECIFIC JS ends*/
$(document).ready(function () {

    $("picture").each(function () {

        if ($(this).find("img").attr("src") == null || $(this).find("img").attr("src") == undefined || $(this).find("img").attr("src") == "") {
            $(this).find("img").remove();
        }

        $(this).children("source").each(function () {

            if ($(this).attr("srcset") == null || $(this).attr("srcset") == undefined || $(this).attr("srcset") == "") {
                $(this).remove();

            }

        });


    });
});

function slickaccessibility() {
    setTimeout(function () {
        $("ul.slick-dots").each(function () {
            var count = $(this).children().length;

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
    setTimeout(function () {
        $('.slick-slider').find('div.slick-list').removeAttr('aria-live');
        $('.slick-slider').find('div.slick-track').removeAttr('role');
        $('.slick-slider').find('div.slick-slide').removeAttr('role');
    }, 100);

    $("ul.slick-dots li button").removeAttr("tabindex");

    /*ImageTabcarousel */
    $('.cp-image-tab-carousel .carousel-thumbnails .carousel-thumbnail-item').each(function () {
        var _currentId = $(this).attr('id');
        var _currentIndex = $(this).index();
        $('.cp-image-tab-carousel .carousel-content-item').eq(_currentIndex).attr('aria-labelledby', _currentId);
    });

});

//start of fr-be CP_TryBuyFilter			
$(document).ready(function () {
    if ($("body").hasClass("fr-be")) {
        $(".CP_tryBuyFilter1 .filterlinks li").each(function () {

            $(this).find("a.TryBuyFilter1").attr("ms.ea_action", "ntd");
            $(this).find("a.TryBuyFilter1").removeAttr("ms.ea_offer");

        });

    }
});
//end of fr-be CP_TryBuyFilter			

/*locale specific js close*/

/*imageupdation*/
function imgclassupdation() {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }

    $("img").each(function () {
        var mobileclass = "";
        var desktopclass = "";
        var mobpresent = [],
            desktoppresent = [];
        if ($(this).attr("data-mobile-class")) {
            mobileclass = $(this).attr("data-mobile-class");
            mobpresent = mobileclass.split(" ")
        }
        if ($(this).attr("data-desktop-class")) {
            desktopclass = $(this).attr("data-desktop-class");
            desktoppresent = desktopclass.split(" ");
        }


        /* End */

        if (windowWidth > 539) {
            if ($(this).attr("data-desktop-class")) {
                if ($(this).hasClass(mobpresent[0])) {
                    $(this).attr("class", " ");

                }

                if (!$(this).hasClass(desktoppresent[0])) {
                    $(this).addClass(desktopclass);

                }
            }
        } else {
            if ($(this).attr("data-mobile-class")) {
                if ($(this).hasClass(desktoppresent[0])) {
                    $(this).attr("class", " ");

                }
                if (!$(this).hasClass(mobpresent[0])) {
                    $(this).addClass(mobileclass);

                }
            }

        }

    });

}
$(document).ready(function () {
    imgclassupdation();
});
$(window).resize(function () {
    imgclassupdation();
});
/*high contrast detection*/

jQuery.fn.HighContrastDetection = function () {
    if ($("span.close-button").css("background-image") == "none") {
        $("html").addClass("high-contrast");

    } else {
        $("html").addClass("normal");
    }

};
/*herocarouselwithcopy*/
function setHeroHeight() {
    setTimeout(function () {
        if ($(".hero-carousel").length > 0) {

            $(".hero-carousel").each(function () {
                var max_height = 0;
                $(this).find(".hero-carousel-slides").css("height", "auto");
                $(this).find(".hero-carousel-slides").find(".text-content").css("height", "auto");
                var cheight = 0;
                $(this).find(".hero-carousel-slides").each(function () {
                    var theight = $(this).find(".text-content").outerHeight();
                    cheight = cheight > theight ? cheight : theight;
                });

                cheight = cheight + 20;

                $(this).find(".hero-carousel-slides").find(".text-content").css("height", cheight);

                $(this).find(".hero-carousel-slides").each(function () {
                    var theme = $(this).attr("data-theme");
                    $(this).addClass(theme);
                    var cheight = $(this).height();
                    max_height = max_height > cheight ? max_height : cheight;

                });
                $(this).find(".hero-carousel-slides").css("height", max_height);
            });
        }
    }, 100);
}
$(document).ready(function () {
    var themes = [];
    var dirrtl = false;
    var count;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $(".hero-carousel").each(function () {
        count = 0;
        var autoplay = false;
        var autoplaySpeed = 5000;
        if ($(this).attr("data-auto-play") == "true") {
            autoplay = true;
            if ($(this).attr("data-auto-play-speed") != undefined && $(this).attr("data-auto-play-speed") != null && $(this).attr("data-auto-play-speed") != "") {
                autoplaySpeed = $(this).attr("data-auto-play-speed");
            }
        } else {
            autoplay = false;
        }
        $(this).find(".hero-carousel-slides").each(function () {
            themes[count] = $(this).attr("data-theme");
            count++;

        });
        if ($(this).find(".slickcarousel").children().length > 1) {
            $(this).find(".slickcarousel").slick({
                dots: true,
                rtl: dirrtl,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: autoplay,
                autoplaySpeed: autoplaySpeed,
                focusOnSelect: true,
                pauseOnFocus: true,
                pauseOnDotsHover: true,
                pauseOnHover: true
            });
            for (var j = 0; j < themes.length; j++) {
                $(this).find("ul.slick-dots").children().eq(j).addClass(themes[j]);
            }
            themes = [];
            setHeroHeight();

        }

    });
});
$(window).resize(function () {
    setHeroHeight();
});

//Sidevideowith copy
$(document).ready(function () {
    if ($(".cp-sidevideo-with-copy.text-on-left") != null) {

        var $holder = $(".cp-sidevideo-with-copy").children().find(".copy-section").clone();
        $(".cp-sidevideo-with-copy .livearea").append($holder);
        $(".cp-sidevideo-with-copy").find(".livearea").children(":last").addClass("mobile");

    }
    contentHeight();
});

function contentHeight() {
    var maxAnchorHeight = 0;
    $('.side-video-carousel .content .caption-text').css("height", "auto");
    setTimeout(function () {
        $(".cp-sidevideo-with-copy").each(function () {

            $(this).find('.side-video-carousel .content .caption-text').each(function () {
                var anchorHeight = $(this).height();
                maxAnchorHeight = maxAnchorHeight > anchorHeight ? maxAnchorHeight : anchorHeight;
            });
            $(this).find('.side-video-carousel .content .caption-text').css('height', maxAnchorHeight);

        });

    }, 10);
}
$(window).resize(function () {
    $('.side-video-carousel .content .caption-text').css("height", "auto");
    setTimeout(function () {
        contentHeight();
    }, 50);
});



/*Start of SideVideoWithCopy Updates to slick carousel */
$(document).ready(function () {
    var dirrtl = false;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $('.cp-sidevideo-with-copy .side-video-slick').slick({
        dots: false,
        rtl: dirrtl,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        responsive: [{
            breakpoint: 1084,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1

            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]

    });

});

/*End of SideVideoWithCopy Updates to slick carousel */

//end Sidevideowith copy


function settingsideemediaminwidth() {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }

    $(".cp-side-media-with-copy").each(function () {

        if (windowWidth > 539) {
            if (!$(this).find(".ms-row").hasClass("no-image")) {
                $(this).find(".cp-col2-right").css("width", "50%");
                var liveareawidth = Math.floor($(this).find(".ms-row .livearea").width() / 2);
                if (liveareawidth > $(this).find(".cp-col2-right").outerWidth()) {
                    $(this).find(".cp-col2-right").css("width", liveareawidth)
                }
            }
        } else {
            $(this).find(".cp-col2-right").css("width", "100%");
        }
    });

}
$(window).resize(function () {
    settingsideemediaminwidth();
});
$(document).ready(function () {
    $(document).HighContrastDetection();
    $(".cp-side-media-with-copy").each(function () {
        if (!$(this).find(".video-poster-link").hasClass("open-popup-video")) {
            if ($(this).find(".video-poster-link").attr("href") == "#") {
                $(this).find(".video-poster-link").removeAttr("href");
                $(this).find(".video-poster-link").css("cursor", "default");
            }
        }

    });
    settingsideemediaminwidth();
    $("a").each(function () {
        var attr = $(this).attr("ms.ea_action");

        if (attr == "dwn") {
            $(this).addClass("download");

        }
    });

    $(".cp-side-media-with-copy").each(function () {
        var sidemediaclass = $(this).find(".ms-row").attr("class");
        if (sidemediaclass.indexOf("l-mt") == -1) {

            $(this).find(".cp-col2-right").addClass("fullheight");
            $(this).find(".cp-col2-left ").addClass("addpadding");

        } else {
            $(this).find(".ms-row").addClass("no-fullimage");
        }
        if ($(this).find(".video-poster-link").parent().find("img").attr("src") == "" || $(this).find(".video-poster-link").parent().find("img").attr("src") == null || $(this).find(".video-poster-link").parent().find("img").attr("src") == undefined || $(this).find(".video-poster-link").parent().find("picture").html() == "" || $(this).find(".video-poster-link").parent().find("picture").html() == undefined || $(this).find(".video-poster-link").parent().find("picture").html() == null || $(this).find(".video-poster-link").parent().html() == "" || $(this).find(".video-poster-link").parent().html() == undefined || $(this).find(".video-poster-link").parent().html() == null) {
            $(this).find(".ms-row").addClass("no-image");
            $(this).find(".cp-col2-right").css("display", "none");
            $(this).find(".cp-col2-left ").css("width", "100%");

        }

    });

});


// To handle unhandled errors which break the javascript code from executing.
window.onerror = function (message, source, lineno, colno, error) {
    console.log("Message: " + message + ", Source:" + source + ", lineno:" + lineno);
}

$(document).ready(function () {

    carouselmaxheight();
});
$(window).resize(function () {

    carouselmaxheight();
});

function carouselmaxheight() {
    $("ul.slides").each(function () {
        if (!$(this).hasClass("no-height")) {
            var maxheight = 0;
            $(this).children("li").css("height", "auto");
            $(this).children("li").each(function () {
                var liheight = $(this).outerHeight();
                maxheight = maxheight > liheight ? maxheight : liheight;
            });
            $(this).children("li").css("height", maxheight);
        }
    });
}

/*4 reasons*/
$(document).ready(function () {
    try {
        var maxHeight = 0;
        var columnHeight = 0;
        //To set same height to column-title

        fourReasonSlick();
        //To set the same height to all teh carousel slides in CP_4Reasons
        setTimeout(function () {
            $('#CP_FourReasons_1 .carousel-items .carousel-item').each(function () {
                var carouselItemHeight = $(this).outerHeight();
                maxHeight = maxHeight > carouselItemHeight ? maxHeight : carouselItemHeight;
            });
            $('#CP_FourReasons_1 .carousel-items .carousel-item').css('height', maxHeight);
        }, 100);
    } catch (e) {
        console.log(e);
    }
});
$(window).resize(function () {

    setTimeout(function () {
        var maxHeight = 0;
        fourReasonSlick();
        $('#CP_FourReasons_1 .carousel-items .carousel-item').css("height", "auto");
        $('#CP_FourReasons_1 .carousel-items .carousel-item').each(function () {
            var carouselItemHeight = $(this).outerHeight();
            maxHeight = maxHeight > carouselItemHeight ? maxHeight : carouselItemHeight;
        });
        $('#CP_FourReasons_1 .carousel-items .carousel-item').css('height', maxHeight);
    }, 100);
});

function fourReasonSlick() {
    if ($.browser.msie) {
        wwidth = $(window).width();
    } else {
        wwidth = $(window).width() + 17;
    }
    var dirrtl = false;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $(".cp-four-reasons-1").each(function () {
        if (wwidth <= 539) {
            if (!$(this).find(".mobcarousel").hasClass("slick-slider")) {
                $(this).find(".mobcarousel").slick({
                    dots: true,
                    rtl: dirrtl,
                    speed: 300,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    pauseOnFocus: false,
                    pauseOnDotsHover: false
                });
                var current = $(this);

                setTimeout(function () {
                    if (current.find(".four-col-reasons-cta").length > 0) {
                        var position = current.find(".four-col-reasons-cta").outerHeight();
                        current.find("ul.slick-dots").css("position", "absolute");
                        current.find("ul.slick-dots").css("left", "0");
                        current.find("ul.slick-dots").css("bottom", "-" + position + "px");
                    }
                }, 100);
            }
        } else {
            if ($(this).find(".mobcarousel").hasClass("slick-slider")) {
                $(this).find(".mobcarousel").slick("unslick");
            }
        }
    });
}
/*cp_tableFormatterjs*/
$(document).ready(function () {
    try {
        $("table").each(function () {
            var currentTable = $(this);
            var temp;
            var evenRowBgColor = $(currentTable).attr("data-odd-row-bg-color");
            var oddRowBgColor = $(currentTable).attr("data-even-row-bg-color");
            if ($(currentTable).hasClass("mbl")) {
                $(this).find("td").css("margin-bottom", "5px");
                temp = evenRowBgColor;
                evenRowBgColor = oddRowBgColor;
                oddRowBgColor = temp;
            }
            $(currentTable).find("tr:odd").find("td").addClass(oddRowBgColor);
            $(currentTable).find("tr:even").find("td").addClass(evenRowBgColor);
            $(currentTable).find("tr:even").find("th[scope=row]").addClass(evenRowBgColor);
            $(currentTable).find("tr:odd").find("th[scope=row]").addClass(oddRowBgColor);
        });

        $(".stage-content .main-table-container.text-on-left").find(".left-container").remove();
        $(".stage-content .main-table-container.text-on-right").find(".right-container").remove();


        var arrowHtml = $("#selected-price b");
        $("#selected-price").click(function () {
            $(".price-list").toggle();
        });

        $(".price-list li").click(function (e) {
            e.preventDefault();
            $("#selected-price").text($(this).text());
            $("#selected-price").attr('aria-label', $(this).text());
            $("#selected-price").append(arrowHtml);
            $(this).parent().hide();
        })
    } catch (err) {
        console.log(err);
    }
});

/*cpsubtabs*/


/*updation tab href-when opened in new tab the page will load automattically with selected tab*/
function updateSubNavTab() {
    var url;

    url = window.location.href;
    url = url.split("cloud-platform")
    url = url[1].toLowerCase();
    $(".cp_subtab").each(function () {
        var selectedtext;
        $(this).find(".tabs").removeClass("active-tab")
        $(this).find(".tabs").each(function () {
            var hrefvalue;
            hrefvalue = $(this).find("a").attr("href").toString();

            hrefvalue = hrefvalue.split("cloud-platform");
            hrefvalue = hrefvalue[1].toLowerCase();
            if (url.indexOf(hrefvalue) != -1) {
                selectedtext = $(this).find("a").text();
                $(this).addClass("active-tab");
            }
        });
        $(this).find(".presenttab span").text(selectedtext);
    });

}
$(document).ready(function () {
    try {
        if ($(".cp_subtab").length > 0) {
            if ($("body").hasClass("split-resource")) {
                updateSubNavTab();
            }
        }
    } catch (err) {

    }


});
/*mediacarouselcentral align*/
function fixcontentHeights() {
    try {
        $(".cp_media_carousel_with_responsive").each(function () {
            var maxheadheight = 0;
            var maxanchorheight = 0;
            $(this).find(".text-content").each(function () {
                $(this).find("h3").css("height", "auto");
                var headheight = $(this).find("h3").outerHeight();
                var anchorheight = $(this).find(".links a").outerHeight();
                maxheadheight = maxheadheight > headheight ? maxheadheight : headheight;
                maxanchorheight = maxanchorheight > anchorheight ? maxanchorheight : anchorheight;
            });
            $(this).find(".text-content").each(function () {
                $(this).find("h3").css("height", maxheadheight);
                $(this).find(".links a").css("height", maxanchorheight);
            });

        });
    } catch (err) {

    }
}

function bodyheight() {
    try {
        var maxtabheight = 0;

        $(".cp_media_carousel_with_responsive").each(function () {
            $(this).find(".text-content").each(function () {
                $(this).find(".body").css("height", "auto");
                var tabheight = $(this).find(".body").outerHeight();
                maxtabheight = maxtabheight > tabheight ? maxtabheight : tabheight;
            });
            $(this).find(".text-content").each(function () {
                $(this).find(".body").css("height", maxtabheight);
            });
        });
    } catch (err) {

    }
}

function mediacarouselcenteralign() {
    try {
        $(".cp_media_carousel_with_responsive").each(function () {
            if ($(this).find(".slick-track").length <= 3) {
                $(this).find(".slick-track").css("left", "auto");
                $(this).find(".slick-track").css("margin", "0 auto");
            }
        });
    } catch (err) {

    }
}



function subtabmenuheight() {
    var maxtabheight = 0;
    $(".cp-tab-parent").find(".tabs").find("a").css("height", "auto");
    $(".cp-tab-parent").find(".tabs").each(function () {
        var tabheight = $(this).find("a").outerHeight();
        maxtabheight = maxtabheight > tabheight ? maxtabheight : tabheight;
    });
    $(".cp-tab-parent").find(".tabs").each(function () {
        $(this).find("a").css("height", maxtabheight);
    });
}
$(document).ready(function () {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }
    $(".cp_subtab .tabs").removeClass("dn");
    if (windowWidth <= 539) {

        $(".cp_subtab .tabs").each(function () {
            // $(".cp_subtab .tabs").removeClass("dn");
            if ($(this).hasClass("active-tab")) {
                $(this).addClass("dn");
            }
        });
    }

});

$(window).resize(function () {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }
    if (windowWidth >= 540) {
        $(".cp-tab-parent").css("height", "auto");
        subtabmenuheight();
        $(".cp_subtab .tabs").removeClass("dn");
        if ($(this).hasClass("active-tab")) {
            $(this).addClass("dn");
        }
        $(".cp-tab-parent").removeClass("tabupdtaed");
        $(".cp-tab-parent").find(".tabs a").removeAttr("tabindex");
    } else {
        $(".cp-tab-parent").css("height", "0px");

        if (!$(".cp-tab-parent").hasClass("tabupdtaed")) {
            $(".cp_subtab .tabs").each(function () {
                //$(".cp_subtab .tabs").removeClass("dn");
                if ($(this).hasClass("active-tab")) {
                    $(this).addClass("dn");
                    $(".cp-tab-parent").find(".tabs a").attr("tabindex", "-1");
                    $(this).parents().closest("section").find(".presenttab span").text($(this).children().text());
                    $(this).parent().addClass("tabupdtaed");

                } else {
                    $(this).removeClass("dn");
                }
            });
        }
    }


});
$(document).on("click", ".cp_subtab .presenttab", function (e) {
    e.preventDefault();
    if (!$(this).children().hasClass("active")) {
        $(this).children().addClass("active");
        $(this).parents().find(".cp-tab-parent").css("height", "auto");
        $(this).parents().find(".cp-tab-parent").find(".tabs a").removeAttr("tabindex");


    } else {
        $(this).children().removeClass("active");
        $(this).parents().find(".cp-tab-parent").find(".tabs a").attr("tabindex", "-1");
        $(this).parents().find(".cp-tab-parent").css("height", "0");

    }


});
$(window).load(function () {
    $(".cpsubdatatabs .tabdata").each(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("dn");
        }
    });

});




/*Mediacarousel intabs*/

function initiateslickafterclick() {

    if ($('.currentsubtabs .tabdata.active').find(".carousel-wrapper").length > 0) {


        if (!$('.currentsubtabs .tabdata.active').find(".carousel-wrapper").hasClass("slickCalled")) {

            if ($('.currentsubtabs .tabdata.active').find(".carousel-wrapper").hasClass("slick-slider")) {

                $('.currentsubtabs .tabdata.active').find(".carousel-wrapper").slick("unslick");

            }
            var dirrtl = false;
            if ($("body").hasClass("rtl")) {
                dirrtl = true;
            }
            $('.currentsubtabs .tabdata.active .cp_media_carousel_with_responsive').each(function () {
                if ($(this).hasClass("smallerimage")) {
                    $(this).find('.carousel-wrapper').slick({
                        lazyLoad: 'ondemand',
                        dots: true,
                        rtl: dirrtl,
                        infinite: false,
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        autoplay: false,
                        //autoplaySpeed: autoplaytime,
                        pauseOnFocus: false,
                        pauseOnDotsHover: true,

                        responsive: [{
                                breakpoint: 1084,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 5,

                                    dots: true,

                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4,

                                    autoplay: false,

                                }
                            },
                            {
                                breakpoint: 540,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,

                                    dots: true


                                }
                            },
                            {
                                breakpoint: 320,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,

                                    dots: false


                                }
                            }
                            // You can unslick at a given breakpoint now by adding:
                            // settings: "unslick"
                            // instead of a settings object
                        ]

                    });
                } else {
                    $(this).find('.carousel-wrapper').slick({
                        dots: true,
                        rtl: dirrtl,
                        infinite: false,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        autoplay: false,

                        pauseOnFocus: false,
                        pauseOnDotsHover: true,
                        responsive: [{
                                breakpoint: 1084,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,

                                    dots: true,
                                    autoplay: false,

                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,


                                }
                            },
                            {
                                breakpoint: 540,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,


                                }
                            },
                            {
                                breakpoint: 320,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,

                                    dots: false,

                                }
                            }
                            // You can unslick at a given breakpoint now by adding:
                            // settings: "unslick"
                            // instead of a settings object
                        ]

                    });
                }

            });
            $('.currentsubtabs .tabdata.active').find(".carousel-wrapper").addClass("slickCalled");




        }
    }

    setTimeout(function () {
        mediacarouselcenteralign();
        fixcontentHeights();
        bodyheight();
        $('.currentsubtabs .tabdata.active').find(".carousel-wrapper").css("visibility", "visible");
        $(".currentsubtabs").removeClass("currentsubtabs");
    }, 10);


}
/*END Mediacarousel intabs*/

$(window).resize(function () {
    $(".slickCalled").removeClass("slickCalled");
});

$(document).on("click", ".cp_subtab .tabs", function (e) {
    if (!$("body").hasClass("split-resource")) {
        e.preventDefault();
        $(this).addClass("active-tab");
        $(this).removeClass("active");
        var currenttext = $(this).children().text();

        var windowWidth;
        if ($.browser.msie) {
            windowWidth = $(window).width();
        } else {
            windowWidth = $(window).width() + 17;
        }
        if (windowWidth <= 539) {
            $(this).parents(".cp-tab-parent").addClass("tabupdtaed");
            //$(this).addClass("dn");
            //$(this).siblings().removeClass("dn");
            $(this).parents().closest("section").find(".presenttab span").text(currenttext);
            $(this).parents().closest("section").find(".presenttab span").removeClass("active");
            $(this).parents(".cp-tab-parent").css("height", "0");
        } else {
            //$(".tabs").removeClass("dn");
            $(this).parents(".cp-tab-parent").css("height", "auto");
            subtabmenuheight();
        }
        $(this).parents().closest(".cpsubtabsconatiner").addClass("currentsubtabs");

        $(this).siblings().removeClass("active-tab");
        $(this).siblings().removeClass("active");
        var selectedIndex = $(this).index();

        $(".currentsubtabs .cpsubdatatabs").children().removeClass("active");
        $(".currentsubtabs .cpsubdatatabs").children().eq(selectedIndex).siblings().css("display", "none");

        $(".currentsubtabs .cpsubdatatabs").children().eq(selectedIndex).fadeIn("200", function () {
            $(".currentsubtabs .cpsubdatatabs").children().eq(selectedIndex).addClass("active");

            initiateslickafterclick();
            $('.currentsubtabs .tabdata.active').find(".carousel-wrapper").css("visibility", "hidden");

        });
        settingsideemediaminwidth();

        $("div.slides").each(function () {
            if (!$(this).hasClass("no-height")) {
                var maxheight = 0;
                $(this).children("div").css("height", "auto");
                $(this).children("div").each(function () {
                    var liheight = $(this).outerHeight();
                    maxheight = maxheight > liheight ? maxheight : liheight;
                });
                $(this).children("div").css("height", maxheight);
            }
        });

        function updatePadding(container, element) {
            try {
                $(container).find('.slides').find('.slide-item').find(element).removeAttr("style");
                var slides = $(container).find('.slides').find('.slide-item');
                var tallestHeight = 0;
                slides.each(function () {
                    var _height = $(this).find(element).outerHeight();
                    if (_height > tallestHeight) {
                        tallestHeight = _height;
                    }
                });
                slides.each(function () {
                    $(this).find(element).height(tallestHeight);
                });
            } catch (e) {

            }


        }
    }
});


/*CpImagetabs*/

var childcount = 0;

$(document).on('click', '.image-tabs .tabs', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).closest(".image-tabs").addClass("clicked");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var selectedindex = $(this).index();
    var $tabdata = $(".clicked .icon-tab-details");
    $tabdata.children().removeClass("active");
    $tabdata.children().eq(selectedindex).siblings().css("display", "none");
    $tabdata.children().eq(selectedindex).fadeIn("200", function () {
        $tabdata.children().eq(selectedindex).addClass("active");
    });

    $(".clicked").removeClass("clicked");
});
var wwidth;
if ($.browser.msie) {
    wwidth = $(window).width();
} else {
    wwidth = $(window).width() + 17;
}
$(document).ready(function () {
    if ($.browser.msie) {
        wwidth = $(window).width();
    } else {
        wwidth = $(window).width() + 17;
    }
    /*Setting liwidth based on childelements*/
    try {
        childcount = $(".image-tabs .tab-controls").children().length;

        var grid = 24;
        var widthclass = "";
        var splitwidth = grid / childcount;
        if ((grid % childcount) == 0) {
            widthclass = "s-col-" + splitwidth + "-24";
        } else {
            splitwidth = childcount;
            widthclass = "nb col-1-" + splitwidth;
        }
        $(".image-tabs .tab-controls").children(".tabs").addClass(widthclass);
        tabheight();


        imageslick();
    } catch (err) {
        console.log(err);
    }


});


$(window).resize(function () {
    if ($.browser.msie) {
        wwidth = $(window).width();
    } else {
        wwidth = $(window).width() + 17;
    }
    if (wwidth <= 539) {

    } else {
        tabheight();

    }
    imageslick();
});

function imageslick() {
    if ($.browser.msie) {
        wwidth = $(window).width();
    } else {
        wwidth = $(window).width() + 17;
    }
    var dirrtl = false;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $(".image-tabs").each(function () {
        if (wwidth <= 539) {
            if (!$(this).find(".icon-tab-details").hasClass("slick-slider")) {
                $(this).find(".icon-tab-details").slick({
                    dots: true,
                    rtl: dirrtl,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    pauseOnFocus: false,
                    pauseOnDotsHover: false
                });
            }
        } else {
            if ($(this).find(".icon-tab-details").hasClass("slick-slider")) {
                $(this).find(".icon-tab-details").slick("unslick");
            }
        }
    });

}

function tabheight() {
    setTimeout(function () {
        var minheight = 0;
        $(".image-tabs .tab-controls").children("a").find(".icons h5").css("height", "auto");
        $(".image-tabs .tab-controls").children("a").each(function () {
            var liheight = $(this).find(".icons h5").outerHeight();
            minheight = minheight > liheight ? minheight : liheight;
        });
        $(".image-tabs .tab-controls").children("a").find(".icons h5").css("height", minheight);
    });
}



/*cp_imageGallery*/

var window_height;

function fixpopupHeight() {
    window_height = $(window).height();

    if (window_height <= $(".panel-popup").outerHeight()) {
        $(".panel-popup").css("height", window_height - 50);
        $(".panel-popup").css("overflow-y", "scroll");
    } else {
        $(".panel-popup").css("height", "auto");
        $(".panel-popup").css("overflow-y", "hidden");
        $(".panel-popup").css("overflow-x", "hidden");
    }


    var topval = $(".popup-overlay").height() / 2 - $(".panel-popup").height() / 2 + "px";
    $(".panel-popup").css("top", topval);

}

$(document).ready(function () {
    $(".image-gallery-overlay .partner-icons .partner-info").each(function () {
        if ($(this).find('a').attr("href") === undefined) {
            $(this).find("a").attr("href", "#");
        }
    });
});

$(window).load(function () {
    $(".image-gallery-overlay .partner-icons .partner-icon").each(function () {
        var a = $(this).attr('popup-hide');
        var b = $(this).attr('href');
        if (b == "#" && a == "hide-popup") {
            $(this).removeAttr('href');
        }
    });
});

$(document).on("click", ".partner-icon", function (e) {

    if ($(this).attr("popup-hide") == "hide-popup") {
        $(".main-content .popup-overlay").css("display", "none");
        $('html').removeClass('no-scroll');
    } else {
        e.preventDefault();
        $('html').addClass('no-scroll');

        var wholehtml = $(this).parent().find(".partner-full-details").html();
        if (wholehtml == null || wholehtml == undefined || wholehtml == "") {
            return false;
        }

        var popup_bgcolor = $(this).parent().find(".partner-full-details").attr("data-popup-bgcolor");
        var wholehtml = $(this).parent().find(".partner-full-details").html();
        var imghtml = $(this).parent().find(".popup-icon").clone().wrap('<p>').parent().html();
        wholehtml = wholehtml.replace(imghtml, " ");
        $(".panel-popup").find(".content-logo").html(imghtml);
        $(".panel-popup").find(".content-container").addClass(popup_bgcolor);
        $(".panel-popup").find(".content-container").html(wholehtml);


        $(".popup-overlay").fadeIn(500, function () {
            $(".popup-overlay").addClass("active");
            /*Task 343069*/
            $('.popup-overlay.active p').each(function () {
                if ($(this).text() == "") {
                    $(this).remove();
                }
            });
            $(".panel-popup").css("height", "auto");
            fixpopupHeight();
        });

        /*edit */
        $('.panel-popup a').attr('tabindex', "0");
        $('.panel-popup a.close-button').focus();

        $('.panel-popup a.dummy-link').focus(function () {
            $('.panel-popup a.close-button').focus();
        });

        $("body").addClass("gallerypopup");
        $("html").addClass("gallerypopup");
    }
});

/*edit*/
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $('.panel-popup a').attr('tabindex', "-1");
        closepopup();
        $('html').removeClass('no-scroll');
    }
    // if (e.keyCode == 13) {
    //     $(".panel-popup a.close-button").click();
    //     closepopup();
    // }
});

$(document).on("click", ".panel-popup .close-button", function () {
    /*edit*/
    $('.panel-popup a').attr('tabindex', "-1");
    closepopup();
    $('html').removeClass('no-scroll');
});
$(window).resize(function () {
    if ($("body").hasClass("gallerypopup")) {
        fixpopupHeight();

    }
});

function closepopup() {
    $(".popup-overlay").fadeOut(400, function () {
        $(".popup-overlay").removeClass("active");
    });
    $("body").removeClass("gallerypopup");
    $("html").removeClass("gallerypopup");
}
$(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
        closepopup();
    }
});
/*cp_accordion*/
$(document).ready(function () {
    try {
        if ($(".accordion").length) {
            var headers = $('.accordion-main-panel .accordion-header');
            var defaultHeader = $('.accordion-main-panel .accordion-header:first');
            var contentAreas = $('.accordion-main-panel .ui-accordion-content ').hide();
            var expandLink = $('.accordion-expandAll');
            var collapseLink = $('.accordion-collapseAll');
            var accordionTitleBgColor = $('.accordion-main-panel').attr("data-accordion-title-bgcolor");
            var accordionArrowClass = $('.accordion-main-panel').attr("data-accordion-arrow-class");

            var bgArrowColor = "black";


            if (accordionArrowClass != "" && accordionArrowClass.toLowerCase() == "bg-right-arrow-white") {
                bgArrowColor = "white";

            }

            $(".accordion-header").each(function () {
                $(this).addClass(accordionTitleBgColor);
                $(this).addClass("bg-right-arrow-" + bgArrowColor);
            });


            function activateAccordion(header) {
                var panel = $(header).next();
                var isOpen = panel.is(':visible');
                var dirrtl = false;
                if ($("body").hasClass("rtl")) {
                    dirrtl = true;
                }
                if (isOpen) {
                    $(header).removeClass("bg-down-arrow-" + bgArrowColor).addClass("bg-right-arrow-" + bgArrowColor);
                    $(header).attr('aria-expanded', 'false');
                    if (navigator.userAgent.toLowerCase().indexOf('edge') > 0 || navigator.userAgent.toLowerCase().indexOf("trident") > 0) {
                        setTimeout(function () {
                            $('#accessible_expand_collapse').text = "";
                        }, 300);
                    } else {
                        $('#accessible_expand_collapse').text('collapsed');
                    }
                    $('#accessible_expand_collapse').attr('aria-hidden', 'false');

                } else {
                    $(header).removeClass("bg-right-arrow-" + bgArrowColor).addClass("bg-down-arrow-" + bgArrowColor);
                    $(header).attr('aria-expanded', 'true');
                    if (navigator.userAgent.toLowerCase().indexOf('edge') > 0 || navigator.userAgent.toLowerCase().indexOf("trident") > 0) {
                        setTimeout(function () {
                            $('#accessible_expand_collapse').text = "";
                        }, 300);
                    } else {
                        $('#accessible_expand_collapse').text('expanded');
                    }
                    $('#accessible_expand_collapse').attr('aria-hidden', 'false');
                }
                setTimeout(function () {
                    $('#accessible_expand_collapse').attr('aria-hidden', 'true');
                }, 3000);

                panel[isOpen ? 'slideUp' : 'slideDown']()
                    .trigger(isOpen ? 'hide' : 'show');
                if (isOpen) {
                    panel.find(".slick-carousel-mobile").each(function () {
                        if ($(this).hasClass("slick-slider")) {
                            $(this).slick("unslick")
                        }
                    });
                } else {
                    panel.find(".slick-carousel-mobile ").each(function () {
                        if ($(this).hasClass("slick-slider")) {
                            $(this).slick("unslick")
                        }
                        $(this).slick({
                            dots: true,
                            rtl: dirrtl,
                            speed: 300,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            pauseOnFocus: false,
                            pauseOnDotsHover: true
                        });
                        slickaccessibility();
                    });
                }
                return false;
            }

            activateAccordion(defaultHeader);

            headers.on({
                click: function (event) {
                    event.preventDefault();
                    var header = $(this);
                    activateAccordion(header);
                    return false;
                },
                keydown: function (event) {
                    var header = $(this);
                    if (event.keyCode == 13 || event.keyCode == 32) {
                        event.preventDefault();
                        event.stopPropagation();
                        activateAccordion(header);
                        return false;
                    }
                    if (event.keyCode == 40) {
                        var $panel = $(this).next();
                        if ($panel.css('display') == "block") {
                            $panel.focus();
                        }
                    }
                }

            });
            expandLink.click(function (event) {

                event.preventDefault();
                $(this).parents().closest(".accordion-container").addClass("accordianselected");

                var isAllOpen = false;
                $(".accordianselected").find(".accordion-header").each(function () {
                    if ($(this).is(":visible")) {
                        $(this).next().addClass("accordionvisible");
                        $(this).next().css("overflow", "hidden");
                    }

                });
                contentAreas = $(".accordianselected .accordionvisible");
                contentAreas[isAllOpen ? 'hide' : 'show']()
                    .trigger(isAllOpen ? 'hide' : 'show');
                headers = $(".accordianselected .accordion-header:visible");
                $(headers).removeClass("bg-right-arrow-" + bgArrowColor).addClass("bg-down-arrow-" + bgArrowColor);
                $(".accordianselected").removeClass("accordianselected");
                $(".accordionvisible").removeClass("accordionvisible");
            });
            collapseLink.click(function (event) {

                event.preventDefault();
                $(this).parents().closest(".accordion-container").addClass("accordianselected");
                contentAreas = $(".accordianselected .ui-accordion-content");
                var isAllOpen = true;

                contentAreas[isAllOpen ? 'hide' : 'show']()
                    .trigger(isAllOpen ? 'hide' : 'show');
                headers = $(".accordianselected .accordion-header:visible");
                $(headers).removeClass("bg-down-arrow-" + bgArrowColor).addClass("bg-right-arrow-" + bgArrowColor);
                $(".accordianselected").removeClass("accordianselected");
            });

            // when panels open or close, check to see if they're all open
            contentAreas.on({
                // whenever we open a panel, check to see if they're all open
                // if all open, swap the button to collapser
                show: function () {
                    contentAreas.parents().closest(".accordion-container").addClass("expclicked")
                    var isAllOpen = !contentAreas.is(':hidden');
                    if (isAllOpen) {

                        $(".expclicked .accordion-expandAll").hide();
                        $(".expclicked .accordion-collapseAll").show();
                        $(".expclicked").removeClass("expclicked");
                    }
                },
                // whenever we close a panel, check to see if they're all open
                // if not all open, swap the button to expander
                hide: function () {
                    contentAreas.parents().closest(".accordion-container").addClass("expclicked")

                    var isAllOpen = !contentAreas.is(':hidden');
                    if (!isAllOpen) {

                        $(".expclicked .accordion-collapseAll").hide();
                        $(".expclicked .accordion-expandAll").show();
                        $(".expclicked").removeClass("expclicked");
                    }
                }
            });

            $(".accordionpanel").each(function () {

                if (($(this).find(".right-content").find(".image-holder").find("picture").html() != "") && (typeof $(this).find(".right-content").find(".button-holder a").prop("href") != 'undefined')) {
                    //Three Column//

                    $(this).find(".left-content").addClass("reset-left-column");
                    $(this).find(".right-content").addClass("reset-right-column");
                    $(this).find(".right-content").find(".image-holder").addClass("set-left-column");
                    $(this).find(".right-content").find(".button-holder").addClass("set-right-column");

                } else if ($(this).find(".right-content").find(".image-holder").find("picture").html() != "") {
                    //Two Column with image container only//
                    $(this).find(".left-content").addClass("set-left-column");
                    $(this).find(".right-content").addClass("set-right-column");
                } else if ((typeof $(this).find(".right-content").find(".button-holder a").prop("href") != 'undefined')) {
                    //Two Column with button container only//
                    $(this).find(".right-content").addClass("decreased-right-column");
                    $(this).find(".right-content").find(".image-holder a").parent().css("display", "none");
                    $(this).find(".right-content").find(".button-holder").addClass("button-holder-max-width");
                    $(this).find(".left-content").addClass("increased-left-column");

                } else {
                    //One Column//
                    $(this).find(".right-content").remove();
                }

                if ($(this).find(".left-content .cta-learn-more").text() == "") {
                    $(this).find(".left-content .cta-learn-more").remove();
                }
                if ($(this).find(".right-content").find(".button-holder a").text() == "") {
                    $(this).find(".right-content").find(".button-holder").remove();
                }
            });
            //To fix padding top 40px to the component
            if ((($('.accordion-headline').text()) == "")) {
                $('.accordion-expandAll').css('margin-top', '2px');
                $('.accordion-collapseAll').css('margin-top', '2px');
            }
            if (($(window).innerWidth()) <= 540) {
                if ((($('.accordion-headline').text()) == "")) {
                    $('.accordion-headline-bar').hide();
                    $('.accordion-main-panel').css('padding-top', '5px');
                }
            } else {
                $('.accordion-headline-bar').show();
            }

            $(window).resize(function () {
                if (($(window).innerWidth()) <= 540) {
                    if ((($('.accordion-headline').text()) == "")) {
                        $('.accordion-headline-bar').hide();
                        $('.accordion-main-panel').css('padding-top', '5px');
                    }

                } else {
                    $('.accordion-headline-bar').show();
                }
            });
        }
        $(document).on('click', '.accordion-expandAll', function () {
            $('.accordion-collapseAll').focus();
        });
        $(document).on('click', '.accordion-collapseAll', function () {
            $('.accordion-expandAll').focus();
        });
    } catch (error) {
        console.log(error.message);
    }
});
/*cpmediacarouselcopy*/

$(document).ready(function () {
    try {
        var lock;
        updateMediaCarousel();
        $(".media-carousel").each(function () {
            if ($(this).find("ul.slides").children().length <= 1) {
                $(this).find('.c-flipper').remove();
                $(this).find('.c-sequence-indicator').remove();
            }
        });
        $(window).resize(function () {
            clearTimeout(lock);
            lock = setTimeout(updateMediaCarousel(), 500);
        });


    } catch (e) {
        console.log('error in  MediaCarousel JS');
    }
});


function updateMediaCarousel() {
    $(".media-carousel").each(function () {
        updatePadding($(this), '.title');
        updatePadding($(this), '.body');
        updatePadding($(this), '.links');
    });

}

function updatePadding(container, element) {
    try {
        container.find('.slides').find('.slide-item').find(element).removeAttr("style");
        var slides = container.find('.slides').find('.slide-item');
        var tallestHeight = 0;
        slides.each(function () {
            var _height = $(this).find(element).outerHeight();
            if (_height > tallestHeight) {
                tallestHeight = _height;
            }
        });
        slides.each(function () {
            $(this).find(element).height(tallestHeight);
        });
    } catch (e) {

    }
}

/*cpHerocarousel*/
$(document).ready(function () {
    try {
        $(".hero-carousel").each(function () {
            if ($(this).find('.subheadline').find('h6').html() != null) {

                if ($(this).find('.subheadline').find('h6').html().length == 0) {

                    $(this).find('.subheadline').remove();
                }
            }

            $(this).find(".video-poster-link").each(function () {
                if (!$(this).hasClass("open-popup-video") && !$(this).hasClass("open-inline-video")) {
                    $(this).removeAttr("href");
                    $(this).css("cursor", "default");
                    $(this).css("outline", "none");
                }
            });
        });
    } catch (e) {
        console.log("Carousel Issue -> " + e.message);
    }
});



/*twoColBGCOLR*/
$(window).on("load resize", function () {
    try {
        var setHeight;
        var setParaHeight;
        var setHeadHeight;
        $(".cp-TwoCol-BGColor .column-1").css("height", "auto");
        $(".cp-TwoCol-BGColor .column-2").css("height", "auto");
        $(".cp-TwoCol-BGColor .column-1 p").css("height", "auto");
        $(".cp-TwoCol-BGColor .column-2 p").css("height", "auto");
        $(".cp-TwoCol-BGColor .column-1 .c-heading-3").css("height", "auto");
        $(".cp-TwoCol-BGColor .column-2 .c-heading-3").css("height", "auto");
        var col1_paraHeight = $(".cp-TwoCol-BGColor .column-1 p").outerHeight();
        var col2_paraHeight = $(".cp-TwoCol-BGColor .column-2 p").outerHeight();
        var head1_paraHeight = $(".cp-TwoCol-BGColor .column-1 .c-heading-3").outerHeight();
        var head2_paraHeight = $(".cp-TwoCol-BGColor .column-2 .c-heading-3").outerHeight();
        if (col1_paraHeight > col2_paraHeight) {
            setParaHeight = col1_paraHeight;
        } else {
            setParaHeight = col2_paraHeight;
        }
        $(".cp-TwoCol-BGColor .column-2 p").css("height", setParaHeight);
        $(".cp-TwoCol-BGColor .column-1 p").css("height", setParaHeight);
        if (head1_paraHeight > head2_paraHeight) {
            setHeadHeight = head1_paraHeight;
        } else {
            setHeadHeight = head2_paraHeight;
        }
        $(".cp-TwoCol-BGColor .column-2 .c-heading-3").css("height", setHeadHeight);
        $(".cp-TwoCol-BGColor .column-1 .c-heading-3").css("height", setHeadHeight);
        var col1_height = $(".cp-TwoCol-BGColor .column-1").outerHeight();
        var col2_height = $(".cp-TwoCol-BGColor .column-2").outerHeight();
        if (col1_height > col2_height) {
            setHeight = col1_height;
        } else {
            setHeight = col2_height;
        }
        $(".cp-TwoCol-BGColor .column-2").css("height", setHeight);
        $(".cp-TwoCol-BGColor .column-1").css("height", setHeight);

    } catch (err) {
        console.log(err);
    }
});
/*cp-static menu*/
/********************Static-Menu*******************/
$('#CP_StaticMenu #static_menu_1 li').on('focus', function () {
    $(this).find('a').focus();
});
var intraPageNavBar = function () {
    var $intraPageNav;
    var intraPageNavTopValue;
    var intraPageNavBottomValue;
    var intraPageNavHeight;
    var $intraPageNavList;
    var $intraPageNavListItems;
    var $intraPageNavLinks;
    var $header;
    var $footer;
    var headerHeight;
    var $bookmarks;
    var $validIntraPageNavLinks;
    var resetContainer;
    var containerTop;
    //getting a collection of components on page
    var $componentIDs;

    function init() {

        resetContainer = false;
        $intraPageNav = $('#CP_StaticMenu');
        $intraPageNavList = $('#CP_StaticMenu ul');
        $intraPageNavListItems = $('#CP_StaticMenu li');
        $componentIDs = [];
        //storing component id strings in an array
        $('div.main-content').find('[id^=CP_]').each(function () {
            $componentIDs.push(this.id)
        });

        if ($intraPageNavListItems.length == 0) {
            return;
        }
        $intraPageNavLinks = $('#CP_StaticMenu a');
        $header = $('.shell-header');
        $footer = $('.shell-footer');
        $bookmarks = [];
        $validIntraPageNavLinks = [];
        intraPageNavTopValue = $intraPageNav.offset().top;
        intraPageNavBottomValue = $intraPageNav.offset().top + $intraPageNav.height();
        intraPageNavHeight = $intraPageNav.outerHeight();
        containerTop = 1.2 * intraPageNavHeight;


        headerHeight = $header.height();

        $intraPageNav.css({
            "top": "0px",
            "padding": "0"
        });

        $intraPageNavLinks.click(function (e) {
            deActivateAllNavBarLinks();
            $(this).addClass('active');
            var element_id = $(this).attr('href').trim();
            var staticMenuScroll = $('#CP_StaticMenu').hasClass('scroll');


            if (staticMenuScroll) {
                adjustContainerPositionScroll(e, element_id, intraPageNavTopValue);
            } else {
                addStickyBehaviour();
                resetContainerPosition();
                adjustContainerPosition(element_id);
            }

        });

        // $intraPageNavLinks.attr('role', 'tab'); //343302
        $intraPageNavListItems.first().find('a').attr('tabindex', '0');

        $intraPageNavLinks.on('keydown', function (e) {
            $intraPageNavListItems.first().siblings().children().attr('tabindex', '-1');
            if (e.keyCode == 13 || e.which == 9 || e.keyCode == 9) {
                // setTimeout(function () {
                adjustContainerPosition(element_id);
                var element_id = $(this).attr('href').trim();
                // }, 1000);
                tempElement = element_id;
                if ($(tempElement).children().has('a')) {
                    $(tempElement).find('div a:first').focus();
                }
                $(this).attr("aria-label", "selected");
                $(this).siblings().children().attr("aria-label", "nonselected");

            }


        });

        // $intraPageNavListItems.on("keydown", function(e) {
        //     if((e.which==13) || (e.keyCode==13)|| (e.charCode==13)){
        //          $(this).children().attr({
        //         "aria-selected": "true",
        //         "aria-label": "selected"
        //     })

        //     $(this).siblings().children().attr({
        //         "aria-selected": "false",
        //         "aria-label": "nonselected"
        //     })
        //     $(this).focus();
        //     }


        // });

        // $intraPageNavListItems.on("click", function () {
        //     $(this).children().attr({
        //         "aria-selected": "true",
        //         "aria-label": "selected"
        //     })

        //     $(this).siblings().children().attr({
        //         "aria-selected": "false",
        //         "aria-label": "nonselected"
        //     })
        //     $(this).focus();

        // });
        var lastItem = $intraPageNavListItems.last();
        if ($($intraPageNavListItems[0]).offset().top != $(lastItem).offset().top) {
            $intraPageNavList.addClass("withoutBorder");
            $intraPageNavListItems.each(function (index, element) {
                $(element).addClass("withBorder");
            });
        }
        var addStickyOnPageLoad = false;
        var $currentBookmark;
        $intraPageNavLinks.each(function (index, element) {
            var hrefValue = $(element).attr('href');
            if (hrefValue) {
                var bookmarkPosition = hrefValue.indexOf('#');
                if (bookmarkPosition >= 0) {
                    var id = hrefValue.substring(bookmarkPosition);
                    if ($(id).length == 1) {
                        var $bookmark = {};
                        $bookmark.id = "#" + $($(id).first()).attr("id");
                        $bookmark.padding = $($bookmark.id).children(":first").css("padding-top");
                        $bookmark.margin = $($bookmark.id).children(":first").css("margin-top");
                        $bookmark.dlpadding = $($bookmark.id).next().children(":first").css("padding-top");

                        $bookmarks.push($bookmark);
                        $validIntraPageNavLinks.push(element);
                        if (!addStickyOnPageLoad && (window.location.hash.toLowerCase() == $bookmark.id.toLowerCase())) {
                            addStickyOnPageLoad = true;
                            $currentBookmark = $(id).first();

                        }
                    }
                }
            }
        });
        $(window).scroll(function () {

            if (resetContainer) {
                resetContainerPosition();


            }
            if ($(window).scrollTop() > intraPageNavTopValue) {
                if ($(window).scrollTop() > Math.floor($($bookmarks[0].id).offset().top) - (intraPageNavHeight * .75)) {
                    addStickyBehaviour();

                } else {
                    removeStickyBehaviour();

                }
            } else if ($(window).scrollTop() < Math.floor($($bookmarks[0].id).offset().top) - (intraPageNavHeight * 1.05)) {
                removeStickyBehaviour();

            }
            $.each($bookmarks, function (index, element) {
                if (element != null && ($(window).scrollTop() >= Math.floor($(element.id).offset().top - containerTop))) {
                    deActivateAllNavBarLinks();
                    $($validIntraPageNavLinks[index]).addClass('active');
                }
            });
        });

        if (addStickyOnPageLoad) {

            window.scrollTo(0, Math.ceil($currentBookmark.offset().top));
        }
    }

    function deActivateAllNavBarLinks() {
        $intraPageNavLinks.each(function (index, element) {
            if ($(element).hasClass('active')) {
                $(element).removeClass('active');
            }
        });
    }

    function addStickyBehaviour() {
        if (!$intraPageNav.hasClass('sticky'))
            $intraPageNav.addClass('sticky');
    }

    function removeStickyBehaviour() {
        if ($intraPageNav.hasClass('sticky')) {
            $intraPageNav.removeClass('sticky');
            $('#CP_StaticMenu .nav-grid-container').children("div:first").css("padding-bottom", "0");
            $('#CP_StaticMenu .nav-grid-container ul li a').removeClass('active');
        }
        deActivateAllNavBarLinks();

    }
    var tempElement;

    function adjustContainerPosition(element) {
        tempElement = element;
        var componentIdFlag = false;
        var staticMenuId = tempElement.split('#');

        var lastElement = staticMenuId[staticMenuId.length - 1]

        for (var i = 0; i < $componentIDs.length; i++) {
            if (lastElement == $componentIDs[i]) {
                componentIdFlag = true;
                break;
            }
        }
        var _height = $('#CP_StaticMenu').height();
        if (componentIdFlag) {
            $(element).children(":first").css("margin-top", "0px");
            $(element).find('div a:first').focus(); /*Bug: 343310*/
            $('#CP_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");
            $(element).children(":first").css("padding-top", _height + "px");
            setTimeout(function () {
                resetContainer = true;
            }, 500);
        } else {
            $(element).next().children(":first").css("margin-top", "0px");
            $(element).find('div a:first').focus(); /*Bug: 343310*/
            $('#CP_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");
            $(element).next().children(":first").css("padding-top", _height + "px");
            setTimeout(function () {
                resetContainer = true;
            }, 500);
        }
    }

    function adjustContainerPositionScroll(event, element, staticMenuPosition) {
        tempElement = element;
        var componentIdFlag = false;
        var staticMenuId = tempElement.split('#');
        var lastElement = staticMenuId[staticMenuId.length - 1];
        var edgeBanner = 0;
        var $componentTarget = "";
        var componentAboveStaticMenu = "";
        var componentBelowStaticMenu = "";
        var staticMenuOriginalPosition = 0;

        edgeBanner = $('#headerArea').height();

        if (!edgeBanner > 150) {
            edgeBanner = 0;
        }

        for (var j = 0; j < $componentIDs.length; j++) {
            if ($componentIDs[j] == 'CP_StaticMenu') {
                componentBelowStaticMenu = $componentIDs[j + 1];
                componentAboveStaticMenu = $componentIDs[j - 1];
                break;
            }
        }
        staticMenuOriginalPosition = $('#' + componentAboveStaticMenu).offset().top + $('#' + componentAboveStaticMenu).height();

        for (var j = 0; j < $componentIDs.length; j++) {
            if ($componentIDs[j] == lastElement) {
                componentIdFlag = true;
                break;
            }
        }

        if (!componentIdFlag) {
            $componentTarget = $('a' + element).closest('div').find('[id^=CP_]').attr('id');
        } else {
            $componentTarget = element;
        }


        var staticMenu_height = $('#CP_StaticMenu').height();

        event.preventDefault();
        if (componentIdFlag) {
            $(element).children(":first").css("margin-top", "0px");
            $('#CP_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");



            if ($(window).scrollTop() <= staticMenuOriginalPosition && $componentTarget == ('#' + componentBelowStaticMenu)) {
                if ($('#CP_StaticMenu').hasClass('sticky')) {
                    $('html, body').animate({
                        scrollTop: $(window).scrollTop()
                    }, 1000);
                } else {
                    $('html, body').animate({
                        scrollTop: (staticMenuOriginalPosition)
                    }, 1000);
                }
            } else if ($(window).scrollTop() == staticMenuOriginalPosition) {
                addStickyBehaviour();
                $('html, body').scrollTop(staticMenuOriginalPosition - staticMenu_height);
                $('html, body').animate({
                    scrollTop: (($($componentTarget).offset().top) - (staticMenu_height))
                }, 1000);
            } else if ($(window).scrollTop() < staticMenuOriginalPosition) {
                if ($('#CP_StaticMenu').hasClass('sticky')) {
                    $('html, body').animate({
                        scrollTop: (($($componentTarget).offset().top) - (staticMenu_height))
                    }, 1000);

                } else {
                    $('html, body').animate({
                        scrollTop: (($($componentTarget).offset().top) - (staticMenu_height * 2))
                    }, 1000);
                }
            } else {
                addStickyBehaviour();
                $('html, body').animate({
                    scrollTop: (($($componentTarget).offset().top) - staticMenu_height)
                }, 1000);
            }
            setTimeout(function () {
                var tabindexChecker = $($componentTarget).parent('div').find('a:first').attr('tabindex');
                var tempComponentTarget = $($componentTarget).parent('div').find('a:first');
                if (typeof tabindexChecker !== typeof undefined && tabindexChecker !== false) {
                    tempComponentTarget.focus();
                } else {
                    tempComponentTarget.attr('tabindex', '-1');
                    tempComponentTarget.focus();
                    tempComponentTarget.removeAttr('tabindex');
                }
            }, 1000);
        } else {
            $(element).next().children(":first").css("margin-top", "0px");
            $('#CP_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");

            if ($(window).scrollTop() <= staticMenuOriginalPosition && $componentTarget == componentBelowStaticMenu) {
                if ($('#CP_StaticMenu').hasClass('sticky')) {
                    $('html, body').animate({
                        scrollTop: $(window).scrollTop()
                    }, 1000);
                } else {
                    $('html, body').animate({
                        scrollTop: (staticMenuOriginalPosition)
                    }, 1000);
                }
            } else if ($(window).scrollTop() == staticMenuOriginalPosition) {
                addStickyBehaviour();
                $('html, body').scrollTop(staticMenuOriginalPosition - staticMenu_height);
                $('html, body').animate({
                    scrollTop: (($('#' + $componentTarget).offset().top) - (staticMenu_height))
                }, 1000);
            } else if ($(window).scrollTop() < staticMenuOriginalPosition) {
                if ($('#CP_StaticMenu').hasClass('sticky')) {
                    $('html, body').animate({
                        scrollTop: (($('#' + $componentTarget).offset().top) - (staticMenu_height))
                    }, 1000);

                } else {
                    $('html, body').animate({
                        scrollTop: (($('#' + $componentTarget).offset().top) - (staticMenu_height * 2))
                    }, 1000);
                }
            } else {
                addStickyBehaviour();
                $('html, body').animate({
                    scrollTop: (($('#' + $componentTarget).offset().top) - staticMenu_height)
                }, 1000);
            }

            setTimeout(function () {
                //resetContainer = true;
                var tabindexChecker = $("#" + $componentTarget).parent('div').find('a:first').attr('tabindex');
                var tempComponentTarget = $("#" + $componentTarget).parent('div').find('a:first');
                if (typeof tabindexChecker !== typeof undefined && tabindexChecker !== false) {
                    tempComponentTarget.focus();
                } else {
                    tempComponentTarget.attr('tabindex', '-1');
                    tempComponentTarget.focus();
                    tempComponentTarget.removeAttr('tabindex');
                }
            }, 1000);
        }
    }

    function resetContainerPosition() {
        $.each($bookmarks, function (index, element) {
            $(element.id).children(":first").css("margin-top", $bookmarks[index].margin);
            $(element.id).children(":first").css("padding-top", $bookmarks[index].padding);
            $(element.id).next().children(":first").css("padding-top", $bookmarks[index].dlpadding);
        });

        resetContainer = false;

    }


    return {
        init: init
    };
}();

$(document).ready(function () {
    setTimeout(function () {
        intraPageNavBar.init();
    }, 1500);

});

function stickynavheight() {
    try {
        setTimeout(function () {
            var max_height = 0;
            $(".dtc a").css("height", "auto");
            $("#CP_StaticMenu").find(".dtc").each(function () {

                var curheight = $(this).find("a").outerHeight();
                max_height = max_height > curheight ? max_height : curheight;

            });
            $(".dtc a").css("height", max_height);
        }, 100);
    } catch (err) {

    }
}


$(document).ready(function () {
    try {
        if ($("ul#static_menu_1").length > 0) {
            stickynavslick();
            stickynavheight();
        }

    } catch (err) {

    }

});
$(window).resize(function () {
    try {
        if ($("#static_menu_1").length > 0) {

            stickynavheight();
        }

    } catch (err) {

    }

});

/********************Static-Menu*******************/
/*silent-loopingvideo*/



/*threecolumn multibgcolor */
$(document).ready(function () {

    setheight();


});
$(window).resize(function () {

    setheight();


});

function setRowHeight(columnname) {
    try {
        var finalHeight = 0;
        columnname.each(function () {
            var colHeight = $(this).outerHeight();
            finalHeight = finalHeight > colHeight ? finalHeight : colHeight;
        });
        columnname.css('height', finalHeight);
    } catch (err) {
        console.log(err);
    }
}

function setheight() {
    try {
        var windowWidth;
        if ($.browser.msie) {
            windowWidth = $(window).width();
        } else {
            windowWidth = $(window).width() + 17;
        }


        if ((windowWidth <= 1083) && (windowWidth > 539)) {
            $(".text-row").children().css("height", "auto");
            $(".column").each(function () {
                try {
                    var finalHeight = 0;
                    $(this).children().css("height", "auto");
                    $(this).children().each(function () {
                        var colHeight = $(this).outerHeight();
                        finalHeight = finalHeight > colHeight ? finalHeight : colHeight;
                    });
                    $(this).children().css('height', finalHeight);
                    $('.column .content').addClass('v-center');
                } catch (err) {
                    console.log(err);
                }
            });
        } else if (windowWidth > 1083) {
            $('.column .content').removeClass('v-center');
            $(".column").children().css("height", "auto");
            setTimeout(function () {
                setRowHeight($(".column-container .CTA-row"));
                setRowHeight($(".column-container .text-row-1"));
                setRowHeight($(".column-container .text-row-2"));
                setRowHeight($(".column-container .text-row-3"));
                setRowHeight($(".column-container .image-row"));
            }, 500);

        } else {
            $('.column .content').removeClass('v-center');
            $(".column").children().css("height", "auto");

        }
    } catch (error) {
        console.log(error);
    }
}

/*expandtable */
$(document).on("click", ".explore", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");

    $(this).parent().find(".expandtable").animate({

        height: "toggle"
    }, 1000, function () {
        $(this).toggleClass("active");
    });


});

/*menu-highlighter*/

function replace_last_slash(x) {
    var pos = x.lastIndexOf('/');
    return x.substring(0, pos) + '-' + x.substring(pos + 1);
}

function UHFResourcesMenuHighlighter() {

    var cpSubTabNav = $(".cp_subtab");
    if ($(".cp_subtab").length > 0) {
        $('ul.c-menu-container.shell-category-top-level.shell-category-nav-wrapper .c-top-nav-item a').removeClass("current");
        cpSubTabNav.find(".tabs").each(function () {
            if ($(this).attr("data-resources") == "resources") {
                $('ul.c-menu-container.shell-category-top-level.shell-category-nav-wrapper .c-top-nav-item').each(function () {
                    var href = $(this).find("a").attr("href").toString().split("/");
                    var thisHref = href.pop();
                    if (thisHref.indexOf("resources") > -1)
                        $(this).find("a").addClass("current");
                });
                return false;
            }
        });
        $('#uhf-c-nav > a').removeClass("current");
        cpSubTabNav.find(".tabs").each(function () {
            if ($(this).attr("data-resources") == "resources") {
                $('#uhf-c-nav a.c-uhf-nav-link').each(function () {
                    var href = $(this).attr("href").toString().split("/");
                    var thisHref = href.pop();
                    if (thisHref.indexOf("resources") > -1)
                        $(this).addClass("current");
                });
                return false;
            }
        });
    }

}

$(document).ready(function () {

    try {
        var relativeUrl = window.location.search != "" ? window.location.pathname + window.location.search : window.location.pathname;
        var pageNameStartIndex = relativeUrl.lastIndexOf('/');
        var pageFromUrl = relativeUrl.substring(pageNameStartIndex + 1).split('?')[0];


        var activeLinkObjId = "";

        $('#uhf-c-nav a').each(function (index, value) {
            var uhfAnchorValue = value.toString();

            // To handle 'internet-of-things' urls in UHF  //
            if (uhfAnchorValue.indexOf("/cloud-platform/") > -1) {
                var index = uhfAnchorValue.lastIndexOf('/');
                var cpPageName = uhfAnchorValue.substring(index + 1).split('.')[0];
                //console.log(cpPageName.toString());

                if (pageFromUrl.toString().toLowerCase() == cpPageName.toString().toLowerCase()) {
                    activeLinkObjId = $(value).attr('id');
                    $("#" + activeLinkObjId).addClass('current');
                    $("#" + activeLinkObjId).closest(".c-uhf-menu").addClass('currentParent');
                    $("#" + activeLinkObjId).parents('li.f-sub-menu').addClass('currentSubParent');
                }
                //if (pageFromUrl.toString().toLowerCase().indexOf(cpPageName.toString().toLowerCase()) >= 0) {
                //console.log($(value).attr('id'));
                //activeLinkObjId = $(value).attr('id');
                //}
                // if ((activeLinkObjId == "") && (cpPageName.toString().toLowerCase().indexOf(pageFromUrl.toString().toLowerCase()) > -1) && (cpPageName.toString().toLowerCase().indexOf("overview")) > -1) {
                //     activeLinkObjId = $(value).attr('id');
                // } ****Bug fixing of UHF highlighter****
            }
        });

        if (window.msCommonShell) {
            $('ul.c-menu-container.shell-category-top-level.shell-category-nav-wrapper .c-top-nav-item a').each(function (index, value) {
                var uhfAnchorValue = value.toString();

                // To handle 'server-cloud' urls in UHF //
                if (uhfAnchorValue.indexOf("/server-cloud/") > -1) {
                    var replacedVal = replace_last_slash(value.toString());
                    var n = replacedVal.lastIndexOf('/');
                    var scPageName = replacedVal.substring(n + 1).split('.')[0];
                    if (pageFromUrl.toString().toLowerCase().indexOf(scPageName.toString().toLowerCase()) >= 0) {
                        activeLinkObjId = $(value).attr('id');
                    }

                }

                // To handle 'cloud-platform' urls in UHF  //
                if (uhfAnchorValue.indexOf("/cloud-platform/") > -1) {
                    var index = uhfAnchorValue.lastIndexOf('/');
                    var cpPageName = uhfAnchorValue.substring(index + 1).split('.')[0];
                    //console.log(cpPageName.toString());

                    if (pageFromUrl.toString().toLowerCase() == cpPageName.toString().toLowerCase()) {
                        activeLinkObjId = $(value).attr('id');
                    }
                    //if (pageFromUrl.toString().toLowerCase().indexOf(cpPageName.toString().toLowerCase()) >= 0) {
                    //console.log($(value).attr('id'));
                    //activeLinkObjId = $(value).attr('id');
                    //}



                }
            });

        }
        var shellOptions = {
            currentMenuItemId: activeLinkObjId
        };
        window.msCommonShell.load(shellOptions);

    } catch (err) {
        console.log(err.message);
    }
});
$(window).load(function () {
    UHFResourcesMenuHighlighter();
});
/*5 reasons*/
$(document).ready(function () {
    try {

        var lock;
        update5R();
        fiveReasonSlick();
        $(window).resize(function () {
            clearTimeout(lock);
            lock = setTimeout(update5R(), 500);
        });

        function update5R() {
            updateHeight('.five-reasons-container', '.column-title');
            updateHeight('.five-reasons-container', '.column-body')
            updateHeight('.cp-four-reasons-1', 'h3.column-title'); //four-reasons Bug #336899 Fix By Nagaraju K;					updateHeight('.cp-four-reasons-1','h6.column-title');//four-reasons;
            updateHeight('.cp-four-reasons-1', 'p.body-alt'); //four-reasons Bug #336899 Fix By Nagaraju K;		
        }

    } catch (e) {
        console.log('error in Five Reasons Carousel JS');
    }
});


function updateHeight(container, element) {

    var slides = $(container).find('.slides').find('.slide-item');

    if (container == ".cp-four-reasons-1") { //four-reasons Bug #336899 Fix By Nagaraju K;;
        slides = $(container).find('.carousel-items').find(".carousel-item");
    }

    slides.css('height', 'auto');
    var tallestHeight = 0;
    slides.each(function () {
        $(this).find(element).removeAttr("style")


        var _height = $(this).find(element).outerHeight();

        if (_height > tallestHeight) {
            tallestHeight = _height;



        }
    });
    slides.each(function () {
        $(this).find(element).css("height", tallestHeight);
    });
}

function fiveReasonSlick() {
    var dirrtl = false;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    var wwidth;
    if ($.browser.msie) {
        wwidth = $(window).width();
    } else {
        wwidth = $(window).width() + 17;
    }
    $(".five-reasons-container").each(function () {
        if (wwidth < 540) {
            if (!$(this).find("div.slides").hasClass("slick-slider")) {
                $(this).find("div.slides").slick({
                    dots: true,
                    rtl: dirrtl,
                    speed: 300,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnFocus: false,
                    pauseOnDotsHover: false

                });
                var current = $(this);
                setTimeout(function () {
                    if (current.find("#CP_5Reason_cta").length > 0) {
                        var position = current.find("#CP_5Reason_cta").outerHeight() + 30;
                        current.find("ul.slick-dots").css("position", "absolute");
                        current.find("ul.slick-dots").css("left", "0");
                        current.find("ul.slick-dots").css("bottom", "-" + position + "px");
                    }
                }, 100);
            }
        } else {
            if ($(this).find("div.slides").hasClass("slick-slider")) {
                $(this).find("div.slides").slick("unslick");
            }
        }

    });
}

$(window).resize(function () {
    fiveReasonSlick();
});

/*3 reasons carousel*/

$(document).ready(function () {
    try {

        var lock;
        threeReasonSlick();
        updatePadding();

        function updatePadding() {
            try {
                $('.three-reasons-container').each(function () {
                    $(this).find('.slides').find('.slide-item').find('.text-container h3').css("height", "auto");
                    $(this).find('.slides').find('.slide-item').find('.text-container p').css("height", "auto");
                    var slides = $(this).find('.slides').find('.slide-item');
                    var tallestHeight = 0;
                    var paraHeight = 0;
                    slides.each(function () {
                        var _height = $(this).find('.text-container  h3').outerHeight();
                        var pHeight = $(this).find('.text-container  p').outerHeight();
                        if (_height > tallestHeight) {
                            tallestHeight = _height;
                        }
                        if (pHeight > paraHeight) {
                            paraHeight = pHeight;
                        }

                    });
                    slides.each(function () {
                        $(this).find('.text-container  h3').css("height", tallestHeight);
                        $(this).find('.text-container  p').css("height", paraHeight);

                    });
                });
            } catch (e) {

            }
        }


        $(window).resize(function () {
            clearTimeout(lock);
            lock = setTimeout(updatePadding, 500);
        });
    } catch (e) {
        console.log('error in Three Reasons Carousel JS');
    }
});

function threeReasonSlick() {
    var rtldir = false;
    if ($("body").hasClass("rtl")) {
        rtldir = true;
    }

    $(".three-reasons-container").each(function () {


        $(this).find("div.slides").slick({
            dots: false,
            rtl: rtldir,
            speed: 300,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true

                }
            }, {
                breakpoint: 540,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }]
        });
        if ($(this).find(".links").html() == "" || $(this).find(".links").html() == null || $(this).find(".links").html() == undefined) {
            $(this).find(".links").remove();
        }
        alignPaginationButton();
    });
}

function alignPaginationButton() {
    setTimeout(function () {
        $(".three-reasons-container").each(function () {
            if ($(this).find("#CP_3Reason_cta").length > 0) {
                var position = $(this).find("#CP_3Reason_cta").outerHeight();
                $(this).find("ul.slick-dots").css("position", "absolute");
                $(this).find("ul.slick-dots").css("left", "0");
                $(this).find("ul.slick-dots").css("bottom", "-" + position + "px");
            }

        });
    }, 100);
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    if (browserZoomLevel == 200) {
        $(this).find("ul.slick-dots").css("padding-bottom", "-61px !important");
    }
}
$(window).resize(function () {
    alignPaginationButton();

});

/*addtaggingID*/
$(document).ready(function () {
    try {
        var pagename = $('[data-pagename]').attr("data-pagename");
        $('[data-tag]').each(function () {
            var datatag = $(this).attr("id");
            $(this).addClass("top-parent-element");
            var count = 0;
            $(this).find("a").each(function () {
                if (!$(this).attr("data-no-tag")) {
                    $(this).attr("id", (pagename + "_" + datatag + "_" + count));
                    count++;
                }
            });



        });
    } catch (err) {
        console.log(err);

    }

});
$(window).resize(function () {
    if ($(window).width() < 900) {
        $(".shell-category-header #shell-cat-header-logo-mobile").css("display", "block");
    } else {
        $(".shell-category-header #shell-cat-header-logo-mobile").css("display", "none");
    }
});


/*Start--CP_TwoColVideoCarousel*/
$(document).ready(function () {
    var dirrtl = false;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    var autoplaytime = $('#CP_TwoColVideoCarousel_1_VG div').attr('data-speed');
    try {
        $('#CP_TwoColVideoCarousel_1_VG .two-col-carousel').slick({
            dots: true,
            rtl: dirrtl,
            speed: 300,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: autoplaytime,
            pauseOnFocus: false,
            pauseOnDotsHover: true,
            responsive: [{
                    breakpoint: 1084,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: autoplaytime,
                        pauseOnFocus: false,
                        pauseOnDotsHover: true,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: autoplaytime,
                        pauseOnFocus: false,
                        pauseOnDotsHover: true,
                    }
                }, {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: autoplaytime,
                        pauseOnFocus: false,
                        pauseOnDotsHover: true,
                    }
                }, {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: autoplaytime,
                        pauseOnFocus: false,
                        pauseOnDotsHover: true,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        });
    } catch (err) {

    }
});
/*End--CP_TwoColVideoCarousel*/

/*Start of MediaCarouselWithCopy*/
$(document).ready(function () {
    setTimeout(function () {
        mediacarouselcenteralign();
        fixcontentHeights();
        bodyheight();
    }, 50);
});
$(window).resize(function () {
    setTimeout(function () {
        fixcontentHeights();
        bodyheight();
        mediacarouselcenteralign();
    }, 100);
});



function chkvideo() {
    $(".cp_media_carousel_with_responsive .mediaslide").each(function () {
        var videoid = $(this).find(".video-poster-link").attr("data-video-url");
        if (videoid == undefined || videoid == "") {
            $(this).find(".video-poster-link").remove();
        }
    });
}

$(document).ready(function () {
    chkvideo();
    try {
        var dirrtl = false;
        if ($("body").hasClass("rtl")) {
            dirrtl = true;
        }
        $('.cp_media_carousel_with_responsive').each(function () {
            if ($(this).hasClass("smallerimage")) {
                $(this).find('.carousel-wrapper').slick({
                    dots: true,
                    rtl: dirrtl,
                    infinite: false,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    autoplay: false,
                    //autoplaySpeed: autoplaytime,
                    pauseOnFocus: false,
                    pauseOnDotsHover: true,
                    responsive: [{
                            breakpoint: 1084,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5,

                                dots: true

                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,

                                autoplay: false

                            }
                        }, {
                            breakpoint: 540,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,

                                dots: true


                            }
                        }, {
                            breakpoint: 320,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,

                                dots: false


                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]

                });
            } else {
                $(this).find('.carousel-wrapper').slick({
                    dots: true,
                    rtl: dirrtl,
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    autoplay: false,

                    pauseOnFocus: false,
                    pauseOnDotsHover: true,
                    responsive: [{
                        breakpoint: 1084,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,

                            dots: true,
                            autoplay: false

                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2


                        }
                    }, {
                        breakpoint: 540,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1


                        }
                    }, {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,

                            dots: false

                        }
                    }]

                });
            }

        });


    } catch (e) {

    }

});

/*END of MediaCarouselWithCopy*/

/*Case study script to handle if image src is null*/
$(document).ready(function () {

    $(".case-study .case-details .image-div").each(function () {

        if ($(this).find('img').attr("src") == undefined || $(this).find('img').attr("src") == "" || $(this).find('img').attr("src") == null) {
            $(this).closest('.image-div').hide();
        }
    });
});

/**Cortana6tabsJS */
var visited = false;
/*function to load page based on cortanatabvalue*/
function loadCortanaTab() {
    var selectedvalue;
    var subSelectedvalue;
    var url = location.href;
    var found = false;
    if (url.indexOf("#") != -1) {
        selectedvalue = url.substring(url.indexOf("#"), url.length);
        selectedvalue = selectedvalue.split("#")
        selectedvalue = selectedvalue[1].toLowerCase();

        var valueParts = selectedvalue.split('&');
        selectedvalue = valueParts[0];
        subSelectedvalue = valueParts[1];

        var topvalue = 0;

        if ($(".cortana-6tabs").length > 0) {
            $(".cortana-6tabs .main-menu-ul").find("li").each(function () {
                var deeplinkid = $(this).find("a").attr("data-deeplinkid").toLowerCase();

                var x = $(this);
                var submenu;
                $(this).parent().addClass("currentslicktab");

                topvalue = $(".currentslicktab").parents().closest(".cortana-6tabs").offset().top;

                var selectedindex = 0;
                setTimeout(function () {

                    if (deeplinkid == selectedvalue) {

                        selectedindex = x.index()
                        x.trigger("click")



                        // for sub tab
                        setTimeout(function () {
                            var subindex = 0;
                            var count = 0;
                            var lastchild = false
                            $(" .tab-content.activeTab").find('.inner-menu-ul').find("li").each(function () {
                                count++;
                                $(this).parents("ul.inner-menu-ul").addClass("subslicktab");
                                var $anchor = $(this).find('a');
                                submenu = $(this);
                                var deeplink = $anchor.attr('data-deeplinkid');
                                deeplink = deeplink.toLowerCase();
                                deeplink = deeplink.replace(/ +/g, "");

                                if (deeplink == subSelectedvalue) {
                                    subindex = $(this).index();
                                    $(this).trigger("click");
                                }
                                if (subindex == count) {
                                    lastchild = true;
                                }

                            });

                            if (submenu.parents("ul.inner-menu-ul").hasClass("slick-slider")) {


                                if (subindex >= 1 && $(window).width() < 540) {
                                    subindex = subindex - 1;
                                }

                                if (subindex >= 4 && $(window).width() < 768 && $(window).width() > 540) {
                                    subindex = Math.ceil(subindex % 4);
                                    subindex = subindex + 1;

                                }


                                $(".subslicktab").slick("slickGoTo", subindex);
                            }
                            $(".subslicktab").removeClass("subslicktab");
                        }, 10);
                        if (x.parents("ul").hasClass("slick-slider")) {
                            if (selectedindex >= 1 && $(window).width() < 540) {
                                selectedindex = selectedindex - 1;
                            }

                            if (selectedindex >= 4 && $(window).width() < 768 && $(window).width() > 540) {
                                selectedindex = Math.ceil(selectedindex / 4);
                            }

                            $(".currentslicktab").slick("slickGoTo", selectedindex);
                        }


                        $("html, body").animate({
                            scrollTop: topvalue
                        }, 500);
                        $(".currentslicktab").removeClass("currentslicktab");

                        return;

                    }
                }, 10);

            });


        }
    }
}
/*appending cortanatab value on pageload*/
function updateCortanaUrl() {
    var mainTab = $(".cortana-6tabs").find(".main-menu-ul").find("li.current a").attr("data-deeplinkid");
    var subTab = $(".cortana-6tabs").find(".tab-content.activeTab").find("li.current a").attr("data-deeplinkid");
    subTab = subTab.replace(/ +/g, "");
    var tab = mainTab + (subTab ? '&' + subTab : '');

    var tab_value = "";
    var tabvalue;
    var subtabvalue;;
    var url = location.href;
    if (url.indexOf("#") > 0) {
        url = url.substring(url.indexOf("#"), url.length);

        tabvalue = url.split("#");
        tab_value = tabvalue[1];

        subtabvalue = tab_value.split("&");
        var maintabvalue = subtabvalue[0];
        subtabvalue = subtabvalue[1];
    }
    if (mainTab == undefined || mainTab == "" || mainTab == null) {
        return;
    } else {
        if (tab_value == undefined || tab_value == "" || tab_value == null) {
            if (history.pushState) {
                var newurl = window.location.href + '#' + tab;
                window.history.pushState({
                    path: newurl
                }, '', newurl);
            }
        } else {

            if (subtabvalue == undefined || subtabvalue == "" || subtabvalue == null) {
                if (history.pushState) {
                    var updatedurl = window.location.href;
                    updatedurl = updatedurl.replace(tab_value, tab);
                    window.history.pushState({
                        path: updatedurl
                    }, '', updatedurl);
                }
            } else {
                if (history.pushState) {
                    var subupdatedurl = window.location.href;
                    subupdatedurl = subupdatedurl.replace(maintabvalue, mainTab);
                    subupdatedurl = subupdatedurl.replace(subtabvalue, subTab);
                    window.history.pushState({
                        path: subupdatedurl
                    }, '', subupdatedurl);
                }

            }
        }
    }

}
/*updation tab href-when opened in new tab the page will load automattically with selected tab*/
function updateCortanalinks() {
    var url = location.href;
    var deeplinkvalue;
    $(".main-menu-ul").find("li").each(function () {
        deeplinkvalue = url.substring(url.indexOf("#"), url.length);
        deeplinkvalue = deeplinkvalue.split("#")
        deeplinkvalue = deeplinkvalue[1].toLowerCase();
        var deeplinkid = $(this).find("a").attr("data-deeplinkid").toLowerCase();
        if (deeplinkvalue == undefined || deeplinkvalue == "") {


            $(this).find("a").attr("href", url + "#" + deeplinkid);

        } else {
            url = url.replace(deeplinkvalue, "");
            $(this).find("a").attr("href", url + deeplinkid);
        }
    });
}
$(document).ready(function () {
    try {
        if ($(".cortana-6tabs").length > 0) {
            updateCortanalinks();
            var deeplinkvalue;
            var url = location.href;
            if (url.indexOf("#") > 0) {
                deeplinkvalue = url.substring(url.indexOf("#"), url.length);
                deeplinkvalue = deeplinkvalue.split("#")
                deeplinkvalue = deeplinkvalue[1].toLowerCase();

                if (deeplinkvalue == undefined || deeplinkvalue == "") {
                    updateCortanaUrl();
                } else {
                    loadCortanaTab();
                }
            }
        }
    } catch (err) {

    }


});

function slickInitializer() {
    var dirrtl = false;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $('.cortana-6tabs .main-menu-ul').slick({
        rtl: dirrtl,
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        }]
    });
    $('.cortana-6tabs .inner-menu-ul').slick({
        rtl: dirrtl,
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        }]
    });
    $(".cortana-6tabs.menu-container .slick-slider .slick-next, .menu-container .slick-slider .slick-prev").text("");
    setInterval(function () {
        if ($('.cortana-6tabs .inner-menu-ul.slick-initialized').length) {
            $('.cortana-6tabs .inner-menu-ul').slick('setPosition');
            $(".cortana-6tabs.menu-container .slick-slider .slick-next, .menu-container .slick-slider .slick-prev").text("");
        }

    }, 10);
}

function slicksubInitializer() {
    $('.cortana-6tabs .inner-menu-ul').slick("unslick");
    var dirrtl = false;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $('.cortana-6tabs .inner-menu-ul').slick({
        rtl: dirrtl,
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        }]
    });
    $(".cortana-6tabs.menu-container .slick-slider .slick-next, .menu-container .slick-slider .slick-prev").text("");
    if ($(".cortana-6tabs .inner-menu-ul li").not(".inner-menu-ul li:first-child").hasClass("current")) {
        $(".cortana-6tabs .inner-menu-ul li:first-child").addClass("current").siblings().removeClass("current");
        $(".cortana-6tabs .inner-tab-container .ms-grid > div:first-child").addClass("activeTab").siblings().removeClass("activeTab");
    }
}
var isWindowResized;
$(window).on('resize', function () {
    if ($(".cortana-6tabs").length > 0) {
        if (window.innerWidth < 768) {
            clearTimeout(isWindowResized);
            isWindowResized = setTimeout(slickInitializer, 100);
            $(".cortana-6tabs.menu-container .slick-slider .slick-next, .cortana-6tabs.menu-container .slick-slider .slick-prev").text("");
        }
    }
});
$(window).on('load', function () {
    if ($(".cortana-6tabs").length > 0) {
        if (window.innerWidth < 768) {
            slickInitializer();
            $(".cortana-6tabs.menu-container .slick-slider .slick-next, .cortana-6tabs.menu-container .slick-slider .slick-prev").text("");

        }
    }
});


$(document).ready(function () {
    try {
        var count_li = 0;
        $(".cortana-6tabs .main-menu-ul li").each(function () {
            if ($(this).find("p").html().length == 0) {
                // $(this).remove();
            } else {
                count_li++;
            }
        });
        $(".cortana-6tabs .main-menu-ul li").addClass("col-1-" + count_li);
        $("#cmwf_cortana_role .cortana-6tabs .main-menu-ul").addClass("m-col-" + (count_li * 4) + "-24").addClass("m-col-24-push-" + ((24 - (count_li * 4)) / 2));
        $(".cortana-6tabs .tab-container .tab-content ul").each(function () {
            var count_li1 = 0;

            $(this).children("li.hide-by-default").each(function () {
                if ($(this).find("p").html().length == 0) {
                    // $(this).remove();
                } else {
                    count_li1++;
                }
            });
            if (count_li1 == 7) {
                $(this).children("li").css("width", 14.28 + "%");
            } else {
                $(this).children("li").addClass("col-1-" + count_li1);
                $(this).addClass("m-col-" + (count_li1 * 4) + "-24");
            }

        });
        $(".cortana-6tabs .inner-tab-container .m-col-12-24:first-child").each(function () {

            if ($(this).find('img').attr("src") == undefined || $(this).find('img').attr("src") == "" || $(this).find('img').attr("src") == null) {
                $(this).closest('.m-col-12-24').hide();
                $(this).closest('.m-col-12-24').siblings().addClass("m-col-24-push-6").css({
                    "float": "left",
                    "text-align": "center"
                }).find("a.fw-6").css({
                    "text-align": "center"
                });
                $(this).closest('.rtl .m-col-12-24').siblings().addClass("m-col-24-push-6").css({
                    "float": "right",
                    "text-align": "center"
                }).find("a.fw-6").css({
                    "text-align": "center"
                });
                $(this).closest('.rtl .m-col-12-24').siblings().addClass("m-col-24-push-6").css({
                    "float": "right",
                    "text-align": "center"
                }).find("a.fw-6").css({
                    "text-align": "center"
                });
            }
        });


        $(".cortana-6tabs .main-menu-ul li").on("click tap", function (e) {
            e.preventDefault();

            $(this).addClass("current");
            $(this).siblings().removeClass("current");

            $(this).find('.active-img').addClass("activeTab").siblings().removeClass("activeTab");
            $(this).siblings().find('.active-img').removeClass("activeTab").siblings().addClass("activeTab");
            var clickedId = $(this).attr("id");
            $(".cortana-6tabs .tab-container ." + clickedId).addClass("activeTab").siblings().removeClass("activeTab");

            $(".cortana-6tabs .inner-menu-ul li:first-child").addClass("current").siblings().removeClass("current");
            $(".cortana-6tabs .inner-tab-container .ms-grid > div:first-child").addClass("activeTab").siblings().removeClass("activeTab");

            if (window.innerWidth < 768) {
                slicksubInitializer();
            }

            updateCortanaUrl();
        });

        $(".cortana-6tabs .inner-menu-ul li").on("click tap", function (e) {
            e.preventDefault();

            $(this).addClass("current");
            $(this).siblings().removeClass("current");
            var clickedId = $(this).attr("id");
            var parentId = $(this).closest("ul").closest(".activeTab").attr("class");
            parentId = parentId.split(" ");
            parentId = parentId[0];

            $("." + parentId + " .inner-tab-container ." + clickedId).addClass("activeTab").siblings().removeClass("activeTab");

            updateCortanaUrl();
        });
        $(".cortana-6tabs .tab-container .inner-tab-container img").on("click", function (e) {
            e.preventDefault();
            $(this).closest(".m-col-12-24").siblings().find("ul li").each(function () {
                var $selector = $(this).find("a").attr('data-src');
                if (typeof $selector != 'undefined') {

                    $(this).find("a").click();
                }
            });
        });
        $(".cortana-6tabs .tab-container .inner-tab-container a").on("click", function (e) {

            if ($(this).attr('data-src') != undefined) {
                if ($(this).attr('data-src').length > 0) {

                    e.preventDefault();
                    $(".cortana-6tabs .cortana-popup").addClass("activeTab");
                    var iframesrc = $(this).attr('data-src');
                    $(".cortana-6tabs .cortana-popup iframe").attr("src", iframesrc);
                    $(".cortana-popup .mscom-popup .mscom-popup-link").click();
                }
            }
        });
        $(".cortana-6tabs .mscom-popup .mscom-popup-close-image").on("click", function () {
            $(".cortana-6tabs .cortana-popup").removeClass("activeTab");
            $(".cortana-6tabs .cortana-popup iframe").attr("src", "");
        });
        $(".menu-container .inner-tab-container .m-col-12-24.v-align a.mscom-link:contains('')").each(function () {
            $store = $(this).text();
            if ($store == '') {
                $(this).parent().remove();
            }
        });
        $(".cortana-6tabs a").click(function () {
            $(this).blur();

        });
        $(".cortana-6tabs").each(function () {
            $(this).find(".video-poster-link").each(function () {
                if ($(this).attr("data-player-type") == "" || $(this).attr("data-player-type") == null || $(this).attr("data-player-type") == undefined) {
                    $(this).removeAttr("href");
                }
            });
        });
    } catch (err) {

    }
});
$(function () {
    $(window).on("load resize", function () {
        var iframeheight = $(window).innerHeight() - 70;
        $(".cortana-6tabs iframe").css("height", iframeheight);
    });
});

$(window).bind('hashchange', function () {
    loadCortanaTab();
});
/** CortanaJS END**/


/***Eventsbgimagetimer js*/
var diff = {};
var noOfDays = 0;
var noOfHours = 0;
var noOfSeconds = 0;
var noOfMinutes = 0;
var timeDiff = function (date1, date2) {
    var a = new Date(date1).getTime(),
        b = new Date(date2).getTime(),

        diff = {}
    diff.milliseconds = a > b ? a % b : b % a;
    diff.days = diff.milliseconds / (1000 * 60 * 60 * 24);
    noOfDays = Math.floor(diff.days);
    diff.hours = (diff.days - Math.floor(diff.days)) * 24;
    noOfHours = Math.floor(diff.hours);
    diff.minutes = (diff.hours - Math.floor(diff.hours)) * 60;
    noOfMinutes = Math.floor(diff.minutes);
    diff.seconds = (diff.minutes - Math.floor(diff.minutes)) * 60;
    //noOfSeconds = Math.floor(diff.seconds);
    noOfSeconds = Math.round(diff.seconds);
}


$(document).ready(function () {
    try {
        if ($('.events-hero').length > 0) {
            function setEventCountdown() {
                var now = new Date();
                var timeString = $('.events-hero').find('.countdown-timer').data('event-time') + "  " + $('.events-hero').find('.countdown-timer').data('event-timezone');
                timeString = timeString.toString();
                var countdownDate = new Date(timeString);
                //console.log(countdownDate);
                //console.log(now);
                if (now > countdownDate) {
                    $('.events-hero').find('.days-count').find('h3').text('0');
                    $('.events-hero').find('.hours-count').find('h3').text('0');
                    $('.events-hero').find('.minutes-count').find('h3').text('0');
                    $('.events-hero').find('.seconds-count').find('h3').text('0');
                } else {
                    timeDiff(new Date(), countdownDate)
                    $('.events-hero').find('.days-count').find('h3').text(noOfDays);
                    $('.events-hero').find('.hours-count').find('h3').text(noOfHours);
                    $('.events-hero').find('.minutes-count').find('h3').text(noOfMinutes);
                    $('.events-hero').find('.seconds-count').find('h3').text(noOfSeconds);
                }
            }

            setInterval(setEventCountdown, 1000);
        }
    } catch (err) {

    }
});
/***Eventsbgimagetimer js end*/

/*Start-Trusted-Cloud-JS*/
/*-------------------------------*/
/*Start of accordionwithcontrols*/
function loadaccordiondata() {
    try {
        var i = 0;
        $(".cp-accordion-with-control .accordionpanel").each(function () {
            $(this).html($(".accordiondatatabs").children().eq(i).html());

            i++;
            $(".cp-accordion-with-control .accordion-main-panel").children().eq(0).trigger("click");
        });
    } catch (e) {
        console.log("error" + e)
    }
    $(".accordiondatatabs").remove();
}

$(document).ready(function () {
    loadaccordiondata();
});
/**End of AccordionWithControls **/

/*Start of circlegraphicswithslideText*/
function CircleGraphicsWithSideTextCall() {
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    forEach(document.querySelectorAll(".CP-CircleGraphicsWithSlideText"), function (componentNode, index) {
        var rightColNode = componentNode.querySelector(".right-col");
        var leftColNode = componentNode.querySelector(".left-col");
        var circlesNode = componentNode.querySelector(".circles");
        var leftCircleNode = componentNode.querySelector(".CP-CircleGraphicsWithSlideText .left-col .circles .left-circle");
        var rightCircleNode = componentNode.querySelector(".CP-CircleGraphicsWithSlideText .left-col .circles .right-circle");
        var crossCircleNode = componentNode.querySelector(".CP-CircleGraphicsWithSlideText .left-col .circles .right-circle .cross-circle");
        var leftTitleNode = componentNode.querySelector(".left-title");
        var rightTitleNode = componentNode.querySelector(".right-title");
        var barNodes = componentNode.querySelectorAll(".rectangle-bar .rectangle-bar-left");
        var barCircleNodes = componentNode.querySelectorAll(".bar-circle-main");
        var slideListNode = componentNode.querySelector(".slide-text-list");
        var slideNodes = slideListNode.querySelectorAll(".slide-text");
        var windowWidth = $(window).width();
        var componentWidth = innerWidth > 1084 ? 1084 : windowWidth * (innerWidth > 768 ? 0.95 : (innerWidth >= 540 ? 0.87 : 0.91)); /*As per Cloud-platform viewports*/
        var slideWidth = componentWidth * 0.3;
        var currentBarCircleIndex = 0;
        positioning();
        window.addEventListener("resize", function () {
            windowWidth = $(window).width();
            componentWidth = innerWidth > 1084 ? 1084 : windowWidth * (innerWidth > 768 ? 0.95 : (innerWidth >= 540 ? 0.87 : 0.91)); /*As per Cloud-platform viewports*/
            positioning();
            slideListNode.style.marginLeft = (-slideWidth * currentBarCircleIndex * 2) + "px"
        });
        forEach(barCircleNodes, function (barCircleNode, barCircleIndex) {
            barCircleNode.onclick = function () {
                forEach(barCircleNodes, function (node) {
                    node.setAttribute("data-bar-circle-active", "False")
                });
                this.setAttribute("data-bar-circle-active", "True");
                slideListNode.style.marginLeft = (-slideWidth * barCircleIndex * 2) + "px";
                circling(barCircleIndex);
                baring(barCircleIndex);
                currentBarCircleIndex = barCircleIndex
            }
        });

        function circling(barCircleIndex) {
            var barCircleNode = barCircleNodes[barCircleIndex];
            var left = parseFloat(barCircleNode.getAttribute("data-left-circle-size"));
            var right = parseFloat(barCircleNode.getAttribute("data-right-circle-size"));
            var maxWidth = parseInt($(leftColNode).css("max-width"));
            var mainWidth = Math.min(componentWidth * (innerWidth >= 768 ? 0.65 : 1), maxWidth) * (innerWidth >= 768 ? 0.64 : 1);
            var leftWidth = mainWidth * left / (left + right);
            var rightWidth = mainWidth * right / (left + right);
            leftWidth *= a(leftWidth, mainWidth);
            rightWidth *= a(rightWidth, mainWidth);

            function a(n, t) {
                n = n > t / 2 ? t - n : n;
                return n * 0.4 / (t / 2) + 0.8
            }
            leftCircleNode.style.width = leftWidth + "px";
            leftCircleNode.style.height = leftWidth + "px";
            leftCircleNode.style.lineHeight = leftWidth + "px";
            crossCircleNode.style.width = leftWidth + "px";
            crossCircleNode.style.height = leftWidth + "px";
            rightCircleNode.style.width = rightWidth + "px";
            rightCircleNode.style.height = rightWidth + "px";
            rightCircleNode.style.lineHeight = rightWidth + "px";
            leftTitleNode.style.left = leftWidth / 2 + "px";
            rightTitleNode.style.right = rightWidth / 2 + "px";
            crossCircleNode.style.left = (rightWidth - mainWidth) + "px";
            if (navigator.userAgent.search("Firefox") >= 0) {
                var top = (leftWidth > rightWidth) ? -(leftWidth - rightWidth) / 2 + 1 : -1;
                crossCircleNode.style.top = top + "px"
            }
            circlesNode.style.height = Math.max(leftWidth, rightWidth) + "px"
        }

        function baring(barCircleIndex) {
            var barCircleNode = barCircleNodes[barCircleIndex];
            forEach(barNodes, function (barNode, barNodeIndex) {
                var barWidth = barCircleNode.getAttribute("data-rectangle-" + (barNodeIndex + 1) + "-size");
                barNode.style.width = barWidth + "%"
            })
        }

        function positioning() {
            slideWidth = componentWidth * (innerWidth >= 768 ? 0.3 : 1);
            var slideListWidth = slideWidth * slideNodes.length * 2 * 1.1;
            slideListNode.style.width = slideListWidth + "px";
            forEach(slideNodes, function (slideNode, slideIndex) {
                slideNode.style.width = slideWidth + "px";
                slideNode.style.marginRight = slideWidth + "px"
            });
            circling(currentBarCircleIndex);
            baring(currentBarCircleIndex)
        }
    })
}

$(document).ready(function () {
    CircleGraphicsWithSideTextCall()
});
/*END of circlegraphicswithslideText*/

/*Start of cirleimagewithsidetext*/
(function ($) {
    function fixButtonHeights() {
        var heights = new Array();
        // Loop to get all element heights
        $('.CP_CenterImageWithSideText .row-carousel .mobile-carousel ul li').each(function () {
            // Need to let sizes be whatever they want so no overflow on resize
            $(this).css('min-height', '0');
            $(this).css('max-height', 'none');
            $(this).css('height', 'auto');
            // Then add size (no units) to array
            heights.push($(this).height());
        });
        // Find max height of all elements
        var max = Math.max.apply(Math, heights);
        // Set all heights to max height
        $('.CP_CenterImageWithSideText .row-carousel .mobile-carousel ul li').each(function () {
            $(this).css('height', max + 'px');
            // Note: IF box-sizing is border-box, would need to manually add border and padding to height (or tallest element will overflow by amount of vertical border + vertical padding)
        });
    }

    $(window).load(function () {
        // Fix heights on page load
        fixButtonHeights();
        // Fix heights on window resize
        $(window).resize(function () {
            // Needs to be a timeout function so it doesn't fire every ms of resize
            setTimeout(function () {
                fixButtonHeights();
            }, 120);
        });
    });
})(jQuery);

/*END of cirleimagewithsidetext*/


/** Start of cpCircleLayersWithSlideText.js **/

function CircleLayersWithSideTextCall() {

    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);

    forEach(document.querySelectorAll('.CP_CircleLayersWithSlideText_1'), function (componentNode, index) {
        var labelUpNodes = componentNode.querySelectorAll('.circle-label.up');
        var labelDownNodes = componentNode.querySelectorAll('.circle-label.down');
        var labelCircleNodes = componentNode.querySelectorAll('.circle-label-point');

        var slideListNode = componentNode.querySelector('.slide-text-list');
        var slideTextNodes = slideListNode.querySelectorAll('.slide-text');
        var circlesNode = componentNode.querySelector('.circles');
        var circleLayerNodes = componentNode.querySelectorAll('.circle-layer');
        var circleLayerSubNodes = componentNode.querySelectorAll('.circle-layer-sub');
        var labelLineNodes = componentNode.querySelectorAll('.label-line');
        var bulletNodes = componentNode.querySelectorAll('.bullet-circle');

        var changeIndex = slideTextNodes.length - 1;
        setPositions();
        window.onresize = setPositions;

        forEach(labelUpNodes, function (labelNode, i) {

            labelNode.setAttribute('data-label-active', labelUpNodes.length - i - 1 == 0);
            labelNode.onclick = function () {
                changeIndex = i;

                setCircleLayerColor();
                setPositions();

                for (var ci = 0; ci < labelUpNodes.length; ci++) {
                    labelUpNodes[ci].setAttribute('data-label-active', ci === i);
                }
                for (var ci = 0; ci < labelDownNodes.length; ci++) {
                    labelDownNodes[ci].setAttribute('data-label-active', ci === i);
                }
                for (var ci = 0; ci < labelCircleNodes.length; ci++) {
                    labelCircleNodes[ci].setAttribute('data-label-active', ci === i);
                }
                for (var ci = 0; ci < labelUpNodes.length; ci++) {
                    labelLineNodes[ci].setAttribute('data-line-active', ci <= i);
                }

                for (var ci = 0; ci < labelUpNodes.length; ci++) {
                    bulletNodes[ci].setAttribute("r", ci === i ? 10 : 6);
                }
            };
        });

        forEach(labelDownNodes, function (labelNode, i) {

            labelNode.setAttribute('data-label-active', labelDownNodes.length - i - 1 == 0);
            labelCircleNodes[i].setAttribute('data-label-active', labelDownNodes.length - i - 1 == 0);
            labelNode.onclick = function () {
                changeIndex = i;

                setCircleLayerColor();
                setPositions();

                for (var ci = 0; ci < labelDownNodes.length; ci++) {
                    labelDownNodes[ci].setAttribute('data-label-active', ci === i);
                }
                for (var ci = 0; ci < labelUpNodes.length; ci++) {
                    labelUpNodes[ci].setAttribute('data-label-active', ci === i);
                }
                for (var ci = 0; ci < labelDownNodes.length; ci++) {
                    labelLineNodes[ci].setAttribute('data-line-active', ci <= i);
                }
                for (var ci = 0; ci < labelCircleNodes.length; ci++) {
                    labelCircleNodes[ci].setAttribute('data-label-active', ci === i);
                }
                for (var ci = 0; ci < labelDownNodes.length; ci++) {
                    bulletNodes[ci].setAttribute("r", ci === i ? 10 : 6);
                }

            };
        });

        function setCircleLayerColor() {
            var length = circleLayerNodes.length;
            for (var i = 0; i < length; i++) {

                var color = i < changeIndex ? circleLayerNodes[i].getAttribute('data-color') : circleLayerNodes[changeIndex].getAttribute('data-color');
                var subColor = i < changeIndex ? circleLayerSubNodes[i].getAttribute('data-color') : circleLayerNodes[changeIndex].getAttribute('data-color');

                circleLayerNodes[i].setAttribute('fill', color);
                circleLayerSubNodes[i].setAttribute('fill', subColor);
            }
        }

        function setPositions() {
            var containerWidth = innerWidth > 1180 ? 1180 : $(window).width() * (innerWidth > 768 ? .95 : (innerWidth >= 540 ? .87 : .91));
            var slideWidth = containerWidth * (innerWidth >= 768 ? .33 : 1);
            var graphicWidth = containerWidth * (innerWidth >= 768 ? .67 : 1);
            if (innerWidth < 768) {
                graphicWidth = Math.min(innerWidth >= 540 ? graphicWidth : 211, graphicWidth);
            }
            var graphicHeight = graphicWidth * 400 / (innerWidth < 540 ? 450 : 800);
            slideListNode.style.width = slideWidth * slideTextNodes.length * 2 * 1.1 + 'px';
            slideListNode.style.marginLeft = (-slideWidth * 2 * (slideTextNodes.length - 1 - changeIndex)) + 'px';

            forEach(slideTextNodes, function (slideNode, i) {

                var k = slideTextNodes.length - i - 1;

                slideNode.style.width = (slideWidth) + 'px';
                slideNode.style.marginRight = (slideWidth) + 'px';
                slideNode.setAttribute('data-slide-active', k - changeIndex === 0);

            });

            circlesNode.setAttribute('viewBox', innerWidth < 540 ? '0 0 450 400' : '0 0 800 400');
            circlesNode.style.minHeight = graphicHeight + 'px';
        }

    });
}

$(document).ready(function () {
    CircleLayersWithSideTextCall();
});


/** End of cpCircleLayersWithSlideText.js **/

/*Start--Carousel for trusted cloud pages --*/
$(document).ready(function () {
    try {
        if ($('.trusted-cloud').find(".slick-carousel-mobile").length > 0) {
            var dirrtl = false;
            if ($("body").hasClass("rtl")) {
                dirrtl = true;
            }
            $('.trusted-cloud .slick-carousel-mobile').each(function () {
                $(this).slick({
                    dots: true,
                    rtl: dirrtl,
                    speed: 300,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    pauseOnFocus: false,
                    pauseOnDotsHover: true
                });
            });
        }
    } catch (err) {

    }
});
/*End--Carousel for trusted cloud pages ---*/

$(document).ready(function () {
    try {
        if ($('#CP_CenterImageWithSideText').find(".slick-carousel-mobile").length > 0) {
            var dirrtl = false;
            if ($("body").hasClass("rtl")) {
                dirrtl = true;
            }
            $('#CP_CenterImageWithSideText .slick-carousel-mobile').each(function () {
                $(this).slick({
                        dots: true,
                        rtl: dirrtl,
                        speed: 300,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        pauseOnFocus: false,
                        pauseOnDotsHover: true
                    }

                );
            })
        }
    } catch (err) {

    }
});

/*END-Trusted-Cloud-JS*/



$(window).load(function () {
    slickaccessibility();
});
$(window).resize(function () {
    try {
        slickaccessibility();
    } catch (err) {}
});

//start of zh-cn CP_TryBuyFilter			
$(document).ready(function () {
    if ($("body").hasClass("zh-cn")) {
        $(".CP_tryBuyFilter1 .filterlinks li").each(function () {

            $(this).find("a.TryBuyFilter1").attr("ms.ea_action", "ntd");
            $(this).find("a.TryBuyFilter1").removeAttr("ms.ea_offer");

        });

    }
});
//end of zh-cn CP_TryBuyFilter	
//Start Global News feed height adjustment on resize js  	
function newsfeedContentHeight() {
    setTimeout(function () {
        var newsHeight = 0;
        $("#CP_NewsFeed_1 div.banner-container").removeAttr("style");
        newsHeight = $("#CP_NewsFeed_1 div.banner-container div").height();
        maxNewsHeight = 20 + newsHeight;
        $("#CP_NewsFeed_1 div.banner-container div").closest('.banner-container').css('height', maxNewsHeight);
    }, 10);
}
$(window).on('resize', function () {
    setTimeout(function () {
        newsfeedContentHeight();
    }, 100);
});
//close Global News feed height adjustment on resize js 




/*herocarouselcopywithbuttons*/
function setHeroButtonsHeight() {
    setTimeout(function () {
        if ($(".hero-carousel-with-button").length > 0) {

            $(".hero-carousel-with-button").each(function () {
                var max_height = 0;
                $(this).find(".hero-carousel-button-slides").css("height", "auto");
                $(this).find(".hero-carousel-button-slides").find(".text-content").css("height", "auto");
                var cheight = 0;
                $(this).find(".hero-carousel-button-slides").each(function () {
                    var theight = $(this).find(".text-content").outerHeight();
                    cheight = cheight > theight ? cheight : theight;
                });

                //cheight = cheight + 20;

                $(this).find(".hero-carousel-button-slides").find(".text-content").css("height", cheight);

                $(this).find(".hero-carousel-button-slides").each(function () {
                    var theme = $(this).attr("data-theme");
                    $(this).addClass(theme);
                    var cheight = $(this).height();
                    max_height = max_height > cheight ? max_height : cheight;
                });
                $(this).find(".hero-carousel-button-slides").css("height", max_height);
            });
        }
    }, 100);
}
$(document).ready(function () {

    var themes = [];
    var dirrtl = false;
    var count;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $(".hero-carousel-with-button").each(function () {
        count = 0;
        var autoplay = false;
        var autoplaySpeed = 5000;
        if ($(this).attr("data-auto-play") == "true") {
            autoplay = true;
            if ($(this).attr("data-auto-play-speed") != undefined && $(this).attr("data-auto-play-speed") != null && $(this).attr("data-auto-play-speed") != "") {
                autoplaySpeed = $(this).attr("data-auto-play-speed");
            }
        } else {
            autoplay = false;
        }
        $(this).find(".hero-carousel-button-slides").each(function () {
            themes[count] = $(this).attr("data-theme");
            count++;

        });
        $(this).find(".slickcarousel").slick({

            dots: true,
            rtl: dirrtl,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: autoplay,
            autoplaySpeed: autoplaySpeed,
            focusOnSelect: true,
            pauseOnFocus: true,
            pauseOnDotsHover: true,
            pauseOnHover: true
        });

        for (var j = 0; j < themes.length; j++) {
            $(this).find("ul.slick-dots").children().eq(j).addClass(themes[j]);
        }
        themes = [];
        setHeroButtonsHeight();
        /* START of Herocarousel load issue bug-342946*/
        $(this).find(".hide-back").removeClass("hide-back");
        /* END of Herocarousel load issue bug-342946*/

    });
});
$(window).resize(function () {
    setHeroButtonsHeight();
});

/*End*/

/**Start LTR Carousel */
var thumbnailWidth;

function cpImageTabLTRCarousel() {
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    var $carouselThumbNailItem = $(".carousel-thumbnail-list  a.carousel-thumbnail-item[data-show='true']");
    forEach(document.querySelectorAll('.cp-image-tab-carousel'), function (componentNode) {

        var DESKTOP = $carouselThumbNailItem.length;
        var TABLET = 4;
        var MOBILE = 3;

        var STAY = 0;
        var FRONT = 1;
        var BACK = 2;
        var movingThumbnail = STAY;

        var carouselThumbnailNodes = componentNode.querySelectorAll('.carousel-thumbnail-item[data-show="true"]');
        var carouselThumbnailList = componentNode.querySelector('.carousel-thumbnail-list');
        var carouselNavNodes = componentNode.querySelectorAll('.livearea .carousel-nav');
        var carouselContentNodes = componentNode.querySelectorAll('.carousel-content-item[data-show="true"]');
        var carouselSlider = componentNode.querySelector('.carousel-arrow-slider');
        var thumbnailCount = DESKTOP;
        var thumbnailListWidth = $(carouselThumbnailList).width();
        thumbnailWidth = thumbnailListWidth / thumbnailCount;


        var thumbnailActiveIndex = 0;
        var contentActiveIndex = 0;
        var arrowActivePosition = 0;
        var carouselCount = carouselThumbnailNodes.length;

        $('.carousel-thumbnail-item').each(function () {
            if ($(this).attr('data-show') == "" || $(this).attr('data-show') == null) {
                $(this).remove();
            }
        });
        $('.carousel-content-item').each(function () {
            if ($(this).attr('data-show') == "" || $(this).attr('data-show') == null) {
                $(this).remove();
            }
        });

        var thumbnailNavigating = function () {
            thumbnailWidth = thumbnailListWidth / thumbnailCount;
            forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {

                carouselThumbnailNode.style.left = ((thumbnailIndex - thumbnailActiveIndex) * thumbnailWidth) + 'px';
                carouselThumbnailNode.style.width = thumbnailWidth + "px";
            });

            carouselSlider.style.left = -($(carouselSlider).width() / 2 - (carouselThumbnailList.getBoundingClientRect().left + arrowActivePosition * thumbnailWidth) - thumbnailWidth / 2) + 'px';
        };

        var moveThumbnail = function (toFront) {
            thumbnailWidth = thumbnailListWidth / thumbnailCount;
            if (toFront) {
                thumbnailActiveIndex++;
                contentActiveIndex++;
                $(carouselThumbnailNodes[0]).before($(carouselThumbnailNodes[carouselCount - 1]));
                $(carouselContentNodes[0]).before($(carouselContentNodes[carouselCount - 1]));
                carouselThumbnailNodes[carouselCount - 1].style.left = ((0 - thumbnailActiveIndex) * thumbnailWidth) + 'px';
                movingThumbnail = movingThumbnail == STAY ? FRONT : STAY;
            } else {
                thumbnailActiveIndex--;
                contentActiveIndex--;
                $(carouselThumbnailNodes[carouselCount - 1]).after($(carouselThumbnailNodes[0]));
                $(carouselContentNodes[carouselCount - 1]).after($(carouselContentNodes[0]));
                carouselThumbnailNodes[0].style.left = ((carouselCount - 1 - thumbnailActiveIndex) * thumbnailWidth) + 'px';
                movingThumbnail = movingThumbnail == STAY ? BACK : STAY;
            }
            carouselContentNodes = componentNode.querySelectorAll('.carousel-content-item[data-show="true"]');
            carouselThumbnailNodes = componentNode.querySelectorAll('.carousel-thumbnail-item[data-show="true"]');
            forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
                carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
            });
        };

        var setCarouselContent = function (index) {
            arrowActivePosition = index - thumbnailActiveIndex;
            $(carouselContentNodes).fadeOut();
            $(carouselContentNodes[index]).fadeIn();
            carouselSlider.style.left = -($(carouselSlider).width() / 2 - (carouselThumbnailList.getBoundingClientRect().left + arrowActivePosition * thumbnailWidth) - thumbnailWidth / 2) + 'px';
        };

        var thumbnailClick = function () {
            //aria-select attribute changing on click
            forEach(carouselThumbnailNodes, function (caroselThumbNailNode) {
                caroselThumbNailNode.setAttribute("aria-selected", "false");
            });
            var thumbnailIndex = parseInt(this.getAttribute('data-index'));
            //aria-select attribute changing on click
            this.setAttribute("aria-selected", "true");
            contentActiveIndex = thumbnailIndex;
            setCarouselContent(thumbnailIndex);
            unfreeze();
        };

        //ramesh
        var thumbnailKeydown = function (e) {
            var currentEleId;
            var currentEleClass;
            var currentthumbEle;
            var currentDataIndex;
            var currentEleAlt;
            var currentAriaControl;
            var currentthumbnailcount;
            currentthumbEle = e.currentTarget;
            currentEleId = $(currentthumbEle).attr('id');

            if (e.keyCode == 13) {
                enableScroll();
                unfreeze();
                currentthumbEle = e.currentTarget;
                currentEleId = $(currentthumbEle).attr('id');
                currentEleClass = $(currentthumbEle).attr('class');
                currentDataIndex = $(currentthumbEle).attr('data-index');
                currentAriaControl = $(currentthumbEle).attr('aria-controls');
                currentEleAlt = $('.' + currentEleClass + '[data-index=' + currentDataIndex + ']').children().find('img').attr('alt');

                setTimeout(function () {
                    if ($('#' + currentEleId).attr('aria-selected') == "false") {
                        $('#' + currentEleId).attr('aria-selected', 'true');
                        $('#' + currentEleId).attr('tabindex', '0');
                        $('#' + currentEleId).siblings().attr('tabindex', '-1');
                        $('#' + currentEleId).siblings().attr('aria-selected', 'false');
                        if (navigator.userAgent.toLowerCase().indexOf('edge') != -1) {
                            $('#' + currentEleId).attr('aria-label', currentEleAlt + " selected");
                            $('#' + currentEleId).siblings().removeAttr('aria-label');
                            $('#' + currentEleId).attr('tabindex', '0');
                            $('#' + currentEleId).siblings().attr('tabindex', '-1');
                        }
                    } else {
                        $('#' + currentEleId).attr('aria-selected', 'false');
                        $('#' + currentEleId).removeAttr('aria-label');
                    }
                }, 200);

                var thumbnailIndex = parseInt(this.getAttribute('data-index'));
                contentActiveIndex = thumbnailIndex;
                setCarouselContent(thumbnailIndex);
            }

            if (e.keyCode == 32) {
                enableScroll();
                unfreeze();
                currentthumbEle = e.currentTarget;
                currentEleId = $(currentthumbEle).attr('id');
                currentEleClass = $(currentthumbEle).attr('class');
                currentDataIndex = $(currentthumbEle).attr('data-index');
                currentAriaControl = $(currentthumbEle).attr('aria-controls');
                currentEleAlt = $('.' + currentEleClass + '[data-index=' + currentDataIndex + ']').children().find('img').attr('alt');

                setTimeout(function () {
                    if ($('#' + currentEleId).attr('aria-selected') == "false") {
                        $('#' + currentEleId).attr('aria-selected', 'true');
                        $('#' + currentEleId).attr('tabindex', '0');
                        $('#' + currentEleId).siblings().attr('tabindex', '-1');
                        $('#' + currentEleId).siblings().attr('aria-selected', 'false');
                        $('#' + currentEleId).attr('aria-label', currentEleAlt + " selected");
                        $('#' + currentEleId).siblings().removeAttr('aria-label');
                        $('#' + currentEleId).focus();
                    } else {
                        $('#' + currentEleId).attr('aria-selected', 'false');
                        $('#' + currentEleId).removeAttr('aria-label');
                    }
                }, 200);

                var thumbnailIndex1 = parseInt(this.getAttribute('data-index'));
                contentActiveIndex = thumbnailIndex1;
                setCarouselContent(thumbnailIndex1);
            }


            //Left arrow keypress 
            if (e.keyCode == 37 || e.keyCode == 38) {
                disableScroll();
                freeze();
                currentthumbEle = e.currentTarget;
                currentEleClass = $(currentthumbEle).attr('class');
                currentDataIndex = $(currentthumbEle).attr('data-index');
                currentthumbnailcount = $("." + currentEleClass + "[data-show=" + true + "]").length - 1;
                $('.' + currentEleClass + '[data-index=' + currentDataIndex + ']').prev().focus();
                unfreeze();
                setTimeout(function () {
                    enableScroll();
                }, 200);
                if (currentDataIndex == "0") {
                    $('.' + currentEleClass + '[data-index=' + currentthumbnailcount + ']').focus();
                    unfreeze();
                    setTimeout(function () {
                        enableScroll();
                    }, 200);
                }
                $(currentthumbEle).siblings().attr('tabindex', '-1');
            }
            //Right arrow keypress
            if (e.keyCode == 39 || e.keyCode == 40) {
                disableScroll();
                freeze();
                currentthumbEle = e.currentTarget;
                currentEleClass = $(currentthumbEle).attr('class');
                currentDataIndex = $(currentthumbEle).attr('data-index');
                currentthumbnailcount = $("." + currentEleClass + "[data-show=" + true + "]").length - 1;
                $('.' + currentEleClass + '[data-index=' + currentDataIndex + ']').next().focus();
                unfreeze();
                setTimeout(function () {
                    enableScroll();
                }, 200);
                if (currentDataIndex == currentthumbnailcount) {
                    $('.' + currentEleClass + '[data-index=' + 0 + ']').focus();
                    unfreeze();
                    setTimeout(function () {
                        enableScroll();
                    }, 200);

                }
                $(currentthumbEle).siblings().attr('tabindex', '-1');
            }
        };

        var carouselNavClick = function () {
            if (this.className.indexOf('right') > -1) {
                if (contentActiveIndex < carouselCount - 1) {
                    contentActiveIndex++;
                }

                if (arrowActivePosition >= thumbnailCount - 1) {
                    thumbnailActiveIndex++;
                }
            } else if (this.className.indexOf('left') > -1) {
                if (contentActiveIndex > 0) {
                    contentActiveIndex--;
                }

                if (arrowActivePosition <= 0) {
                    thumbnailActiveIndex--;
                }
            }

            thumbnailNavigating();
            setCarouselContent(contentActiveIndex);

            if (this.className.indexOf('right') > -1) {
                if (contentActiveIndex == carouselCount - 1) {
                    moveThumbnail(false);
                }
            } else if (this.className.indexOf('left') > -1) {
                if (contentActiveIndex == 0) {
                    moveThumbnail(true);
                }
            }
        };

        var showArrow = function (show) {
            forEach(carouselNavNodes, function (carouselNavNode) {
                carouselNavNode.style.visibility = show ? 'visible' : 'hidden';
            });
        }

        var onResize = function () {
            MOBILE = 3
            TABLET = 4;
            DESKTOP = $(".carousel-thumbnail-item").length;
            browserZoomLevel = Math.round(window.devicePixelRatio * 100);
            // if (browserZoomLevel != 200) {
            if (innerWidth < 768) {
                thumbnailCount = MOBILE;
            } else if (innerWidth < 1084) {
                thumbnailCount = TABLET;
            } else {
                thumbnailCount = DESKTOP;
            }

            thumbnailListWidth = $(carouselThumbnailList).width();
            thumbnailWidth = thumbnailListWidth / thumbnailCount;

            thumbnailNavigating();

            var currentViewport = MOBILE;
            if (innerWidth >= 1084) {
                currentViewport = DESKTOP;
            } else if (innerWidth >= 768) {
                currentViewport = TABLET;

            }
            if (carouselCount > currentViewport) {
                if (movingThumbnail == STAY) {
                    moveThumbnail(true);
                }
                var count = 0;
                while (arrowActivePosition >= currentViewport) {
                    $(carouselNavNodes[0]).trigger('click');
                    count++
                }
                while (count > 0) {
                    $(carouselNavNodes[1]).trigger('click')
                    count--;
                }

                showArrow(true);
            } else {

                while (thumbnailActiveIndex > 0) {
                    moveThumbnail(false);
                }
                movingThumbnail == STAY;
                showArrow(false);
            }



        };

        $(carouselContentNodes[0]).show();
        onResize();

        window.addEventListener('resize', onResize);

        forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
            carouselThumbnailNode.onclick = thumbnailClick;
            carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
        });
        /*Bug 339588 accessibility*/
        forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
            carouselThumbnailNode.onkeydown = thumbnailKeydown;
            carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
        });
        /*Bug 339588 accessibility*/
        forEach(carouselNavNodes, function (carouselNavNode) {
            carouselNavNode.onclick = carouselNavClick;
        });
    });
}
/**END LTR Carousel */

$(document).ready(function () {
    try {
        if ($("body").hasClass('rtl')) {
            cpImageTabRTLCarousel();
        } else {
            cpImageTabLTRCarousel();
        }
        $('.cp-image-tab-carousel .carousel-content-item').on('focus', function () {
            enableScroll();
        });
    } catch (err) {

    }
});

// Removing for TroubleShooting

// $(window).resize(function () {
//     $carouselThumbNailItem = $(".carousel-thumbnail-list a.carousel-thumbnail-item[data-show='true']");
//     if ($(window).innerWidth() < 768 && $(window).innerWidth() > 539)
//         thumbnailCount = 3;
//     else if ($(window).innerWidth() > 768 && $(window).innerWidth() < 1084)
//         thumbnailCount = 4
//     else
//         thumbnailCount = $carouselThumbNailItem.length;

//     thumbnailListWidth = $('.carousel-thumbnail-list').width();
//     thumbnailWidth = thumbnailListWidth / thumbnailCount;
// })

/*** Ends cp_ImageTabsCarousel ***/
/**Start RTL Carousel */
var $carouselThumbNailItem = $(".carousel-thumbnail-list a.carousel-thumbnail-item[data-show='true']");

function cpImageTabRTLCarousel() {
    $carouselThumbNailItem = $(".carousel-thumbnail-list a.carousel-thumbnail-item[data-show='true']");
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);

    forEach(document.querySelectorAll('.cp-image-tab-carousel'), function (componentNode) {

        var DESKTOP = $carouselThumbNailItem.length;
        var TABLET = 4;
        var MOBILE = 3;

        var STAY = 0;
        var FRONT = 1;
        var BACK = 2;
        var movingThumbnail = STAY;

        var carouselThumbnailNodes = componentNode.querySelectorAll('.carousel-thumbnail-item[data-show="true"]');
        var carouselThumbnailList = componentNode.querySelector('.carousel-thumbnail-list');
        var carouselNavNodes = componentNode.querySelectorAll('.livearea .carousel-nav');
        var carouselContentNodes = componentNode.querySelectorAll('.carousel-content-item[data-show="true"]');
        var carouselSlider = componentNode.querySelector('.carousel-arrow-slider');

        var thumbnailCount = DESKTOP;
        var thumbnailListWidth = $(carouselThumbnailList).width();
        thumbnailWidth = thumbnailListWidth / thumbnailCount;
        $carouselThumbNailItem.css("width", thumbnailWidth + "px");
        var thumbnailActiveIndex = 0;
        var contentActiveIndex = 0;
        var arrowActivePosition = 0;
        var carouselCount = carouselThumbnailNodes.length;


        var thumbnailNavigating = function () {
            thumbnailWidth = thumbnailListWidth / thumbnailCount;
            forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
                carouselThumbnailNode.style.width = thumbnailWidth + "px";
                carouselThumbnailNode.style.right = ((thumbnailIndex - thumbnailActiveIndex) * thumbnailWidth) + 'px';
            });
            // console.log(arrowActivePosition, carouselThumbnailList.getBoundingClientRect().left);
            carouselSlider.style.left = -($(carouselSlider).width() / 2 - (carouselThumbnailList.getBoundingClientRect().left + (thumbnailCount - arrowActivePosition - 1) * thumbnailWidth) - thumbnailWidth / 2) + 'px';
        };

        var moveThumbnail = function (toFront) {

            if (toFront) {
                thumbnailActiveIndex++;
                contentActiveIndex++;
                $(carouselThumbnailNodes[0]).before($(carouselThumbnailNodes[carouselCount - 1]));
                $(carouselContentNodes[0]).before($(carouselContentNodes[carouselCount - 1]));
                carouselThumbnailNodes[carouselCount - 1].style.right = ((0 - thumbnailActiveIndex) * thumbnailWidth) + 'px';
                movingThumbnail = movingThumbnail == STAY ? FRONT : STAY;
            } else {
                thumbnailActiveIndex--;
                contentActiveIndex--;
                $(carouselThumbnailNodes[carouselCount - 1]).after($(carouselThumbnailNodes[0]));
                $(carouselContentNodes[carouselCount - 1]).after($(carouselContentNodes[0]));
                carouselThumbnailNodes[0].style.right = ((carouselCount - 1 - thumbnailActiveIndex) * thumbnailWidth) + 'px';
                movingThumbnail = movingThumbnail == STAY ? BACK : STAY;
            }
            carouselContentNodes = componentNode.querySelectorAll('.carousel-content-item[data-show="true"]');
            carouselThumbnailNodes = componentNode.querySelectorAll('.carousel-thumbnail-item[data-show="true"]');
            forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
                carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
            });
        };

        var setCarouselContent = function (index) {
            thumbnailListWidth = $(carouselThumbnailList).width();
            thumbnailWidth = thumbnailListWidth / thumbnailCount;
            arrowActivePosition = index - thumbnailActiveIndex;
            $(carouselContentNodes).fadeOut();
            $(carouselContentNodes[index]).fadeIn();
            carouselSlider.style.left = -($(carouselSlider).width() / 2 - (carouselThumbnailList.getBoundingClientRect().left + (thumbnailCount - arrowActivePosition - 1) * thumbnailWidth) - thumbnailWidth / 2) + 'px';
        };

        var thumbnailClick = function () {
            //aria-select attribute changing on click
            forEach(carouselThumbnailNodes, function (caroselThumbNailNode) {
                caroselThumbNailNode.setAttribute("aria-selected", "false");
            });
            var thumbnailIndex = parseInt(this.getAttribute('data-index'));
            //aria-select attribute changing on click
            this.setAttribute("aria-selected", "true");
            // console.log(contentActiveIndex, thumbnailIndex);
            if (contentActiveIndex !== thumbnailIndex) {

                contentActiveIndex = thumbnailIndex;
                setCarouselContent(thumbnailIndex);
            }
        };

        var thumbnailkeydown = function (e) {

            var currentEleId;
            var currentEleClass;
            var currentthumbEle;
            var currentDataIndex;
            currentthumbEle = e.currentTarget;
            currentEleId = $(currentthumbEle).attr('id');

            if (e.keyCode == 13 || e.keyCode == 32) {
                enableScroll();
                currentthumbEle = e.currentTarget;
                currentEleId = $(currentthumbEle).attr('id');
                currentEleClass = $(currentthumbEle).attr('class');
                currentDataIndex = $(currentthumbEle).attr('data-index');
                currentAriaControl = $(currentthumbEle).attr('aria-controls');
                currentEleAlt = $('.' + currentEleClass + '[data-index=' + currentDataIndex + ']').children().find('img').attr('alt');

                setTimeout(function () {
                    if ($('#' + currentEleId).attr('aria-selected') == "false") {
                        $('#' + currentEleId).attr('aria-selected', 'true');
                        $('#' + currentEleId).attr('tabindex', '0');
                        $('#' + currentEleId).siblings().attr('tabindex', '-1');
                        $('#' + currentEleId).siblings().attr('aria-selected', 'false');
                        if (navigator.userAgent.toLowerCase().indexOf('edge') != -1) {
                            $('#' + currentEleId).attr('aria-label', currentEleAlt + " selected");
                            $('#' + currentEleId).siblings().removeAttr('aria-label');
                        }
                    } else {
                        $('#' + currentEleId).attr('aria-selected', 'false');
                        $('#' + currentEleId).removeAttr('aria-label');
                    }
                }, 200);


                var thumbnailIndex = parseInt(this.getAttribute('data-index'));
                if (contentActiveIndex !== thumbnailIndex) {
                    contentActiveIndex = thumbnailIndex;
                    setCarouselContent(thumbnailIndex);
                }
            }

            //Left arrow keypress 
            if (e.keyCode == 37 || e.keyCode == 38) {
                disableScroll();
                currentthumbEle = e.currentTarget;
                currentEleClass = $(currentthumbEle).attr('class');
                currentDataIndex = $(currentthumbEle).attr('data-index');
                currentthumbnailcount = $("." + currentEleClass + "[data-show=" + true + "]").length - 1;
                $('.' + currentEleClass + '[data-index=' + currentDataIndex + ']').next().focus();


                if (currentDataIndex == currentthumbnailcount) {
                    $('.' + currentEleClass + '[data-index=' + 0 + ']').focus();
                    $(carouselNavNodes[0]).trigger('click')
                }

                $(currentthumbEle).siblings().attr('tabindex', '-1');
            }
            //Right arrow keypress
            if (e.keyCode == 39 || e.keyCode == 40) {
                disableScroll();
                currentthumbEle = e.currentTarget;
                currentEleClass = $(currentthumbEle).attr('class');
                currentDataIndex = $(currentthumbEle).attr('data-index');
                currentthumbnailcount = $("." + currentEleClass + "[data-show=" + true + "]").length - 1;
                $('.' + currentEleClass + '[data-index=' + currentDataIndex + ']').prev().focus();

                if (currentDataIndex == "0") {
                    $(carouselNavNodes[1]).trigger('click');
                    $('.' + currentEleClass + '[data-index=' + currentthumbnailcount + ']').focus();

                }
                $(currentthumbEle).siblings().attr('tabindex', '-1');
            }
        };

        var carouselNavClick = function () {
            if (this.className.indexOf('right') > -1) {
                if (contentActiveIndex < carouselCount - 1) {
                    contentActiveIndex++;
                }

                if (arrowActivePosition >= thumbnailCount - 1) {
                    thumbnailActiveIndex++;
                }
            } else if (this.className.indexOf('left') > -1) {
                if (contentActiveIndex > 0) {
                    contentActiveIndex--;
                }

                if (arrowActivePosition <= 0) {
                    thumbnailActiveIndex--;
                }
            }

            thumbnailNavigating();
            setCarouselContent(contentActiveIndex);

            if (this.className.indexOf('right') > -1) {
                if (contentActiveIndex == carouselCount - 1) {
                    moveThumbnail(false);
                }
            } else if (this.className.indexOf('left') > -1) {
                if (contentActiveIndex == 0) {
                    moveThumbnail(true);
                }
            }
        };

        var showArrow = function (show) {
            forEach(carouselNavNodes, function (carouselNavNode) {
                carouselNavNode.style.visibility = show ? 'visible' : 'hidden';
            });
        }

        var onResize = function () {
            MOBILE = 3
            TABLET = 4;
            DESKTOP = $(".carousel-thumbnail-list a.carousel-thumbnail-item[data-show='true']").length;
            browserZoomLevel = Math.round(window.devicePixelRatio * 100);
            // if (browserZoomLevel != 200) {
            if (innerWidth < 768) {
                thumbnailCount = MOBILE;
            } else if (innerWidth < 1084) {
                thumbnailCount = TABLET;
            } else {
                thumbnailCount = DESKTOP;
            }

            thumbnailListWidth = $(carouselThumbnailList).width();
            thumbnailWidth = thumbnailListWidth / thumbnailCount;

            thumbnailNavigating();

            var currentViewport = MOBILE;
            if (innerWidth >= 1084) {
                currentViewport = DESKTOP;
            } else if (innerWidth >= 768) {
                currentViewport = TABLET;

            }
            if (carouselCount > currentViewport) {
                if (movingThumbnail == STAY) {
                    moveThumbnail(true);
                }
                var count = 0;
                while (arrowActivePosition >= currentViewport) {
                    $(carouselNavNodes[0]).trigger('click');
                    count++
                }
                while (count > 0) {
                    $(carouselNavNodes[1]).trigger('click')
                    count--;
                }

                showArrow(true);
            } else {

                while (thumbnailActiveIndex > 0) {
                    moveThumbnail(false);
                }
                movingThumbnail == STAY;
                showArrow(false);
            }


        };

        $(carouselContentNodes[0]).show();
        onResize();

        window.addEventListener('resize', onResize);

        forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
            carouselThumbnailNode.onclick = thumbnailClick;
            carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
        });
        /*Bug 339588 accessibility*/
        forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
            carouselThumbnailNode.onkeydown = thumbnailkeydown;
            carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
        });
        /*Bug 339588 accessibility*/
        forEach(carouselNavNodes, function (carouselNavNode) {
            carouselNavNode.onclick = carouselNavClick;
        });
    });
}
/**END RTL Carousel */
/*cp_5PillarsOverlayContent.js*/
$(document).ready(function () {
    try {
        var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
        forEach(document.querySelectorAll('.cp-five-pillar-overlay-content-1'), function (componentNode) {

            var itemNodes = componentNode.querySelectorAll('.pillar-item');
            var DESKTOP = 1084;
            var TABLET = 768;
            var MOBILE = 540;
            var activeIndex = 0;
            var isActive = false;

            $(document).on("keyup", itemNodes, function (event) { //close pop up on escape/enter key press
                var target = event.target ? event.target : event.srcElement;
                if (target.className.indexOf("pillar-item") >= 0 || (target.className && target.className.indexOf('pillar-close-button') >= 0)) {
                    if (event.keyCode == 27 || event.charCode == 27 || event.which == 27) {
                        forEach(itemNodes, function (subItemNode) {
                            subItemNode.removeAttribute('data-active');
                        });
                        isActive = false;
                        resize();
                        $(target).closest(".pillar-item").focus();
                    }
                    if (target.className.indexOf('pillar-close-button') >= 0)
                        if (event.keyCode == (13) || event.charCode == (13) || event.which == (13)) {
                            $(target).closest(".pillar-item").focus();
                        }

                }
            });
            var itemClick = function (event) {

                if (event.target.window || event.target.className.indexOf('pillar-close-button') < 0) {
                    forEach(itemNodes, function (subItemNode, subIndex) {
                        if (innerWidth >= MOBILE && innerWidth < TABLET && ((activeIndex < 2 && subIndex < 2) || (activeIndex >= 2 && activeIndex < 4 && subIndex >= 2 && subIndex < 4) || (activeIndex >= 4 && subIndex >= 4)) ||
                            innerWidth >= TABLET && innerWidth < DESKTOP && ((activeIndex < 3 && subIndex < 3) || (activeIndex >= 3 && subIndex >= 3)) ||
                            innerWidth >= DESKTOP) {
                            subItemNode.setAttribute('data-active', false);
                        } else {
                            subItemNode.setAttribute('data-active', 'fade');
                        }
                    });
                    itemNodes[activeIndex].removeAttribute("style");
                    itemNodes[activeIndex].setAttribute('data-active', true);
                    isActive = true;
                    //On popu open set default Focus on close button 
                    $(itemNodes[activeIndex].querySelector(".pillar-popup")).focusout();
                    $(itemNodes[activeIndex].querySelector(".pillar-popup").querySelector(".pillar-close-button")).attr("tabindex", "0").focus();

                }

                if (event.target.className && event.target.className.indexOf('pillar-close-button') >= 0) {
                    forEach(itemNodes, function (subItemNode) {
                        subItemNode.removeAttribute('data-active');
                    });
                    isActive = false;
                    resize();
                }
            };

            var resize = function () {
                var maxHeight = 0;
                forEach(itemNodes, function (itemNode, index) {
                    itemNode.removeAttribute("style");
                    maxHeight = Math.max(maxHeight, itemNode.clientHeight);
                });
                forEach(itemNodes, function (itemNode, index) {
                    itemNode.style.height = maxHeight + 'px';
                });
            };

            $(".cp-five-pillar-overlay-content-1 ").each(function (e) { // Fix made to keep focus on links incase pop up is disabled
                $(this).find(".pillar-item").each(function () {
                    if (!$(this).hasClass("disable-popup")) {
                        $(this).attr("tabindex", "0");
                        $(this).find(".pillar-content").find("a").removeAttr("href");
                    } else
                        $(this).attr("tabindex", "-1");
                });

            });

            forEach(itemNodes, function (itemNode, index) {

                itemNode.onclick = function (event) {

                    activeIndex = index;
                    if (!$(itemNode).hasClass("disable-popup")) {
                        itemClick(event);
                    }

                };
                itemNode.onkeyup = function (event) {
                    if (event.keyCode == 13 || event.which == 13 || event.charCode == 13) { //updated to support all browsers
                        activeIndex = index;
                        if (!$(itemNode).hasClass("disable-popup")) {
                            itemClick(event);
                        }

                    }
                };
            });

            window.addEventListener('resize', function (event) {
                resize();
                if (isActive) {
                    itemClick(event);
                }
            });
            resize();
        });
    } catch (err) {

    }
});




function setHero1ColHeight() {
    try {

        $(".hero-height").each(function () {
            if ($(this).find("picture").children().length == 0) {
                $(this).css("height", "auto");
                $(this).find(".hero-content").css("height", "auto");
                if (window.matchMedia("(min-width: 540px)").matches) {
                    var parentheight = $(this).height();
                    var childheight = $(this).find(".hero-content").outerHeight(true);
                    if (childheight >= parentheight) {
                        childheight += 40;
                        $(this).css("height", childheight)
                    }
                }
            }
        });
    } catch (e) {

    }

}
$(document).ready(function () {
    setHero1ColHeight();
});
$(window).resize(function () {
    setHero1ColHeight();
});


/* Start CP_MWF_ContentPlacement_1_VG */
$(document).ready(function () {
    ContentPlacementHeight();
});

$(window).resize(function () {
    ContentPlacementHeight();
});
var CP_child_element_height = function ($parent, $child) {
    var maxHeight = 0;
    $parent.find($child).css("height", "auto");
    $parent.find($child).each(function () {
        var cHeight = $(this).outerHeight();
        maxHeight = (maxHeight > cHeight) ? maxHeight : cHeight;
        // console.log(maxHeight);
    });
    $parent.find($child).css("height", maxHeight);
}
var gridcount;

function ContentPlacementHeight() {
    $('.cp-content-placement').each(function () {
        gridcount = $(this).find(".content-placement-main").attr('data-grid-count');
        if (gridcount == 2) {
            $(this).find('.content-placement-col').each(function () {
                $(this).attr('data-grid', 'col-6 pad-6x');
            });
        } else if (gridcount == 3) {
            $(this).find('.content-placement-col').each(function () {
                $(this).attr('data-grid', 'col-4 pad-6x');
            });
        } else if (gridcount == 4) {
            $(this).find('.content-placement-col').each(function () {
                $(this).attr('data-grid', 'col-3 pad-6x');
            });
        }
        if ((gridcount == 4 && (window.matchMedia("(min-width: 540px)").matches)) ||
            ((gridcount == 2 || gridcount == 3) && (window.matchMedia("(min-width: 768px)").matches))) {
            $(this).find(".content-parent").addClass("cprowparent");
            $(this).find(".badge-section").addClass("sheight");
            $(this).find("h3").addClass("hheight");
            $(this).find("p").addClass("pheight");
            $(this).find("div.c-group").addClass("linksheight");
            if ($(".linksheight").length > 0) {
                CP_child_element_height($(".cprowparent"), $(".linksheight"));
            }
            if ($(".sheight").length > 0) {
                CP_child_element_height($(".cprowparent"), $(".sheight"));
            }
            if ($(".hheight").length > 0) {
                CP_child_element_height($(".cprowparent"), $(".hheight"));
            }
            if ($(".pheight").length > 0) {
                CP_child_element_height($(".cprowparent"), $(".pheight"));
            }
            $(".sheight").removeClass("sheight");
            $(".bssheight").removeClass("bssheight");
            $(".hheight").removeClass("hheight");
            $(".pheight").removeClass("pheight");
            $(".linksheight").removeClass("linksheight");
            $(".cprowparent").removeClass("cprowparent");

        } else {
            $(this).find(".content-parent").css("height", "auto");
            $(this).find(".badge-section").css("height", "auto");
            $(this).find("h3").css("height", "auto");
            $(this).find("p").css("height", "auto");
            $(this).find("div.c-group").css("height", "auto");
        }
    });
}

/* End CP_MWF_ContentPlacement_1_VG */

/*Task 343069: Analysis on Empty tags present in DOM structure*/
$(document).ready(function () {
    $('.cp-side-media-with-copy').each(function () {
        $('.cp-col2-right .video-link').find("a").each(function () {
            if ($(this).text() == "") {
                if (!$(this).hasClass('open-popup-video')) {
                    $(this).remove();
                }
            }

        });
    });
    $('.cp-five-pillar-overlay-content-1 p').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    });
    $('.case-study h3').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    });
    $('#CP_Footer_1 p').each(function () {
        if ($(this).text() == "") {
            if ($(this).siblings().find("a") != "") {
                $('#CP_Footer_1 p').css("margin-top", "20px");
            }
            $(this).remove();
        }
    });

    $('.cortana-6tabs').each(function () {
        $('.inner-tab-container .video-link').find("a").each(function () {
            if ($(this).text() == "") {
                if (!$(this).hasClass('open-popup-video')) {
                    $(this).remove();
                }
            }

        });
    });
    $('.cp-sidevideo-with-copy').each(function () {
        $('.side-video-carousel .video-link').find("a").each(function () {
            if ($(this).text() == "") {
                if (!$(this).hasClass('open-popup-video')) {
                    $(this).remove();
                }
            }

        });
    });

});


/* Start CP_MWFHeroCarousel_1_VG*/
$(window).load(function () {
    $('.cp-mwf-hero-carousel .m-hero div.c-carousel-p ul li').each(function () {
        if ($(this).find('section').hasClass('theme-dark')) {
            $(this).attr('data-f-theme', 'dark');
        }
        if ($(this).find('section').hasClass('theme-light')) {
            $(this).attr('data-f-theme', 'light');
        }
    });
    if (window.matchMedia("(max-width: 539px)").matches) {
        mwfCarouselMaxHeight();
    }
    mwfCarouselSR();

    /**Static menu width calculation */
    var el = $('#static_menu_1');
    var len = el.children().length;
    if (len > 0) {
        len = 100 / len;
        el.find('li.dtc').css("width", len + "%");
        // console.log(len);
    }
    /**Static menu width calculation */
});
$(window).resize(function () {
    if (window.matchMedia("(max-width: 539px)").matches) {
        mwfCarouselMaxHeight();
    } else {
        $(".cp-mwf-hero-carousel .c-carousel-p li .fn").css('height', '100%');
    }
    mwfCarouselSR();
});

function mwfCarouselMaxHeight() {
    if ($(".cp-mwf-hero-carousel").length > 0) {
        $(".cp-mwf-hero-carousel").each(function () {
            $(this).find(".c-carousel-p li").addClass("rowparent");
            $(this).find(".fn").addClass("hheight");
            if ($(".hheight").length > 0) {
                side_elements_height($(".rowparent"), $(".hheight"));
            }
            $(".hheight").removeClass("hheight");
        });
    }
}

function mwfCarouselSR() {
    $('.cp-mwf-hero-carousel .m-hero div.c-carousel-p ul>li, .cp-mwf-hero-carousel .m-hero .hero-single-slide-item').each(function () {
        $(this).find('.m-hero-item .hero-c-bg ul li').each(function () {
            if (!$(this).find('a').hasClass('theme-transparent') && (window.matchMedia("(min-width: 540px)").matches)) {
                $(this).closest('.hero-c-links').addClass('hero-buttons');
            } else {
                $(this).closest('.hero-c-links').removeClass('hero-buttons');
            }
        });
    });
}
/* End CP_MWFHeroCarousel_1_VG*/

/*******************Bug #346839 Fix ***************/
$('body').on("load", function () {
    if ($('div#csInv img').attr("alt") == "Close Survey Invite") {
        setTimeout(function () {
            var $element = $('div#csInv').find("div[tabindex=1]");
            $element.blur();
            $('div#csInv img:last-child').attr("tabindex", "0").focus();
        }, 3000);
    }
});
/*******************Bug #346839 Fix ***************/
function freeze() {
    if ($("html").css("position") != "fixed") {
        var top = $("html").scrollTop() ? $("html").scrollTop() : $("body").scrollTop();
        if (window.innerWidth > $("html").width()) {
            $("html").css("overflow-y", "scroll");
        }
        $("html").css({
            "width": "100%",
            "height": "100%",
            "position": "fixed",
            "top": -top
        });
    }
}

//Unfreeze page content scrolling
function unfreeze() {
    if ($("html").css("position") == "fixed") {
        $("html").css("position", "static");
        $("html, body").scrollTop(-parseInt($("html").css("top")));
        $("html").css({
            "position": "",
            "width": "",
            "height": "",
            "top": "",
            "overflow-y": ""
        });
    }
}
/*348312 */
$(document).ready(function () {
    $('.hero-1-col .hero-content ul li').each(function () {
        if ($(this).find("a").hasClass("theme-transparent")) {
            $(this).addClass('fn');
        }

    });
})

/*Srikanth uhf fix for hilighting the parent */
$(document).ready(function () {

    try {
        var relativeUrl = window.location.search != "" ? window.location.pathname + window.location.search : window.location.pathname;
        var pageNameStartIndex = relativeUrl.lastIndexOf('/');
        var pageFromUrl = relativeUrl.substring(pageNameStartIndex + 1).split('?')[0]

        var pagename1 = $('.js-cat-head a').attr('href').toString();
        if (pagename1.indexOf("/cloud-platform/") > -1) {
            var index = pagename1.lastIndexOf('/');
            var cpPageName = pagename1.substring(index + 1).split('.')[0];
            if (pageFromUrl.toString().toLowerCase() == cpPageName.toString().toLowerCase()) {

                $("#uhfCatLogo").addClass('current');
            }
        }
    } catch (err) {
        console.log(err.message);
    }
});
