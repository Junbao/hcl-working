$(document).ready(function () {
    $("#chatClickBox").on('click', function () {
        if ($(this).hasClass("chatBox-expand")) {
            $(this).removeClass("chatBox-expand");
            $(this).addClass("chatBox-collapse");
            $("#chatBox").css("right", "-214px");

        } else if ($(this).hasClass("chatBox-collapse")) {
            $(this).removeClass("chatBox-collapse");
            $(this).addClass("chatBox-expand");
            $("#chatBox").css("right", "0");
        }
    });

    $("#chatBox .closeBtn").on('click', function () {
        $("#chatBox").css("right", "-214px");
        $("#chatClickBox").removeClass("chatBox-expand");
        $("#chatClickBox").addClass("chatBox-collapse");
    });

});