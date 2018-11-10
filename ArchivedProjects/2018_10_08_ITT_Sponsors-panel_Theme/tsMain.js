function L1NavnewTab() {
    $("body .c-uhfh  a").each(function () {
        try {
            var aid = $(this).attr("id").toLowerCase();
            if (aid.indexOf("external_link") >= 0) {
                $(this).attr("target", "_blank");
            }
        }
        catch (e) {
        }
    });
}
/*Global addition taggingID*/
$(document).ready(function () {
    try {
        setTimeout(function () {
            L1NavnewTab();
        }, 150);
        
        setTimeout(function(){
        var pagename = $('[data-pagename]').attr("data-pagename");
        $('[data-tag]').each(function () {
            var datatag = $(this).attr("id");
            $(this).addClass("top-parent-element");
            var count = 0;
            $(this).find("a").each(function () {
                
                if (!$(this).attr("data-no-tag")) {
                    var linktext = $(this).text();
                    linktext = linktext.replace(/\s+/g, "_");
                    $(this).attr("id", (pagename + "_" + datatag + "_" + count+"_"+linktext));
                    count++;
                }
            });
        });
        },1000);
    } catch (err) {
        console.log(err);
    }
});
/** seeting side elements heights */
var side_elements_height = function ($parent, $child) {
    var maxHeight = 0;
    $parent.each(function () {
        $(this).find($child).css("height", "auto");
        var cHeight = $(this).find($child).outerHeight();
        maxHeight = (maxHeight > cHeight) ? maxHeight : cHeight;
    });
    $parent.each(function () {
        $(this).find($child).css("height", maxHeight);
    });
}
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
function keydownInfiniteSelect(e) {
    var eKey = e.which || e.key,
        selected = $(this).find("option:selected");
    if (eKey == 38 && selected) {    //    up arro
        selected.prev().prop("selected", true);    //    set value to last option
        $(this).change();    //    ensure select triggers change do to return false
        return false;    //    keeps select from skipping to second last option
    }
    else if (eKey == 40 && selected) {    //    down arro
        selected.next().prop("selected", true);  //    set value to first option
        $(this).change();    //    ensure select triggers change
        return false;    //    keeps select from skipping to second option
    }
}
$(document).ready(function () {
    $("select").keydown(keydownInfiniteSelect);

});
/*function to check a*/
function checkAnchorThemeTransparent() {
    $("a.c-call-to-action").each(function () {
        if ($(this).children().length == 0) {
            if ($(this).text() != "")
                $(this).wrapInner("<span></span>");
        }
    });
}
/** Emptying img sets of Picture tag */
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
/**slick accessibilty */
function slickaccessibility() {
    setTimeout(function () {
        $("ul.slick-dots").each(function () {
            var count = $(this).children().length;
            $(this).children().each(function () {
                var currentslide = $(this).index() + 1;
                var currentslidetext = "slide " + currentslide;
                var fullariatext = currentslidetext + " of " + count;
                $(this).find("button").attr("aria-label", fullariatext);
                if ($(this).hasClass("slick-active")) {
                    $(this).find("button").attr("aria-selected", "true");
                    $(this).siblings().find("button").attr("aria-selected", "false");
                }
            });
        });
    }, 100);
}
$(window).load(function () {
    $('.slick-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(this).find("ul.slick-dots").each(function () {
            $(this).children("li").each(function () {
                if ($(this).hasClass("slick-active")) {
                    $(this).find("button").attr("aria-selected", "true");
                    $(this).siblings().find("button").attr("aria-selected", "false");
                }
            });

        });
        if ($(this).find("li.slick-active").hasClass("theme-dark")) {
            $(this).parents().closest(".top-parent").find("button.slick-arrow").addClass("btn-dark").removeClass("btn-light");
            $(this).find("ul.slick-dots li").addClass("btn-dark").removeClass("btn-light");

        }
        else {
            $(this).parents().closest(".top-parent").find("button.slick-arrow").addClass("btn-light").removeClass("btn-dark");
            $(this).find("ul.slick-dots li").addClass("btn-light").removeClass("btn-dark");
        }
    });
});
$(window).load(function () {
    $("ul.slick-dots li button").removeAttr("tabindex");
});

/**slick accessibilty ends*/

/** updating image class */
function imgClassUpdation() {
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
        if (window.matchMedia("(min-width: 540px)").matches) {
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
    imgClassUpdation();
});
$(window).resize(function () {
    imgClassUpdation();
});

/*high contrast detection*/
jQuery.fn.HighContrastDetection = function () {
    if ($("span.close-button").css("background-image") == "none") {
        $("html").addClass("high-contrast");

    } else {
        $("html").addClass("normal");
    }
};
/*high contrast detection ends*/

/*HeroCarouselWithCopy*/
function setHeroCarouselHeight() {
    setTimeout(function () {
        if ($(".hero-carousel").length > 0) {
            $(".hero-carousel").each(function () {
                $(this).find(".hero-carousel-slides").each(function () {


                });
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
function videoPosterLinkcheck() {
    $(".video-poster-link").each(function () {
        if (!($(this).hasClass("open-popup-video") || $(this).hasClass("open-inline-video"))) {
            $(this).removeAttr("tabindex");
            $(this).removeAttr("href");
            $(this).remove();
        }
    });
}
$(document).ready(function () {

    var themes = [];
    var dirrtl = false;
    var count;
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $(".hero-carousel").each(function () {
        if ($(this).find(".subheadline").children().text == "") {
            $(this).find(".subheadline").remove();
        }
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
            setHeroCarouselHeight();
            videoPosterLinkcheck();
        }

    });
});
$(window).resize(function () {
    setHeroCarouselHeight();
});
$(window).load(function () {
    checkAnchorThemeTransparent();
    $("ul.slick-dots").each(function () {
        if ($(this).find("li.slick-active").hasClass("theme-dark")) {
            $(this).parents().closest(".top-parent-element").find("button.slick-arrow").addClass("btn-dark").removeClass("btn-light");
            $(this).find("ul.slick-dots li").addClass("btn-dark").removeClass("btn-light");

        }
        else {
            $(this).parents().closest(".top-parent-element").find("button.slick-arrow").addClass("btn-light").removeClass("btn-dark");
            $(this).find("ul.slick-dots li").addClass("btn-light").removeClass("btn-dark");
        }
    });
});
/*HeroCarouselWithCopy ends*/
/*START TS_FourColWithCopy*/
$(document).ready(function () {
    $(".ts-four-col-with-copy").each(function () {
        var col_count = $(".ts-four-col-with-copy .content-columns").attr('data-col-count');
        $('.ts-four-col-with-copy .content-columns .content-column').slice(0, col_count).addClass('active_column');
    });
    try {
        FourColMaxHeight();
    } catch (e) {
        console.log(e);
    }
});
/* TS_FourColWithCopy component height function*/
function FourColMaxHeight() {
    //var maxHeight = 0;
    var maxSubHeadingHeight = 0;
    var maxParaHeight = 0;
    setTimeout(function () {
        $(".ts-four-col-with-copy").each(function () {
            //To set same height to all the sub-headings
            $('.ts-four-col-with-copy .content-columns .content-column-item p').css('height', "auto");
            $('.ts-four-col-with-copy .content-columns .content-column-item h3').css('height', "auto");
            $('.ts-four-col-with-copy .content-columns .content-column-item h3').each(function () {
                var contentHeadingHeight = $(this).outerHeight();
                maxSubHeadingHeight = maxSubHeadingHeight > contentHeadingHeight ? maxSubHeadingHeight : contentHeadingHeight;
            });
            $('.ts-four-col-with-copy .content-columns .content-column-item p').each(function () {
                var contentParaHeight = $(this).outerHeight();
                maxParaHeight = maxParaHeight > contentParaHeight ? maxParaHeight : contentParaHeight;
            });
            $('.ts-four-col-with-copy .content-columns .content-column-item h3').css('height', maxSubHeadingHeight);
            $('.ts-four-col-with-copy .content-columns .content-column-item p').css('height', maxParaHeight);
        });
    }, 100);
}

$(window).resize(function () {
    setTimeout(function () {
        var wwidth;
        if ($.browser.msie) {
            wwidth = $(window).width();
        } else {
            wwidth = $(window).width() + 17;
        }
        if (wwidth >= 539) {

            FourColMaxHeight();
        }
        else {
            $('.ts-four-col-with-copy .content-columns .content-column-item p').css('height', "auto");
            $('.ts-four-col-with-copy .content-columns .content-column-item h3').css('height', "auto");
        }
    }, 500);
});
/**END TS_FourColWithCopy */

$(document).ready(function () {
    try {
        $(".ts-images-with-link").each(function () {
            var columcount = $(this).find(".ts-img-div").length;
            $(this).attr("data-tscolumn-count", columcount);
        });
    }
    catch (e) {

    }
});
  
/**ts-side-media-withcopy*/
$(document).ready(function () {
    try {
        $(".ts-side-media-with-copy").each(function () {
            if ($(this).find(".main-media-container").hasClass("mt-3")) {
                $(this).addClass("no-full-image");
            }
            else {
                $(this).addClass("full-image");
                $(this).find(".text-right").addClass("pt-2 pb-2 xs-pb-3");
                $(this).find(".text-left").addClass("pt-2 pb-2 xs-pb-3")
            }
            if (!$(this).find("a.video-poster-link").hasClass("open-popup-video")) {
                if ($(this).find("a.video-poster-link").attr("href") == "") {
                    $(this).find("a.video-poster-link").remove();
                }
            }
            if ($(this).find("a.video-poster-link").hasClass("open-popup-video")) {
                $(this).find("a.video-poster-link").attr("href", "#");
            }
            if ($(this).find(".c-heading-3").is(":empty")) {
                $(this).find(".c-heading-3").remove();
            }
            if ($(this).find(".c-heading-2").is(":empty")) {
                $(this).find(".c-heading-2").remove();
            }
            if ($(this).find(".c-heading-4").is(":empty")) {
                $(this).find(".c-heading-4").remove();
            }

        });
        $(document).on("click", ".ts-side-media-with-copy .c-content-toggle button", function () {
            var showmoreArialabel = $(this).attr("data-f-more-arialabel");
            var showlessArialabel = $(this).attr("data-f-less-arialabel");
            if ($(this).prev("p").attr("data-f-expanded") == "false") {
                $(this).attr("aria-label", showmoreArialabel);
            }
            else {
                $(this).attr("aria-label", showlessArialabel);
            }
        });
    }
    catch (e) {

    }
});
  
/*ts-multi-filter-events Start */

$(document).ready(function () {
    try {
        $(document).on("click", ".ts-multi-filter-events .main-btn", function () {
            var translation1 = $(this).attr("MscomCustomEvent");
            var expand = $(this).attr("aria-expanded");
            var choose = $(this).attr("aria-selected");
            if (expand == "true")
                translation1 = translation1.replace("15", "14");
            if (choose == "true")
                translation1 = translation1.replace("17", "16");
            var translation = [];
            $.each(translation1.split(","), function () {
                translation.push($.trim(this));
            });
            MscomCustomEvent(translation[0], translation[1], translation[2], translation[3], translation[4], translation[5], translation[6], translation[7], translation[8], translation[9], translation[10], translation[11], translation[12], translation[13], translation[14], translation[15], translation[16], translation[17]);
        });
        $(document).on("click", ".ts-multi-filter-events #search-button", function () {
            if ($("#search-field").val() != "") {
                var translation1 = $(this).attr("MscomCustomEvent");
                translation1 = translation1.replace("14", "15");
                var translation = [];
                $.each(translation1.split(","), function () {
                    translation.push($.trim(this));
                });
                MscomCustomEvent(translation[0], translation[1], translation[2], translation[3], translation[4], translation[5], translation[6], translation[7], translation[8], translation[9], translation[10], translation[11], translation[12], translation[13], translation[14], translation[15], translation[16], translation[17], translation[18], translation[19], translation[20], translation[21]);
            }
        });
    }
    catch (e) { }
});
  
/*ts-multi-filter-events Close*/
  
/* ts-media-caousel-with-copy*/
function fixcontentHeights() {
    try {
        $(".ts-media-carousel-with-copy").each(function () {
            var maxheadheight = 0;
            var maxanchorheight = 0;
            $(this).find(".text-content").each(function () {
                $(this).find("h6").css("height", "auto");
                var headheight = $(this).find("h6").outerHeight();
                var anchorheight = $(this).find(".links a").outerHeight();
                maxheadheight = maxheadheight > headheight ? maxheadheight : headheight;
                maxanchorheight = maxanchorheight > anchorheight ? maxanchorheight : anchorheight;
            });
            $(this).find(".text-content").each(function () {
                $(this).find("h6").css("height", maxheadheight);
                $(this).find(".links a").css("height", maxanchorheight);
            });

        });
    } catch (err) {

    }
}

function bodyheight() {
    try {
        var maxtabheight = 0;

        $(".ts-media-carousel-with-copy").each(function () {
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
        $(".ts-media-carousel-with-copy").each(function () {
            if ($(this).find(".slick-track").length <= 3) {
                $(this).find(".slick-track").css("left", "auto");
                $(this).find(".slick-track").css("margin", "0 auto");
            }
        });
    } catch (err) {

    }
}



function chkvideo() {
    $(".ts-media-carousel-with-copy .mediaslide").each(function () {
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
        $('.ts-media-carousel-with-copy').each(function () {
            if (($(this).hasClass('bg-coolgrey')) || ($(this).hasClass('bg-grey-DF')) || ($(this).hasClass('bg-white')) || ($(this).hasClass('bg-grey-d2'))) {
                $(this).addClass('light-background');
            }
            if ($(this).hasClass("smallerimage")) {
                $(this).find('.carousel-wrapper').slick({
                    dots: true,
                    rtl: dirrtl,
                    infinite: false,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    autoplay: false,
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
            mediacarouselcenteralign();
            fixcontentHeights();
            bodyheight();
            $(this).removeClass("v-hidden");
        });

    }
    catch (e) {

    }

});
$(window).resize(function () {
    if ($('.ts-media-carousel-with-copy').length > 0) {
        mediacarouselcenteralign();
        fixcontentHeights();
        bodyheight();
    }
});
/**ts-city-region-filter */
$(document).ready(function () {
    try {
        $(".ts-city-region-filter").each(function () {
            $(this).find(".c-heading-3").each(function () {
                if ($(this).is(":empty")) {
                    $(this).remove();
                }
            });
            $(this).find(".c-heading-5").each(function () {
                if ($(this).is(":empty")) {
                    $(this).remove();
                }
            });
            $(this).find(".c-heading-2").each(function () {
                if ($(this).is(":empty")) {
                    $(this).remove();
                }
            });
            $(this).find("p").each(function () {
                if ($(this).is(":empty")) {
                    $(this).remove();
                }
            });



        });
    }
    catch (e) {

    }
});

/**scroll to top */
$(document).on("focus", ".c-back-to-top", function () {
    if ($(this).attr("aria-disabled") == "true") {
        $(this).attr('aria-disabled', 'false');
        $(this).css('opacity', '1');
    }
});
/**ts-filter-height */
$(window).load(function () {
        
    if ($(".ts-city-region-filter").length > 0) {       
          
           if (window.matchMedia("(min-width: 540px)").matches && window.matchMedia("(max-width: 1083px)").matches) { 
              $(".ts-city-region-filter .ts-city-panel").attr("data-grid","col-6");
          }
          if (window.matchMedia("(min-width: 1084px)").matches) { 
              $(".ts-city-region-filter .ts-city-panel").attr("data-grid","col-3");
          }
          if (window.matchMedia("(max-width: 539px)").matches) { 
              $(".ts-city-region-filter .ts-city-panel").attr("data-grid","col-12");
          }       
      CityRegionHeight();
      // if (window.matchMedia("(min-width: 768px)").matches) {
        // side_elements_height($(".event-card"), $(".event-card-content p.c-paragraph-3:first-child"));
        // side_elements_height($(".event-card"), $(".event-card-content p.c-heading-4"));
        // side_elements_height($(".event-card"), $(".event-card-content p.c-heading-4.techsummit-city+p"));
        //     //side_elements_height($(".event-card"), $(".event-card-content a.c-call-to-action"));        
        // side_elements_height($(".event-card"), $(".event-card-content"));  
      // }
      // else{
        //   $(".event-card-content p, .event-card-content").css("height","auto")
      // }
    }
         
    

});


function hero1colContentHeight() {
    $(".ts-hero1col").each(function () {
        if ($(this).hasClass("bg-height-auto")) {
            $(this).removeClass("c-hero f-x-left f-mask-60 f-y-center f-precise-click")
        }
    });
}

$(document).ready(function () {
    hero1colContentHeight();
});

/*ts-sponsor */
function closeSponsorPopup() {
    $(".ts-sponsor-panel-popup-overlay").addClass("dn");
    $(".ts-partner-details").find(" .links a").remove();
    $(".ts-sponsor-panel-popup-overlay").find("a").attr("tabindex", "-1");
    $(".active-sponsor").focus();
    $(".active-sponsor").removeClass("active-sponsor");
}
$(document).ready(function () {



    if ($(".ts-sponsor-panel").length > 0) {
        $(".ts-sponsor-panel").each(function () {
            $(this).find(".ts-sponsor-content a").each(function () {
                if ($(this).hasClass("open-sponsor-popup")) {
                    $(this).attr("href", "#");
                    $(this).attr("target", "");

                }
            });
        });
    }
    $(document).on("click", "a.open-sponsor-popup", function (e) {

        e.preventDefault();

        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        // if (/Edge/.test(navigator.userAgent)) {
            if ( $('html').attr('dir') == 'rtl' ) {
                $(".ts-sponsor-panel-popup-overlay .ts-partner-popup, .feature-keynote-popup-overlay .feature-keynote-popup").css('right', '50%')
            }
        }

        $(this).addClass("active-sponsor");
        $(".ts-sponsor-img").show();
        $(".ts-partner-details").find(".ts-partner-social-share").show()
        $(".ts-partner-details").find(".ts-partner-social-share").children().show();
        var dummylink = $("<a class='ts-sponsor-dummy-link' href='#'></a>")
        var headline = $(this).attr("data-sponsor-name");
        var desc = $(this).attr("data-sponsor-description");
        var fbLink = $(this).attr("data-fb-link");
        var twitterLink = $(this).attr("data-twitter-link");
        var linkedinLink = $(this).attr("data-linkedin-link");
        var youtubeLink = $(this).attr("data-youtube-link");
        var blogLink = $(this).attr("data-blogs-link");
        var imgUrl = $(this).attr("data-image-popup");
        var link = $(this).siblings(".ts-sponsor-links").html();
        var sponsorPageUrl = $(this).siblings(".ts-sponsor-page-links").html();
        $(".ts-partner-details").find(".c-heading-3").text(headline);
        $(".ts-partner-details").find(".c-paragraph-3").text(desc);
        $(".ts-partner-details").find(".links").append(link);
        $(".ts-partner-details").find(".sponsorurl").empty();
        $(".ts-partner-details").find(".sponsorurl").append(sponsorPageUrl);
        if (imgUrl != "") {
            $(".ts-sponsor-img").find(".ts-sponsor-popupimg").attr("src", imgUrl);
            $(".ts-sponsor-img").find(".ts-sponsor-popupimg").attr("alt", headline);
        }
        else {
            $(".ts-sponsor-img").hide();
        }
        if (fbLink != "") {
            $(".ts-partner-details").find("a.ts-partner-fb").attr("href", fbLink);
        }
        else {
            $(".ts-partner-details").find("a.ts-partner-fb").hide();
        }
        if (twitterLink != "") {
            $(".ts-partner-details").find("a.ts-partner-twitter").attr("href", twitterLink);
        }
        else {
            $(".ts-partner-details").find("a.ts-partner-twitter").hide();
        }
        if (linkedinLink != "") {
            $(".ts-partner-details").find("a.ts-partner-linkedin").attr("href", linkedinLink);
        }
        else {
            $(".ts-partner-details").find("a.ts-partner-linkedin").hide();
        }
        if (youtubeLink != "") {
            $(".ts-partner-details").find("a.ts-partner-youtube-link").attr("href", youtubeLink);
        }
        else {
            $(".ts-partner-details").find("a.ts-partner-youtube-link").hide();
        }
        if (blogLink != "") {
            $(".ts-partner-details").find("a.ts-partner-blogs-link").attr("href", blogLink);
        }
        else {
            $(".ts-partner-details").find("a.ts-partner-blogs-link").hide();
        }



        $(".ts-sponsor-panel-popup-overlay").removeClass("dn");
        if ($(".ts-partner-details").find(".ts-partner-social-share>a:visible").length <= 1) {
            $(".ts-partner-details").find(".ts-partner-social-share").css("display", "none");
            $(".ts-partner-details").find(".links").append(dummylink);
        }
        setSponsorHeight();
        $(".ts-sponsor-panel-popup-overlay").find("a").attr("tabindex", "0");
        $(".ts-sponsor-panel-popup-overlay").find("a.ts-sponsor-close-button").focus();
    });
    $(".ts-sponsor-panel-popup-overlay").click(function (e) {
        if ($(e.target).hasClass("ts-sponsor-panel-popup-overlay")) {
            e.stopPropagation();
            closeSponsorPopup();
        }

    });

    $(document).on("focus", ".ts-sponsor-dummy-link", function (e) {
        e.preventDefault();
        $(".ts-sponsor-panel-popup-overlay").find("a.ts-sponsor-close-button").focus();
    });
    $(document).on("click", ".ts-sponsor-close-button", function (e) {
        e.preventDefault();
        closeSponsorPopup();
    });
    $(document).on('keyup', function (evt) {
        if (!($(".ts-sponsor-panel-popup-overlay").hasClass("dn"))) {
            if (evt.keyCode == 27) {
                closeSponsorPopup();
            }
        }
    });

});

function setSponsorHeight() {
    try {
        var wHeight = $(window).height() - 50;
        var newheight = wHeight - 50;
        $(".ts-partner-popup").css("height", "auto");
        $(".ts-partner-popup").css("overflow-y", "hidden");
        $(".ts-sponsor-popup-links").children().attr("data-grid", "col-8");
        $(".ts-sponsor-popup-links").children().removeClass("seperate");
        var overlayHeight = $(".ts-partner-popup").height();
        if (wHeight <= overlayHeight) {
            $(".ts-partner-popup").css("height", newheight);
            $(".ts-partner-popup").css("overflow-y", "auto");
        }
        var mainwidth = $(".ts-sponsor-popup-links").width();
        var child1 = $(".ts-sponsor-popup-links").children().eq(0).outerWidth();
        var child2 = $(".ts-sponsor-popup-links").children().eq(1).outerWidth();
        var childrenWidth = child1 + child2;
        if (mainwidth <= childrenWidth) {
            $(".ts-sponsor-popup-links").children().attr("data-grid", "col-12");
            $(".ts-sponsor-popup-links").children().addClass("seperate");
        }
    }
    catch (e) {

    }
}
$(window).resize(function () {
    if (!($(".ts-sponsor-panel-popup-overlay").hasClass("dn"))) {
        setSponsorHeight();
    }
});
function closefeatureKeynotePopup() {
    $('.keynote-dummy-link').remove();
    $('.feature-keynote-popup-overlay').addClass('dn');
    $(".active-speaker").focus();
    $(".active-speaker").removeClass("active-speaker");
}
// Feature Keynote js
function sponsorPanelHeight() {
    setTimeout(function () {
        $(".ts-feature-keynote").each(function () {
            var maxSpeakerNameHeight = 0;
            var maxSpeakerTitleHeight = 0;
            var maxSpeakerHeadingHeight = 0;
            $(".ts-feature-keynote .speaker-section .speaker-name").css('height', 'auto');
            $(".ts-feature-keynote .speaker-section .speaker-title").css('height', 'auto');
            $(".ts-feature-keynote .speaker-section .speaker-heading").css('height', 'auto');

            $(".ts-feature-keynote .speaker-section .speaker-name").each(function () {
                var speakerNameHeight = $(this).outerHeight();
                maxSpeakerNameHeight = maxSpeakerNameHeight > speakerNameHeight ? maxSpeakerNameHeight : speakerNameHeight;
            });
            $(".ts-feature-keynote .speaker-section .speaker-title").each(function () {
                var speakerTitleHeight = $(this).outerHeight();
                maxSpeakerTitleHeight = maxSpeakerTitleHeight > speakerTitleHeight ? maxSpeakerTitleHeight : speakerTitleHeight;
            });
            $(".ts-feature-keynote .speaker-section .speaker-heading").each(function () {
                var speakerHeadingHeight = $(this).outerHeight();
                maxSpeakerHeadingHeight = maxSpeakerHeadingHeight > speakerHeadingHeight ? maxSpeakerHeadingHeight : speakerHeadingHeight;
            });
            $(".ts-feature-keynote .speaker-section .speaker-title").css('height', maxSpeakerTitleHeight);
            $(".ts-feature-keynote .speaker-section .speaker-name").css('height', maxSpeakerNameHeight);
            $(".ts-feature-keynote .speaker-section .speaker-heading").css('height', maxSpeakerHeadingHeight);
        });
    }, 100);
}
$(document).ready(function () {
    try {
        $(".ts-feature-keynote").each(function () {
            $(this).find(".speaker-content a").each(function () {
                if ($(this).hasClass("open-speaker-popup")) {
                    $(this).attr("href", "#");
                    $(this).attr("target", "");
                }
            });
        });
        $(document).on("click", "a.open-speaker-popup", function (e) {
            var dummy_link = $('<a class="keynote-dummy-link" href="#" tab-index="-1"></a>');
            e.preventDefault();
            $(this).addClass("active-speaker");
            $('.feature-keynote-popup-overlay').removeClass('dn');
            $('.feature-keynote-popup-overlay .ts-keynote-close-button').focus();
            $('.feature-keynote-popup').append(dummy_link);
            var speaker_bio = $(this).closest('.speaker-section').find('.speaker-popup-content .speaker-popup-bio').html();
            var speaker_heading = $(this).closest('.speaker-section').find('.speaker-popup-content .speaker-popup-heading').text();
            $('.feature-keynote-popup .popup-speaker-content .popup-speaker-bio').empty().append(speaker_bio);
            $('.feature-keynote-popup .popup-speaker-content .popup-speaker-heading').text(speaker_heading);
        });
        $('.ts-keynote-close-button').click(function (e) {
            e.preventDefault();
            closefeatureKeynotePopup();
        });
        $(document).on('keyup', function (evt) {
            if (!($(".feature-keynote-popup-overlay").hasClass("dn"))) {
                if (evt.keyCode == 27) {
                    closefeatureKeynotePopup();
                }
            }
        });
        $(".feature-keynote-popup-overlay").click(function (e) {
            if ($(e.target).hasClass("feature-keynote-popup-overlay")) {
                e.stopPropagation();
                closefeatureKeynotePopup();
            }
        });
        $(document).on("focus", ".keynote-dummy-link", function (e) {
            e.preventDefault();
            $(".feature-keynote-popup-overlay").find("a.ts-keynote-close-button").focus();
        });
        sponsorPanelHeight();
    }
    catch (e) {

    }
});
$(window).resize(function () {
     setTimeout(function(){         
         CityRegionHeight();
     },200);
       
    setTimeout(function () {
        var wwidth;
        if ($.browser.msie) {
            wwidth = $(window).width();
        } else {
            wwidth = $(window).width() + 17;
        }
        if (wwidth >= 539) {
            sponsorPanelHeight();
        }
        else {
            $(".ts-feature-keynote .speaker-section .speaker-name").css('height', 'auto');
            $(".ts-feature-keynote .speaker-section .speaker-title").css('height', 'auto');
            $(".ts-feature-keynote .speaker-section .speaker-heading").css('height', 'auto');
        }

    }, 100);
    
     setTimeout(function () {
          var wwidth;
    if ($(".ts-city-region-filter").length > 0) {       
          
            if (window.matchMedia("(min-width: 540px)").matches && window.matchMedia("(max-width: 1083px)").matches) { 
              $(".ts-city-region-filter .ts-city-panel").attr("data-grid","col-6");
          }
          if (window.matchMedia("(min-width: 1084px)").matches) { 
              $(".ts-city-region-filter .ts-city-panel").attr("data-grid","col-3");
          }
          if (window.matchMedia("(max-width: 539px)").matches) { 
              $(".ts-city-region-filter .ts-city-panel").attr("data-grid","col-12");    
          }               
      // if (window.matchMedia("(min-width: 768px)").matches) {
        // side_elements_height($(".event-card"), $(".event-card-content p.c-paragraph-3:first-child"));
        // side_elements_height($(".event-card"), $(".event-card-content p.c-heading-4"));
        // side_elements_height($(".event-card"), $(".event-card-content p.c-heading-4.techsummit-city+p"));
        //     //side_elements_height($(".event-card"), $(".event-card-content a.c-call-to-action"));        
        // side_elements_height($(".event-card"), $(".event-card-content"));  
      // }
      // else{
        //   $(".event-card-content p, .event-card-content").css("height","auto")
      // }      
    }
         
     },100);                     
    
});
function CityRegionHeight() {
    try{
	$(".ts-city-region-filter").each(function () {
		
		 var deskrowcount = parseInt($("#event-list").attr("data-desk-row-count"));            
                if (window.matchMedia("(min-width: 1084px)").matches == true) {                  
                    for (var i = 1; i <= deskrowcount; i++) { 
                     
                        CP_child_element_height($(this).find(".ts-city-panel.row" + i + " .event-card-content"), $(this).find("p.c-paragraph-3:first-child"));
                        CP_child_element_height($(this).find(".ts-city-panel.row" + i + " .event-card-content"), $(this).find("p.c-heading-5"));
                        CP_child_element_height($(this).find(".ts-city-panel.row" + i + " .event-card-content"), $(this).find("p.c-heading-5.techsummit-city+p"));
                        CP_child_element_height($(this),$(this).find(".event-card-content"));
                       
                    }
                    
                    var row1= $(".tab-row1 .event-card-content").height();
                    
                    var subheadingheight=$("p.c-paragraph-3:first-child").height();
                    
                    $(".tab-row1 .event-card-content").height(row1-subheadingheight);
                    
				}
                else if ((window.matchMedia("(min-width: 540px)").matches == true) && (window.matchMedia("(max-width: 1083px)").matches == true)) {
					var tabrowcount=Math.ceil(($("#event-list").attr("data-tab-row-count"))/2);                  
                    for (var i = 1; i <= tabrowcount; i++) {                        
                        CP_child_element_height($(this).find(".ts-city-panel.tab-row" + i + " .event-card-content"), $(this).find("p.c-paragraph-3:first-child"));
                        CP_child_element_height($(this).find(".ts-city-panel.tab-row" + i + " .event-card-content"), $(this).find("p.c-heading-5"));
                        CP_child_element_height($(this).find(".ts-city-panel.tab-row" + i + " .event-card-content"), $(this).find("p.c-heading-5.techsummit-city+p"));
                        CP_child_element_height($(this),$(this).find(".event-card-content"));                                       
                    }
                     var row2= $(".tab-row1 .event-card-content").height();
                    
                    var subheadingheight2=$("p.c-paragraph-3:first-child").height();
                    
                    $(".tab-row1 .event-card-content").height(row2-subheadingheight2);
				}            
            else {
					$(this).find(".event-card-content").css("height", "auto");
					$(this).find("p.c-paragraph-3:first-child").css("height", "auto");
					$(this).find("p.c-heading-5.techsummit-city+p").css("height", "auto");
					$(this).find("p.c-heading-5").css("height", "auto");

				}
                            
	});	
    }
    catch(e){
        console.log("error in height"+e);
    }		
}
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

/*START events-three-column*/
$(document).ready(function () {
    setTimeout(function () {
    try {
        OverlayTextHeight();
    } catch (e) {
        console.log(e);
    }
  });
});
function OverlayTextHeight() {
     if ((window.matchMedia("(min-width: 5464px)").matches))
    {
         $(".m-content-placement").each(function () {
        var imagecontainerWidth = $(this).find(".img-content img").outerWidth();
        $(this).find(".overlay-text-container").outerWidth(imagecontainerWidth+1);

    });
    }
    else{
         $(".m-content-placement").each(function () {
        var imagecontainerWidth = $(this).find(".img-content img").outerWidth();
        $(this).find(".overlay-text-container").outerWidth(imagecontainerWidth);

    });
    }   
}

$(window).resize(function () {
    try {
        setTimeout(function () {
            OverlayTextHeight();

            if (window.matchMedia("(min-width: 540px)").matches) {
            }
            else {
                $('.m-content-placement .content-parent p').css('height', "auto");
                $('.m-content-placement .content-parent h3').css('height', "auto");
                $('.m-content-placement .content-placement-col').css('height', "auto");
            }
        }, 500);
    }
    catch (e) {
    }
});
/**END events-three-column */

 
 /**timer start */
 $(document).ready(function () {
    try{
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
                                countTo = $this.attr('data-count').replace(",", "");
                            original = $this.attr('data-count');
                            // console.log(original);
                            $({ countNum: $this.text() }).animate({
                                countNum: countTo
                            },
                            {
                                duration: 5000,
                                easing: 'linear',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                
                                    $this.text(this.countNum);
                                }
                            });
                       
                        });
                        setTimeout(function () {
                            $('.anim-counter').each(function () {
                                var original = $(this).attr('data-count');
                                $(this).text(original);
                            });
                        }, 1100)
                    
                        $('.thumbnail-list').attr("animated", "true");
                    }
                }
            });
        }
    }
    catch (e) { }
    $window.on('load', check_if_in_view);
    $window.on('scroll', check_if_in_view);
  
   
});

/*Height calculation*/
function EventsTimer_thumbnail_minHeight() {
    try {
        $(".events-timer").each(function () {
            $(this).find(".thumbnail-item").each(function () {
                $(this).children().eq(0).addClass("thumbnail-child1");
                $(this).children().eq(1).addClass("thumbnail-child2");
            });
            $(this).find(".thumbnail-item").children().eq(0).addClass("thumbnail-child1");
            $(this).find(".thumbnail-item").children().eq(1).addClass("thumbnail-child2");
            $(".thumbnail-spandiv").find("span:last-child").addClass("thumbnail-lastspan");
            side_elements_height($(".thumbnail-item"), $(".thumbnail-child1"));
            side_elements_height($(".thumbnail-item"), $(".thumbnail-child2"));
            child_element_height($(this).find(".thumbnail-list"), $(this).find(".thumbnail-item"));
            $(".thumbnail-child1").removeClass("thumbnail-child1");
            $(".thumbnail-child2").removeClass("thumbnail-child2");
        });
    }
    catch (e) { }
}
 /**timer End*/
  
  /**UHF Nav menu Highlighter */
 $(document).ready(function(){
    $("header.c-uhfh div.theme-dark nav a.c-uhf-nav-link").removeClass("current");
     var href = window.location.href.toString().split("/");
     var thisHref = href.pop().split("?")[0];
      $("header.c-uhfh div.theme-dark nav a.c-uhf-nav-link").each(function(){          
         if($(this).text().toLowerCase() == thisHref.toString().toLowerCase()){
            $(this).addClass("current");
         }
      });    
 });
 /**UHF Nav menu Highlighter */