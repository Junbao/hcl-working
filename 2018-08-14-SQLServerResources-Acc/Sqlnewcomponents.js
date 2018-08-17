/* ** Global js for sideheights ** */
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
/*** Starts SQL_ImageTabsCarousel ***/
/**Start RTL Carousel */
function sqlImageTabRTLCarousel() {
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    forEach(document.querySelectorAll('.sql-image-tab-carousel'), function (componentNode) {

        var DESKTOP = 6;
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
        var carouselImageNodes = componentNode.querySelectorAll('.carousel-content-item[data-show="true"] .carousel-content-background');
        var carouselSlider = componentNode.querySelector('.carousel-arrow-slider');

        var thumbnailCount = DESKTOP;
        var thumbnailListWidth = $(carouselThumbnailList).width();
        var thumbnailWidth = thumbnailListWidth / thumbnailCount;

        var thumbnailActiveIndex = 0;
        var contentActiveIndex = 0;
        var arrowActivePosition = 0;
        var carouselCount = carouselThumbnailNodes.length;


        var thumbnailNavigating = function () {
            forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
                carouselThumbnailNode.style.right = ((thumbnailIndex - thumbnailActiveIndex) * thumbnailWidth) + 'px';
            });
            // console.log(arrowActivePosition, carouselThumbnailList.getBoundingClientRect().left);
            carouselSlider.style.left = -($(carouselSlider).width() / 2 - (carouselThumbnailList.getBoundingClientRect().left + (thumbnailCount - arrowActivePosition - 1) * thumbnailWidth) - thumbnailWidth / 2) + 'px';
            $(".sql-image-tab-carousel").css("opacity", "1");
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
            arrowActivePosition = index - thumbnailActiveIndex;
            $(carouselContentNodes).fadeOut();
            $(carouselContentNodes[index]).fadeIn();
            carouselSlider.style.left = -($(carouselSlider).width() / 2 - (carouselThumbnailList.getBoundingClientRect().left + (thumbnailCount - arrowActivePosition - 1) * thumbnailWidth) - thumbnailWidth / 2) + 'px';
        };

        var thumbnailClick = function () {
            var thumbnailIndex = parseInt(this.getAttribute('data-index'));
            // console.log(contentActiveIndex, thumbnailIndex);
            if (contentActiveIndex !== thumbnailIndex) {

                contentActiveIndex = thumbnailIndex;
                setCarouselContent(thumbnailIndex);
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
        // object-fit for edge and ie		
        forEach(carouselImageNodes, function (node) {
            node.style.fontFamily = '"object-fit: cover"';
            objectFitImages(node.querySelector('img'), {
                watchMQ: true
            });
            forEach(node.querySelectorAll('source'), function (sourceNode) {
                sourceNode.setAttribute('srcset', '');
            })
        });
        $(carouselContentNodes[0]).show();
        onResize();

        window.addEventListener('resize', onResize);

        forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
            carouselThumbnailNode.onclick = thumbnailClick;
            carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
        });

        forEach(carouselNavNodes, function (carouselNavNode) {
            carouselNavNode.onclick = carouselNavClick;
        });
    });
}
/**END RTL Carousel */
/**Start LTR Carousel */
function sqlImageTabLTRCarousel() {
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    forEach(document.querySelectorAll('.sql-image-tab-carousel'), function (componentNode) {

        var DESKTOP = 6;
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
        var carouselImageNodes = componentNode.querySelectorAll('.carousel-content-item[data-show="true"] .carousel-content-background');
        var carouselSlider = componentNode.querySelector('.carousel-arrow-slider');

        var thumbnailCount = DESKTOP;

        var thumbnailListWidth = $(carouselThumbnailList).width();

        var thumbnailWidth = thumbnailListWidth / thumbnailCount;

        var thumbnailActiveIndex = 0;
        var contentActiveIndex = 0;
        var arrowActivePosition = 0;
        var carouselCount = carouselThumbnailNodes.length;


        var thumbnailNavigating = function () {
            forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
                carouselThumbnailNode.style.left = ((thumbnailIndex - thumbnailActiveIndex) * thumbnailWidth) + 'px';
            });
            carouselSlider.style.left = -($(carouselSlider).width() / 2 - (carouselThumbnailList.getBoundingClientRect().left + arrowActivePosition * thumbnailWidth) - thumbnailWidth / 2) + 'px';
            $(".sql-image-tab-carousel").css("opacity", "1");
        };

        var moveThumbnail = function (toFront) {

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
            var thumbnailIndex = parseInt(this.getAttribute('data-index'));
            contentActiveIndex = thumbnailIndex;
            setCarouselContent(thumbnailIndex);
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
        // object-fit for edge and ie		
        forEach(carouselImageNodes, function (node) {
            node.style.fontFamily = '"object-fit: cover"';
            objectFitImages(node.querySelector('img'), {
                watchMQ: true
            });
            forEach(node.querySelectorAll('source'), function (sourceNode) {
                sourceNode.setAttribute('srcset', '');
            })
        });
        $(carouselContentNodes[0]).show();
        onResize();

        window.addEventListener('resize', onResize);

        forEach(carouselThumbnailNodes, function (carouselThumbnailNode, thumbnailIndex) {
            carouselThumbnailNode.onclick = thumbnailClick;
            carouselThumbnailNode.setAttribute('data-index', thumbnailIndex);
        });

        forEach(carouselNavNodes, function (carouselNavNode) {
            carouselNavNode.onclick = carouselNavClick;
        });
    });
}
/**END LTR Carousel */

$(document).ready(function () {
    try {
        if ($("body").hasClass('rtl')) {
            sqlImageTabRTLCarousel();
        } else {
            sqlImageTabLTRCarousel();
        }
    } catch (err) {

    }
});
/*** Ends SQL_ImageTabsCarousel ***/

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
        var autoPlay = false;
        var autoPlaySpeed = 5000;
        $(this).find(".hero-carousel-button-slides").each(function () {
            themes[count] = $(this).attr("data-theme");
            count++;

        });


        if ($(this).attr("data-auto-play") == "true") {
            autoPlay = true;
            if ($(this).attr("data-auto-play-speed") != undefined && $(this).attr("data-auto-play-speed") != null && $(this).attr("data-auto-play-speed") != "") {
                autoPlaySpeed = $(this).attr("data-auto-play-speed");
            }
        } else {
            autoPlay = false;
        }
        if ($(this).find(".slickcarousel").children().length > 1) {

            $(this).find(".slickcarousel").slick({

                dots: true,
                rtl: dirrtl,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: autoPlay,
                autoplaySpeed: autoPlaySpeed,
                pauseOnFocus: true,
                pauseOnDotsHover: true,
                pauseOnHover: true
            });


            for (var j = 0; j < themes.length; j++) {
                $(this).find("ul.slick-dots").children().eq(j).addClass(themes[j]);
            }
            themes = [];
            setHeroButtonsHeight();
        }
        /* START of Herocarousel load issue bug-342946*/
        $(this).find(".hero-carousel-button-slides.hide-back").removeClass("hide-back");
        /* END of Herocarousel load issue bug-342946*/
    });
});
$(window).resize(function () {
    setHeroButtonsHeight();
});

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
        var slickautoPlay = true;;

        if (($("#CP_CustomCarousel_1").attr("data-auto-play")) == "false") {
            slickautoPlay = false;
        } else {
            $("#CP_CustomCarousel_1").attr("data-auto-play", "true");
            // $('#CP_CustomCarousel_1 .carousel .panel-item.slick-active a').attr('tabindex','-1');
        }
        var slickautoPlaySpeed = $("#CP_CustomCarousel_1").attr("auto-play-speed");
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
            $('#CP_CustomCarousel_1 .carousel .panel-item.slick-active a').attr('tabindex', '-1');
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
            autoplay: slickautoPlay,
            autoplaySpeed: slickautoPlaySpeed,
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
            // announcementCarousel.$contentListItems.eq(currentSlide).find('a').attr('tabindex','-1');
            setTimeout(function () {
                $('#CP_CustomCarousel_1 .carousel .panel-item.slick-active a').attr('tabindex', '-1');
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
                }, slickautoPlaySpeed);
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
    } catch (e) { }
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
    $('.cp-sticky-nav .cp-sticky-nav-sub .tabs .tab a').attr('tabindex', '0');
    $('#CP_CustomCarousel_1 .carousel .panel-item.slick-active a').attr('tabindex', '-1');
    try {
        if (announcementCarousel.$carousel != null && announcementCarousel.$carousel.length < 1) return;
        announcementCarousel.heightCalc();
    } catch (e) { }
});

$(window).resize(function () {
    try {
        if (announcementCarousel.$carousel != null && announcementCarousel.$carousel.length < 1) return;
        announcementCarousel.heightCalc();
    } catch (e) { }
});
/**********END OF CP_CustomCarouselSettings.js **********/


/**********START OF CP_MediaCarouselWithFrames.js **********/
var mediaAutoCarousel = null;
var trigerredclick = 0;

function intervalManager(flag, currentcarousel, slickAutoPlay, slickautoplayspeed) {
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
            if (ishover == 0 && slickAutoPlay == true && videoplay == 0 && focuscount == 0) {
                trigerredclick = 1;
                currentcarousel.find(".carousel-next").trigger("click");
            }

        }, slickautoplayspeed);
    } else {
        clearInterval(mediaAutoCarousel);
    }
}



$(window).load(function () {
    try {
        $(".cp-media-carousel-with-frames").each(function () {
            var currentcarousel = $(this);
            var slickAutoPlay = false;

            $(this).find(".carousel-thumbnail .video-link").each(function () {
                if (!($(this).find(".mscom-link").hasClass("open-popup-video")) && !($(this).find(".mscom-link").hasClass("open-inline-video"))) {
                    $(this).find(".mscom-link").removeAttr("href");
                    $(this).find(".mscom-link").removeAttr("tabindex");
                    skipWatch();
                }
            });
            if (currentcarousel.attr("data-auto-play") == "true" && isScrolledIntoView(currentcarousel)) {
                slickAutoPlay = true;
                var slickautoplayspeed = currentcarousel.attr("data-auto-play-speed");
                //intervalManager( true, currentcarousel,slickAutoPlay, slickautoplayspeed)
            }
        });
    } catch (e) {

    }
});

function setMediaFramesHeight() {
    $(".cp-media-carousel-with-frames").each(function () {
        var mainParent = $(this);
        var parentElement = $(this).find(".carousel-content");
        var childElement = $("p");
        side_elements_height(parentElement, childElement);
        var frameElement = $(this).find(".carousel-frame");
        child_element_height(mainParent, frameElement)
        var frameElementHeight = $(this).find(".carousel-frame").outerHeight();
        $(this).find(".carousel-group").css("height", frameElementHeight)
    });
}
$(window).resize(function () {
    try {
        if ($(".cp-media-carousel-with-frames").length > 0) {
            setTimeout(function () {
                setMediaFramesHeight();
            }, 400);
        }
    } catch (r) {

    }
});
var functioncalled = 0;
$(window).scroll(function () {
    try {
        $(".cp-media-carousel-with-frames").each(function () {
            var currentcarousel = $(this);
            var slickAutoPlay = false;

            if (currentcarousel.attr("data-auto-play") == "true" && isScrolledIntoView(currentcarousel)) {
                slickAutoPlay = true;
                var slickautoplayspeed = currentcarousel.attr("data-auto-play-speed");
                if (functioncalled == 0) {
                    intervalManager(true, currentcarousel, slickAutoPlay, slickautoplayspeed)
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

function skipWatch() {
    setTimeout(function () {
        $('.false_paragraph a').attr('tabindex', '-1');
        $(".carousel-frame[data-carousel-position='active']").find("a.open-popup-video").attr("tabindex", "-1");
    }, 1500);
};

$(document).ready(function () {
    var pageIconPlace = 0;
    var place = 0;

    skipWatch();
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
            var slickAutoPlay = false;
            var currentcarousel = $(componentNode);
            if (componentNode.getAttribute("data-auto-play") == "true") {
                slickAutoPlay = true;
                var slickautoplayspeed = componentNode.getAttribute("data-auto-play-speed");

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
                $('.carousel-navigation').attr('tabindex', '-1');
                e.preventDefault();
                chromePageSlide(e);
                slideFrame(true);
                if (e.isTrigger == undefined && slickAutoPlay == true) {
                    intervalManager(false);
                    intervalManager(true, currentcarousel, slickAutoPlay, slickautoplayspeed);
                }
                $('.cp-media-carousel-with-frames .carousel-group .carousel-frame').each(function () {
                    if ($(this).attr('data-carousel-position') == "active") {
                        $(this).attr('aria-hidden', 'false');
                    } else {
                        $(this).attr('aria-hidden', 'true');
                    }
                });
                $('.carousel-frame .video-link a').css("border", "none");
                MediaCarouselWithFramesIDRemove();
            }

            nextNode.onclick = function (e) {
                $('.carousel-navigation').attr('tabindex', '-1');
                e.preventDefault();
                chromePageSlide(e);
                slideFrame(false);
                if (e.isTrigger == undefined && slickAutoPlay == true) {
                    intervalManager(false);
                    intervalManager(true, currentcarousel, slickAutoPlay, slickautoplayspeed);
                }
                $('.cp-media-carousel-with-frames .carousel-group .carousel-frame').each(function () {
                    if ($(this).attr('data-carousel-position') == "active") {
                        $(this).attr('aria-hidden', 'false');
                    } else {
                        $(this).attr('aria-hidden', 'true');
                    }
                });
                $('.carousel-frame .video-link a').css("border", "none");
                MediaCarouselWithFramesIDRemove();
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
                                if (slickAutoPlay == true) {
                                    intervalManager(false);
                                    intervalManager(true, currentcarousel, slickAutoPlay, slickautoplayspeed);
                                }
                            } else {
                                clearInterval(slideTimer);

                            }
                        }, 250);

                    }
                    $('.carousel-frame > .carousel-content a').attr('id', '');
                    $('.cp-media-carousel-with-frames .carousel-group .carousel-frame').each(function () {
                        if ($(this).attr('data-carousel-position') == "active") {
                            $(this).attr('aria-hidden', 'false');
                        } else {
                            $(this).attr('aria-hidden', 'true');
                        }
                    });

                    MediaCarouselWithFramesIDRemove();
                }
                pageNode.onkeydown = function (e) {
                    console.log("keypress");
                    if ((e.which == 39) || (e.which == 40)) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        $('.carousel-next').trigger("click");
                    }
                    if ((e.which == 37) || (e.which == 38)) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        $(".carousel-prev").trigger("click");
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

                //setPlayButtonNode();
            }

            //function setPlayButtonNode() {

            //var playButtonNode = frameNodes[activeFrame].querySelector('.play-button');
            //var youtubeID = frameNodes[activeFrame].querySelector('.carousel-youtube-id').value;
            // playButtonNode.onclick = function () {
            // 	layoverNode.setAttribute('data-active', true);
            // 	//layoverIframeNode.setAttribute('src', 'https://www.youtube.com/embed/' + youtubeID + '?autoplay=1');
            // }                

            //}

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
                $(".carousel-frame[data-carousel-position='active']").find(".carousel-content a").attr("tabindex", "0");
                skipWatch();
                $(".carousel-frame[data-carousel-position='active']").siblings().find("a.open-popup-video").css("pointerEvents", "none");
                $(".carousel-frame[data-carousel-position='active']").siblings().find("a.open-popup-video").attr("tabindex", "-1");
                $(".carousel-frame[data-carousel-position='active']").siblings().find(".carousel-content a").attr("tabindex", "-1");
            }

            // bug fix 346227 It is a Chrome only bug so isolating only Chrome as Edge doesn't support options to scrollIntoView
            function chromePageSlide(e) {
                var isChrome = window.chrome;
                var carouselWrap = document.getElementById('CP_MediaCarouselWithFrames_1');
                if (navigator.userAgent.indexOf('Edge') >= 0) {
                    carouselWrap.scrollIntoView();
                } else if (isChrome) {
                    carouselWrap.scrollIntoViewIfNeeded();
                }
            }

            //changing the focus to the frame 
            function changeFocus(place) {
                console.log(place);
                chromePageSlide();
                $('.carousel-frame .video-link a').attr('aria-selected', 'false');
                var findFrame = document.getElementsByClassName('carousel-frame');
                var attribute = "";
                var i = 0;
                var time;
                if (pageIconPlace === place) {
                    time = 250;
                } else if (pageIconPlace > place) {
                    pageIconPlace = place - pageIconPlace;
                } else {
                    pageIconPlace = pageIconPlace - place;
                }

                if (pageIconPlace === -7) {
                    time = 1700;
                } else if (pageIconPlace === -6) {
                    time = 1500;
                } else if (pageIconPlace === -5) {
                    time = 1250;
                } else if (pageIconPlace === -4) {
                    time = 1000;
                } else if (pageIconPlace === -3) {
                    time = 750;
                } else if (pageIconPlace === -2) {
                    time = 500;
                } else if (pageIconPlace === -1) {
                    time = 250;
                } else {
                    time = 1750;
                }

                setTimeout(function (time) {
                    var timing = setInterval(function () {
                        for (i; i < findFrame.length; i++) {
                            attribute = findFrame[i].getAttribute("data-carousel-position");
                            if (attribute === "active") {
                                $(this).attr('tabindex', '0');
                                $('.carousel-frame[data-carousel-position="active"] .video-link .open-popup-video').attr('tabindex', '0').attr('aria-selected', 'true').focus();
                                $('.carousel-frame .video-link a').attr('aria-hidden', 'false');
                                clearInterval(timing);
                                pageIconSet();
                                return;
                            }
                        }
                    }, 250);
                }, time);
            };

            $('.c-sequence-indicator button').on('keypress', function (e) {
                if (e.which == 13) {
                    place = $(this).attr('data-place');
                    changeFocus(place);
                }
            });

            $('.c-sequence-indicator button').on("click", function () {
                place = $(this).attr('data-place');
                changeFocus(place);
            });

            function pageIconSet() {
                $('.c-sequence-indicator button').each(function () {
                    if ($(this).attr('aria-selected') != "true") {
                        $(this).attr('tabindex', '-1');
                    } else {
                        $(this).attr('tabindex', '0');
                    }
                }

                );

            };

            function setPagination(isNext, newActivePage) {
                if (newActivePage !== activePage) {
                    pageNodes[newActivePage].focus();
                    pageNodes[activePage].setAttribute('aria-selected', false);
                    pageNodes[activePage].setAttribute('tabindex', '-1');
                    pageNodes[activePage].classList.remove('f-active');
                    pageNodes[newActivePage].setAttribute('aria-selected', true);
                    pageNodes[newActivePage].setAttribute('tabindex', '0');

                    activePage = newActivePage;
                }
            }
            setMediaFramesHeight();

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
                    prevNode.onclick = function (e) {
                        slideFrame(true);
                    }

                    nextNode.onclick = function (e) {
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
                            pageNodes[newActivePage].setAttribute('aria-selected', true);

                            pageNodes[activePage].setAttribute('aria-selected', false);
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
var carouselcalled = 0;

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
                //$(columns).height(maxHeight);
            }
        });
    } catch (err) {
        console.error(err);
    }
})



/**********START OF CP_StickyNav.js **********/
$(window).load(function () {
    $('.cp-sticky-nav .cp-sticky-nav-sub').css("position", "relative");
});

$(document).ready(function () {
    try {

        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var stickyNavNode = document.querySelector('.cp-sticky-nav-sub');
        var stickyNavBGNode = document.querySelector('.cp-sticky-nav-bg');
        var stickyNavInitialPosition = stickyNavBGNode.getBoundingClientRect().top + scrollTop;
        var stickyNavHeight = $('#CP_StickyNav_1').height();

        // setTimeout(function(){stickyNavInitialPosition = stickyNavBGNode.getBoundingClientRect().top + scrollTop;}, 2000);


        setStickyNav();


        stickyNavWidth();
        //window.addEventListener('scroll', setStickyNav);
        window.addEventListener('scroll', function () {
            stickyNavInitialPosition = stickyNavBGNode.getBoundingClientRect().top + scrollTop;
            setStickyNav();
        });
        window.addEventListener('resize', function () {
            stickyNavInitialPosition = stickyNavBGNode.getBoundingClientRect().top + scrollTop;
            setStickyNav();

        });

        $('.cp-sticky-nav-sub').on('click', function () {
            $(stickyNavNode).attr('data-collapse', $(stickyNavNode).attr('data-collapse') == 'true' ? 'false' : 'true');
            toggleDC();
        });

        $('.cp-sticky-nav-sub').on('keydown', function (e) {
            if (e.keyCode == 13) {
                $(stickyNavNode).attr('data-collapse', $(stickyNavNode).attr('data-collapse') == 'true' ? 'false' : 'true');
                toggleDC();
            }
        });

        function toggleDC() {
            if ($(stickyNavNode).attr('data-collapse') == "true") {
                $('#stickyMobilePageLink').attr('aria-expanded', 'false');
                $('.cp-sticky-nav-sub nav').attr('aria-hidden', 'true');
                $("#stickyNotice").text("collapsed");
            } else if ($(stickyNavNode).attr('data-collapse') == "false") {
                $('#stickyMobilePageLink').attr('aria-expanded', 'true');
                $('.cp-sticky-nav-sub nav').attr('aria-hidden', 'false');
                $("#stickyNotice").text("expanded");
            }
            if ($('html').hasClass('edge-browser') || navigator.userAgent.toLowerCase().indexOf('trident') > 0) {
                $("#stickyNotice").remove();
            }
        }

        function setStickyNav() {
            if ($('#CP_StickyNav_1 .cp-sticky-nav-sub').hasClass('sticky')) {
                browserZoomLevel = Math.round(window.devicePixelRatio * 100);
                scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                stickyNavNode.style.position = (scrollTop >= (stickyNavInitialPosition + stickyNavHeight - 1)) ? 'fixed' : '';

                if (browserZoomLevel >= 200 && $('.cp-sticky-nav .cp-sticky-nav-sub').attr('data-collapse') == 'true') {
                    stickyNavNode.style.position = (scrollTop >= (stickyNavInitialPosition + stickyNavHeight - 1)) ? 'fixed' : '';
                    // $('.cp-sticky-nav .cp-sticky-nav-sub').css("position", "fixed");
                } else if (browserZoomLevel >= 200) {

                    stickyNavNode.style.position = (scrollTop >= (stickyNavInitialPosition + stickyNavHeight - 1)) ? 'relative' : '';
                }
            }
        }

        function stickyNavWidth() {
            var count = $(".tabs").attr("data-tab-number");
            $(".tabs").children().each(function () {
                var wclass = " nb col-1-" + (count);
                if (!$(this).hasClass("main-tab")) {
                    $(this).find('.tab').addClass(wclass);
                }
            });
            $(".cp-sticky-nav").css("opacity", "1");
            /* fix 1 for text cluster issue.*/
        }
    } catch (err) {
        console.log(err)
    }
});

/**********END OF CP_StickyNav.js **********/


/**********START OF CP_RightNavTab.js **********/

$(document).ready(function () {

    $(document).on('click', '.sql-RightNavTab .sql-accordion-tab-list ul li', function () {
        $(this).parents().closest("section").addClass("selectedtab");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).attr('tabindex', '0');
        $(this).focus();
        $(this).children().removeAttr('aria-label');
        $(this).siblings().attr('tabindex', '-1');
        var selectedindex = $(this).attr("data-index");
        var selectedtext = $(this).text();
        var $data = $(".selectedtab .sql-righttab");
        $(".selectedtab .selected-tabitem").find("p").text(selectedtext);
        $(".selectedtab .selected-tabitem").find("p").prepend("<span class='arrow-down'></span>");
        $data.children().removeClass("active");
        $data.children().eq(selectedindex).addClass("active");
        if ($(window).width() < 540) {
            $(".selectedtab .sql-accordion-tab-list").animate({
                height: "toggle"
            }, 500);
        }
    });

    $(document).on('click', '.sql-RightNavTab .sql-accordion-tab-list ul li', function (e, arg) {
        if (arg != "explicit") {
            enableScroll();
            $(this).addClass('click-actual');
            $(this).find('a').attr('aria-selected', 'true');
            $(this).siblings().find('a').attr('aria-selected', 'false');
            $(this).focus();
            $(this).children().removeAttr('aria-label');
            $(this).siblings().removeClass('click-actual');

            if (navigator.userAgent.toLowerCase().indexOf('edge') != -1) {
                $(this).find('a').attr('aria-selected', 'true');
                $(this).siblings().find('a').attr('aria-selected', 'false');
            }
            if ($('html').hasClass('edge-browser') || $('html').hasClass('ie11-browser')) {
                var a = $(this).children().text();
                $(this).children().attr('aria-label', a + ' selected');
                $(this).siblings().children().attr('aria-selected', 'false');
            }

        }
        e.preventDefault();
        $(this).addClass('click-active').siblings().removeClass("click-active");
        $(this).removeClass("click-active-sibling").siblings().addClass("click-active-sibling");

        var selectedindex = $(this).index();

        var $data = $(".selectedtab .sql-righttab");

        $data.children().eq(selectedindex).addClass("click-active").attr('tabindex', '0').siblings().removeClass("click-active").attr('tabindex', '-1');
        $data.children().eq(selectedindex).removeClass("click-active-sibling").siblings().addClass("click-active-sibling");
        SetJcarouselWidth();

        /*Accessibility fix Start*/

        //  $data.children().eq(selectedindex).find('a.mscom-link:first').focus();
        // $data.children().eq(selectedindex).find('a:last').keydown(function (e) {
        //     if (!(e.shiftKey) && e.keyCode == 9) {
        //         $('.sql-lefttab .sql-accordion-tab-list').children().eq(selectedindex).attr('tabindex', '0').focus();
        //     }
        // });

        /*Accessibility fix End*/


    });

    $(document).on("click", ".sql-RightNavTab .selected-tabitem", function (e) {
        e.preventDefault();
        enableScroll();
        var height = $(this).height();
        var paddingvalue = $(this).css("padding-top");
        paddingvalue = paddingvalue.replace("px", "");
        paddingvalue = parseInt(paddingvalue);
        var topvalue = height + paddingvalue;
        $(this).parent().find(".sql-accordion-tab-list").css("top", topvalue + "px");
        $(this).parent().find(".sql-accordion-tab-list").animate({
            height: "toggle"
        }, 500);
    });

    $(document).on('mouseenter', '.sql-RightNavTab .sql-accordion-tab-list ul li', function () {
        $(this).trigger('click', ["explicit"]);
        $(".sql-accordion-tab-list").css("display", "block");
        SetJcarouselWidth();
    });

    $(document).on('mouseleave', '.sql-RightNavTab .sql-accordion-tab-list ul li', function () {
        if (!$(this).hasClass('click-actual')) {
            $(this).removeClass('click-active');
            $('.click-actual').addClass('click-active');
            $('.click-actual').trigger('click');
        }
        SetJcarouselWidth();
    });

    $(document).on('keydown', '.sql-RightNavTab ul li', function (e) {
        var _currentEle;
        var _currentDataIndex;
        var _tablength;
        /*Left & up arrows*/
        if (e.keyCode == 37 || e.keyCode == 38) {
            e.preventDefault();
            disableScroll();
            _currentEle = e.currentTarget;
            _tablength = $(".sql-RightNavTab .sql-accordion-tab-list ul li").length;
            _currentDataIndex = $(_currentEle).attr('data-index');
            $(".sql-RightNavTab .sql-accordion-tab-list ul li[data-index=" + _currentDataIndex + "]").prev().focus();
            //$(".sql-RightNavTab .sql-accordion-tab-list ul li[data-index=" + _currentDataIndex + "]").prev().siblings().attr('aria-selected', 'false');
            if (_currentDataIndex == 0) {
                $(".sql-RightNavTab .sql-accordion-tab-list ul li:last").focus();
            }
        }

        /*Right & down arrows*/
        if (e.keyCode == 39 || e.keyCode == 40) {
            e.preventDefault();
            disableScroll();
            _currentEle = e.currentTarget;
            _tablength = $('.sql-RightNavTab .sql-accordion-tab-list ul li').length - 1;
            _currentDataIndex = $(_currentEle).attr('data-index');

            $(".sql-RightNavTab .sql-accordion-tab-list ul li[data-index=" + _currentDataIndex + "]").next().focus();
            //$(".sql-RightNavTab .sql-accordion-tab-list ul li[data-index=" + _currentDataIndex + "]").next().siblings().attr('aria-selected', 'false');
            $(".sql-RightNavTab .sql-righttab").children().eq(_currentDataIndex).attr('tabindex', '0').siblings().attr('tabindex', '-1');

            if (_currentDataIndex == _tablength) {
                $(".sql-RightNavTab .sql-accordion-tab-list ul li:first").focus();
            }

        }

        if (e.keyCode == 13 || e.keyCode == 32) {
            enableScroll();
            _currentEle = e.currentTarget;
            _currentDataIndex = $(_currentEle).attr('data-index');
            $(".sql-RightNavTab ul li[data-index=" + _currentDataIndex + "]").find('a').trigger('mouseenter').attr('aria-selected', 'true');
            $(".sql-RightNavTab ul li[data-index=" + _currentDataIndex + "]").siblings().find('a').attr('aria-selected', 'false');
        }
    });

    $('#CP_RightNavTab_1 .sql-accordion-tab-list a.tab-item').each(function () {
        $(this).attr('aria-label', $(this).find('.texting').text().trim());
    });
});

$(window).load(function () {

    $(".sql-RightNavTab").each(function () {
        $(this).find("p.c-paragraph-3").each(function () {
            if ($(this).text() == "") {
                $(this).remove();
            }
        });

        $(this).find('.sql-righttab .tab-panel-item').siblings().attr('tabindex', '-1');
        $(this).find('.sql-righttab .tab-panel-item:first').attr('tabindex', '0');
    });

    var _dataIndex = $('.sql-RightNavTab .sql-accordion-tab-list ul li').length;
    for (var i = 0; i < _dataIndex; i++) {
        $('.sql-RightNavTab .sql-accordion-tab-list ul li').eq(i).attr('data-index', i);

        if (navigator.userAgent.toLowerCase().indexOf('edge') != -1) {
            //$('.sql-RightNavTab .sql-accordion-tab-list').attr('aria-label','Navigate using up and down arrow keys');
            $('.sql-RightNavTab .sql-accordion-tab-list ul li').children().attr('role', 'tab');
            $('.sql-RightNavTab .sql-accordion-tab-list ul li').eq(i).children().attr('aria-selected', "false");
            $('.sql-RightNavTab .sql-accordion-tab-list ul li:first').children().attr('aria-selected', "true");
        }

    }
    if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
        $('.sql-RightNavTab .ms-grid.full').attr('tabindex', '-1');
        $('.sql-RightNavTab .sql-accordion-tab-list').attr('role', 'region');
    }

});

$(document).ready(function () {
    try {
        //carouselComponentFCT();
        liheightcalc();

        $(window).resize(function () {
            // carouselComponentFCT();
            liheightcalc();
        });
    } catch (e) { }
});
/** DIV line-height**/

function liheightcalc() {

    var jcarousel = $('.sql-RightNavTab .main-class .sql-righttab');

    jcarousel.each(function () {
        contentSetHeight(($(this).find('li')), '.textcontent');
        contentSetHeight(this, '.tab-panel-item');

    });
}

function contentSetHeight(parenttag, tag) {

    var $listItemHeight = $(parenttag).find(tag);
    var minHeight = 0;
    $listItemHeight.css("min-height", 0 + "px");
    $listItemHeight.each(function () {
        if (minHeight < $(this).outerHeight()) {
            minHeight = $(this).outerHeight();
            //console.log("thishll",minHeight+""+$listItemHeight);
        } else {
            // $listItemHeight.css("min-height", "auto");
            minHeight = minHeight;
        }
    });
    $($listItemHeight).css("min-height", minHeight + "px");
}
/** DIV line-height**/


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
                if (navigator.userAgent.toLowerCase().indexOf('edge') > 0 || navigator.userAgent.toLowerCase().indexOf("trident") > 0) {
                    setTimeout(function () {
                        $('#accessible_expand_collapse').text = "";
                        $('#accessible_expand_collapse').attr('aria-hidden', 'true');
                    }, 1000);
                }
                else {
                    $('#accessible_expand_collapse').text('collapsed');
                    //  $('#accessible_expand_collapse').attr('aria-hidden', 'false');
                    setTimeout(function () {
                        $('#accessible_expand_collapse').text('');
                        $('#accessible_expand_collapse').attr('aria-hidden', 'true');
                    }, 500);
                }

            }
            else {
                $(sqlheader).removeClass("bg-right-arrow-" + bgArrowColor).addClass("bg-down-arrow-" + bgArrowColor);
                if (navigator.userAgent.toLowerCase().indexOf('edge') > 0 || navigator.userAgent.toLowerCase().indexOf("trident") > 0) {
                    setTimeout(function () {
                        $('#accessible_expand_collapse').text = "";
                        $('#accessible_expand_collapse').attr('aria-hidden', 'true');
                    }, 1000);
                }
                else {
                    $('#accessible_expand_collapse').text('expanded');
                    // $('#accessible_expand_collapse').attr('aria-hidden', 'false');
                    setTimeout(function () {
                        $('#accessible_expand_collapse').text('');
                        $('#accessible_expand_collapse').attr('aria-hidden', 'true');
                    }, 500);
                }

            }
            // setTimeout(function () {
            //     $('#accessible_expand_collapse').attr('aria-hidden', 'true');
            // }, 3000);

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
        console.log(error.message);
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
        console.log(err)
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

    } catch (e) { }
});

function lpchatfun() {
    //          if($("#lpChatButton img").not(".showing").css("visibility","hidden"))
    if ($("#lpChatButton button").hasClass("showing")) {
        $("#lpChatButton button").css("visibility", "visible");
    }
    else {
        $("#lpChatButton button").css("visibility", "hidden");
    }
    //  if($("#lpChatButton img").not("showing"))         
    var link3Width = Number($("#lpChatButton button").outerHeight());
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
            $("#lpChatButton button").css("visibility", "visible");
            $("#lpChatButton button").addClass("showing")
            if ($('#lpChatButton').children().length == 0) {

                /*346326*/
                $(".fixed-support-links ul li.static-support-links-3").hide().attr('aria-hidden', 'true');
                $(".fixed-support-links ul li.static-support-links-3 button").attr('role', 'presentation');
                $(".fixed-support-links ul li.static-support-links-3").remove();
            } else {
                $(".fixed-support-links ul li.static-support-links-3").show();

                lpchatfun();
                $(".fixed-support-links ul li button.showing").on("focus", function () {
                    $(this).closest('li').addClass("right-zero");
                    $(this).closest('li').css('outline', '2px dashed #fff');
                });
                $(".fixed-support-links ul li button.showing").on("blur", function () {
                    $(this).closest('li').removeClass("right-zero");
                    $(this).closest('li').css('outline', '0');
                });
            }

        }, 2000);
        $(".sql-five-pillar-overlay-content-1 .pillar-item .pillar-popup").each(function () {
            $(this).find("a.pillar-close-button").on("keydown", function (e) {
                if (e.keyCode == 9) {
                    $(".sql-five-pillar-overlay-content-1 .pillar-item[data-active='true'] .pillar-popup .body-alt .link ul.stacked li:first-child a").focus();
                    e.preventDefault();
                }
            });
            $(this).find("a.pillar-close-button").on("keydown", function (e) {
                if (e.shiftKey && e.keyCode == 9) {
                    $(".sql-five-pillar-overlay-content-1 .pillar-item[data-active='true'] .pillar-popup .body-alt .link ul.stacked li:last-child a").focus();
                    e.preventDefault();
                }
            });
            $(this).find(".body-alt .link ul.stacked li:first-child a").on("keydown", function (e) {
                if (e.shiftKey && e.keyCode == 9) {
                    $(".sql-five-pillar-overlay-content-1 .pillar-item .pillar-popup a.pillar-close-button").focus();
                    e.preventDefault();
                }
            });
        });
        $(".sql-five-pillar-overlay-content-1 .pillar-item").each(function () {

            $(this).find(".pillar-content a.c-call-to-action").on("keypress", function (e) {
                $(".sql-five-pillar-overlay-content-1 .pillar-item .pillar-content a.c-call-to-action").removeClass("active");
                if (e.keyCode == 13) {
                    $(this).addClass("active");
                }
            });
            $(this).find("a.pillar-close-button").on("keydown", function (e) {
                if (e.keyCode == 13) {
                    setTimeout(function () {
                        $(".sql-five-pillar-overlay-content-1 .pillar-item .pillar-content a.c-call-to-action.active").focus();
                        // e.preventDefault();
                        $(".sql-five-pillar-overlay-content-1 .pillar-item .pillar-content a.c-call-to-action.active").removeClass("active");
                    }, 300);
                }
            });
        });
    } catch (e) { }
});

/**********END OF CP_StaticSupportLinks.js **********/



// Fixing parallax issue on IE and Edge
$(document).ready(function () {
    try {
        if (navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/)) {
            //  console.log('ie');
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
    } catch (e) { }
});


/**static menu width */
$(document).ready(function () {
    if ($.browser.msie) {
        wwidth = $(window).width();
    } else {
        wwidth = $(window).width() + 17;
    }
    /*Setting liwidth based on childelements*/
    try {
        childcount = $("#static_menu_1").children().length;

        var grid = 24;
        var widthclass = "";
        var splitwidth = grid / childcount;
        if ((grid % childcount) == 0) {
            widthclass = "s-col-" + splitwidth + "-24";
        } else {
            splitwidth = childcount;
            widthclass = "nb col-1-" + splitwidth;
        }
        $("#static_menu_1").children("li").addClass(widthclass);




    } catch (err) {
        console.log(err);
    }


});

function stickynavslick() {
    var dirrtl = false;

    var count = 6;
    if ($('#static_menu_1').children().length < 6) {
        count = $('#static_menu_1').children().length;
    }
    if ($("body").hasClass("rtl")) {
        dirrtl = true;
    }
    $('#static_menu_1').slick({
        rtl: dirrtl,
        slidesToShow: count,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,

        responsive: [{
            breakpoint: 1084,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: false
            }
        }
        ]
    });

    $("#static_menu_1 .slick-slider .slick-next,#static_menu_1 .slick-slider .slick-prev").text("");


}
$(document).on("click", "#static_menu_1 .slick-arrow", function () {
    $("#static_menu_1 .slick-current").find("a")[0].click();

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
        if ($("#static_menu_1").length > 0) {
            stickynavslick();
            stickynavheight();
        }
    } catch (err) { }

});

$(window).resize(function () {
    try {
        if ($("#static_menu_1").length > 0) {

            stickynavheight();
        }

    } catch (err) {

    }

});

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
    var icon = $('.selectedacctab-section').find("button");

    icon.toggleClass("bg-right-arrow-black bg-down-arrow-black");
    if ($('.mobile_table_header').attr('tabindex') == "-1") {
        $('.mobile_table_header').attr({
            'tabindex': '0',
            'aria-hidden': 'false'
        });
        $('.subitems').attr('aria-hidden', 'false');
    } else {
        $('.mobile_table_header').attr({
            'tabindex': '-1',
            'aria-hidden': 'true'
        });
        $('.subitems').attr('aria-hidden', 'true');
    }
});

//Start SQL_3VS4VS5VSAnalysis component 
$(document).ready(function () {
    try {
        var childCount = $(".SQL_3Vs4Vs5VsAnalysis_1 .thumbnail-list").children().length;
        if (childCount == 5) {
            $(".SQL_3Vs4Vs5VsAnalysis_1 .thumbnail-list").children().addClass("l-col-1-5 m-col-1-3 s-col-1-3 xs-col-1-1");
        } else if (childCount == 4) {
            $(".SQL_3Vs4Vs5VsAnalysis_1 .thumbnail-list").children().addClass("l-col-1-4 m-col-1-2 s-col-1-2 xs-col-1-1");
        } else if (childCount == 3) {
            $(".SQL_3Vs4Vs5VsAnalysis_1 .thumbnail-list").children().addClass("l-col-1-3 m-col-1-3 s-col-1-3 xs-col-1-1");
        }
    } catch (err) {

    }
});

/*SQL_5PillarsOverlayContent.js*/
$(document).ready(function () {
    try {
        var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
        forEach(document.querySelectorAll('.sql-five-pillar-overlay-content-1'), function (componentNode) {

            var itemNodes = $('.pillar-item');
            var DESKTOP = 1084;
            var TABLET = 768;
            var MOBILE = 540;
            var activeIndex = 0;
            var isActive = false;
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
                }

                if (event.target.className && event.target.className.indexOf('pillar-close-button') >= 0) {

                    forEach(itemNodes, function (subItemNode) {
                        subItemNode.removeAttribute('data-active');
                        event.preventDefault();
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
                    itemNode.style.height = maxHeight + 7 + 'px';
                });
            };

            forEach(itemNodes, function (itemNode, index) {
                itemNode.onclick = function (event) {
                    // event.preventDefault();
                    activeIndex = index;
                    if (!$(itemNode).hasClass("disable-popup"))
                        itemClick(event);
                };
                itemNode.onkeypress = function (event) {
                    if (event.keyCode == 13) {
                        // event.preventDefault();
                        activeIndex = index;
                        if (!$(itemNode).hasClass("disable-popup"))
                            itemClick(event);
                    }
                };
            });

            window.addEventListener('resize', function (event) {
                var fivePillar = $(".sql-five-pillar-overlay-content-1 .pillar-list .pillar-item .pillar-content ");
                maxHeight(fivePillar);
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



/***threecolumnswithcopymobileslick */
function threecolslick() {
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
    if (wwidth <= 539) {
        $(".three-col-slick").each(function () {
            if (!$(this).hasClass("slick-slider")) {
                $(this).slick({

                    dots: true,
                    rtl: dirrtl,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false
                });

            }
        });
    }
}
$(document).ready(function () {
    try {
        if ($(".three-col-slick").length > 0) {
            threecolslick();
        }

        $(".cp-three-columns-with-copy").each(function () {
            if ($(this).find(".top-content").children().length < 1) {
                $(this).find(".top-content").css("display", "none");
            }
        });
        $(".cp-five-columns-with-copy").each(function () {
            if ($(this).find(".top-content").children().length < 1) {
                $(this).find(".top-content").css("display", "none");
            }
        });
    } catch (err) {

    }

});

$(window).resize(function () {
    try {
        if ($(".three-col-slick").length > 0) {
            threecolslick();
        }
    } catch (err) {

    }

});


/**fivecolums copy slick carousel */
function fivecolumnCopywithSlick() {
    try {
        var dirrtl = false;
        if ($("body").hasClass("rtl")) {
            dirrtl = true;
        }
        if ($(".fivecol-slick").length > 0) {
            $(".fivecol-slick").each(function () {
                $(this).slick({

                    dots: true,
                    rtl: dirrtl,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    adaptiveHeight: false
                });
            });
        }
    } catch (er) {

    }
}
$(document).ready(function () {
    fivecolumnCopywithSlick();
});


/**********Start Height calc for CP_FiveColumnsWithCopy_1 component **********/

var child_element_height = function ($parent, $child) {
    var maxHeight = 0;
    $parent.find($child).css("height", "auto");
    $parent.find($child).each(function () {
        var cHeight = $(this).outerHeight();
        maxHeight = (maxHeight > cHeight) ? maxHeight : cHeight;
        // console.log(maxHeight);

    });
    $parent.find($child).css("height", maxHeight);

}

$(document).ready(function () {
    fiveColCopyChildHeight();
    threeColCopyChildHeight();
});

$(window).resize(function () {
    fiveColCopyChildHeight();
    threeColCopyChildHeight();
});

function fiveColCopyChildHeight() {

    if ($(".cp-five-columns-with-copy").length > 0) {
        $(".cp-five-columns-with-copy").each(function () {
            $(this).find(".row-non-carousel").addClass("rowparent");
            $(this).find("h3").addClass("hheight");
            $(this).find("p").addClass("pheight");
            if ($(".hheight").length > 0) {
                child_element_height($(".rowparent"), $(".hheight"));
            }
            if ($(".pheight").length > 0) {
                child_element_height($(".rowparent"), $(".pheight"));
            }
            $(".hheight").removeClass("hheight");
            $(".pheight").removeClass("pheight");
            $(".rowparent").removeClass("rowparent");

        });

    }
}

function threeColCopyChildHeight() {

    if ($(".cp-three-columns-with-copy").length > 0) {
        $(".cp-three-columns-with-copy").each(function () {
            $(this).find(".row-non-carousel").addClass("throwparent");
            if ($(this).find("h3.col-headline").html() == "") {
                $(this).find("h3.col-headline").remove();
            }
            $(this).find("h3.col-headline").addClass("pheight");
            $(this).find(".col-content p").addClass("paraheight");
            if ($(".pheight").length > 0) {
                child_element_height($(".throwparent"), $(".pheight"));
            }
            if ($(".paraheight").length > 0) {
                child_element_height($(".throwparent"), $(".paraheight"));
            }
            $(".paraheight").removeClass("paraheight");
            $(".pheight").removeClass("pheight");
            $(".throwparent").removeClass("throwparent");

        });

    }
}

/**********End Height calc for IOT_FiveColumnsWithCopy_1 component **********/


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


/*--------START of SQL_FourColWithCopy-----------*/
$(document).ready(function () {
    $('.fourcol-accordion-tabs .tabControls-main .tabControls .accordion-section .overlay').click(function (e) {
        e.preventDefault();
        if (($(this).hasClass('active')) == true) {
            $(this).removeClass('active');
            $(".accordion-section-content .tabdata-container").removeClass('open');
        } else {
            $('.overlay').removeClass('active');
            $(this).addClass('active');
            $(".accordion-section-content").css('display', 'inline-block');
            var imgindex = $(this).parents('.accordion-section').index();
            $('.accordion-section-content .tabdata-container').eq(imgindex).addClass('open').siblings().removeClass('open');
        }
        //Accessibility bug 339030
        $("#SQL_FourColwithImageText .accordion-section .accordion-section-img").each(function () {
            console.log('expanded');
            $(this).attr('role', 'button');
            if ($(this).parents('.overlay').hasClass("active")) {
                $(this).attr("aria-expanded", "true");
            }
            if (($(this).parents('.overlay').hasClass("active")) == false) {
                $(this).attr("aria-expanded", "false");
            }
        });

    });
    //close button
    $(".accordion-section-content .tabdata-container").find('.closebutton').click(function (e) {
        e.preventDefault();
        $(".accordion-section-content .tabdata-container").slideUp(0).removeClass("open");
        $(".accordion-section .overlay").removeClass("active");
        $(".accordion-section-img").attr('aria-expanded', 'false');

    });

    //slick carousel for li items
    $('.fourcol-accordion-tabs .tabControls-main .tabControls').slick({
        infinite: false,
        speed: 300,
        swipe: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1084,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 0
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        {
            breakpoint: 539,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
        }
        ]
    });


});

function nextButtonClick() {
    var activetab = $('.overlay.active');
    if (($(activetab).parents('.accordion-section ').hasClass('slick-active')) == false) {
        if ($('.accordion-section-content .tabdata-container').hasClass('open') == true) {
            $('.overlay').removeClass('active');
            $('.accordion-section-img').attr("aria-expanded", "false");
            $('.accordion-section-content .tabdata-container').removeClass('open');
            $(activetab).parents('.accordion-section').next().find('.overlay').addClass('active').find('.accordion-section-img').attr("aria-expanded", "true").focus();
            var activedata_index = $(activetab).parents('.accordion-section').index();
            $(".accordion-section-content").css('display', 'inline-block');
            $('.accordion-section-content .tabdata-container').eq(activedata_index + 1).addClass('open').siblings().removeClass('open');

        }
    }
}

function prevButtonClick() {
    var activetab = $('.overlay.active');
    if (($(activetab).parents('.accordion-section ').hasClass('slick-active')) == false) {
        if ($('.accordion-section-content .tabdata-container').hasClass('open') == true) {
            $('.overlay').removeClass('active');
            $('.accordion-section-img').attr("aria-expanded", "false");
            $('.accordion-section-content .tabdata-container').removeClass('open');
            $(activetab).parents('.accordion-section').prev().find('.overlay').addClass('active').find('.accordion-section-img').attr("aria-expanded", "true").focus();
            var activedata_index = $(activetab).parents('.accordion-section').index();
            $(".accordion-section-content").css('display', 'inline-block');
            $('.accordion-section-content .tabdata-container').eq(activedata_index - 1).addClass('open').siblings().removeClass('open');
        }
    }
}


setInterval(function () {
    $('#SQL_FourColwithImageText .slick-next').on('click', function () {
        nextButtonClick();
    });
    $('#SQL_FourColwithImageText .slick-prev').click(function () {
        prevButtonClick();
    });
}, 50);

$(window).resize(function () {
    var wwidth = $(window).width();
    if (wwidth >= 540) {
        $('.overlay').removeClass('active');
        if (($('.overlay.active').parents('.accordion-section ').hasClass('slick-active')) == false) {
            $('li.accordion-section').find('.overlay').eq(0).addClass("active");
            $("#SQL_FourColwithImageText .slick-prev.slick-arrow").click();
            $("#SQL_FourColwithImageText .slick-prev.slick-arrow").click();
            $("#SQL_FourColwithImageText .slick-prev.slick-arrow").click();
            $('#SQL_FourColwithImageText .accordion-section-content .tabdata-container').eq(0).addClass('open').siblings().removeClass('open');
        }
    }
});

/*--------END of SQL_FourColWithCopy-----------*/

/* --- TEMPORARY FIX FOR SQL_CarouselTabsImage Object-fit on EDGE and IE --- */
/* --- WILL BE REMOVED LATER --- */
var objectFitImages = function () {
    "use strict";

    function t(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
    }

    function e(t) {
        if (t.srcset && !p && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                reselect: !0
            }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                reselect: !0
            })), t.currentSrc = t[e.ns].curSrc || t.src
        }
    }

    function i(t) {
        for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));) r[e[1]] = e[2];
        return r
    }

    function r(e, i, r) {
        var n = t(i || 1, r || 0);
        b.call(e, "src") !== n && h.call(e, "src", n)
    }

    function n(t, e) {
        t.naturalWidth ? e(t) : setTimeout(n, 100, t, e)
    }

    function c(t) {
        var c = i(t),
            o = t[l];
        if (c["object-fit"] = c["object-fit"] || "fill", !o.img) {
            if ("fill" === c["object-fit"]) return;
            if (!o.skipTest && f && !c["object-position"]) return
        }
        if (!o.img) {
            o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                s(t)
            } catch (t) {
                window.console && console.log("http://bit.ly/ofi-old-browser")
            }
        }
        e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", /scale-down/.test(c["object-fit"]) ? n(o.img, function () {
            o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) {
            r(t, e.naturalWidth, e.naturalHeight)
        })
    }

    function s(t) {
        var e = {
            get: function (e) {
                return t[l].img[e ? e : "src"]
            },
            set: function (e, i) {
                return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e
            }
        };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
            get: function () {
                return e.get("currentSrc")
            }
        }), Object.defineProperty(t, "srcset", {
            get: function () {
                return e.get("srcset")
            },
            set: function (t) {
                return e.set(t, "srcset")
            }
        })
    }

    function o() {
        function t(t, e) {
            return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t
        }
        d || (HTMLImageElement.prototype.getAttribute = function (e) {
            return b.call(t(this, e), e)
        }, HTMLImageElement.prototype.setAttribute = function (e, i) {
            return h.call(t(this, e), e, String(i))
        })
    }

    function a(t, e) {
        var i = !y && !t;
        if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1;
        "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var r = 0; r < t.length; r++) t[r][l] = t[r][l] || {
            skipTest: e.skipTest
        }, c(t[r]);
        i && (document.body.addEventListener("load", function (t) {
            "IMG" === t.target.tagName && a(t.target, {
                skipTest: e.skipTest
            })
        }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    var l = "bfred-it:object-fit-images",
        u = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        g = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        f = "object-fit" in g.style,
        d = "object-position" in g.style,
        m = "background-size" in g.style,
        p = "string" == typeof g.currentSrc,
        b = g.getAttribute,
        h = g.setAttribute,
        y = !1;
    return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a
}();

/*Min height calculation for 3Vs4Vs5VsAnalaysis component*/
function Sql3Vs4Vs5VsAnalysis_thumbnail_minHeight() {
    try {
        $(".SQL_3Vs4Vs5VsAnalysis_1").each(function () {
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
    } catch (e) { }
}

$(document).ready(function () {

    Sql3Vs4Vs5VsAnalysis_thumbnail_minHeight();
});
$(window).resize(function () {
    setTimeout(function () {

        Sql3Vs4Vs5VsAnalysis_thumbnail_minHeight();
    }, 200);
});
// sidecopywith column
$(document).ready(function () {
    $('#SQL_SideCopywithColumns_2 h6').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    })
});


function SetJcarouselWidth() {
    try {
        setTimeout(function () {
            $(".Tab-carousel").each(function () {
                var wWidth = $(this).width();
                $(this).parent().addClass("main-right-nav-carousel");
                var maindiv = $(".main-right-nav-carousel");
                var carouselElement = $(this).find("ul.sliding");
                var carouselElementChildLength = carouselElement.children().length;
                var activeslide = carouselElement.find("li.active").index();
                var desktopElement = 2;
                var tabletElement = 1;
                var mobileElement = 1;
                var carouselCount = 1;
                if (window.matchMedia("(max-width: 539px)").matches) {
                    if (carouselElementChildLength >= mobileElement) {
                        carouselCount = mobileElement;

                        carouselElement.eq(activeslide).siblings().attr('aria-hidden', 'true').find('.textcontent a').attr('tabindex', '-1');


                    } else {
                        maindiv.find(".jcarousel-control-prev").hide();
                        maindiv.find(".jcarousel-control-next").hide();
                    }
                    setTimeout(function () {
                        if (activeslide == 0) {
                            maindiv.find(".jcarousel-control-next").css("opacity", "1");
                            maindiv.find(".jcarousel-control-next").css("cursor", "pointer");
                            maindiv.find(".jcarousel-control-prev").css("opacity", "0.5");
                            maindiv.find(".jcarousel-control-prev").css("cursor", "default");
                            maindiv.find(".jcarousel-control-prev").attr('aria-disabled', 'true');
                        } else if (activeslide == (carouselElementChildLength - 1)) {
                            maindiv.find(".jcarousel-control-prev").css("opacity", "1");
                            maindiv.find(".jcarousel-control-prev").css("cursor", "pointer");
                            maindiv.find(".jcarousel-control-next").css("opacity", "0.5");
                            maindiv.find(".jcarousel-control-next").css("cursor", "default");
                        } else {
                            maindiv.find(".jcarousel-control-next").css("opacity", "1");
                            maindiv.find(".jcarousel-control-next").css("cursor", "pointer");
                            maindiv.find(".jcarousel-control-prev").css("opacity", "1");
                            maindiv.find(".jcarousel-control-prev").css("cursor", "pointer");
                        }
                    }, 100);
                }
                /** calculating no of elements to display */
                else if (window.matchMedia("(max-width: 767px)").matches && window.matchMedia("(min-width: 540px)")) {
                    if (carouselElementChildLength >= tabletElement) {
                        carouselCount = tabletElement;

                        carouselElement.children('li').eq(activeslide).siblings().attr('aria-hidden', 'true').find('.textcontent a').attr('tabindex', '-1');

                    } else {
                        maindiv.find(".jcarousel-control-prev").hide();
                        maindiv.find(".jcarousel-control-next").hide();
                        carouselElement.children('li').eq(activeslide).next().attr('aria-hidden', 'false').find('.textcontent a').attr('tabindex', '0');
                    }
                    if (activeslide == (carouselElementChildLength - 1)) {
                        maindiv.find(".jcarousel-control-next").css("opacity", "0.5");
                        maindiv.find(".jcarousel-control-next").css("cursor", "default");
                    } else {
                        maindiv.find(".jcarousel-control-next").css("opacity", "1");
                        maindiv.find(".jcarousel-control-next").css("cursor", "pointer");
                    }

                }
                if (window.matchMedia("(min-width: 768px)").matches) {
                    if (carouselElementChildLength >= desktopElement) {
                        carouselCount = desktopElement;

                        carouselElement.children('li').eq(activeslide).siblings().attr('aria-hidden', 'true').find('.textcontent a').attr('tabindex', '-1');

                        if (activeslide == (carouselElementChildLength - 1)) {
                            activeslide--;
                            carouselElement.children().eq(activeslide).addClass("active").siblings().removeClass("active");
                            maindiv.find(".jcarousel-control-next").css("opacity", "0.5");
                            maindiv.find(".jcarousel-control-next").css("cursor", "default");
                        } else {
                            carouselElement.children('li').eq(activeslide).next().attr('aria-hidden', 'false').find('.textcontent a').attr('tabindex', '0');
                        }
                    } else {
                        maindiv.find(".jcarousel-control-prev").hide();
                        maindiv.find(".jcarousel-control-next").hide();
                    }

                }

                if (carouselCount == carouselElementChildLength) {
                    maindiv.find(".jcarousel-control-prev").hide();
                    maindiv.find(".jcarousel-control-next").hide();
                } else {
                    maindiv.find(".jcarousel-control-prev").show();
                    maindiv.find(".jcarousel-control-next").show();
                }
                $(this).attr("data-carousel-count", carouselCount);
                var setwidth = wWidth / carouselCount;
                carouselElement.children().css("min-width", setwidth);
                carouselElement.children().css("max-width", setwidth);
                var leftValue = -(activeslide * setwidth);
                if ($("body").hasClass("rtl")) {
                    carouselElement.animate({
                        right: leftValue
                    }, 50);
                } else {
                    carouselElement.animate({
                        left: leftValue
                    }, 50);
                }
            });
            $(".main-right-nav-carousel").removeClass("main-right-nav-carousel");
        }, 10);
    } catch (e) {
        console.log("error" + e)
    }
}
$(document).on("click", ".jcarousel-control-next", function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    try {
        $(this).parents().closest(".RightNavTab-carousel").addClass("current-righttab-carousel");
        var currentparent = $(".current-righttab-carousel").find(".Tab-carousel");
        var carouselCount = currentparent.attr("data-carousel-count");
        var carouselEle = currentparent.find("ul.sliding");
        var Elewidth = carouselEle.children().eq(0).outerWidth();
        var EleLength = carouselEle.children().length;
        var activelement = carouselEle.find("li.active").index();
        if (activelement < (EleLength - carouselCount)) {
            activelement++;
            carouselEle.children().removeClass("active");

            carouselEle.children().eq(activelement).addClass("active").attr('aria-hidden', 'false');
            carouselEle.children().eq(activelement).siblings().attr('aria-hidden', 'true').find('.textcontent a').attr('tabindex', '-1');
            carouselEle.children().eq(activelement).next().attr('aria-hidden', 'false');
            carouselEle.children().eq(activelement).next().find('.textcontent a').attr('tabindex', '0');

            if (carouselEle.hasClass("accordion-slide-carousel")) {
                $(".desktop-slide-carousel").children().removeClass("active");
                $(".desktop-slide-carousel").children().eq(activelement).addClass("active").attr('aria-hidden', 'false');
            } else {
                $(".accordion-slide-carousel").children().removeClass("active");
                $(".accordion-slide-carousel").children().eq(activelement).addClass("active");
            }
            var leftValue = -(activelement * Elewidth);
            if ($("body").hasClass("rtl")) {
                carouselEle.animate({
                    right: leftValue
                }, 50);
            } else {
                carouselEle.animate({
                    left: leftValue
                }, 50);
            }
            $(this).css("opacity", "1")
            $(this).css("cursor", "pointer");
            $(".current-righttab-carousel").find(".jcarousel-control-prev").css("opacity", "1");
            $(".current-righttab-carousel").find(".jcarousel-control-prev").css("cursor", "pointer");
            $(".current-righttab-carousel").find(".jcarousel-control-prev").attr('aria-label', 'view previous slide');
        }
        if (activelement == (EleLength - carouselCount)) {
            $(this).css("opacity", "0.5");
            $(this).css("cursor", "default");
            $(this).attr('aria-label', 'next disabled');
            $(".current-righttab-carousel").find(".jcarousel-control-prev").css("opacity", "1");
            $(".current-righttab-carousel").find(".jcarousel-control-prev").css("cursor", "pointer");
            $(".current-righttab-carousel").find(".jcarousel-control-prev").attr('aria-label', 'view previous slide');
        }
        $(".current-righttab-carousel").removeClass("current-righttab-carousel");
    } catch (e) { }
});

$(document).on("click", ".jcarousel-control-prev", function (e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    try {

        $(this).parents().closest(".RightNavTab-carousel").addClass("current-righttab-carousel");
        var currentparent = $(".current-righttab-carousel").find(".Tab-carousel");

        var carouselEle = currentparent.find("ul.sliding");
        var Elewidth = carouselEle.children().eq(0).outerWidth();

        var activelement = carouselEle.find("li.active").index();
        if (activelement > 0) {
            activelement--;
            carouselEle.children().removeClass("active");
            carouselEle.children().eq(activelement).addClass("active").attr('aria-hidden', 'false');
            carouselEle.children().eq(activelement).siblings().attr('aria-hidden', 'true').find('.textcontent a').attr('tabindex', '-1');
            carouselEle.children().eq(activelement).next().attr('aria-hidden', 'false');
            carouselEle.children().eq(activelement).next().find('.textcontent a').attr('tabindex', '0');
            carouselEle.children().eq(activelement).find('.textcontent a').attr('tabindex', '0');
            if (carouselEle.hasClass("accordion-slide-carousel")) {
                $(".desktop-slide-carousel").children().removeClass("active");
                $(".desktop-slide-carousel").children().eq(activelement).addClass("active");
            } else {
                $(".accordion-slide-carousel").children().removeClass("active");
                $(".accordion-slide-carousel").children().eq(activelement).addClass("active");
            }
            var leftValue = -(activelement * Elewidth);
            if ($("body").hasClass("rtl")) {
                carouselEle.animate({
                    right: leftValue
                }, 50);
            } else {
                carouselEle.animate({
                    left: leftValue
                }, 50);
            }
            $(this).css("opacity", "1")
            $(this).css("cursor", "pointer");
            $(".current-righttab-carousel").find(".jcarousel-control-next").css("opacity", "1");
            $(".current-righttab-carousel").find(".jcarousel-control-next").css("cursor", "pointer");
            $(".current-righttab-carousel").find(".jcarousel-control-next").attr('aria-label', 'view next slide');
        }
        if (activelement == 0) {
            $(this).css("opacity", "0.5");
            $(this).css("cursor", "default");
            $(this).attr('aria-label', 'previous disabled');
            $(".current-righttab-carousel").find(".jcarousel-control-next").css("opacity", "1");
            $(".current-righttab-carousel").find(".jcarousel-control-next").css("cursor", "pointer");
            $(".current-righttab-carousel").find(".jcarousel-control-next").attr("aria-label", "view next slide");
        }
        $(".current-righttab-carousel").removeClass("current-righttab-carousel");
    } catch (e) {

    }
});

$(document).ready(function () {
    if ($(".RightNavTab-carousel:visible").length > 0) {
        $(".Tab-carousel").each(function () {
            $(this).find("ul.sliding").children().eq(0).addClass("active");
        });
        SetJcarouselWidth();
    }
});

$(window).resize(function () {
    if ($(".RightNavTab-carousel:visible").length > 0) {
        SetJcarouselWidth();
    }
});


/* Start SQL_MWF_ContentPlacement_1_VG */
$(document).ready(function () {
    ContentPlacementHeight();
    /*Table legend key Fix*/
    $('.main-table-container').each(function () {
        if ($(this).find('.terms_and_conditions fieldset').text() == "") {
            $(this).find('fieldset').remove();
        }
        if ($(this).find('.terms_and_conditions legend').text() == "") {
            $(this).find('legend').remove();
        }
    });
    /*Table legend key Fix*/
});

$(document).ready(function () {
    if ($('.CP_AccordionWithTable .terms_and_conditions fieldset').text() == "") {
        $(this).remove();
    }
    if ($('.CP_AccordionWithTable .terms_and_conditions legend').text() == "") {
        $(this).remove();
    }
});

$(window).resize(function () {
    ContentPlacementHeight();
});
var SQL_child_element_height = function ($parent, $child) {
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
    $('.sql-content-placement').each(function () {
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
            $(this).find(".content-parent").addClass("sqlrowparent");
            $(this).find(".badge-section").addClass("sheight");
            $(this).find("h3").addClass("hheight");
            $(this).find("p").addClass("pheight");
            $(this).find("div.c-group").addClass("linksheight");
            if ($(".linksheight").length > 0) {
                SQL_child_element_height($(".sqlrowparent"), $(".linksheight"));
            }
            if ($(".sheight").length > 0) {
                SQL_child_element_height($(".sqlrowparent"), $(".sheight"));
            }
            if ($(".hheight").length > 0) {
                SQL_child_element_height($(".sqlrowparent"), $(".hheight"));
            }
            if ($(".pheight").length > 0) {
                SQL_child_element_height($(".sqlrowparent"), $(".pheight"));
            }
            $(".sheight").removeClass("sheight");
            $(".bssheight").removeClass("bssheight");
            $(".hheight").removeClass("hheight");
            $(".pheight").removeClass("pheight");
            $(".linksheight").removeClass("linksheight");
            $(".sqlrowparent").removeClass("sqlrowparent");

        } else {
            $(this).find(".content-parent").css("height", "auto");
            $(this).find(".badge-section").css("height", "auto");
            $(this).find("h3").css("height", "auto");
            $(this).find("p").css("height", "auto");
            $(this).find("div.c-group").css("height", "auto");
        }
    });
}

/* End SQL_MWF_ContentPlacement_1_VG */


$(document).ready(function () {
    $(".sqlstaticmenu").each(function () {
        $(this).find("#sql_static_menu_1").children().each(function () {
            if ($(this).find("a").text() == null || $(this).find("a").text() == undefined || $(this).find("a").text() == "") {
                $(this).remove();
            }
        });
    });



    try {
        if ($('#SQL_StaticMenu').hasClass('bg-grey-d2')) {
            $('#SQL_StaticMenu').removeClass('bg-grey-d2');
            $('#SQL_StaticMenu').addClass('bg-grey-50');
        }
    } catch (e) { }
});

/*SQL-static menu*/
/********************Static-Menu*******************/

var sqlintraPageNavBar = function () {
    var $sqlintraPageNav;
    var sqlintraPageNavTopValue;
    var sqlintraPageNavBottomValue;
    var sqlintraPageNavHeight;
    var $sqlintraPageNavList;
    var $sqlintraPageNavListItems;
    var $sqlintraPageNavLinks;
    var $sqlheader;
    var $sqlfooter;
    var sqlheaderHeight;
    var $sqlbookmarks;
    var $sqlvalidIntraPageNavLinks;
    var sqlresetContainer;
    var sqlcontainerTop;
    //getting a collection of components on page
    var $componentIDs;

    function init() {

        sqlresetContainer = false;
        $sqlintraPageNav = $('#SQL_StaticMenu');
        $sqlintraPageNavList = $('#SQL_StaticMenu ul');
        $sqlintraPageNavListItems = $('#SQL_StaticMenu li');
        $componentIDs = [];

        //storing component id strings in an array
        $('div.main-content').find('[id^=CP_], [id^=SQL_]').each(function () {
            $componentIDs.push(this.id)
        });

        if ($sqlintraPageNavListItems.length == 0) {
            return;
        }
        $sqlintraPageNavLinks = $('#SQL_StaticMenu a');
        $sqlheader = $('.shell-header');
        $sqlfooter = $('.shell-footer');
        $sqlbookmarks = [];
        $sqlvalidIntraPageNavLinks = [];
        sqlintraPageNavTopValue = $sqlintraPageNav.offset().top;
        sqlintraPageNavBottomValue = $sqlintraPageNav.offset().top + $sqlintraPageNav.height();
        sqlintraPageNavHeight = $sqlintraPageNav.outerHeight();
        sqlcontainerTop = 1.2 * sqlintraPageNavHeight;
        sqlheaderHeight = $sqlheader.height();

        $sqlintraPageNav.css({
            "top": "0px",
            "padding": "0"
        });

        $sqlintraPageNavLinks.click(function (e) {
            deActivateAllNavBarLinks();
            $(this).addClass('active');
            var element_id = $(this).attr('href').trim();
            var staticMenuScroll = $('#SQL_StaticMenu').hasClass('scroll');

            if (staticMenuScroll) {
                adjustContainerPositionScroll(e, element_id, sqlintraPageNavHeight);
            } else {
                addStickyBehaviour();
                resetContainerPosition();
                adjustContainerPosition(element_id);
            }
        });
        var lastItem = $sqlintraPageNavListItems.last();
        if ($($sqlintraPageNavListItems[0]).offset().top != $(lastItem).offset().top) {
            $sqlintraPageNavList.addClass("withoutBorder");
            $sqlintraPageNavListItems.each(function (index, element) {
                $(element).addClass("withBorder");
            });
        }
        var addStickyOnPageLoad = false;
        var $currentBookmark;
        $sqlintraPageNavLinks.each(function (index, element) {
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
                        $sqlbookmarks.push($bookmark);
                        $sqlvalidIntraPageNavLinks.push(element);
                        if (!addStickyOnPageLoad && (window.location.hash.toLowerCase() == $bookmark.id.toLowerCase())) {
                            addStickyOnPageLoad = true;
                            $currentBookmark = $(id).first();

                        }
                    }
                }
            }
        });
        $(window).scroll(function () {

            if (sqlresetContainer) {
                resetContainerPosition();


            }
            if ($(window).scrollTop() > sqlintraPageNavTopValue) {
                if ($(window).scrollTop() > Math.floor($($sqlbookmarks[0].id).offset().top) - (sqlintraPageNavHeight * .75)) {

                    addStickyBehaviour();
                } else {
                    removeStickyBehaviour();

                }
            } else if ($(window).scrollTop() < Math.floor($($sqlbookmarks[0].id).offset().top) - (sqlintraPageNavHeight * 1.05)) {
                removeStickyBehaviour();

            }
            $.each($sqlbookmarks, function (index, element) {
                if (element != null && ($(window).scrollTop() >= Math.floor($(element.id).offset().top - sqlcontainerTop))) {
                    deActivateAllNavBarLinks();
                    $($sqlvalidIntraPageNavLinks[index]).addClass('active');
                }
            });
        });

        if (addStickyOnPageLoad) {

            window.scrollTo(0, Math.ceil($currentBookmark.offset().top));
        }
    }

    function deActivateAllNavBarLinks() {
        $sqlintraPageNavLinks.each(function (index, element) {
            if ($(element).hasClass('active')) {
                $(element).removeClass('active');
            }
        });
    }

    function addStickyBehaviour() {
        if (!$sqlintraPageNav.hasClass('sticky'))
            $sqlintraPageNav.addClass('sticky');
    }

    function removeStickyBehaviour() {
        if ($sqlintraPageNav.hasClass('sticky')) {
            $sqlintraPageNav.removeClass('sticky');
            $('#SQL_StaticMenu .nav-grid-container').children("div:first").css("padding-bottom", "0");
            $('#SQL_StaticMenu .nav-grid-container ul li a').removeClass('active');
        }
        deActivateAllNavBarLinks();

    }

    function adjustContainerPosition(element) {
        var tempElement = element;
        var componentIdFlag = false;
        var staticMenuId = tempElement.split('#');
        var lastElement = staticMenuId[staticMenuId.length - 1]

        for (var i = 0; i < $componentIDs.length; i++) {
            if (lastElement == $componentIDs[i]) {
                componentIdFlag = true;
                break;
            }
        }
        var _height = $('#SQL_StaticMenu').height();
        if (componentIdFlag) {
            $(element).children(":first").css("margin-top", "0px");
            $(element).find('div a:first').focus(); /*Bug: 343310*/
            $('#SQL_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");
            $(element).children(":first").css("padding-top", _height + "px");
            setTimeout(function () {
                sqlresetContainer = true;
            }, 500);
        } else {
            $(element).next().children(":first").css("margin-top", "0px");
            $(element).find('div a:first').focus(); /*Bug: 343310*/
            $('#SQL_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");
            $(element).next().children(":first").css("padding-top", _height + "px");
            setTimeout(function () {
                sqlresetContainer = true;
            }, 500);
        }
    }

    function adjustContainerPositionScroll(event, element, staticMenuPosition) {
        tempElement = element;
        var componentIdFlag = false;
        var staticMenuId = tempElement.split('#');
        var lastElement = staticMenuId[staticMenuId.length - 1];
        var $componentTarget = "";
        var componentAboveStaticMenu = "";
        var componentBelowStaticMenu = "";
        var staticMenuOriginalPosition = 0;

        for (var j = 0; j < $componentIDs.length; j++) {
            if ($componentIDs[j] == 'SQL_StaticMenu') {
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
            $componentTarget = $('a' + element).closest('div').find('[id^=CP_], [id^=SQL_]').attr('id');
        } else {
            $componentTarget = element;
        }

        var staticMenu_height = $('#SQL_StaticMenu').height();
        event.preventDefault();
        if (componentIdFlag) {
            $(element).children(":first").css("margin-top", "0px");
            $('#SQL_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");
            if ($(window).scrollTop() <= staticMenuOriginalPosition && $componentTarget == ('#' + componentBelowStaticMenu)) {
                if ($('#SQL_StaticMenu').hasClass('sticky')) {
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
                    scrollTop: (($($componentTarget).offset().top) - (staticMenu_height) + 2)
                }, 1000);
            } else if ($(window).scrollTop() < staticMenuOriginalPosition) {
                if ($('#SQL_StaticMenu').hasClass('sticky')) {
                    $('html, body').animate({
                        scrollTop: (($($componentTarget).offset().top) - (staticMenu_height) + 2)
                    }, 1000);

                } else {
                    $('html, body').animate({
                        scrollTop: (($($componentTarget).offset().top) - (staticMenu_height * 2))
                    }, 1000);
                }
            } else {
                addStickyBehaviour();
                $('html, body').animate({
                    scrollTop: (($($componentTarget).offset().top) - staticMenu_height + 2)
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
            $('#SQL_StaticMenu.sticky .nav-grid-container').children("div:first").css("padding-bottom", "1px");

            if ($(window).scrollTop() <= staticMenuOriginalPosition && $componentTarget == componentBelowStaticMenu) {
                if ($('#SQL_StaticMenu').hasClass('sticky')) {
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
                    scrollTop: (($('#' + $componentTarget).offset().top) - (staticMenu_height) + 2)
                }, 1000);
            } else if ($(window).scrollTop() < staticMenuOriginalPosition) {
                if ($('#SQL_StaticMenu').hasClass('sticky')) {
                    $('html, body').animate({
                        scrollTop: (($('#' + $componentTarget).offset().top) - (staticMenu_height) + 2)
                    }, 1000);

                } else {
                    $('html, body').animate({
                        scrollTop: (($('#' + $componentTarget).offset().top) - (staticMenu_height * 2))
                    }, 1000);
                }
            } else {
                addStickyBehaviour();
                $('html, body').animate({
                    scrollTop: (($('#' + $componentTarget).offset().top) - staticMenu_height + 2)
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
        $.each($sqlbookmarks, function (index, element) {
            $(element.id).children(":first").css("margin-top", $sqlbookmarks[index].margin);
            $(element.id).children(":first").css("padding-top", $sqlbookmarks[index].padding);
            $(element.id).next().children(":first").css("padding-top", $sqlbookmarks[index].dlpadding);
        });

        sqlresetContainer = false;

    }


    return {
        init: init
    };
}();

$(document).ready(function () {
    setTimeout(function () {
        sqlintraPageNavBar.init();
    }, 1500);
});

/********************Static-Menu*******************/
$(document).ready(function () {
    try {
        $('.case-study-col-with-links .content').each(function () {
            $(this).find("p.subheadline").each(function () {
                if ($(this).is(':empty')) {
                    $(this).remove();
                }
            });
        });
    } catch (e) {

    }
});
$(window).on("load resize", function () {
    try {
        var setHeight;
        var setParaHeight;
        var setHeadHeight;
        $(".sql-TwoCol-BGColor .column-1").css("height", "auto");
        $(".sql-TwoCol-BGColor .column-2").css("height", "auto");
        $(".sql-TwoCol-BGColor .column-1 p").css("height", "auto");
        $(".sql-TwoCol-BGColor .column-2 p").css("height", "auto");
        $(".sql-TwoCol-BGColor .column-1 .c-heading-3").css("height", "auto");
        $(".sql-TwoCol-BGColor .column-2 .c-heading-3").css("height", "auto");
        var col1_paraHeight = $(".sql-TwoCol-BGColor .column-1 p").outerHeight();
        var col2_paraHeight = $(".sql-TwoCol-BGColor .column-2 p").outerHeight();
        var head1_paraHeight = $(".sql-TwoCol-BGColor .column-1 .c-heading-3").outerHeight();
        var head2_paraHeight = $(".sql-TwoCol-BGColor .column-2 .c-heading-3").outerHeight();
        if (col1_paraHeight > col2_paraHeight) {
            setParaHeight = col1_paraHeight;
        } else {
            setParaHeight = col2_paraHeight;
        }
        $(".sql-TwoCol-BGColor .column-2 p").css("height", setParaHeight);
        $(".sql-TwoCol-BGColor .column-1 p").css("height", setParaHeight);
        if (head1_paraHeight > head2_paraHeight) {
            setHeadHeight = head1_paraHeight;
        } else {
            setHeadHeight = head2_paraHeight;
        }
        $(".sql-TwoCol-BGColor .column-2 .c-heading-3").css("height", setHeadHeight);
        $(".sql-TwoCol-BGColor .column-1 .c-heading-3").css("height", setHeadHeight);
        var col1_height = $(".sql-TwoCol-BGColor .column-1").outerHeight();
        var col2_height = $(".sql-TwoCol-BGColor .column-2").outerHeight();
        if (col1_height > col2_height) {
            setHeight = col1_height;
        } else {
            setHeight = col2_height;
        }
        $(".sql-TwoCol-BGColor .column-2").css("height", setHeight);
        $(".sql-TwoCol-BGColor .column-1").css("height", setHeight);

    } catch (err) {
        console.log(err);
    }
    MediaCarouselWithFramesIDRemove();
});

/* Task 344188 */
$(document).ready(function () {
    static_height();
});
$(window).resize(function () {
    static_height();
});

function static_height() {
    var max = 0;
    $("#SQL_StaticMenu li").each(function () {
        $(this).css('height', 'auto');
        var h = $(this).height();
        max = (max > h) ? max : h;
    });
    $("#SQL_StaticMenu li a").each(function () {
        $(this).css('height', max);
    });


}
/*344188 end*/

/*****************Marketo form script starts********************/
$(document).ready(function () {
    $(' a.open-page-popup.dual-action').on('click', function (e) {
        var linkHref = $(this).attr("href");
        window.location.href = linkHref;
    })
});
/******************Marketo form script ends********************/



// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        e.preventDefault();
        // console.log("running at 3961");
        // return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
var browserZoomLevel;
$(document).ready(function () {
    browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    $('.cp-sticky-nav .cp-sticky-nav-sub .tabs .tab').on("keypress", function (e) {
        if (e.keyCode == 9 && browserZoomLevel >= 200) {
            $(this).blur(function (e) {
                $(this).next().find("a").focus();
            });
        }
    });
    MediaCarouselWithFramesIDRemove();
});

$(window).resize(function () {
    browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    $('.cp-sticky-nav .cp-sticky-nav-sub .tabs .tab').on("keypress", function (e) {
        if (e.keyCode == 9 && browserZoomLevel >= 200) {
            $(this).blur(function (e) {
                $(this).next().find("a").focus();
            });
        }
    });
});

$(window).load(function () {
    /**Static menu width calculation */
    var el = $('#sql_static_menu_1');
    var len = el.children().length;
    if (len > 0) {
        len = 100 / len;
        el.find('li.dtc').css("width", len + "%");
        // console.log(len);
    }
    /**Static menu width calculation */
    $('.cp-sticky-nav .cp-sticky-nav-sub nav .tab').each(function () {
        $(this).find('.tab-menu').removeAttr('tabindex', '0');
    });
    $('.mobile_table_header').attr('tabindex', '-1');
});

function MediaCarouselWithFramesIDRemove() {
    $(".cp-media-carousel-with-frames .carousel-group .carousel-frame[data-carousel-position='-2'] a").removeAttr('id');
    $(".cp-media-carousel-with-frames .carousel-group .carousel-frame[data-carousel-position='-1'] a").removeAttr('id');
    $(".cp-media-carousel-with-frames .carousel-group .carousel-frame[data-carousel-position='4'] a").removeAttr('id');
    $(".cp-media-carousel-with-frames .carousel-group .carousel-frame[data-carousel-position='5'] a").removeAttr('id');
}

function maxHeight($selector) {
    var maxHeight = 0;
    var pmaxHeight = 0;
    $selector.each(function () {
        $(this).find("h3").css("height", "auto");
        var hHeight = $(this).find("h3").outerHeight();
        maxHeight = (maxHeight > hHeight) ? maxHeight : hHeight;
    });
    $selector.each(function () {
        $(this).find(">p").css("height", "auto");
        var pHeight = $(this).find(">p").outerHeight();
        pmaxHeight = (pmaxHeight > pHeight) ? pmaxHeight : pHeight;
    });
    $(".sql-five-pillar-overlay-content-1 .pillar-list .pillar-item .pillar-content h3").css("height", maxHeight);
    $(".sql-five-pillar-overlay-content-1 .pillar-list .pillar-item .pillar-content>p").css("height", pmaxHeight);
}
$(window).on("load", function () {
    var fivePillar = $(".sql-five-pillar-overlay-content-1 .pillar-list .pillar-item .pillar-content ");
    maxHeight(fivePillar);

});


/**START SQL_Subtabs*/

$(document).ready(function () {
    try {
        sqlSubTabActiveColumns();
        setSubTab();
        $(document).on("click", ".sql-tabs-container .sql-tab", function (e) {
            e.preventDefault();
            if (!$(this).hasClass("active")) {
                var tabindex = $(this).index();
                var tabtext = $(this).text();
                $(this).parents().closest(".sql-sub-tabs-holder").addClass("sql-current-sub-tab");
                $(this).parents(".sql-tabs-container").siblings().find('.sql-selected-tab').children().text(tabtext);

                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                if (window.matchMedia("(max-width: 539px)").matches) {
                    $(this).hide();
                    $(this).siblings().show();
                    $(".sql-tabs-container").slideToggle("slow");
                    $(".sql-tabs-mobile-container .sql-selected-tab").toggleClass("active");
                }
                else {
                    $(this).show();
                    $(this).siblings().show();
                    $(".sql-tabs-container").css("display", "block");
                }


                $(".sql-current-sub-tab").find(".sql-subtabs-data-container").children().removeClass("active");
                $(".sql-current-sub-tab").find(".sql-subtabs-data-container").children().eq(tabindex).fadeOut('fast', function () {
                    $(".sql-current-sub-tab").find(".sql-subtabs-data-container").children().eq(tabindex).siblings().css("display", "none");
                });
                $(".sql-current-sub-tab").find(".sql-subtabs-data-container").children().eq(tabindex).fadeIn('slow', function () {
                    $(".sql-current-sub-tab").find(".sql-subtabs-data-container").children().eq(tabindex).addClass("active");
                });
                $(".sql-current-sub-tab").removeClass("sql-current-sub-tab");
            }
            updateSubTabsUrl();
        });
        $(document).on("click", ".sql-tabs-mobile-container .sql-selected-tab", function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(".sql-tabs-container").slideToggle("slow");

        });
        if (window.matchMedia("(min-width: 540px)").matches) {
            eventSubtabsheight();
        }
    }
    catch (e) {
        console.log("error" + e);
    }
});


function setSubTab() {
    if ($(".sql-event-subtabs").length) {
        if (window.matchMedia("(min-width: 540px)").matches) {
            $(".sql-tabs-container").show();
            $(".sql-tabs-container .sql-tab").show();
        }
        else {
            $(".sql-tabs-container").hide();
            $(".sql-tabs-mobile-container .sql-selected-tab").removeClass("active");
            $(".sql-tabs-container .sql-tab.active").hide();
        }
    }
}



function sqlSubTabActiveColumns() {
    $('.sql-event-subtabs').each(function () {
        var gridcount = $(this).attr('data-grid-count');
        if (gridcount == 3) {
            $(this).find('.sql-tabs .sql-tab').each(function () {
                $(this).attr('data-grid', 'col-4');
                var tabsWidth = gridcount * 16.667 + '%';
                $(this).parent().width(tabsWidth);
            });
        }
        else if (gridcount == 4) {
            $(this).find('.sql-tabs .sql-tab').each(function () {
                $(this).attr('data-grid', 'col-3');
                var tabsWidth = gridcount * 16.667 + '%';
                $(this).parent().width(tabsWidth);
            });
        }
        else if (gridcount == 5) {
            $(this).find('.sql-tabs .sql-tab').each(function () {
                $(this).attr('data-grid', 'col-1-5');
                var tabsWidth = gridcount * 16.667 + '%';
                $(this).parent().width(tabsWidth);
            });
        }
        else if (gridcount == 6) {
            $(this).find('.sql-tabs .sql-tab').each(function () {
                $(this).attr('data-grid', 'col-2');
                var tabsWidth = gridcount * 16.667 + '%';
                $(this).parent().width(tabsWidth);
            });
        }
    });
}
$(window).resize(function () {
    setSubTab();
    sqlSubTabActiveColumns();
    if (window.matchMedia("(min-width: 540px)").matches) {
        eventSubtabsheight();
    }
    else { $(".sql-event-subtabs .sql-tab span").css('height', 'auto'); }
});

function eventSubtabsheight() {
    try {
        setTimeout(function () {
            var max_height = 0;
            $(".sql-tab span").css("height", "auto");
            $(".sql-event-subtabs .sql-tabs").find(".sql-tab").each(function () {

                var curheight = $(this).find("span").outerHeight();
                max_height = max_height > curheight ? max_height : curheight;

            });
            $(".sql-event-subtabs .sql-tab span").css("height", max_height);
        }, 100);
    } catch (err) {

    }
}

function updateSubTabsUrl() {
    var activeTab = $(".sql-event-subtabs").find(".sql-tabs-container").find(".sql-tabs .sql-tab.active").attr("data-deeplinkid").toLowerCase();
    activeTab = activeTab.replace(/[\W_]/g, '');
    var tab = activeTab;
    var tab_value = "";
    var tabvalue;
    var url = location.href;
    if (url.indexOf("#") > 0) {
        url = url.substring(url.indexOf("#"), url.length);
        tabvalue = url.split("#");
        tab_value = tabvalue[1];
    }
    if (activeTab == undefined || activeTab == "" || activeTab == null) {
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
            if (history.pushState) {
                var subupdatedurl = window.location.href;
                subupdatedurl = subupdatedurl.replace(tab_value, activeTab);
                window.history.pushState({
                    path: subupdatedurl
                }, '', subupdatedurl);
            }
        }
    }
}
function loadSubtabTab() {
    var selectedvalue;
    var url = location.href;
    setTimeout(function () {
        if (url.indexOf("#") != -1) {
            selectedvalue = url.substring(url.indexOf("#"), url.length);
            selectedvalue = selectedvalue.split("#")
            selectedvalue = selectedvalue[1].toLowerCase();
            var topvalue = 0;
            var addheight = 0;
            if ($(".sql-event-subtabs").length > 0) {
                if ($(".sql-pageTitle.clone").length > 0) {
                    addheight = $(".sql-pageTitle").outerHeight();
                }
                $(".sql-event-subtabs .sql-tabs-container .sql-tabs").find(".sql-tab").each(function () {
                    var deeplinkid = $(this).attr("data-deeplinkid");
                    if (deeplinkid != "" || deeplinkid != undefined || deeplinkid != null) {
                        deeplinkid = deeplinkid.toString().replace(/[\W_]/g, '').toLowerCase();
                        var currentTab = $(this);
                        topvalue = $(this).parents().closest(".sql-event-subtabs").offset().top;
                        topvalue = topvalue - addheight;
                        var selectedindex = 0;
                        setTimeout(function () {
                            if (deeplinkid == selectedvalue) {
                                selectedindex = currentTab.index();
                                currentTab.trigger("click");
                            }
                        }, 10);
                    }
                });
            }
            $("html, body").animate({
                scrollTop: topvalue
            }, 100);
        }
    }, 150);
}
function setHighlighterHeight() {
    try {
        var browser = navigator.userAgent;
        $(".sql-event-table .sql-table .merge").each(function () {
            $(this).children().eq(0).attr("rowspan", "2");
            $(this).next().children().eq(0).addClass('merge-dn');
        });
    }
    catch (e) { }
}
$(document).ready(function () {
    try {
        setHighlighterHeight();
        setTimeout(function () {
            var deeplinkvalue;
            var url = location.href;
            var subTabDeeplink = 0;
            if (url.indexOf("#") > 0) {
                deeplinkvalue = url.substring(url.indexOf("#"), url.length);
                deeplinkvalue = deeplinkvalue.split("#")
                var original = deeplinkvalue[1];
                deeplinkvalue = deeplinkvalue[1].toLowerCase();
                if ($(".sql-event-subtabs").length > 0) {
                    $(".sql-event-subtabs .sql-tabs-container .sql-tabs .sql-tab").each(function () {
                        if ($(this).attr("data-deeplinkid").toLowerCase() == deeplinkvalue) {
                            if (deeplinkvalue == undefined || deeplinkvalue == "") {
                                updateSubTabsUrl();
                            } else {
                                loadSubtabTab();
                                subTabDeeplink = 1;
                            }
                        }
                    });

                }
                if (subTabDeeplink == 0) {
                    var addStickyHeight = 0;
                    if ($(".sql-pageTitle.clone").length > 0) {
                        addStickyHeight = $(".sql-pageTitle").outerHeight();

                        var scrollVal = 0;
                        if ($("#" + original).length > 0) {
                            scrollVal = $("#" + original).offset().top;
                        }
                        else {
                            scrollVal = $("#" + deeplinkvalue).offset().top;
                        }
                        scrollVal = scrollVal - ((addStickyHeight));
                        $("html, body").animate({
                            scrollTop: scrollVal
                        }, 100);

                    }
                }
            }
        }, 100);
    }
    catch (err) {
    }
    $('.sql-event-subtabs .sql-tabs-container .sql-tab').each(function () {
        if (!$(this).hasClass('active')) {
            $(this).attr('aria-selected', 'false');
        }
        else {
            $(this).attr('aria-selected', 'true');
        }
    });
    $(document).on('click', '.sql-event-subtabs .sql-tabs-container .sql-tab', function (e) {

        if ($(this).hasClass('active')) {
            $(this).attr('aria-selected', 'true');
            $(this).siblings().attr('aria-selected', 'false');
        }
        else {
            $(this).attr('aria-selected', 'false');
            $(this).siblings().attr('aria-selected', 'true');
        }

    });
    $(document).on('keydown', '.sql-event-subtabs .sql-tabs-container .sql-tab', function (e) {
        if (e.keyCode == 32 || e.charCode == 32) {
            disableScroll();
            $(this).trigger('click').focus();
        }
        if (e.keyCode == 13 || e.charCode == 13 || e.which == 13) {
            $(this).trigger('click').focus();
        }
        var _currentEle;
        var _currentDataIndex;
        var _tablength;
        /*Left arrows*/

        if (e.keyCode == 37) {
            // disableScroll();
            _currentEle = e.currentTarget;
            _tablength = $(".sql-event-subtabs .sql-tabs-container .sql-tab").length;
            _currentDataIndex = $(_currentEle).index();
            if (_currentDataIndex == 0) {
                $(".sql-event-subtabs .sql-tabs-container .sql-tab:last").trigger('click').focus();
            }
            $(this).prev().focus();
        }

        /*Right arrows*/

        if (e.keyCode == 39) {
            // disableScroll();
            _currentEle = e.currentTarget;
            _tablength = $('.sql-event-subtabs .sql-tabs-container .sql-tab').length - 1;
            _currentDataIndex = $(_currentEle).index();
            if (_currentDataIndex == _tablength) {
                $(".sql-event-subtabs .sql-tabs-container .sql-tab:first").trigger('click').focus();
            }
            $(this).next().focus();

        }

    });
});