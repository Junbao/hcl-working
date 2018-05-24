$(document).ready(function () {

    $("#CP_CustomCarousel_1 p.h2, #CP_CustomCarousel_1 p.c-heading-3").each(function () {
        $(this).replaceWith($("<h2 class='c-heading-3 pb-1 pt-1 hide-by-default show-element'>" + this.innerHTML + '</h2>'));

    });

    $("#table_container p.h3").each(function () {
        $(this).replaceWith($("<h3 class='c-heading-3 mb-0 mt-0 pb-1 pt-0'>" + this.innerHTML + '</h3>'));

    });
    $("#table_container h2.h3").each(function () {
        $(this).replaceWith($("<h2 class='c-heading-3 mb-0 mt-0 pb-1 pt-0'>" + this.innerHTML + '</h2>'));

    });
    $("#CP_Table_List_2 #table_container h2.h6").each(function () {
        $(this).replaceWith($('<h2 class =' + '"c-heading-6 ' + this.className + '"' + ' >' + this.innerHTML + '</h2>'));

    });
    $('p').not('.c-subheading-1,.c-subheading-2,.c-subheading-3,.c-subheading-4,.c-heading-3,.c-heading-4,.c-heading-5,.caption,.h2,.h3,.h4,.h5,.h6,.col-headline').each(function () {
        $(this).addClass('c-paragraph-3');
    });
    //START font-size issue fixes	
    $('#CP_PageTitle h3').each(function () {
        $(this).addClass('c-heading-3');
    });
    $('.cp-table-list h2').each(function () {
        if ($(this).hasClass('h6')) {
            $(this).addClass('c-heading-6').removeClass('h6');
        }
    });
    $('#CP_PricingTable_1 p').each(function () {
        if ($(this).hasClass('h6')) {
            $(this).addClass('c-heading-6').removeClass('h6');
        }
    });
    $('#SQL_SideImageWithCopyV1_1_1 p').each(function () {
        if ($(this).hasClass('h4')) {
            $(this).addClass('c-heading-4').removeClass('h4');
        }
    });
    $('.h5').each(function () {
        $(this).addClass('c-heading-5').removeClass('h5');
    });
    //END font-size issue fixes	
    //To remove empty h3 tags 
    $('h3').each(function () {
        if (($(this).text() == " ")) {
            $(this).remove();
        }
    });
    $(".side-image-with-copy ul li a.c-call-to-action:last-child").addClass("m-mb-3 s-mb-3");
    $(".cp-side-media-with-copy .table-layout-fixed").addClass("m-mt-3");
});


//start imagetab carousel issue//
$(document).ready(function () {
    $('.carousel-thumbnails .carousel-thumbnail-item').click(function (event) {
        event.preventDefault();
    });

    $(".main-content .c-call-to-action:not(.blog-link)").each(function () {
        var val = "";
        if (typeof ($(this).attr('text')) == 'undefined') {
            val = $(this).html();
        } else {
            val = $(this).attr('text');
            $(this).removeAttr("text")
        }
        /*console.log($(this).length)*/
        $(this).empty();
        $(this).append('<span>' + val + '</span>')
        /*console.log($(this).length)*/
    });

});
//end magetab carousel issue//
/*Manikanta reddy*/
$(document).ready(function () {
    $('.cp_media_carousel_with_responsive .media-carousel-headline h2').each(function () {
        if ($(this).text() == "") {
            $(this).remove();
        }
    });
});
