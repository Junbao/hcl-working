$(document).ready(function () {
    //for higlighting images with border//
    $(".d365-sem-wrapper .m-multi-feature.f-align-left .video-container .thumbnail-ul-holder .video-thumbnail-ul li a").click(function () {
        $(".d365-sem-wrapper .m-multi-feature.f-align-left .video-container .thumbnail-ul-holder .video-thumbnail-ul li.active-border").removeClass("active-border").addClass("inactive-border");
        $(this).parent("li").removeClass("inactive-border").addClass("active-border");
        //for arrow-tip poiting towards current video in the player//	
        $(".d365-sem-wrapper .m-multi-feature.f-align-left .video-container .thumbnail-ul-holder .video-thumbnail-ul li a div").removeClass("arrow-border_on").addClass("arrow-border_off");
        $(this).parent("li").find('a div.arrow-border_off').removeClass("arrow-border_off").addClass("arrow-border_on");

        //updating text under current thumbnail on onclick//	
        $(".d365-sem-wrapper .thumbnail-ul-holder .video-thumbnail-ul li span.bold-font").removeClass("bold-font").addClass("normal-font");
        $(this).parent("li").find('span.normal-font').removeClass("normal-font").addClass("bold-font");

        if ($(this).attr('id') == "gartner") {
            $(".foot-note-div").css("display", "block");
            $("hr.mob-custom-divider").css("margin-top", "5%");
            $("hr.mob-custom-divider").css("margin-bottom", "2%");

        } else {
            $(".foot-note-div").css("display", "none");
            $("hr.mob-custom-divider").css("margin-top", "");
            $("hr.mob-custom-divider").css("margin-bottom", "");
        }
    });



    // onePlayer iframe src change

    var prevActiveLi = $(".thumbnail-ul-holder .video-thumbnail-ul li .f-active").parent("li");
    $(".thumbnail-ul-holder .video-thumbnail-ul li a").click(function () {
        var prevActiveIndex = $(prevActiveLi).index();
        if (prevActiveIndex != $(this).parent().index()) {
            var prevSrc = $(".video-container .videocontainer .video-ul li").eq(prevActiveIndex).find("iframe").attr("src");
            $(".video-container .videocontainer .video-ul li").eq(prevActiveIndex).find("iframe").removeAttr("src");
            $(".video-container .videocontainer .video-ul li").eq(prevActiveIndex).find("iframe").attr("src", prevSrc);
            prevActiveLi = $(this).parent("li");

            //scroll to video in mobile viewport
            if ($(window).width() < 540 || $(window).width() <= 1180) {
                $('html, body').animate({
                    scrollTop: $('div.videoplyr').offset().top - 50
                }, 1000);
            }
        }

    });



    //video container border		  
    getsetVideoContainer($(window).width());

    // to set the height equal and maximum	
    $(".thumbnail-ul-holder .video-thumbnail-ul li").click(function () {
        if ($(window).width() < 1083) { //1083
            setTimeout(function () {
                reSize();
            }, 100);
        }

        if ($(window).width() > 1083) {
            getsetVideoContainer($(window).width());
        }
    });
});

/*iframe onload delay jquery fix*/

//       $(window).on('load',function(){
// 		  getsetVideoContainer($(window).width());
// setTimeout(function(){
// $('ul.video-ul li:first-child img').css('opacity','0');
// }, 200);
//       });


var maxHeight;

function reSize() {
    maxHeight = 0;
    $(".video-dynamic-info li.f-active .text-block li.text-container p").css("height", "auto");
    $(".video-dynamic-info li.f-active .text-block li.text-container p").each(function () {
        maxHeight = maxHeight > $(this).innerHeight() ? maxHeight : $(this).innerHeight();
    });
    $(".video-dynamic-info li.f-active .text-block li.text-container p").css("height", maxHeight);

}

//Player width and set as per Aspect Ratio 16:9 and set the same height to left Panel
function getsetVideoContainer(windowWidth) {

    $(".videoplyr .videocontainer").css("height", "");
    $(".d365-sem-wrapper .m-multi-feature .f-multi-slide ul.video-ul li iframe").css("height", "");
    $(".d365-sem-wrapper .m-multi-feature.f-align-left section div ul.video-dynamic-info").css("height", "");
    var containerWidth = $(".videoplyr .videocontainer").width();
    var containerHeight = 9 / 16 * (containerWidth);
    var containerBorder;
    if (windowWidth > 540) {
        containerBorder = containerHeight + 40;
    } else {
        containerBorder = containerHeight;
    }

    $(".videoplyr .videocontainer").css("height", containerBorder);
    $(".d365-sem-wrapper .m-multi-feature .f-multi-slide ul.video-ul li iframe").css("height", containerHeight);
    // $('ul.video-ul li:first-child img').css("height", containerHeight);

    //for screen width more than 1083px && 1290px
    if (windowWidth > 1083) {

        var leftPanel = $(".d365-sem-wrapper .m-multi-feature.f-align-left section div ul.video-dynamic-info");
        $(leftPanel).removeAttr("style", "");
        //var leftPanelHeight = containerHeight - $(leftPanel).height();
        var leftPanelHeight = containerBorder;
        $(leftPanel).css("height", leftPanelHeight);

    }
}


//window resize

$(window).resize(function () {


    getsetVideoContainer($(window).width());
    if ($(this).width() < 1083) {
        reSize();
    }
});

$(window).load(function () {
    $(".d365-sem-wrapper .m-multi-feature.f-align-left .video-container .thumbnail-ul-holder .video-thumbnail-ul li").on("keydown", function (e) {
        var currentIndex = $(".thumbnail-ul-holder .video-thumbnail-ul li .f-active").parent("li").index();
        if (e.which == 39) { //left key

            //To make the border active on left key press
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).removeClass("inactive-border").addClass("active-border");
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).siblings().removeClass("active-border").addClass("inactive-border");

            //To make the arrow head highlight on left key press
            $(".thumbnail-ul-holder .video-thumbnail-ul li a div").eq(currentIndex).removeClass("arrow-border_off").addClass("arrow-border_on");
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).siblings().find("a div").removeClass("arrow-border_on").addClass("arrow-border_off");

            //updating text under current thumbnail//
            $(".thumbnail-ul-holder .video-thumbnail-ul li span").eq(currentIndex).removeClass("normal-font").addClass("bold-font");
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).siblings().find("span").removeClass("bold-font").addClass("normal-font");

        }
        if (e.which == 37) { //right key

            //To make the border active on left key press
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).removeClass("inactive-border").addClass("active-border");
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).siblings().removeClass("active-border").addClass("inactive-border");

            //To make the arrow head highlight on left key press
            $(".thumbnail-ul-holder .video-thumbnail-ul li a div").eq(currentIndex).removeClass("arrow-border_off").addClass("arrow-border_on");
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).siblings().find("a div").removeClass("arrow-border_on").addClass("arrow-border_off");

            //updating text under current thumbnail//
            $(".thumbnail-ul-holder .video-thumbnail-ul li span").eq(currentIndex).removeClass("normal-font").addClass("bold-font");
            $(".thumbnail-ul-holder .video-thumbnail-ul li").eq(currentIndex).siblings().find("span").removeClass("bold-font").addClass("normal-font");
        }
    });
});


// Accessibility fixes


// ThumbNail - video-thumbnail-ul .c-sequence-indicator
// window.frames['myIFrame'].document.getElementById('myIFrameElemId')


$(window).load(function() {
    // Take video out of initial tab order
    $('.video-dynamic-info a').attr('tabindex', '-1');

    // Control tab order from Thumbnail
    $('.video-thumbnail-ul a').on("keydown", function (event) {
        if (event.which == 13) {
            changeFocus();
        } else if (event.which == 38 || event.which == 40) {
            event.preventDefault();
        }
    });

    $('.video-thumbnail-ul a').click(function () {
        changeFocus();
    });
    function sendToIFrame() {
        // var $iframe = $("#newHorizontalItemImage1 iframe");
        // $iframe.contentWindow.focus();
        var findFrame = window.frames['#custom_oneplayer_iframe'].contentDocument.getElementsByClass('c-action-trigger');
        findFrame.focus();
    }

    function changeFocus() {
        // setTimeout(sendToIFrame,100);
        $('.video-dynamic-info a').attr('tabindex', '0');
        // Getting Cross domain errors - good step means I am getting where I want but will make it impoosible to test
        var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
        iframeDocument.body.style.backgroundColor = "blue";


    };
    
    
});