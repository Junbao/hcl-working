/*Start of Image Tabs*/
var childcount = 0;
var widthclass = "";
$(document).on('click', '.image-tabs-with-internal-menu .non-carousel .tabs', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).closest(".image-tabs-with-internal-menu").addClass("clicked");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var selectedindex = $(this).index();
    var $tabdata = $(".clicked .icon-tab-details");
    $tabdata.children().removeClass("active");
    $tabdata.children().eq(selectedindex).siblings().css("display", "none");
    $tabdata.children().eq(selectedindex).fadeIn("200", function () {
        $tabdata.children().eq(selectedindex).addClass("active");
        if ($tabdata.hasClass("subtabs")) {


            $(".tab-data-container.active .image-tab-submenu .livearea").children().removeClass("active-subtab");
            $(".tab-data-container.active .image-tab-submenu .livearea").children().eq(0).addClass("active-subtab");
            $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().addClass("active-subdata");
            $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().eq(0).addClass("active-subdata");
            $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().css("display", "none");
            $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().eq(0).css("display", "inline-block");
            setTimeout(function () {
                intertabheight();
            }, 10);
        }
    });




    $(".clicked").removeClass("clicked");
});

$(document).on('click', '.image-tabs-with-internal-menu .row-carousel .c-flipper', function (e) {
    $(this).closest(".image-tabs-with-internal-menu").addClass("clicked");
    if ($('.row-carousel .tab').hasClass("f-active")) {

        $('.row-carousel .tab.f-active').siblings().removeClass("active");
        $('.row-carousel .tab.f-active').addClass("active");
        var selectedindex = $('.row-carousel .tab.f-active').index();
        var $tabdata = $(".clicked .icon-tab-details");
        $tabdata.children().removeClass("active");
        $tabdata.children().eq(selectedindex).siblings().css("display", "none");
        $tabdata.children().eq(selectedindex).fadeIn("200", function () {
            $tabdata.children().eq(selectedindex).addClass("active");
            if ($tabdata.hasClass("subtabs")) {
                $(".tab-data-container.active .image-tab-submenu .livearea").children().removeClass("active-subtab");
                $(".tab-data-container.active .image-tab-submenu .livearea").children().eq(0).addClass("active-subtab");
                $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().addClass("active-subdata");
                $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().eq(0).addClass("active-subdata");
                $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().css("display", "none");
                $(".tab-data-container.active .image-tabs-with-internal-menu-sub-data-container").children().eq(0).css("display", "inline-block");
                setTimeout(function () {
                    intertabheight();
                }, 10);
            }
        });
        $(".clicked").removeClass("clicked");
    }

});




$(document).on('click', '.tabs-submenu', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).closest(".tab-data-container").addClass("intab");
    $(this).siblings().removeClass("active-subtab");
    $(this).addClass("active-subtab");
    var selectedindex = $(this).index();
    var $tabdata = $(".intab .image-tabs-with-internal-menu-sub-data-container");
    $tabdata.children().removeClass("active-subtab");
    $tabdata.children().eq(selectedindex).siblings().css("display", "none");
    $tabdata.children().eq(selectedindex).fadeIn("200", function () {
        $tabdata.children().eq(selectedindex).addClass("active-subdata");
    });
    $(".intab").removeClass("intab");

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
        childcount = $(".tab-controls").children().length;

        var grid = 24;
        var widthclass = "";
        var splitwidth = grid / childcount;
        if ((grid % childcount) == 0) {
            widthclass = "s-col-" + splitwidth + "-24";
        } else {
            splitwidth = childcount;
            widthclass = "nb col-1-" + splitwidth;
        }
        $(".tab-controls").children(".tabs").addClass(widthclass);
        $(".tab-data-container").find(".tabs-submenu").addClass(widthclass);
        intertabheight();
        if ($(".icon-tab-details").hasClass("subtabs")) {
            $(this).find(".image-tab-submenu").each(function () {
                var border_bottom = $(this).css("background-color");
                $(this).parents().closest(".image-tabs-with-internal-menu").find(".arrow-up").css("border-bottom-color", border_bottom);

            });

        }


    } catch (err) {

    }


});


$(window).resize(function () {
    if ($.browser.msie) {
        wwidth = $(window).width();
    } else {
        wwidth = $(window).width() + 17;
    }
    if (wwidth <= 539) {
        intertabheight();
    } else {
        intertabheight();

    }

});

function intertabheight() {
    try {
        if ($(".image-tabs-with-internal-menu").length > 0) {
            setTimeout(function () {
                var minheight = 0;

                $(".tab-controls").children("a").find(".icons .icontext").css("height", "auto");
                $(".tab-controls").children("a").each(function () {
                    var liheight = $(this).find(".icons .icontext").outerHeight();
                    minheight = minheight > liheight ? minheight : liheight;
                });
                $(".tab-controls").children("a").find(".icons .icontext").css("height", minheight);

                $(".tab-data-container.active .image-tab-submenu").each(function () {
                    var minsubheight = 0;
                    $(this).find(".tabs-submenu p").css("height", "auto");
                    $(this).find(".tabs-submenu").each(function () {

                        var pheight = $(this).find("p").outerHeight();
                        minsubheight = minsubheight > pheight ? minsubheight : pheight;
                    });
                    $(this).find(".tabs-submenu p").css("height", minsubheight);
                });
                var ptop = $(".tab-data-container.active .image-tab-submenu").css("padding-top");
                ptop = parseInt(ptop.replace("px", ""));
                var aheight = $(".tab-data-container.active .image-tab-submenu a").height();
                var submenuheight = ptop + aheight;
                $(".tab-data-container.active .image-tab-submenu").css("height", submenuheight + "px");
            }, 100);
        }
    } catch (err) {

    }

}

$(document).on('click', '.image-tabs-with-internal-menu .tab-item', function () {

    $(this).parents().closest("section").addClass("selectedtab");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var selectedindex = $(this).attr("data-index");
    var selectedtext = $(this).text();
    var $data = $(".selectedtab .cp-righttab");
    //var updatetext=selectedtext+"<span class='arrow-down'></span>";
    $(".selectedtab .selected-tabitem").find("p").text(selectedtext);
    $(".selectedtab .selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");
    $data.children().removeClass("active");
    $data.children().eq(selectedindex).addClass("active");

    if ($(window).width() < 540) {
        $(".selectedtab .cp-accordion-tab-list").animate({

            height: "toggle"
        }, 500);
    }

    //  activateAccordion(defaultHeader);

});
$(document).ready(function () {
    try {
        $(".image-tabs-with-internal-menu-sub-data-container").children().each(function () {
            if ($(this).children().length > 1) {
                // $(this).children().addClass("col-12-24");
                $(this).children().eq(1).css("text-align", "left");
                $(this).children().eq(1).find("a").css("text-align", "left");
            } else {
                //  $(this).children().addClass("col-14-24");
                $(this).children().addClass("text-center fn");
            }
        });
    } catch (e) {

    }
});
/*End Of Image Tabs*/
/**********START OF CP_CustomCarouselSettings.js **********/

/**********START OF CP_CustomCarouselSettings.js **********/
var serverCloud = window.serverCloud || {};
serverCloud = {
    carousel: function () {
        $pauseflag = 0;
        $slider = null;
        $carousel = null;
        $contentList = null;
        $contentListItems = null;
        $popup = null;
        $close = null;
        $currentSlide = null;
        $slides = null;
        $next = null;
        $prev = null;
        $dots = null;
    }
}

serverCloud.carousel.prototype.heightCalc = function () {
    if (this.$contentList == undefined) return;
    this.$contentList.css('min-height', '');
    //var maxH = this.$contentListItems.maxHeight().innerHeight();
    var maxH = 0;
    this.$contentListItems.each(function () {
        var height = $(this).outerHeight(true);
        if (maxH < height)
            maxH = height;
    });
    this.$contentList.css('min-height', maxH);
};

serverCloud.carousel.prototype.slickPause = function () {
    this.$carousel
        .slick('slickPause')
        .slick('setOption', 'autoplay', false);
};
serverCloud.carousel.prototype.slickPlay = function () {

    this.$carousel
        .slick('slickPlay')
        .slick('setOption', 'autoplay', true);
};

var announcementCarousel = new serverCloud.carousel();

$(document).ready(function () {

    try {

        //carousel specific setting
        announcementCarousel.$carousel = $('#hero_carousel_panel .hero-carousel');
        announcementCarousel.$contentList = $('#hero_carousel_panel .carousel-content');
        announcementCarousel.$contentListItems = announcementCarousel.$contentList.find('.content-block');
        announcementCarousel.$popup = $('#hero_carousel_panel .pop-up-video-play-icon');
        announcementCarousel.$close = null;
        var autoPlay = true;

        if (($("#CP_CustomCarousel_1").attr("data-auto-play")) == "false") {
            autoPlay = false;
        } else {
            $("#CP_CustomCarousel_1").attr("data-auto-play", "true");
        }
        var autoPlaySpeed = $("#CP_CustomCarousel_1").attr("auto-play-speed");
        //Make sure the carousel exists before attempting to set it up.
        if (announcementCarousel.$carousel != null && announcementCarousel.$carousel.length < 1) return;
        announcementCarousel.$carousel.find("[data-show='hide-slide-by-default']").remove();

        announcementCarousel.$carousel.on('init', function (event, slick) {
            //assign default values to carousel closure
            announcementCarousel.$currentSlide = slick.currentSlide;
            announcementCarousel.$slides = slick.$slides;
            announcementCarousel.$next = slick.$nextArrow;
            announcementCarousel.$prev = slick.$prevArrow;
            announcementCarousel.$dots = slick.$dots;

            slick.$slides.eq(slick.currentSlide).siblings().addClass('opacity');
            announcementCarousel.$contentListItems.fadeOut("slow").eq(slick.currentSlide).fadeIn("slow");
        });

        //implementing slick to structure
        var dirrtl = false;
        if ($("body").hasClass("rtl")) {
            dirrtl = true;
        }
        announcementCarousel.$slider = announcementCarousel.$carousel.slick({
            slideToshow: 1,
            rtl: dirrtl,
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: autoPlay,
            autoplaySpeed: autoPlaySpeed,
            centerMode: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            focusOnSelect: true
        });

        //$("#CP_CustomCarousel_1").attr("auto-play-speed"),
        // before change event
        announcementCarousel.$carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if (currentSlide != nextSlide) {
                announcementCarousel.$contentListItems.fadeOut("slow");
                slick.$nextArrow.add(slick.$prevArrow).prop('disabled', true);
                slick.$dots.each(function () {
                    $(this).prop('disabled', true);
                });
                slick.$slideTrack.children().removeClass('opacity');
            }
        });

        // after change event
        announcementCarousel.$carousel.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            announcementCarousel.$currentSlide = currentSlide;
            slick.$slides.eq(slick.currentSlide).siblings().addClass('opacity');
            announcementCarousel.$contentListItems.eq(currentSlide).fadeIn("slow");
            setTimeout(function () {
                slick.$nextArrow.add(slick.$prevArrow).prop('disabled', false);
                slick.$dots.each(function () {
                    $(this).prop('disabled', false);
                });
            }, 100);
        });

        //carousel pause on next, prev and dots click
        announcementCarousel.$next.add(announcementCarousel.$prev).add(announcementCarousel.$dots).on('click', function () {
            if (($("#CP_CustomCarousel_1").attr("data-auto-play")) == "true") {
                announcementCarousel.slickPause();
                setTimeout(function () {
                    announcementCarousel.slickPlay();
                }, autoPlaySpeed);

            }

        });


    } catch (err) {
        console.log(err);
    }
});


$(document).ready(function () {
    try {
        $('.annoucements .panel-item').each(function () {
            var url_id = $(this).find('.social-tray').data('urlid');
            if (url_id) {
                var slick_index = $(this).data('slick-index');
                var panel = $(this)
                deeplink(url_id, function () {
                    window.scrollTo(0, panel.offset().top);
                    announcementCarousel.$carousel.slick('slickGoTo', slick_index)
                });
            }
        });
    } catch (e) {}
});

function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    if ($elem.length > 0) {
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
    }

    return (
        ((elemBottom <= docViewBottom) && (elemBottom >= docViewTop)) ||
        ((elemTop <= docViewBottom) && (elemTop >= docViewTop))
    );
}

$(window).on('load scroll', function () {
    try {
        if (($("#CP_CustomCarousel_1").attr("data-auto-play")) == "true") {
            if (announcementCarousel.$carousel.length) {
                if (isScrolledIntoView(announcementCarousel.$carousel) && announcementCarousel.$carousel.attr('data-videoplaying') !== 'true') {
                    announcementCarousel.$carousel.slick('slickPlay');
                } else {
                    announcementCarousel.$carousel.slick('slickPause');
                }
            }
        }

    } catch (err) {
        console.log(err);
    }

});

$(window).on('scroll', function () {
    try {
        if (($("#CP_CustomCarousel_1").attr("data-auto-play")) == "true") {
            if (announcementCarousel.$carousel.length && $(window).scrollTop() >= announcementCarousel.$carousel.parent().offset().top) {
                if (announcementCarousel.$pauseflag == 0) {
                    setTimeout(function () {
                        announcementCarousel.$carousel.slick('slickPause');
                    }, 300);
                    announcementCarousel.$pauseflag++;
                }
            }
        }

    } catch (err) {
        console.log(err);
    }
});

$(window).load(function () {
    try {
        if (announcementCarousel.$carousel != null && announcementCarousel.$carousel.length < 1) return;
        announcementCarousel.heightCalc();
    } catch (e) {}
});

$(window).resize(function () {
    try {
        if (announcementCarousel.$carousel != null && announcementCarousel.$carousel.length < 1) return;
        announcementCarousel.heightCalc();
    } catch (e) {}
});
/**********END OF CP_CustomCarouselSettings.js **********/

/**********START OF CP_MediaCarouselWithFrames.js **********/
var mediaAutoCarousel = null;
var trigerredclick = 0;

function intervalManager(flag, currentcarousel, autoplay, autoplayspeed) {
    var ishover = 0;

    if (flag) {
        currentcarousel.find('.carousel-frame').hover(function () {
            var active = $(this).attr("data-carousel-position");
            if (active == "active") {
                ishover = 1;
            } else {
                ishover = 0;
            }
        }, function () {
            ishover = 0;
        });
        currentcarousel.find('.c-sequence-indicator').children().hover(function () {
            ishover = 1;
        }, function () {
            ishover = 0;
        });
        mediaAutoCarousel = setInterval(function () {
            var videoplay = 0;
            if (currentcarousel.attr("data-video-playing") != undefined && currentcarousel.attr("data-video-playing") != null && currentcarousel.attr("data-video-playing") != "") {
                videoplay = currentcarousel.attr("data-video-playing");
            }
            var focuscount = 0;
            focuscount = currentcarousel.find('.open-popup-video:focus').length;
            if (ishover == 0 && autoplay == true && videoplay == 0 && focuscount == 0) {
                trigerredclick = 1;
                currentcarousel.find(".carousel-next").trigger("click");
            }

        }, autoplayspeed);
    } else {
        clearInterval(mediaAutoCarousel);
    }
}
$(window).load(function () {
    try {
        $(".cp-media-carousel-with-frames").each(function () {
            var currentcarousel = $(this);
            var autoplay = false;
            var autoplaySpeed = 5000;

            $(this).find(".carousel-thumbnail").each(function () {
                if (!($(this).find(".mscom-link").hasClass("open-popup-video")) && !($(this).find(".mscom-link").hasClass("open-inline-video"))) {
                    $(this).find(".mscom-link").removeAttr("href");
                    $(this).find(".mscom-link").removeAttr("tabindex");
                }
            });
            if (currentcarousel.attr("data-auto-play") == "true" && isScrolledIntoView(currentcarousel)) {
                autoplay = true;
                autoplaySpeed = currentcarousel.attr("data-auto-play-speed");

            }
        });
    } catch (e) {

    }
});
var functioncalled = 0;
$(window).scroll(function () {
    try {
        $(".cp-media-carousel-with-frames").each(function () {
            var currentcarousel = $(this);
            var autoplay = false;

            if (currentcarousel.attr("data-auto-play") == "true" && isScrolledIntoView(currentcarousel)) {
                autoplay = true;
                var autoplaySpeed = currentcarousel.attr("data-auto-play-speed");
                if (functioncalled == 0) {
                    intervalManager(true, currentcarousel, autoplay, autoplaySpeed)
                    functioncalled = 1;
                }
            } else {
                functioncalled = 0;
                intervalManager(false);
            }
        });
    } catch (e) {

    }

});
$(document).ready(function () {
    try {

        var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);

        forEach(document.querySelectorAll('.cp-media-carousel-with-frames'), function (componentNode) {

            var groupNode = componentNode.querySelector('.carousel-group');
            var frameNodes = groupNode.querySelectorAll('.carousel-frame[data-show="true"]');
            var pageNodes = componentNode.querySelectorAll('.c-sequence-indicator button[data-show="true"]');
            var prevNode = componentNode.querySelector('.carousel-prev');
            var nextNode = componentNode.querySelector('.carousel-next');


            var activeFrame = 2;
            var activePage = 0;
            var SCALE = .8;
            var WIDTH = 682;
            var autoplay = false;
            var currentcarousel = $(componentNode);
            if (componentNode.getAttribute("data-auto-play") == "true") {
                autoplay = true;
                var autoplaySpeed = componentNode.getAttribute("data-auto-play-speed");

            }
            if (innerWidth >= 1200) {
                WIDTH = 610;
            } else if (innerWidth >= 1084) {
                WIDTH = 533;
            } else if (innerWidth >= 768) {
                WIDTH = 400;
            } else if (innerWidth >= 540) {
                WIDTH = 394;
            } else {
                WIDTH = 208;
            }
            var scaledWidth = WIDTH * SCALE;

            var initLocation = groupNode.offsetWidth / 2 - WIDTH / 2;
            var initScaledLocation = groupNode.offsetWidth / 2 - (WIDTH - WIDTH * SCALE) / 2;

            // Duplicate the last 2 frames
            copyFrame(frameNodes[frameNodes.length - 1], frameNodes[1]);
            copyFrame(frameNodes[frameNodes.length - 2], frameNodes[0]);


            // Set frames position
            setFramesPosition();
            window.addEventListener('resize', function () {
                if (innerWidth >= 1200) {
                    WIDTH = 610;
                } else if (innerWidth >= 1084) {
                    WIDTH = 533;
                } else if (innerWidth >= 768) {
                    WIDTH = 400;
                } else if (innerWidth >= 540) {
                    WIDTH = 394;
                } else {
                    WIDTH = 208;
                }
                scaledWidth = WIDTH * SCALE;
                initLocation = groupNode.offsetWidth / 2 - WIDTH / 2;
                initScaledLocation = groupNode.offsetWidth / 2 - (WIDTH - WIDTH * SCALE) / 2;

                setFramesPosition();
            });

            // Set event
            prevNode.onclick = function (e) {
                e.preventDefault();
                slideFrame(true);
                if (e.isTrigger == undefined && autoplay == true) {
                    intervalManager(false);
                    intervalManager(true, currentcarousel, autoplay, autoplaySpeed);
                }
            }

            nextNode.onclick = function (e) {
                e.preventDefault();
                slideFrame(false);
                if (e.isTrigger == undefined && autoplay == true) {
                    intervalManager(false);
                    intervalManager(true, currentcarousel, autoplay, autoplaySpeed);
                }
            }

            forEach(pageNodes, function (pageNode, pageIndex) {
                pageNode.onclick = function (e) {
                    e.preventDefault();
                    if (pageIndex !== activePage) {
                        var toLeft = pageIndex < activePage;

                        slideFrame(toLeft);
                        var slideTimer = setInterval(function () {
                            if (pageIndex !== activePage) {
                                slideFrame(toLeft);
                                intervalManager(false);
                                intervalManager(true, currentcarousel, autoplay, autoplaySpeed);
                            } else {
                                clearInterval(slideTimer);

                            }
                        }, 250);
                    }
                }
            });



            //setPlayButtonNode();

            function disable(nodes, disabled) {
                forEach(nodes, function (node) {
                    node.setAttribute('disabled', disabled);
                });
            }

            function slideFrame(isNext) {

                forEach(frameNodes, function (frameNode, frameIndex) {
                    var position = frameNode.getAttribute('data-carousel-position');
                    var newPosition = null;
                    var zIndex = 1;
                    frameNode.setAttribute('data-animation', '');

                    if (position === "active") { //(isNext && position === "-1") || (!isNext && position === "0")) {

                        // frameNode.setAttribute('data-animation', 'fade-in-out-in-1000');
                        zIndex = 10;
                    } else if ((isNext && position === "-1") || (!isNext && position === "0")) {
                        activeFrame = frameIndex;
                        zIndex = 100;
                    }
                    frameNode.style.zIndex = zIndex;

                    if (position === "active") {
                        newPosition = isNext ? 0 : -1;
                    } else {
                        position = parseInt(position);
                        newPosition = (position == -1 && isNext) || (position == 0 && !isNext) ? "active" : position + (isNext ? 1 : -1);

                        if (newPosition < -2) {
                            newPosition = frameNodes.length - 3 - 1;
                        } else if (newPosition > frameNodes.length - 3 - 1) {
                            newPosition = -2;
                        }
                    }
                    frameNode.setAttribute('data-carousel-position', newPosition.toString());

                });


                var from = isNext ? 4 : 1;
                var to = isNext ? 2 : 3;
                var fromIndex = maintainRange(activeFrame - from, frameNodes.length);
                var toIndex = maintainRange(activeFrame - to, frameNodes.length);

                copyFrame(frameNodes[fromIndex], frameNodes[toIndex]);

                setFramesPosition();
                setPagination(isNext, maintainRange(activePage + (isNext ? -1 : 1), pageNodes.length));

            }



            function copyFrame(fromFrameNode, toFrameNode) {
                $(toFrameNode).empty();
                toFrameNode.appendChild(fromFrameNode.querySelector('.carousel-thumbnail').cloneNode(true));
                toFrameNode.appendChild(fromFrameNode.querySelector('.carousel-headline').cloneNode(true));
                toFrameNode.appendChild(fromFrameNode.querySelector('.carousel-content').cloneNode(true));
            }

            function setFramesPosition() {
                initLocation = groupNode.offsetWidth / 2 - WIDTH / 2;
                initScaledLocation = groupNode.offsetWidth / 2 - (WIDTH - WIDTH * SCALE) / 2;

                forEach(frameNodes, function (frameNode, index) {
                    var position = frameNode.getAttribute('data-carousel-position');

                    frameNode.style.left = ((position === "active") ? initLocation : parseInt(position) * scaledWidth + initScaledLocation) + 'px';
                });
                $(".carousel-frame[data-carousel-position='active']").find("a.open-popup-video").css("pointerEvents", "auto");
                $(".carousel-frame[data-carousel-position='active']").find("a.open-popup-video").attr("tabindex", "0");
                $(".carousel-frame[data-carousel-position='active']").siblings().find("a.open-popup-video").css("pointerEvents", "none");
                $(".carousel-frame[data-carousel-position='active']").siblings().find("a.open-popup-video").attr("tabindex", "-1");
            }

            function setPagination(isNext, newActivePage) {
                if (newActivePage !== activePage) {
                    pageNodes[newActivePage].setAttribute('aria-checked', true);

                    pageNodes[activePage].setAttribute('aria-checked', false);
                    activePage = newActivePage;
                }
            }

            function maintainRange(index, length) {
                if (index < 0) {
                    return index + length;
                } else if (index > length - 1) {
                    return index - length;
                } else {
                    return index;
                }
            }

        });

    } catch (err) {
        console.log(err)
    }
});
/*Functionality of MediacarouselWithFrames in IOS*/
$(document).load(function (e) {
    var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
    if (isiPad) {
        if ($.browser.safari) {
            try {

                var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);

                forEach(document.querySelectorAll('.cp-media-carousel-with-frames'), function (componentNode) {

                    var groupNode = componentNode.querySelector('.carousel-group');
                    var frameNodes = groupNode.querySelectorAll('.carousel-frame[data-show="true"]');
                    var pageNodes = componentNode.querySelectorAll('.c-sequence-indicator button[data-show="true"]');
                    var prevNode = componentNode.querySelector('.carousel-prev');
                    var nextNode = componentNode.querySelector('.carousel-next');

                    var layoverNode = componentNode.querySelector('.carousel-layover');
                    var layoverVideoNode = layoverNode.querySelector('.carousel-layover-inner');
                    var layoverIframeNode = layoverVideoNode.querySelector('iframe');

                    var activeFrame = 2;
                    var activePage = 0;
                    var SCALE = .8;
                    var WIDTH = 682;

                    if (innerWidth >= 1200) {
                        WIDTH = 682;
                    } else if (innerWidth >= 768) {
                        WIDTH = 500;
                    } else if (innerWidth >= 540) {
                        WIDTH = 394;
                    } else {
                        WIDTH = 208;
                    }
                    var scaledWidth = WIDTH * SCALE;

                    var initLocation = groupNode.offsetWidth / 2 - WIDTH / 2;
                    var initScaledLocation = groupNode.offsetWidth / 2 - (WIDTH - WIDTH * SCALE) / 2;

                    // Duplicate the last 2 frames
                    copyFrame(frameNodes[frameNodes.length - 1], frameNodes[1]);
                    copyFrame(frameNodes[frameNodes.length - 2], frameNodes[0]);


                    // Set frames position
                    setFramesPosition();
                    window.addEventListener('resize', function () {
                        if (innerWidth >= 1200) {
                            WIDTH = 682;
                        } else if (innerWidth >= 768) {
                            WIDTH = 533;
                        } else if (innerWidth >= 540) {
                            WIDTH = 394;
                        } else {
                            WIDTH = 208;
                        }
                        scaledWidth = WIDTH * SCALE;
                        initLocation = groupNode.offsetWidth / 2 - WIDTH / 2;
                        initScaledLocation = groupNode.offsetWidth / 2 - (WIDTH - WIDTH * SCALE) / 2;

                        setFramesPosition();
                    });

                    // Set event
                    prevNode.onclick = function () {
                        slideFrame(true);
                    }

                    nextNode.onclick = function () {
                        slideFrame(false);
                    }

                    forEach(pageNodes, function (pageNode, pageIndex) {
                        pageNode.onclick = function () {
                            if (pageIndex !== activePage) {
                                var toLeft = pageIndex < activePage;

                                slideFrame(toLeft);
                                var slideTimer = setInterval(function () {
                                    if (pageIndex !== activePage) {
                                        slideFrame(toLeft);
                                    } else {
                                        clearInterval(slideTimer);
                                    }
                                }, 250);
                            }
                        }
                    });

                    layoverNode.onclick = function (event) {
                        if (event.target !== layoverVideoNode) {
                            layoverNode.setAttribute('data-active', false);
                            layoverIframeNode.setAttribute('src', '');
                        }
                    };

                    setPlayButtonNode();

                    function disable(nodes, disabled) {
                        forEach(nodes, function (node) {
                            node.setAttribute('disabled', disabled);
                        });
                    }

                    function slideFrame(isNext) {

                        forEach(frameNodes, function (frameNode, frameIndex) {
                            var position = frameNode.getAttribute('data-carousel-position');
                            var newPosition = null;
                            var zIndex = 1;
                            frameNode.setAttribute('data-animation', '');

                            if (position === "active") { //(isNext && position === "-1") || (!isNext && position === "0")) {

                                // frameNode.setAttribute('data-animation', 'fade-in-out-in-1000');
                                zIndex = 10;
                            } else if ((isNext && position === "-1") || (!isNext && position === "0")) {
                                activeFrame = frameIndex;
                                zIndex = 100;
                            }
                            frameNode.style.zIndex = zIndex;

                            if (position === "active") {
                                newPosition = isNext ? 0 : -1;
                            } else {
                                position = parseInt(position);
                                newPosition = (position == -1 && isNext) || (position == 0 && !isNext) ? "active" : position + (isNext ? 1 : -1);

                                if (newPosition < -2) {
                                    newPosition = frameNodes.length - 3 - 1;
                                } else if (newPosition > frameNodes.length - 3 - 1) {
                                    newPosition = -2;
                                }
                            }
                            frameNode.setAttribute('data-carousel-position', newPosition.toString());
                        });


                        var from = isNext ? 4 : 1;
                        var to = isNext ? 2 : 3;
                        var fromIndex = maintainRange(activeFrame - from, frameNodes.length);
                        var toIndex = maintainRange(activeFrame - to, frameNodes.length);

                        copyFrame(frameNodes[fromIndex], frameNodes[toIndex]);

                        setFramesPosition();
                        setPagination(isNext, maintainRange(activePage + (isNext ? -1 : 1), pageNodes.length));

                        setPlayButtonNode();
                    }

                    function setPlayButtonNode() {
                        var playButtonNode = frameNodes[activeFrame].querySelector('.play-button');
                        var youtubeID = frameNodes[activeFrame].querySelector('.carousel-youtube-id').value;
                        playButtonNode.onclick = function () {
                            layoverNode.setAttribute('data-active', true);
                            layoverIframeNode.setAttribute('src', 'https://www.youtube.com/embed/' + youtubeID + '?autoplay=1');
                        }
                    }

                    function copyFrame(fromFrameNode, toFrameNode) {
                        $(toFrameNode).empty();
                        toFrameNode.appendChild(fromFrameNode.querySelector('.carousel-thumbnail').cloneNode(true));
                        toFrameNode.appendChild(fromFrameNode.querySelector('.carousel-headline').cloneNode(true));
                        toFrameNode.appendChild(fromFrameNode.querySelector('.carousel-content').cloneNode(true));
                    }

                    function setFramesPosition() {
                        initLocation = groupNode.offsetWidth / 2 - WIDTH / 2;
                        initScaledLocation = groupNode.offsetWidth / 2 - (WIDTH - WIDTH * SCALE) / 2;

                        forEach(frameNodes, function (frameNode, index) {
                            var position = frameNode.getAttribute('data-carousel-position');

                            frameNode.style.left = ((position === "active") ? initLocation : parseInt(position) * scaledWidth + initScaledLocation) + 'px';
                        });
                    }

                    function setPagination(isNext, newActivePage) {
                        if (newActivePage !== activePage) {
                            pageNodes[newActivePage].setAttribute('aria-checked', true);

                            pageNodes[activePage].setAttribute('aria-checked', false);
                            activePage = newActivePage;
                        }
                    }

                    function maintainRange(index, length) {
                        if (index < 0) {
                            return index + length;
                        } else if (index > length - 1) {
                            return index - length;
                        } else {
                            return index;
                        }
                    }



                });
            } catch (err) {
                console.log(err)
            }
        }
    }
});
/**********START OF CP_FiveColumnsWithCopy.js **********/
$(document).ready(function () {
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    try {
        forEach(document.querySelectorAll('.cp-five-columns-with-copy'), function (component) {

            setHeight();
            window.addEventListener('resize', setHeight);

            function setHeight() {
                var maxHeight = 0;
                var columns = component.querySelectorAll('.column');
                $(columns).height('');
                forEach(columns, function (column) {
                    maxHeight = Math.max(maxHeight, column.offsetHeight);
                });
                $(columns).css("height", maxHeight);
            }
        });
    } catch (err) {

    }
})

/**********START OF CP_StickyNav.js **********/
$(document).ready(function () {
    try {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var stickyNavNode = document.querySelector('.cp-sticky-nav-sub');
        var stickyNavBGNode = document.querySelector('.cp-sticky-nav-bg');
        var stickyNavInitialPosition = stickyNavBGNode.getBoundingClientRect().top + scrollTop;


        setStickyNav();
        window.addEventListener('scroll', setStickyNav);
        window.addEventListener('resize', function () {
            stickyNavInitialPosition = stickyNavBGNode.getBoundingClientRect().top + scrollTop;
            setStickyNav();
        });

        stickyNavNode.querySelector('.main-tab').onclick = function () {
            stickyNavNode.setAttribute('data-collapse', !(stickyNavNode.getAttribute('data-collapse').toLowerCase() === 'true') + '');
        }

        function setStickyNav() {
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            stickyNavNode.style.position = (scrollTop >= stickyNavInitialPosition) ? 'fixed' : '';
        }
    } catch (err) {

    }
});
/**********END OF CP_StickyNav.js **********/




/**********START OF CP_AccordionWithTable.js **********/
$(document).ready(function () {
    try {

        var sqlheaders = $('.accordion-main-panel .accordion-heading');
        var sqldefaultHeader = $('.accordion-main-panel .accordion-heading:first');

        var contentsqlAreas = $('.accordion-main-panel .mainaccordionpanel.ui-accordion-content ').hide();
        var sqlaccordionArrowClass = $('.accordion-main-panel').attr("data-accordion-arrow-class");

        var bgArrowColor = "black";

        if (sqlaccordionArrowClass != "" && sqlaccordionArrowClass.toLowerCase() == "bg-right-arrow-white") {
            bgArrowColor = "white";
        }

        $(".accordion-heading").each(function () {

            $(this).addClass("bg-right-arrow-" + bgArrowColor);
        });

        function activatesqlAccordion(sqlheader) {
            var sqlpanel = $(sqlheader).next();
            var sqlisOpen = sqlpanel.is(':visible');
            if (sqlisOpen) {

                $(sqlheader).removeClass("bg-down-arrow-" + bgArrowColor).addClass("bg-right-arrow-" + bgArrowColor);
            } else {

                $(sqlheader).removeClass("bg-right-arrow-" + bgArrowColor).addClass("bg-down-arrow-" + bgArrowColor);
            }
            sqlpanel[sqlisOpen ? 'slideUp' : 'slideDown']()
                .trigger(sqlisOpen ? 'hide' : 'show');
            if (sqlisOpen) {

                sqlpanel.find('.linktext a').css('opacity', '0');
            } else {
                setTimeout(function () {
                    sqlpanel.find('.linktext a').css('opacity', '1');
                }, 100);
            }
            return false;
        }

        activatesqlAccordion(sqldefaultHeader);

        sqlheaders.click(function (event) {
            event.preventDefault();
            var header = $(this);
            activatesqlAccordion(header);
            setTimeout(function () {
                $(window).resize();
            }, 300);

        });


        contentsqlAreas.on({
            // whenever we open a panel, check to see if they're all open
            // if all open, swap the button to collapser
            show: function () {
                contentsqlAreas.parents().closest(".accordion-container").addClass("expclicked")
                var isAllOpen = !contentsqlAreas.is(':hidden');
                if (isAllOpen) {


                }
            },
            // whenever we close a panel, check to see if they're all open
            // if not all open, swap the button to expander
            hide: function () {
                contentsqlAreas.parents().closest(".accordion-container").addClass("expclicked")

                var isAllOpen = !contentsqlAreas.is(':hidden');
                if (!isAllOpen) {


                }
            }
        });


    } catch (error) {
        //console.log(error.message);
    }
});

/**********END OF CP_AccordionWithTable.js **********/



/**********START OF CP_ImageBlocksAnimation.js **********/
$(document).ready(function () {
    try {
        var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);

        forEach(document.querySelectorAll('.cp-image-blocks-animation'), function (component) {
            var blocks = component.querySelectorAll('.image-block');

            var gifs = component.querySelectorAll('.gif-img');
            var gifsBuildIn = component.querySelectorAll('.gif-build-in');
            var gifsRollOver = component.querySelectorAll('.gif-roll-over');

            var initialLoad = true;
            var componentHeight = component.offsetHeight;
            checkToEnable();

            window.addEventListener('scroll', function () {


                checkToEnable();

            });

            forEach(blocks, function (blockNode, index) {
                // Set content height for css transition
                // var contentNode = blockNode.querySelector('.image-block-content');
                // var height  = $(contentNode).height(); 

                var gif = gifs[index];
                blockNode.onmouseenter = function () {
                    gif.setAttribute('src', gifsRollOver[index].getAttribute('src'));
                    // contentNode.style.height = height + 'px';
                }

                blockNode.onmouseleave = function () {
                    // gif.setAttribute('src', gif.getAttribute('data-gif-static'));
                    // contentNode.style.height = 0;
                }
                //contentNode.style.height = 0;

            });

            function checkToEnable() {

                var inViewport = elementInViewport(component, componentHeight, 150);
                component.setAttribute('data-disable', (!inViewport).toString());

                if (inViewport) {
                    if (initialLoad) {

                        forEach(gifs, function (gif, index) {
                            gif.setAttribute('src', gifsBuildIn[index].getAttribute('src'));
                        });
                        initialLoad = false;
                    }
                } else {
                    initialLoad = true;
                }
            }


            function elementInViewport(element, height, offset) {
                offset = offset || 0;
                var top = element.offsetTop + offset;

                while (element.offsetParent) {
                    element = element.offsetParent;
                    top += element.offsetTop;
                }

                return (top + height) <= (window.pageYOffset + window.innerHeight);
            }
        });
    } catch (err) {

    }
});
/**********END OF CP_ImageBlocksAnimation.js **********/




/**********START OF CP_StaticSupportLinks.js **********/

$(document).ready(function () {
    /*if(window.location.href.indexOf("en-us") <= -1) {
        $(".static-support-links-3").remove();
        $(".static-support-links-3").css({"display" : "none"});
    }*/
    try {
        var link1Width = $(".support-links-text1").outerWidth();
        var link2Width = $(".support-links-text2").outerWidth();

        $(".static-support-links-1").css("width", link1Width + 72);
        $(".static-support-links-2").css("width", link2Width + 72);
        $(".static-support-links-3").css("max-width", "100%");
        //$(".static-support-links-3").css("display","inline-block");
        $(".static-support-links-1").css("right", -link1Width); // removing 72 pixel logo width
        $(".static-support-links-2").css("right", -link2Width); // removing 72 pixel logo width

        $('#lpChatButton').bind("DOMSubtreeModified", lpchatfun);
        /******************* *Bug 346848 fix ********************/
        $(".fixed-support-links ul li a").on("focus", function () {
            $(this).parent().addClass("right-zero");
        });
        $(".fixed-support-links ul li a").on("blur", function () {
            $(this).parent().removeClass("right-zero");
        });
        /******************* *Bug 346848 fix ********************/

        //lpchatfun() definition removed here and added outside of document ready  
    } catch (e) {}

});

function lpchatfun() {
    //          if($("#lpChatButton img").not(".showing").css("visibility","hidden"))
    if ($("#lpChatButton img").hasClass("showing"))
        $("#lpChatButton img").css("visibility", "visible");
    else
        $("#lpChatButton img").css("visibility", "hidden");
    //  if($("#lpChatButton img").not("showing"))         
    var link3Width = Number($("#lpChatButton img").outerHeight()) + 72;
    if (link3Width != 0 && link3Width != null) {
        $(".static-support-links-3").css("min-width", link3Width + "px");
        $(".static-support-links-3").css("width", link3Width + "px");
        $(".static-support-links-3").css("right", -link3Width + 72);
    }
}

$(window).on("load", function () {
    try {
        setTimeout(function () {
            $(".fixed-support-links").css("visibility", "visible");
            $("#lpChatButton img").css("visibility", "visible");
            $("#lpChatButton img").addClass("showing")
            if ($('#lpChatButton').children().length == 0) {
                // alert("no image");
                $(".fixed-support-links ul li.static-support-links-3").hide();
            } else {
                $(".fixed-support-links ul li.static-support-links-3").show();
                lpchatfun();
            }

        }, 2000);
    } catch (e) {}

});

/**********END OF CP_StaticSupportLinks.js **********/



// Fixing parallax issue on IE and Edge
$(document).ready(function () {
    try {
        if (navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/)) {

            document.documentElement.onmousewheel = function (event) {
                if (!$('html').hasClass('no-scroll')) {
                    event.preventDefault();
                    var wheelDelta = event.wheelDelta;
                    var currentScrollPosition = window.pageYOffset;
                    window.scrollTo(0, currentScrollPosition - wheelDelta);
                }
            }

            document.documentElement.onkeydown = function (event) {
                if (!$('html').hasClass('no-scroll')) {
                    var currentScrollPosition = window.pageYOffset;

                    switch (event.which) {

                        case 38: // up
                            event.preventDefault(); // prevent the default action (scroll / move caret)
                            window.scrollTo(0, currentScrollPosition - 120);
                            break;

                        case 40: // down
                            event.preventDefault(); // prevent the default action (scroll / move caret)
                            window.scrollTo(0, currentScrollPosition + 120);
                            break;

                        default:
                            return; // exit this handler for other keys
                    }
                }
            }
        }
    } catch (e) {}
});


$(document).ready(function () {
    try {
        var maxHeight = -1;
        var outerContainerHeight = -1;
        $('.cp-media-carousel-with-frames .carousel-with-frames .carousel-frame').each(function () {

            var innerContainersHeight = $(this).find(".carousel-thumbnail").outerHeight() + $(this).find(".carousel-headline").outerHeight() + $(this).find(".carousel-content").outerHeight()
            maxHeight = (maxHeight > (innerContainersHeight) ? maxHeight : innerContainersHeight);
            // console.log("maxHeight : "+maxHeight);
            $(".carousel-frame").css("height", maxHeight + "px");


        });
        // console.log("maxHeight : "+maxHeight);
        outerContainerHeight = maxHeight + Number($(".cp-media-carousel-with-frames .carousel-with-frames").css("padding-bottom").replace("px", ""));
        $(".cp-media-carousel-with-frames .carousel-with-frames").css("height", outerContainerHeight + "px");
    } catch (e) {

    }
});
/**scroll autocarousel */
$(window).scroll(function () {
    if ($(".currentvideoplaying").length < 1) {
        $(".top-parent-element").each(function () {
            var currrentelement = $(this);
            if ($(this).attr("data-auto-play") == "true" && $(this).find(".slick-slider").length > 0) {
                if (isScrolledIntoView(currrentelement)) {
                    $(this).find(".slick-slider").slick("play");
                } else {
                    $(this).find(".slick-slider").slick("pause");
                }
            }
        });
    }

});