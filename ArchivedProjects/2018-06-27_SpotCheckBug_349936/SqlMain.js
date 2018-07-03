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
    if (navigator.userAgent.toLowerCase().indexOf("edge") > 0) {
        $("html").addClass("edge-browser")
    }
});
$(window).resize(function () {
    imgclassupdation();
    /*346222*/
    changeRoletoTab();

});



/*high contrast detection*/

jQuery.fn.HighContrastDetection = function () {


    if ($("html").hasClass("edge-browser")) {

        if (window.matchMedia("(-ms-high-contrast: active)").matches == true) {
            $("html").addClass("high-contrast");

        } else {
            $("html").addClass("normal");
        }
    } else {
        if ($("a.close-button").css("background-image") == "none") {
            $("html").addClass("high-contrast");

        } else {
            $("html").addClass("normal");
        }
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
        if ($(this).prev("a").attr("data-no-tag") == 1) {
            $(this).prev("a").addClass("side-media-deep-link");
        }
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
/*window.onerror = function(message, source, lineno, colno, error) {
    console.log("Message: " + message + ", Source:" + source + ", lineno:" + lineno);
}*/

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
        //console.log(e);
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

        $(".stage-content #table_container.text-on-left").find(".left-container").remove();
        $(".stage-content #table_container.text-on-right").find(".right-container").remove();


        var arrowHtml = $("#selected-price b");
        $("#selected-price").click(function () {
            $(".price-list").toggle();
        });

        $(".price-list li").click(function () {
            $("#selected-price").text($(this).text());
            $("#selected-price").append(arrowHtml);
            $(this).parent().hide();
        })
    } catch (err) {
        //console.log(err);
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
            updateSubNavTab();
        }
    } catch (err) {

    }


});
/*mediacarouselcentral align*/
function fixcontentHeights() {
    try {
        $(".cp_media_carousel_with_responsive").each(function () {
            var maxheadheight = 0;
            $(this).find(".text-content").each(function () {
                $(this).find("h3").css("height", "auto");
                var headheight = $(this).find("h3").height();
                maxheadheight = maxheadheight > headheight ? maxheadheight : headheight;
            });
            $(this).find(".text-content").each(function () {
                $(this).find("h3").css("height", maxheadheight);
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
        $(".cp-tab-parent").removeClass("tabupdtaed");
    } else {
        $(".cp-tab-parent").css("height", "0px");
        if (!$(".cp-tab-parent").hasClass("tabupdtaed")) {
            $(".cp_subtab .tabs").each(function () {
                if ($(this).hasClass("active-tab")) {
                    $(this).addClass("dn");
                    $(this).parents().closest("section").find(".presenttab span").text($(this).children().text());
                    $(this).parent().addClass("tabupdtaed");
                } else {
                    $(this).removeClass("dn")
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

    }


});
$(window).load(function () {
    $(".cpsubdatatabs .tabdata").each(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("dn");
        }
    });
    /*346222*/
    //$('.cp_media_carousel_with_responsive .carousel-wrapper .slick-dots li').attr('role','tab');
    changeRoletoTab();
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
        //console.log(err);
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
    if (window_height < $(".panel-popup").height()) {
        $(".panel-popup").css("height", window_height - 50);
    } else {
        $(".panel-popup").css("height", "auto");
    }

    var topval = $(".popup-overlay").height() / 2 - $(".panel-popup").height() / 2 + "px";
    $(".panel-popup").css("top", topval);
}
$(document).on("click", ".partner-icon", function (e) {
    e.preventDefault();
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
    $(".popup-overlay").fadeIn(700, function () {
        $(".popup-overlay").addClass("active");
    });


    $("body").addClass("gallerypopup");
    $("html").addClass("gallerypopup");;
    fixpopupHeight();
})
$(document).on("click", ".panel-popup .close-button", function () {

    closepopup();

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
                    });
                }
                return false;
            }

            activateAccordion(defaultHeader);

            headers.click(function (event) {
                event.preventDefault();
                var header = $(this);
                activateAccordion(header);
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
                    $(this).find(".right-content").find(".image-holder a").css("display", "none");
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
    } catch (error) {
        //console.log(error.message);
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
        //console.log('error in  MediaCarousel JS');
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
        //console.log("Carousel Issue -> " + e.message);
    }
});



/*twoColBGCOLR*/
$(window).on("load resize", function () {
    try {
        var setHeight;
        var setParaHeight;
        $(".cp-TwoCol-BGColor .column-1").css("height", "auto");
        $(".cp-TwoCol-BGColor .column-2").css("height", "auto");
        var col1_height = $(".cp-TwoCol-BGColor .column-1").outerHeight();
        var col2_height = $(".cp-TwoCol-BGColor .column-2").outerHeight();
        var col1_paraHeight = $(".cp-TwoCol-BGColor .column-1 h6").outerHeight();
        var col2_paraHeight = $(".cp-TwoCol-BGColor .column-2 h6").outerHeight();
        if (col1_height > col2_height) {
            setHeight = col1_height;
        } else {
            setHeight = col2_height;
        }
        $(".cp-TwoCol-BGColor .column-2").height(setHeight);
        $(".cp-TwoCol-BGColor .column-1").height(setHeight);
        if (col1_paraHeight > col2_paraHeight) {
            setParaHeight = col1_paraHeight;
        } else {
            setParaHeight = col2_paraHeight;
        }
        $(".cp-TwoCol-BGColor .column-2 h6").height(setParaHeight);
        $(".cp-TwoCol-BGColor .column-1 h6").height(setParaHeight);
    } catch (err) {
        //console.log(err);
    }
});
/*cp-static menu*/
/********************Static-Menu*******************/
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

    function init() {

        resetContainer = false;
        $intraPageNav = $('#CP_StaticMenu');
        $intraPageNavList = $('#CP_StaticMenu ul');
        $intraPageNavListItems = $('#CP_StaticMenu li');
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
            $(this).addClass('active-menu'); //active-menu
            var element_id = $(this).attr('href').trim();
            addStickyBehaviour();
            resetContainerPosition();
            adjustContainerPosition(element_id);
            focusorder(); //focus

        });
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
                        if ($($bookmark.id).children().length > 0) {
                            $bookmark.padding = $($bookmark.id).children(":first").css("padding-top");
                            $bookmark.margin = $($bookmark.id).children(":first").css("margin-top");
                        } else {
                            $bookmark.padding = $($bookmark.id).next().children(":first").css("padding-top");
                            $bookmark.margin = $($bookmark.id).next().children(":first").css("margin-top");
                        }

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
                focusorder();

            }
            if ($(window).scrollTop() > intraPageNavTopValue) {
                if ($(window).scrollTop() > Math.floor($($bookmarks[0].id).offset().top)) {

                    addStickyBehaviour();
                } else {
                    removeStickyBehaviour();

                }
            } else if ($(window).scrollTop() < Math.floor($($bookmarks[0].id).offset().top)) {
                removeStickyBehaviour();

            }
            $.each($bookmarks, function (index, element) {
                if (element != null && ($(window).scrollTop() >= Math.floor($(element.id).offset().top - containerTop))) {
                    deActivateAllNavBarLinks();
                    $($validIntraPageNavLinks[index]).addClass('active-menu'); //active-menu


                }
            });
            callslick();
        });

        function callslick() {
            if ($intraPageNavList.hasClass("slick-slider")) {
                var selectedindex = 0;

                $intraPageNavList.find("li").each(function () {
                    if ($(this).find("a").hasClass("active-menu")) { //active-menu
                        selectedindex = $(this).index();

                    }
                });

                $intraPageNavList.slick("slickGoTo", selectedindex)

            }
        }

        if (addStickyOnPageLoad) {

            window.scrollTo(0, Math.ceil($currentBookmark.offset().top));
        }
    }

    function deActivateAllNavBarLinks() {
        $intraPageNavLinks.each(function (index, element) {
            if ($(element).hasClass('active-menu')) { //active-menu
                $(element).removeClass('active-menu');
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
            $('#CP_StaticMenu .nav-grid-container ul li a').removeClass('active-menu');
        }
        deActivateAllNavBarLinks();

    }

    function adjustContainerPosition(element) {
        var _height = $('#CP_StaticMenu').height();


        if ($(element).children().length > 0) {
            $(element).children(":first").css("margin-top", "0px");
            $(element).children(":first").css("padding-top", _height + "px");
        } else {
            $(element).next().children(":first").css("margin-top", "0px");
            $(element).next().children(":first").css("padding-top", _height + "px");
        }
        $('#CP_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");



        setTimeout(function () {
            resetContainer = true;
        }, 500);



    }

    /*Ramesh - 2017-09-11*/
    function focusorder() {
        $('.cp-side-media-with-copy a').on('focus', function (e) {
            var currentElement = e.currentTarget;
            console.log("current Parent:" + currentElement.parent());
            $(currentElement).focus();
            $('.staticmenu .slick-slider li a').attr('tabindex', '-1');
        });
    }

    function resetContainerPosition() {
        $.each($bookmarks, function (index, element) {
            if ($(element.id).children().length > 0) {
                $(element.id).children(":first").css("margin-top", $bookmarks[index].margin);
                $(element.id).children(":first").css("padding-top", $bookmarks[index].padding);
            } else {
                $(element.id).next().children(":first").css("margin-top", $bookmarks[index].margin);
                $(element.id).next().children(":first").css("padding-top", $bookmarks[index].padding);
            }
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
    }, 100);
});



/********************Static-Menu*******************/
/*silent-loopingvideo*/

function playYouTubeVideo() {
    var youtube = document.querySelector('.silent-looping-video');
    var player = null;
    if (youtube) {
        new YT.Player(youtube, {
            videoId: youtube.getAttribute('videoId'),
            playerVars: {
                'autohide': 1,
                'controls': 0
            },
            events: {
                'onReady': function (event) {

                    player = event.target;
                    player.playVideo();
                    setInterval(function () {

                        player.seekTo(0);
                    }, player.getDuration() * 1000 - 500)
                }
            }
        });
    }
}


$(window).load(function () {


    try {
        var videoWrapper = $('#CP_SilentLoopingVideo_1');
        var youtubeIframe = $(videoWrapper).find('.silent-looping-video');

        var videoId = $(youtubeIframe).attr("videoId");
        $(window).resize(function () {
            if (youtubeIframe[0]) {
                videoWrapper.height(videoWrapper.width() * 1 / 4);
                youtubeIframe.height(videoWrapper.width() * 1 / 4 + 200);
            }
        }).trigger('resize');
        var iframeSrc = "https://www.youtube.com/embed/" + videoId + "?autohide=1&amp;controls=0&amp;autoplay=1&amp;enablejsapi=1&amp;loop=1";
        //reload frame to apply settings
        youtubeIframe.attr("src", iframeSrc);

        //disable click events to stop clicks from pausing video
        youtubeIframe.on("click", function () {
            event.stopPropagation();
        });



        //onYouTubeIframeAPIReady();
        playYouTubeVideo();
    } catch (err) {
        //console.log(err);
    }
});
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
        //console.log(err);
    }
}

function setheight()

{
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
                    //console.log(err);
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
        // console.log(error);
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
    }
}

$(document).ready(function () {

    try {
        var relativeUrl = window.location.search != "" ? window.location.pathname + window.location.search : window.location.pathname;
        var pageNameStartIndex = relativeUrl.lastIndexOf('/');
        var pageFromUrl = relativeUrl.substring(pageNameStartIndex + 1).split('?')[0];


        var activeLinkObjId = "";

        //  if (window.msCommonShell) {
        $('#uhf-c-nav a').each(function (index, value) {
            var uhfAnchorValue = value.toString();
            // To handle 'cloud-platform' urls in UHF  //
            if (uhfAnchorValue.indexOf("/sql-server/") > -1) {
                var index = uhfAnchorValue.lastIndexOf('/');
                var cpPageName = uhfAnchorValue.substring(index + 1).split('.')[0];
                //console.log("pagename: ",cpPageName.toString());

                if ((pageFromUrl.toString().toLowerCase() != "" && cpPageName.toString().toLowerCase() != "") && (pageFromUrl.toString().toLowerCase() == cpPageName.toString().toLowerCase())) {
                    activeLinkObjId = $(value).attr('id');
                    $("#" + activeLinkObjId).addClass('current');
                    $("#" + activeLinkObjId).closest(".c-uhf-menu").addClass('currentParent');
                    $("#" + activeLinkObjId).parents('li.f-sub-menu').addClass('currentSubParent');
                }
            }

        });
        // }

        //OLD EndPoint UHF Left For ja-jp

        if (window.msCommonShell) {
            $('ul.c-menu-container.shell-category-top-level.shell-category-nav-wrapper .c-top-nav-item a').each(function (index, value) {
                var uhfAnchorValue = value.toString();

                // To handle 'cloud-platform' urls in UHF  //
                if (uhfAnchorValue.indexOf("/sql-server/") > -1) {
                    var index = uhfAnchorValue.lastIndexOf('/');
                    var cpPageName = uhfAnchorValue.substring(index + 1).split('.')[0];
                    //console.log(cpPageName.toString());

                    if ((pageFromUrl.toString().toLowerCase() != "" && cpPageName.toString().toLowerCase() != "") && (pageFromUrl.toString().toLowerCase() == cpPageName.toString().toLowerCase())) {
                        activeLinkObjId = $(value).attr('id');
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
        }

        var shellOptions = {
            currentMenuItemId: activeLinkObjId
        };
        window.msCommonShell.load(shellOptions);
        UHFResourcesMenuHighlighter();

    } catch (err) {
        // console.log(err.message);
    }
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
            updateHeight('.cp-four-reasons-1', 'h6.column-title'); //four-reasons Bug #336899 Fix By Nagaraju K;					updateHeight('.cp-four-reasons-1','h6.column-title');//four-reasons;
            updateHeight('.cp-four-reasons-1', 'p.body-alt'); //four-reasons Bug #336899 Fix By Nagaraju K;		
        }

    } catch (e) {
        // console.log('error in Five Reasons Carousel JS');
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
        $(this).find(element).height(tallestHeight);
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
        if (window.matchMedia("(max-width:539px)").matches) {
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
                    if ($(this).find("h2.main-title").text() == "") {
                        $(this).find("h2.main-title").parent().remove();
                        $(this).addClass("no-heading");
                    }
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
                        $(this).find('.text-container  h3').height(tallestHeight);
                        $(this).find('.text-container  p').height(paraHeight - 15);
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
        // console.log('error in Three Reasons Carousel JS');
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
                    dots: false

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
        // console.log(err);

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
        selectedvalue = selectedvalue.replace(/[\W_]/g, '');
        subSelectedvalue = valueParts[1];
        subSelectedvalue = subSelectedvalue.replace(/[\W_]/g, '');

        var topvalue = 0;
        var addheight = 0;
        if ($(".cortana-6tabs").length > 0) {

            if ($(".cp-sticky-nav-sub").length > 0) {
                addheight = 2 * $(".cp-sticky-nav-sub").height();

            }
            $(".cortana-6tabs .main-menu-ul").find("li").each(function () {
                var deeplinkid = $(this).find("a").attr("data-deeplinkid");
                if (deeplinkid != "" || deeplinkid != undefined || deeplinkid != null) {
                    deeplinkid = deeplinkid.toString().replace(/[\W_]/g, '').toLowerCase();

                    var x = $(this);
                    var submenu;
                    $(this).parent().addClass("currentslicktab");

                    topvalue = $(".currentslicktab").parents().closest(".cortana-6tabs").offset().top;

                    topvalue = topvalue - addheight;

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
                                    if (deeplink != "" || deeplink != undefined || deeplink != null) {
                                        deeplink = deeplink.toLowerCase();
                                        deeplink = deeplink.replace(/[\W_]/g, '');

                                        if (deeplink == subSelectedvalue) {
                                            subindex = $(this).index();
                                            $(this).trigger("click");
                                        }
                                        if (subindex == count) {
                                            lastchild = true;
                                        }
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
                            }, 500);
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
                }

            });


        }
    }
}
/*appending cortanatab value on pageload*/
function updateCortanaUrl() {
    var mainTab = $(".cortana-6tabs").find(".main-menu-ul").find("li.current a").attr("data-deeplinkid").toLowerCase();
    mainTab = mainTab.replace(/[\W_]/g, '');

    var subTab = $(".cortana-6tabs").find(".tab-content.activeTab").find("li.current a").attr("data-deeplinkid").toLowerCase();
    subTab = subTab.replace(/[\W_]/g, '');

    var tab = mainTab + (subTab ? '&' + subTab : '');

    var tab_value = "";
    var tabvalue;
    var subtabvalue;;
    var url = location.href;
    if (url.indexOf("#") > 0) {
        url = url.substring(url.indexOf("#"), url.length);

        tabvalue = url.split("#");
        tab_value = tabvalue[1];
        if (tab_value.indexOf("&") > 0) {
            subtabvalue = tab_value.split("&");
            var maintabvalue = subtabvalue[0].toString().toLowerCase();
            subtabvalue = subtabvalue[1].toString().toLowerCase();
            maintabvalue = maintabvalue.replace(/[\W_]/g, '');

            subtabvalue = subtabvalue.replace(/[\W_]/g, '');

        }
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

function cortanaInnerMenuHeight() {
    var maxheight = 0;
    $(".tab-content.activeTab .inner-menu-ul").find("li").css("height", "auto");
    $(".tab-content.activeTab .inner-menu-ul").find("li").find(".v-table").css("height", "auto");
    setTimeout(function () {

        $(".tab-content.activeTab .inner-menu-ul").find("li").each(function () {

            var currentheight = $(this).height();
            maxheight = maxheight > currentheight ? maxheight : currentheight;


        });

        $(".tab-content.activeTab .inner-menu-ul").find("li").css("height", maxheight);
        $(".tab-content.activeTab .inner-menu-ul").find("li").find(".v-table").css("height", maxheight);
    }, 100);

}

function cortanaOuterMenuHeight() {
    var maxheight = 0;

    $(".main-menu-ul").find("li").css("height", "auto");
    $(".main-menu-ul").find("li").find(".v-table").css("height", "auto");
    setTimeout(function () {
        $(".main-menu-ul").each(function () {
            $(this).find("li").each(function () {

                var currentheight = $(this).height();
                maxheight = maxheight > currentheight ? maxheight : currentheight;


            });
            $(this).find("li").css("height", maxheight);
            $(this).find("li").find(".v-table").css("height", maxheight);
            $(this).parents().closest(".livearea").css("height", maxheight);
            $(this).parents().closest(".ms-row").css("height", maxheight + 2);
        });
    }, 100);

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
    try {
        var count_li = $(".cortana-6tabs .main-menu-ul").children().length;
        if (count_li >= 6) {
            count_li = 6;
        }

        var dirrtl = false;
        if ($("body").hasClass("rtl")) {
            dirrtl = true;
        }
        $('.cortana-6tabs .main-menu-ul').slick({
            rtl: dirrtl,
            slidesToShow: count_li,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: false,
            responsive: [{
                breakpoint: 540,
                settings: {
                    slidesToShow: Math.min(2, count_li),
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(4, count_li),
                    slidesToScroll: 1

                }
            }]
        });

        $(".cortana-6tabs.menu-container .slick-slider .slick-next, .menu-container .slick-slider .slick-prev").text("");
    } catch (err) {}
}

function slicksubInitializer(count_li) {
    try {

        if (count_li >= 6) {
            count_li = 6;
        }
        var dirrtl = false;
        if ($("body").hasClass("rtl")) {
            dirrtl = true;
        }
        if ($(".activeTab").find(".inner-menu-ul").hasClass("slick-slider")) {
            $(".activeTab").find(".inner-menu-ul").slick("unslick");
        }
        $(".activeTab").find(".inner-menu-ul").slick({
            rtl: dirrtl,
            slidesToShow: count_li,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: false,
            responsive: [{
                breakpoint: 540,
                settings: {
                    slidesToShow: Math.min(2, count_li),
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(4, count_li),
                    slidesToScroll: 1,

                }
            }]
        });

        $(".cortana-6tabs.menu-container .slick-slider .slick-next, .menu-container .slick-slider .slick-prev").text("");
        // if ($(".cortana-6tabs .inner-menu-ul li").not(".inner-menu-ul li:first-child").hasClass("current")) {
        //     $(".cortana-6tabs .inner-menu-ul li:first-child").addClass("current").siblings().removeClass("current");
        //     $(".cortana-6tabs .inner-tab-container .ms-grid > div:first-child").addClass("activeTab").siblings().removeClass("activeTab");
        // }
    } catch (err) {

    }
}


$(window).on('load', function () {
    if ($(".cortana-6tabs").length > 0) {
        var count_li = $(".cortana-6tabs .main-menu-ul").children().length;
        $(".cortana-6tabs .main-menu-ul").attr("data-child-count", count_li);
        slickInitializer();
        if ($('.cortana-6tabs .inner-menu-ul').length > 0) {
            slicksubInitializer(count_li);
        }
        cortanaOuterMenuHeight();
        cortanaInnerMenuHeight();

        $(".cortana-6tabs.menu-container .slick-slider .slick-next, .cortana-6tabs.menu-container .slick-slider .slick-prev").text("");


    }
});


$(document).ready(function () {

    $(".cortana-6tabs .main-menu-ul li").on("click tap", function (e) {
        var parentcount = $(".cortana-6tabs .main-menu-ul").attr("data-child-count");
        e.preventDefault();
        $(this).addClass("current");
        $(this).siblings().removeClass("current");

        $(this).find('.active-img').addClass("activeTab").siblings().removeClass("activeTab");
        $(this).siblings().find('.active-img').removeClass("activeTab").siblings().addClass("activeTab");
        var clickedId = $(this).attr("id");
        $(".cortana-6tabs .tab-container ." + clickedId).addClass("activeTab").siblings().removeClass("activeTab");
        if ($(".activeTab").find(".inner-menu-ul").children().length > 0) {
            slicksubInitializer(parentcount);
        }
        $(".cortana-6tabs .inner-menu-ul li:first-child").addClass("current").siblings().removeClass("current");
        $(".cortana-6tabs .inner-tab-container .ms-grid > div:first-child").addClass("activeTab").siblings().removeClass("activeTab");

        cortanaInnerMenuHeight();

        updateCortanaUrl();
    });

    $(".cortana-6tabs .inner-menu-ul li").on("click tap", function (e) {
        e.preventDefault();
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var clickedId = $(this).attr("id");
        var parentId = $(this).closest("ul").closest(".activeTab").attr("class");
        parentId = parentId.slice(0, 6);
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

        if ($(this).attr('data-src').length > 0) {

            e.preventDefault();
            $(".cortana-6tabs .cortana-popup").addClass("activeTab");
            var iframesrc = $(this).attr('data-src');
            $(".cortana-6tabs .cortana-popup iframe").attr("src", iframesrc);
            $(".cortana-popup .mscom-popup .mscom-popup-link").click();
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
    $(".cortana-6tabs .inner-tab-container .m-col-12-24:first-child").each(function () {

        if ($(this).find('img').attr("src") == undefined || $(this).find('img').attr("src") == "" || $(this).find('img').attr("src") == null) {
            $(this).closest('.m-col-12-24').hide();
            $(this).closest('.m-col-12-24').siblings().addClass("m-col-24-push-6").css({
                "float": "left",
                "text-align": "center"
            }).find("a.fw-6").css({
                "text-align": "center"
            });
        }
    });
});
$(function () {
    $(window).on("load resize", function () {
        var iframeheight = $(window).innerHeight() - 70;
        $(".cortana-6tabs iframe").css("height", iframeheight);
        cortanaOuterMenuHeight();
        cortanaInnerMenuHeight();
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
        // console.log("error" + e)
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

/*wave3JS*/

/**CP_PageTitle start */
$(document).ready(function () {
    try {
        if ($(".cp-pageTitle").hasClass("roadmap"))
            setUniformDimensions();
        $(window).on("resize", function () {
            if ($(".cp-pageTitle").hasClass("roadmap"))
                setUniformDimensions();
        });
    } catch (e) {
        //  console.log("error in CP_PageTitle onload")
    }
});

function setUniformDimensions() {
    try {
        var menuItemHeight;
        var menuItemWidth;
        var $menu = $(".cp-pageTitle.roadmap").find("div.roadmap ul.tab-list");
        var menuItemCount = $menu.find("li").length;
        menuItemWidth = Math.floor(($menu.width() - (menuItemCount * 1)) / menuItemCount)
        menuItemHeight = $menu.find("li:first-child a span").outerHeight();
        $menu.find("li").each(function (index) {
            if (menuItemHeight < $(this).find("a span").outerHeight()) {
                menuItemHeight = $(this).find("a span").outerHeight();
            }
        });
        $menu.find("li").css("width", menuItemWidth + "px")
        $menu.find("li").css("height", menuItemHeight + "px")
    } catch (e) {
        //  console.log("Error in CP_PagTitle method")
    }
}

/**CP_PageTitle end */
var visited = false;
$(document).ready(function () {
    if ($(".cp-pageTitle").hasClass("roadmap")) {
        loadroadmap();

    }
});
/**accordionwithfilters start*/
function alignaccordionpanel() {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }
    if (windowWidth > 539) {
        var max_height = $(".cp-accordionwithfilter").find(".selected-product").height()
        $(".cp-accordionwithfilter").find(".expand-collapse-holder").css("height", max_height);
    } else {
        $(".cp-accordionwithfilter").find(".expand-collapse-holder").css("height", max_height);
    }
}
$(document).click(function (e) {
    if (!$(e.target).is('.selected-product,.selected-product *')) {
        $(".filterproducts").hide();
    }

});
$(document).click(function (e) {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }
    if ($(".selected-tabitem").is(":visible")) {
        if (windowWidth < 540) {

            if (!$(e.target).is('.selected-tabitem,.selected-tabitem *')) {
                $(".cp-accordion-tab-list").hide();
                $(".cp_leftNavTab .blue-tablist .tab-list").hide();
            }
        }
    }
});
$(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
        $(".cp_leftNavTab .blue-tablist .tab-list").hide();
        $(".filterproducts").hide();
        var windowWidth;
        if ($.browser.msie) {
            windowWidth = $(window).width();
        } else {
            windowWidth = $(window).width() + 17;
        }
        if (windowWidth < 540) {

            $(".cp-accordion-tab-list").hide();
        }

    }
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var visited = false;

function loadroadmap() {
    var selectedvalue;
    var url = location.href;
    if (url.indexOf("dropValue") != -1) {
        selectedvalue = url.substring(url.indexOf("dropValue="), url.length);
        selectedvalue = selectedvalue.split("=")
        selectedvalue = selectedvalue[1].toLowerCase();

        $(".roadmap.cp-pageTitle").find("ul.tab-list").children().each(function () {
            var paghref = $(this).find("a").attr("href");
            var tabindex = "TabIndex=" + getParameterByName("TabIndex", paghref);
            var dropdownvalue = "dropValue=" + getParameterByName("dropValue", paghref);
            var updatedhref = "";

            if (paghref.indexOf('?') != -1) {

                updatedhref = paghref + "&" + tabindex + "&" + dropdownvalue;

            } else {


                updatedhref = paghref + "?" + tabindex + "&" + dropdownvalue;


            }

            $(this).find("a").attr("href", updatedhref);
        });
    } else {
        var tabindex = "TabIndex=0";
        var dropdownvalue = "dropValue=" + $(".cp-accordionwithfilter").find(".filterproducts").children().eq(0).text();
        var preselectedtext = $(".cp-accordionwithfilter").find(".selected-product").text();
        //selectedvalue=dropdownvalue.toLowerCase();
        selectedvalue = dropdownvalue.replace(/\s+/g, '');
        $(".roadmap.cp-pageTitle").find("ul.tab-list").children().each(function () {
            var paghref = $(this).find("a").attr("href");
            var updatedhref = "";

            if (paghref.indexOf('?') != -1) {


                updatedhref = paghref + "&" + tabindex + "&" + selectedvalue;

            } else {


                updatedhref = paghref + "?" + tabindex + "&" + selectedvalue;


            }
            $(this).find("a").attr("href", updatedhref);
        });
    }
    $(".filterproducts").children().each(function () {
        var filterproduct = $(this).text().toLowerCase();
        filterproduct = filterproduct.replace(/\s+/g, '');
        if (filterproduct == selectedvalue) {
            $(this).trigger("click");
            $(this).parent().css("display", "none");
            if ($(this).index() == 0) {
                $(".cp-accordionwithfilter").find(".selected-product ").text(preselectedtext);
            }
        }
    });

}

function updateroadmapURL() {
    var newtabindex = "";
    var newdropdownvalue = "";

    newtabindex = "TabIndex=" + $(".currentfiltertab").find(".cp-accordion-tab-list").children(".tab-item.active").index();
    newdropdownvalue = "dropValue=" + $(".currentfiltertab").find(".filterproducts").find(".filter-product.pactive").text();

    newdropdownvalue = newdropdownvalue.replace(/\s+/g, '');
    if (newdropdownvalue == undefined || newdropdownvalue == "") {
        newdropdownvalue = "dropValue=" + $(".currentfiltertab").find(".filterproducts").children.eq(0).text();

    }


    $(".roadmap.cp-pageTitle").find("ul.tab-list").children().each(function () {
        var paghref = $(this).find("a").attr("href");
        var tabindex = "TabIndex=" + getParameterByName("TabIndex", paghref);
        var dropdownvalue = "dropValue=" + getParameterByName("dropValue", paghref);

        var updatedhref = "";


        paghref = paghref.replace(tabindex, newtabindex);

        updatedhref = paghref.replace(dropdownvalue, newdropdownvalue);





        $(this).find("a").attr("href", updatedhref);
    });
    $(".currentfiltertab").removeClass("currentfiltertab");
    visited = true;
}
$(document).ready(function () {
    try {

        if ($(".tab-panel-item.active").length > 0) {
            if ($(".tab-panel-item.active").find(".accordion-header:visible").length <= 1) {
                $(".tab-panel-item.active").find("a.accordion-expandAll").css("visibility", "hidden");
            } else {
                $(".tab-panel-item.active").find("a.accordion-expandAll").css("visibility", "visible");
            }
        }
    } catch (err) {
        // console.log(err);
    }

});
$(document).on('click', '.cp-accordionwithfilter .tab-item', function (e) {
    e.preventDefault();
    $(this).parents().closest("section").addClass("currentfiltertab");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var selectedindex = $(this).attr("data-index");
    var selectedtext = $(this).text();

    var $data = $(".currentfiltertab .cp-righttab");
    //var updatetext=selectedtext+"<span class='arrow-down'></span>";
    $(".currentfiltertab .selected-tabitem").find("p").text(selectedtext);
    $(".currentfiltertab .selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");
    $data.children().removeClass("active");
    $data.children().eq(selectedindex).addClass("active");
    $data.children().eq(selectedindex).find(".accordion-header").each(function () {
        if ($(this).is(':visible')) {
            if ($(this).hasClass("bg-right-arrow-black")) {
                $(this).addClass("bg-down-arrow-black").removeClass("bg-right-arrow-black");
            }
            if ($(this).hasClass("bg-right-arrow-white")) {
                $(this).addClass("bg-down-arrow-white").removeClass("bg-right-arrow-white");
            }
            $(this).next().css("display", "block");
            $(this).next().css("overflow", "hidden");
            return false;
        }
    });

    if ($data.children().eq(selectedindex).find(".accordion-header:visible").length <= 1) {
        $data.children().eq(selectedindex).find(".accordion-expandAll").css("visibility", "hidden");
    } else {
        $data.children().eq(selectedindex).find(".accordion-expandAll").css("visibility", "visible");
    }
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }
    if (windowWidth < 540) {
        $(".currentfiltertab .cp-accordion-tab-list").animate({

            height: "toggle"
        }, 500);
    }
    updateroadmapURL();
    //  activateAccordion(defaultHeader);

});
$(document).on("click", ".cp-accordionwithfilter .selected-tabitem", function (e) {
    e.preventDefault();
    var height = $(this).height();
    var paddingvalue = $(this).css("padding-top");
    paddingvalue = paddingvalue.replace("px", "");
    paddingvalue = parseInt(paddingvalue);
    var topvalue = height + paddingvalue;

    $(this).parent().find(".cp-accordion-tab-list").css("top", topvalue + "px");


    $(this).parent().find(".cp-accordion-tab-list").animate({

        height: "toggle"
    }, 500);

})
$(document).on("click", ".selected-product", function (e) {
    e.preventDefault();



    $(this).parent().find(".filterproducts").css("top", "0");


    $(this).parent().find(".filterproducts").animate({

        height: "toggle"
    }, 500);

});
$(document).on("click", ".filter-product", function (e) {

    e.preventDefault();

    var selectedtext = $(this).text();
    var selectedproduct = $(this).attr("data-filter-product");
    $(this).parents().closest(".cp-accordionwithfilter").addClass("currentfiltertab");
    $(".currentfiltertab").find(".filter-product").removeClass("pactive");
    $(this).addClass("pactive");
    $(this).parents().closest(".cp-filter").find(".selected-product p").text(selectedtext);
    $(this).parent(".filterproducts").animate({

        height: "toggle"
    }, 100);
    if ($(this).index() == 0) {
        $(".currentfiltertab").find(".accordion-main-panel").each(function () {


            $(this).find("a.accordion-header").each(function () {
                $(this).css("display", "block");
                $(this).next().css("display", "none");
                if ($(this).hasClass("bg-down-arrow-black")) {

                    $(this).addClass("bg-right-arrow-black").removeClass("bg-down-arrow-black");
                }
                if ($(this).hasClass("bg-down-arrow-white")) {
                    $(this).addClass("bg-right-arrow-white").removeClass("bg-down-arrow-white");
                }
            });
            $(this).find("a.accordion-header").each(function () {
                if ($(this).hasClass("bg-right-arrow-black")) {

                    $(this).addClass("bg-down-arrow-black").removeClass("bg-right-arrow-black");
                }
                if ($(this).hasClass("bg-right-arrow-white")) {
                    $(this).find("a.accordion-header:first").addClass("bg-down-arrow-white").removeClass("bg-right-arrow-white");
                }
                $(this).next().css("display", "block");
                $(this).next().css("overflow", "hidden")
                return false;
            });
        });

    } else {
        $(".currentfiltertab").find(".accordion-main-panel").each(function () {


            $(this).find("a.accordion-header").each(function () {
                var visible = false;

                var currentproduct = $(this).attr("data-filter-product");
                currentproduct = currentproduct.split(',');
                for (var x = 0; x < currentproduct.length; x++) {

                    if (currentproduct[x].toLowerCase() == selectedproduct.toLowerCase()) {

                        visible = true;
                        break;
                    } else {
                        visible = false;
                    }
                }

                if (visible) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }


            });

        });

        $(".currentfiltertab").find(".tab-panel-item").each(function () {
            var indexx = $(this).index();
            $(this).find(".accordion-header").each(function () {

                if ($(this).attr("style").indexOf("block") >= 0) {


                    if ($(this).hasClass("bg-right-arrow-black")) {

                        $(this).addClass("bg-down-arrow-black").removeClass("bg-right-arrow-black");
                    }
                    if ($(this).hasClass("bg-right-arrow-white")) {
                        $(this).addClass("bg-down-arrow-white").removeClass("bg-right-arrow-white");
                    }

                }

                if ($(this).attr("style").indexOf("block") >= 0) {
                    $(this).next().css("display", "block");
                    $(this).next().css("overflow", "hidden");

                    return false;
                } else {
                    $(this).next().css("display", "none");
                }
            });
        });
    }
    $(".currentfiltertab").find(".tab-panel-item").each(function () {
        var currentindex = $(this).index();
        var visiblecount = 0;

        $(this).find(".accordion-header").each(function () {

            if ($(this).attr("style").indexOf("none") >= 0) {
                $(this).next().css("display", "none");
            }
        });
        $(this).find(".accordion-header").each(function () {

            if ($(this).attr("style").indexOf("block") >= 0) {
                visiblecount = 1;

                return false;
            }

        });

        if (visiblecount == 1) {

            $(".currentfiltertab").find(".tab-panel-item").removeClass("active");
            $(this).addClass("active");

            $(".currentfiltertab").find(".cp-accordion-tab-list").children().removeClass("active")
            $(".currentfiltertab").find(".cp-accordion-tab-list").children().eq(currentindex).addClass("active");
            var activetext = $(".currentfiltertab").find(".cp-accordion-tab-list").children().eq(currentindex).text();
            $(".currentfiltertab").find(".selected-tabitem p").text(activetext);
            $(".currentfiltertab .selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");

            return false;
        }





    });
    var found = false;
    $(".currentfiltertab").find(".tab-panel-item").each(function () {
        if ($(this).find(".accordion-header:visible").length >= 1) {
            found = true;
            return false;
        }

    });

    if (!found) {
        $(".currentfiltertab").find(".tab-panel-item").removeClass("active");
        $(".currentfiltertab").find(".cp-righttab").children().eq(0).addClass("active");
        $(".currentfiltertab").find(".cp-righttab").css("min-height", "135px");
        if ($(window).width() < 540) {
            $(".currentfiltertab").find(".filterproducts").css("max-height", "280px");
        }
        $(".currentfiltertab").find(".cp-accordion-tab-list").children().removeClass("active")
        $(".currentfiltertab").find(".cp-accordion-tab-list").children().eq(0).addClass("active");
        var activetab = $(".currentfiltertab").find(".cp-accordion-tab-list").children().eq(0).text();
        $(".currentfiltertab .selected-tabitem").find("p").text(activetab);
        $(".currentfiltertab .selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");

    } else {
        $(".currentfiltertab").find(".filterproducts").css("max-height", "385px");
    }
    if ($(".tab-panel-item.active").find(".accordion-header:visible").length <= 1) {
        $(".tab-panel-item.active").find("a.accordion-expandAll").css("visibility", "hidden");
    } else {
        $(".tab-panel-item.active").find("a.accordion-expandAll").css("visibility", "visible");
    }
    if ($(".tab-panel-item.active").find(".accordion-collapseAll").is(":visible")) {
        $(".tab-panel-item.active").find(".accordion-collapseAll").css("display", "none");
        $(".tab-panel-item.active").find("a.accordion-expandAll").css("display", "inline");
        $(".tab-panel-item.active").find(".accordion-header").each(function () {
            if ($(this).hasClass("bg-down-arrow-black")) {

                $(this).addClass("bg-right-arrow-black").removeClass("bg-down-arrow-black");
            }
            if ($(this).hasClass("bg-down-arrow-white")) {
                $(this).addClass("bg-right-arrow-white").removeClass("bg-down-arrow-white");
            }
        });

        $(".tab-panel-item.active").find(".accordion-header:visible").each(function () {
            if ($(this).hasClass("bg-right-arrow-black")) {

                $(this).addClass("bg-down-arrow-black").removeClass("bg-right-arrow-black");
            }
            if ($(this).hasClass("bg-right-arrow-white")) {
                $(this).addClass("bg-down-arrow-white").removeClass("bg-right-arrow-white");
            }
            return false;
        });
    }
    updateroadmapURL();
    alignaccordionpanel();
});
$(window).resize(function () {
    alignaccordionpanel();
    if ($(window).width() + 17 > 539) {

        $(".cp-accordion-tab-list").css("top", 0);
        $(".cp-accordion-tab-list").css("display", "block");
    } else {
        $(".cp-accordion-tab-list").css("display", "none");
    }

});
/**accordion-end */


/*Scripts for events page*/
$(document).ready(function () {

    try {
        /****tab switching****/
        $(".cp-event-tabs").find(".tab-container").find("div").on("click", function () {
            $('.event-type-tab').hide();
            $('.webcast-tab').hide();
            $('.calendar-tab').hide();
            $("." + $(this).data('open-tab')).show();
            $('.selected-tab').removeClass("selected-tab");
            $(this).addClass("selected-tab");
        });
        /****end tab switching****/

        /****add dates****/
        $(".event-item").each(function () {
            var eventDay = $(this).data('date').split(" ")[1];
            $(this).prepend("<h4 class='fl'>" + eventDay + "</h4>");
        });


        /****calendar filtering****/
        function filterCalendar() {
            var activeMonth = $('.active-month').text().toLowerCase();
            var filterType;
            if ($(".type-selector")[0].selectedIndex == 0) {
                filterType = "";
            } else {
                filterType = $(".type-selector").find('option:selected').text().toLowerCase();
            }
            var filterCountry;
            if ($('.country-selector')[0].selectedIndex == 0) {
                filterCountry = "";
            } else {
                filterCountry = $(".country-selector").find('option:selected').text().toLowerCase()
            }

            $('.calendar-tab').find(".event-item").each(function () {
                var eventDate = $(this).data('date');
                var eventMonth = eventDate.split(" ")[0].toLowerCase();
                var eventType = $(this).find(".event-type").text().toLowerCase();
                var eventLocation = $(this).find(".event-location").text().toLowerCase();

                if (!(eventMonth === activeMonth)) {

                    $(this).attr('style', 'display:none!important;');
                } else if (!(eventType.indexOf(filterType) >= 0)) {

                    $(this).attr('style', 'display:none!important;');
                } else if (!(eventLocation.indexOf(filterCountry) >= 0)) {

                    $(this).attr('style', 'display:none!important;');
                } else {
                    $(this).attr('style', 'display:block!important;');
                }
            });
        }

        filterCalendar();

        $(".active-months").find("p").on("click", function () {
            $(".active-month").removeClass("active-month");
            $(this).addClass("active-month");
            filterCalendar();
        });

        $(".type-selector").change(filterCalendar);
        $(".country-selector").change(filterCalendar);
    } catch (err) {
        // console.log(err);
    }
    /****end calendar filtering ****/
});

/* Try_buy_filter*/
$(document).click(function (e) {
    if (!$(e.target).is('#selected-Category,#selected-Category *')) {
        $(".Category-list").hide();
    }
});
$(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {

        $(".Category-list").hide();

    }
});

$(document).ready(function () {
    $(".filt").show();
    var arrowHtml = $("#selected-Category b");
    $("#selected-Category").click(function (event) {
        event.preventDefault();
        $(".Category-list").toggle();
    });
    $(".Category-list li").click(function () {
        if ($(this).attr("id") == "select") {
            $(".filt").show();
        } else {
            $(".filt").hide();

            $("." + this.id).show();

        }
        $("#selected-Category").text($(this).text());
        $("#selected-Category").append(arrowHtml);
        $(this).parent().hide();
    });
    // $( "body" ).on( "click", function() {
    // 	 $(".Category-list").hide();
    // });
    //desorting
    $(".desorting").click(function () {

        $(".filt").show();
        var selecttext = $(".selected").text();

        $("#selected-Category").text(selecttext);
        $("#selected-Category").append(arrowHtml);
    });
});

/* Try_buy_filter*/
/*iframepopup*/
function openiframe() {
    $('.custom-popup-form').css("z-index", "1005");
    $('.custom-popup-form').css("opacity", "1");
}

function closeiframe() {
    $('.custom-popup-form').css("opacity", "0");
    setTimeout(function () {
        $('.custom-popup-form').css("z-index", "-1")
    }, 500);



}
$(document).on('click', '.form-close-button', function () {
    closeiframe();
});
$(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
        closeiframe();
    }
});

$(window).load(function () {


    Array.prototype.forEach.call(document.querySelectorAll('a[iframe_popup_link="enabled"]'), function ($link) {

        $link.onclick = addIframePopup;
        window.addEventListener("message", receiveMessage, false);


        function addIframePopup(event) {
            event.preventDefault();
            var wheight = $(window).height() - 30;

            $(".custom-popup-form").find("#form-iframe").attr("src", $link.getAttribute('href'));

            $(".custom-popup-form").find(".custom-form-container").css("height", wheight);

            openiframe();
        }
    });
});


/** Row-pricing***/
var setelementHeight = function (list1, list2, element) {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }
    var numelements = list1.find("td").length;
    setTimeout(function () {
        for (var i = 0; i < numelements; i++) {
            var p1height = list1.find(element).eq(i);
            var p2height = list2.find(element).eq(i);
            p1height.css('height', 'auto');
            p2height.css('height', 'auto');
            if (windowWidth > 1083) {


                if (p1height.outerHeight() != p2height.outerHeight()) {
                    if (p1height.outerHeight() > p2height.outerHeight()) {
                        p2height.css("height", p1height.outerHeight());
                        p1height.css("height", p1height.outerHeight());
                    } else {
                        p1height.css("height", p2height.outerHeight());
                        p2height.css("height", p2height.outerHeight());
                    }
                }
            }
        }
    }, 100);
}

function pricingheaderheight() {
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }

    $(".pricing-component", ".six-row-pricing-component").each(function () {
        var maxheight = 0;
        $(this).find("h4").css("height", "auto");
        if (windowWidth > 1083) {
            $(this).find("h4").each(function () {
                var h4height = $(this).outerHeight();
                maxheight = maxheight > h4height ? maxheight : h4height;
            });
            $(this).find("h4").css("height", maxheight);
        }
    });
}
$(document).ready(function () {
    pricingheaderheight();
    $(".pricing-component").each(function () {
        var count = 1;
        $(this).find("table:visible").each(function () {
            var tableclass = "ptable" + count;
            $(this).addClass(tableclass);
            count++;
        });
    });
    setelementHeight($(".ptable1"), $(".ptable2"), "h6");
});
$(window).resize(function () {
    pricingheaderheight();
    setelementHeight($(".ptable1"), $(".ptable2"), "h6");
});

/** Row-pricing***/

$(document).ready(function () {
    $(".six-row-pricing-component").each(function () {
        var count = 1;
        $(this).find("table:visible").each(function () {
            var tableclass = "pritable" + count;
            $(this).addClass(tableclass);
            count++;
        });
    });
    setelementHeight($(".pritable1"), $(".pritable2"), "p");
});
$(window).resize(function () {
    setelementHeight($(".pritable1"), $(".pritable2"), "p");
});

/*wave3jsEnd*/
/*wave2js*/


/*Scripts for MultipleLeftMedia component*/
function multipleleftmediamaxheight() {
    $(".multiple-media-container").each(function () {
        var itemheight = 0;
        if (window.matchMedia("(min-width:1084px)").matches) {
            if ($(this).children("div:visible").length <= 3) {
                $(this).css('overflow-y', "hidden");
                $(this).css('max-height', 'none');
            } else {
                itemheight = $(this).children("div:visible").eq(0).outerHeight(true);
                $(this).css('overflow-y', "scroll");
                $(this).css('max-height', ((itemheight) * 3) + "px");
            }

        } else if (window.matchMedia("(min-width:540px)").matches) {
            if ($(this).children("div:visible").length <= 2) {
                $(this).css('overflow-y', "hidden");
                $(this).css('max-height', 'none');
            } else {
                itemheight = $(this).children("div:visible").eq(0).outerHeight(true);
                $(this).css('max-height', ((itemheight) * 2) + "px");
                $(this).css('overflow-y', "scroll");
            }
        } else {
            if ($(this).children("div:visible").length <= 1) {
                $(this).css('overflow-y', "hidden");
                $(this).css('max-height', 'none');
            } else {
                itemheight = $(this).children("div:visible").eq(0).outerHeight(true);
                $(this).css('max-height', itemheight + "px");
                $(this).css('overflow-y', "scroll");
            }
        }
    });
}
$(document).ready(function () {
    try {
        $('.cp-multiple-leftmediawithcopy').each(function () {
            var categorySelector = $(this).find('.category-selector');
            var categoryList = categorySelector.data('options').split(',');
            for (var i = 0; i < categoryList.length; i++) {
                $(categorySelector).append('<option>' + categoryList[i].trim() + '</option>');
            }

            var audienceSelector = $(this).find('.audience-selector');
            var audienceList = audienceSelector.data('options').split(',');
            for (var i = 0; i < audienceList.length; i++) {
                $(audienceSelector).append('<option>' + audienceList[i].trim() + '</option>');
            }


            function filterLeftMedias() {
                var visible = 0;

                if (($(categorySelector)[0].selectedIndex == 0) && ($(audienceSelector)[0].selectedIndex == 0)) {
                    $('.multiple-media-container > div').attr('style', 'display:block!important;');
                } else if ($(categorySelector)[0].selectedIndex == 0) {
                    $('.multiple-media-container').children('div').each(function () {
                        visible = 0;
                        var selectedval = $(audienceSelector).find('option:selected').text().toLowerCase();
                        var audience;
                        try {
                            audience = $(this).attr('data-audience');
                            audience = audience.split(",");
                        } catch (err) {}
                        for (var i = 0; i < audience.length; i++)

                        {
                            if (audience[i].toLowerCase() == selectedval) {
                                visible = 1;
                                $(this).attr('style', 'display:block!important;');
                                break;
                            } else {
                                visible = 0;
                                $(this).attr('style', 'display:none!important;');
                            }
                        }

                    });
                } else if ($(audienceSelector)[0].selectedIndex == 0) {
                    $('.multiple-media-container').children('div').each(function () {
                        visible = 0;
                        var audiselected = $(categorySelector).find('option:selected').text().toLowerCase();
                        var category;
                        try {
                            category = $(this).attr('data-category');
                            category = category.split(",");
                        } catch (err) {}

                        for (var i = 0; i < category.length; i++)

                        {


                            if (category[i].toLowerCase() == audiselected) {
                                visible = 1;
                                $(this).attr('style', 'display:block!important;');
                                break;
                            } else {
                                visible = 0;
                                $(this).attr('style', 'display:none!important;');
                            }
                        }

                    });

                } else {
                    $('.multiple-media-container').children('div').each(function () {
                        visible = 0;
                        var audience;
                        $(categorySelector).find('option:selected').text().toLowerCase();
                        var category;
                        try {
                            audience = $(this).attr('data-audience');
                            audience = audience.split(",");
                            category = $(this).attr('data-category');
                            category = category.split(",");
                        } catch (err) {}



                        for (var i = 0; i < category.length; i++) {
                            if (category[i].toLowerCase() == $(categorySelector).find('option:selected').text().toLowerCase()) {
                                for (var j = 0; j < audience.length; j++) {

                                    if (audience[j].toLowerCase() == $(audienceSelector).find('option:selected').text().toLowerCase()) {

                                        visible = 1;

                                        break;
                                    } else {
                                        visible = 0;
                                    }
                                }
                            }
                            if (visible) {
                                $(this).attr('style', 'display:block!important;');
                                break;
                            } else {
                                $(this).attr('style', 'display:none!important;');
                            }
                        }


                    });
                }
                multipleleftmediamaxheight();
            }
            $(document).on("change", ".category-selector,.audience-selector", function () {
                console.log("change");
                filterLeftMedias();
            });

        });

        $(window).on('load resize', function () {
            multipleleftmediamaxheight();
        });
    } catch (err) {
        //  console.log("multiple left media error:" + err);
    }
});
/* start quetsionare js */

$(window).load(function () {
    try {
        var answerseen = 0;
        var
            $componentOverlay = $('.questionnaire.custom-popup-background'),
            $component = $('.questionare-with-tabs-container.custom-popup-container'),
            $elementsHaveDataActive = $component.find('*[data-active]'),
            $tabTitles = $component.find('.question-tab-title'),

            $tab1 = $component.find('.question-tab-main-1'),
            $tab1Title = $component.find('.question-tab-title-1'),
            $tab1ButtonStep = $tab1.find('.question-tab-footer .question-tab-button.button-1'),

            $tab2,
            $tab2Title = $component.find('.question-tab-title-2'),
            $tab2ButtonQuestion = $component.find('.question-tab-main-2 .question-tab-footer .question-tab-button.button-1'),
            $tab2ButtonStep = $component.find('.question-tab-main-2 .question-tab-footer .question-tab-button.button-2'),

            $tab3,
            $tab3Title = $component.find('.question-tab-title-3'),
            $tab3ButtonStartOver = $component.find('.question-tab-main-3 .question-tab-footer .question-tab-button.button-1'),

            $anwerLink = $component.find('.question-tab-main-3 .industry-answer .stbLinkCTA'),

            industryNumber = -1,
            industryQuestionNumber = 0,
            selectTimer = -1;


        if ($component.length > 0) {

            //$componentOverlay.appendTo($component );
            //$componentOverlay.hide();

            // Close the component on clicking on the background or the close button
            //$componentOverlay.find('.QuestionareWithTabs-overlay-background').click(closeQuestionare);

            $component.find('.close-button').click(closeQuestionare);

            // Set active to first tab
            setActiveTabTitle($tab1Title);

            $tab3ButtonStartOver.click(startOver);
            //$anwerLink.click(closeQuestionare);

            // When Tab title 1 is clicked, it will be either start over or just go back to tab1
            $tab1Title.click(function () {
                setActive($tab1);
                setActiveTabTitle($tab1Title);
                if (answerseen) { // tab3 is active
                    startOver();
                } else { // tab1 or tab2 is active
                    setActive($tab1);
                    setActiveTabTitle($tab1Title);
                }
            });

            // Process to tab #2, depend on the choice in tab #1
            $tab1ButtonStep.click(function () {
                var $industryRadioChecked = $tab1.find('.industry-radio:checked');
                if (industryNumber !== $industryRadioChecked.attr('data-industry-number')) {
                    industryQuestionNumber = 0;
                    industryNumber = $industryRadioChecked.attr('data-industry-number');
                }

                $tab2 = $component.find('.question-tab-main-2[data-question-number=' + industryNumber + '-' + industryQuestionNumber + ']');

                setActive($tab2);
                setActiveTabTitle($tab2Title);

                disableShortlyTextSelection()
            });

            // Process all the questions in tab #2 until it'done. Then, it will move to tab #3 with answer content depend on answers on tab2.
            $tab2ButtonQuestion.click(function () {
                $tab2 = $tab2.next();
                setActive($tab2);
                industryQuestionNumber++;

                disableShortlyTextSelection()
            });

            // Go to tab 3 and assign proper answer depending on choices
            $tab2ButtonStep.click(function () {
                // Get all checked checkbox for answer yes from current industry question

                var $checkboxYes = $component.find('.first.question-tab-main-2-' + industryNumber).find('.industry-question-radio[data-question=1]:checked');

                var $tab3 = $component.find('.question-tab-main-3[data-industry-answer=' + ($checkboxYes.length > 0 ? 1 : 0) + ']');
                setActive($tab3);
                setActiveTabTitle($tab3Title);
                answerseen = 1;
                disableShortlyTextSelection();
            });


            // Display the component when clicking on this link from given id
            $('#' + $component.attr('data-link-id')).attr('href', 'popup:').click(function (event) {
                event.preventDefault();

                $componentOverlay.css({
                    display: 'table',
                    opacity: 0

                }).animate({
                    opacity: 1
                });
            });

            /* On click of the anchor tag with below class name show popup*/
            $(".show-q-popup").on("click", function () {

                $componentOverlay.css("visibility", "visible");
                $component.css("height", $(window).height());
                $componentOverlay.css("z-index", 1005);
                $componentOverlay.css("opacity", 1);
            });
            $(".answer-link a").on("click", function () {
                closeQuestionare();
            });

        }

        function disableShortlyTextSelection() {
            clearTimeout(selectTimer);
            $component.attr('data-no-select', true);
            selectTimer = setTimeout(function () {
                $component.attr('data-no-select', false);
            }, 500);
        }

        // Close the quetsionare form by reset everything back to initial state
        function closeQuestionare() {
            // $componentOverlay.fadeOut('fast', startOver);
            startOver();
            $componentOverlay.css("visibility", "hidden");
            $componentOverlay.css("z-index", -1);
            $componentOverlay.css("opacity", 0);
        }

        // Reset the state to the beginning
        function startOver() {
            industryNumber = -1;
            industryQuestionNumber = 0;
            setActive($tab1);
            setActiveTabTitle($tab1Title);
            answerseen = 0;
            // Reset all radio boxes
            $tab1.find('.question-tab-col-right .content input[name="industry-radio"]').first().attr('checked', true);
            $component.find('.question-tab-main-2 .question-tab-col-right .content').children().eq(0).find(".industry-question-radio").attr('checked', true);
        }

        // Set active to only received element. Others with data-active will be set to false
        function setActive($element) {
            $elementsHaveDataActive.attr('data-active', false);
            $element.attr('data-active', true);
        }

        // Set active tab for title by changing the class name
        function setActiveTabTitle($tabTitle) {
            var bg = ' ' + $tabTitle.attr('data-bg-color').trim();
            var activeBg = ' ' + $tabTitle.attr('data-active-bg-color').trim();

            $tabTitles.each(function (index, item) {
                $(item).attr('class', $(item).attr('class').replace(activeBg, bg));
            });
            $tabTitle.attr('class', $tabTitle.attr('class').replace(bg, activeBg));
        }
    } catch (e) {
        //  console.log('error in CP_questionareWithTabs.js'+e);
    }
});
/* end quetsionare js */

/*Start of LeftNavTab JS*/

$(document).ready(function () {
    try {
        $('.cp_leftNavTab .blue-tablist .tab-listitem ').find('.arrow-right').hide();
        $('.cp_leftNavTab .blue-tablist .tab-listitem').find('.steps').remove(); /*For Blue-tablist on the left side*/
        $('.tab-panel').children().eq(0).show().siblings().hide();
        $('.cp_leftNavTab .blue-tablist .tab-list').children().eq(0).addClass('tab-active');
        var dropdowntext = $('.cp_leftNavTab .blue-tablist .tab-list .tab-listitem.tab-active').text();
        $('.cp_leftNavTab .blue-tablist .selected-tabitem').find('p').text(dropdowntext);
        if (!$('.cp_leftNavTab').hasClass("cp-accordion-with-tabs")) {
            $(".selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");
        }

        $('.cp_leftNavTab .tab-list .tab-listitem').click(function (e) {
            e.preventDefault();
            $(this).addClass('tab-active').siblings().removeClass('tab-active');
            var index = $(this).index();
            console.log(index);
            //$('.tab-panel .tab-panel-item').hide();
            //$('.tab-panel .tab-panel-item').eq(index).show();
            $('.tab-panel .tab-panel-item').hide();
            $('.tab-panel .tab-panel-item').eq(index).fadeIn(400);
            var selectedtext = $(this).text();
            $('.cp_leftNavTab .blue-tablist .selected-tabitem').find('p').text(selectedtext);
            var windowWidth;
            if ($.browser.msie) {
                windowWidth = $(window).width();
            } else {
                windowWidth = $(window).width() + 17;
            }
            if (windowWidth < 540) {
                if (!$('.cp_leftNavTab').hasClass("cp-accordion-with-tabs")) {
                    $(".blue-tablist .selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");
                }
                $(".blue-tablist .tab-list").animate({
                    height: "toggle"
                }, 500);
            }
        });


        $('.cp_leftNavTab .white-tablist .tab-list .tab-listitem').each(function () {
            var selectedtabHeight = $(this).outerHeight();
            var tabHeightCal = selectedtabHeight / 2;
            $(this).find('.arrow-right').css({
                'border-top-width': tabHeightCal,
                'border-bottom-width': tabHeightCal + 0.5
            });
        });

        //dropdown
        $(document).on("click", ".cp_leftNavTab .selected-tabitem", function (e) {
            e.preventDefault();
            var height = $(this).height();
            var paddingvalue = $(this).css("padding-top");
            paddingvalue = paddingvalue.replace("px", "");
            paddingvalue = parseInt(paddingvalue);
            var topvalue = height + paddingvalue;
            $(this).parent().find(".tab-list").css("top", topvalue + "px");
            $(this).parent().find(".tab-list").animate({
                height: "toggle"
            }, 500);


        })

    } catch (e) {
        //console.log(e);
    }
});
$(window).resize(function () {
    $('.cp_leftNavTab .white-tablist .tab-list .tab-listitem').each(function () {
        var selectedtabHeight = $(this).outerHeight();
        var tabHeightCal = selectedtabHeight / 2;
        $(this).find('.arrow-right').css({
            'border-top-width': tabHeightCal,
            'border-bottom-width': tabHeightCal + 0.5
        });
    });
    $(".blue-tablist .selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");
    var windowWidth;
    if ($.browser.msie) {
        windowWidth = $(window).width();
    } else {
        windowWidth = $(window).width() + 17;
    }
    if (windowWidth > 539) {
        $(".blue-tablist .tab-list").css("top", 0);
        $(".blue-tablist .tab-list").css("display", "block");
    } else {
        $(".blue-tablist .tab-list").css("display", "none");
    }
});
/*End of LeftNavTab JS*/
/***********************************************************************/
/*Start of Accordion With Tabs */
$(window).load(function () {
    //calcWidth(".tab-list");
});

$(document).ready(function () {
    try {
        var accordionArrowClass = $('.accordion-main-panel').attr("data-accordion-arrow-class");

        var bgArrowColor = "black";

        if (accordionArrowClass != "" && accordionArrowClass.toLowerCase() == "bg-right-arrow-white") {
            bgArrowColor = "white";
        }

        $('.cp-accordion-with-tabs ul.tab-list li.tab-listitem ').on("click", function () {
            var defaultHeader = $('.cp-accordion-with-tabs .tab-panel .tab-panel-item:eq(' + $(this).index() + ') .accordion-main-panel .accordion-header:first');
            activateAccordion(defaultHeader);
        });

        var windowWidth;

        $(window).on("resize", function () {
            if ($.browser.msie) {
                windowWidth = $(window).width();
            } else {
                windowWidth = $(window).width() + 17;
            }

            if (windowWidth > 539) {
                $("#CP_AccordionWithTabs .livearea .left-content").removeClass("blue-tablist").addClass("white-tablist");
                //$('#CP_AccordionWithTabs .white-tablist' ).css("display","block");
                //calcWidth(".tab-list");
            } else {
                //console.log("Accrodion with tabs else..")
                $("#CP_AccordionWithTabs .livearea .left-content").removeClass("white-tablist").addClass("blue-tablist");
                $('#CP_AccordionWithTabs .blue-tablist ul.tab-list').css("display", "none");
                var dropdowntext = $('.cp_leftNavTab .blue-tablist .tab-list .tab-listitem.tab-active p').text();
                $('#CP_AccordionWithTabs .blue-tablist .selected-tabitem').find('p').text(dropdowntext);


            }
        });

        function calcWidth(element) {
            $(element).find("li").each(function () {
                var width = $(this).width() - 50;
                $(this).find('p').css("width", width + "px");
            });
        }

        function activateAccordion(header) {
            var panel = $(header).next();
            var isOpen = false;
            if (isOpen) {
                $(header).removeClass("bg-down-arrow-" + bgArrowColor).addClass("bg-right-arrow-" + bgArrowColor);
            } else {
                $(header).removeClass("bg-right-arrow-" + bgArrowColor).addClass("bg-down-arrow-" + bgArrowColor);
            }
            panel[isOpen ? 'slideUp' : 'slideDown']()
                .trigger(isOpen ? 'hide' : 'show');
            return false;
        }


    } catch (e) {
        //console.log(e);
    }
});

/*End of Accordion With Tabs */
/***********************************************************************/


$(document).ready(function () {
    try {
        $('.zoom-img').each(function () {
            $(this).siblings(".video-poster-link").find("img").css("width", "77%");
            var imgContent = $(this).siblings('.popup-img').html();
            console.log(imgContent);
            var popupElement = "<div class='popup-element black'><div class='image-popup' style='height:auto;width:auto%;'>" + imgContent + "<span class='close-button'></span></div></div>";
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
    } catch (err) {
        //  console.log(err);
    }
});
/*wave2jsEnd*/

/*Animation Number Counter*/
$(document).ready(function () {
    var $animation_elements = $('.anim-counter');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                if ($('.thumbnail-list').attr("animated") == "false") {
                    $('.anim-counter').each(function () {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 1500,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });


                    });
                    $('.thumbnail-list').attr("animated", "true");
                }
            }
        });
    }
    $window.on('scroll', check_if_in_view);
});

/*Animation Number Counter End*/
//Start Multiple left media key press event 
$(document).ready(function () {
    function keydownInfiniteSelect(e) {
        var eKey = e.which || e.key,
            selected = $(this).find("option:selected");
        if (eKey == 38 && selected) { //    up arro
            selected.prev().prop("selected", true); //    set value to last option
            $(this).change(); //    ensure select triggers change do to return false
            return false; //    keeps select from skipping to second last option
        } else if (eKey == 40 && selected) { //    down arro
            selected.next().prop("selected", true); //    set value to first option
            $(this).change(); //    ensure select triggers change
            return false; //    keeps select from skipping to second option
        }
    }
    $("select").keydown(keydownInfiniteSelect);

});

//Bug #346222 fix
function changeRoletoTab() {
    setTimeout(function () {
        $('.cp_media_carousel_with_responsive .carousel-wrapper .slick-dots li').attr('role', 'tab');
    }, 1000)
}
//End Multiple left media key press event 

$(document).ready(function () {

    if (navigator.userAgent.toLowerCase().indexOf("edge") > 0) {
        $("html").addClass("edge-browser")
    }
    if (navigator.userAgent.toLowerCase().indexOf("rv:11.0") > 0) {
        $("html").addClass("ie11-browser");
    }
});

/*346110*/
$(window).load(function () {
    mediaCarouselWithframesscanorder()


    $(".cp-media-carousel-with-frames .carousel-prev , .cp-media-carousel-with-frames .carousel-next,.cp-media-carousel-with-frames .c-sequence-indicator button").on('keyup', function (e) {
        if (e.keyCode == 13) {
            mediaCarouselWithframesscanorder()
        }
    });
});

function mediaCarouselWithframesscanorder() {
    setTimeout(function () {
        $('.cp-media-carousel-with-frames .carousel-group .carousel-frame').each(function () {
            if ($(this).attr('data-carousel-position') == "active") {
                $(this).attr('aria-hidden', 'false');
            } else {
                $(this).attr('aria-hidden', 'true');
            }
        });
    }, 1000);

}
/*END*/
$(document).ready(function () {
    $('.cp-media-carousel-with-frames .carousel-group .carousel-frame[data-carousel-position="-1"] .carousel-content a').removeAttr('id');
    $('.cp-media-carousel-with-frames .carousel-group .carousel-frame[data-carousel-position="-2"] .carousel-content a').removeAttr('id');

})


/* Start CP_MWFHeroCarousel_1_VG */
$(window).load(function () {
    $('.sql-mwf-hero-carousel .m-hero div.c-carousel-p ul li').each(function () {
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
    mwfSRlinks();
});
$(window).resize(function () {
    if (window.matchMedia("(max-width: 539px)").matches) {
        mwfCarouselMaxHeight();
    } else {
        // setTimeout(function(){
        //     $(".sql-mwf-hero-carousel .c-carousel-p li .fn").css('height', 'auto');
        // },1000);
        $(".sql-mwf-hero-carousel .c-carousel-p li .fn").css('height', '100%');
    }
    mwfCarouselSR();
    mwfSRlinks();
});

function mwfCarouselMaxHeight() {
    if ($(".sql-mwf-hero-carousel").length > 0) {
        $(".sql-mwf-hero-carousel").each(function () {
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
    $('.sql-mwf-hero-carousel .m-hero div.c-carousel-p ul>li, .sql-mwf-hero-carousel .m-hero .hero-single-slide-item').each(function () {
        $(this).find('.m-hero-item .hero-c-bg ul li').each(function () {
            if (!$(this).find('a').hasClass('theme-transparent') && (window.matchMedia("(min-width: 540px)").matches)) {
                $(this).closest('.hero-c-links').addClass('hero-buttons');
            } else {
                $(this).closest('.hero-c-links').removeClass('hero-buttons');
            }
        });
    });

}

function mwfSRlinks() {
    $('.sql-mwf-hero-carousel .m-hero-item.f-x-center .hero-c-bg .hero-c-links.hero-buttons ul li').each(function () {
        if (!$(this).find('a').hasClass('theme-transparent')) {
            $(this).addClass('scr-fl');
        }
    });
}
/* End SQL_MWFHeroCarousel_1_VG */

// $(document).ready(function(){
//     try{
//     var stickyNavPosition = $('#CP_StickyNav_1').offset().top;
//     var w = window.location.href;
//         var x = w.split('#');        
//        
//         if (x.length > 1){
//             setTimeout(function(){$(window).scrollTop(stickyNavPosition)*2;},2000);
//         }
//     var $StickyNavLinks = $('#CP_StickyNav_1 nav li a');
//     
//     $StickyNavLinks.on('click', function(){
//        if($(window).scrollTop() > 0){
//            $(window).scrollTop(stickyNavPosition);
//        }
//     });
//     }
//     catch(ere){}
// });