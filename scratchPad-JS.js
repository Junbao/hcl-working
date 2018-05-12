if(event.shiftKey && event.keyCode == 9) { 
  //shift was down when tab was pressed
}       

if (event.shiftKey && event.keyCode == 9) {
    alert("nothing doing");
    e.stopImmediatePropagation();
}

// jQuery - How to find if event is triggered or clicked

$(element).click(function (e) {
    e.isTrigger //undefined when the element is clicked
    e.isTrigger //true for $(element).trigger('click');
});

!e.isTrigger



$("#id_of_textbox").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#id_of_button").click();
    }
});
$("#pw").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#myButton").click();
    }
});

$("#myButton").click(function () {
    alert("Button code executed.");
}); <
script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" > < /script>

Username: < input id = "username"
type = "text" > < br >
    Password: & nbsp; < input id = "pw"
type = "password" > < br >
    <
    button id = "myButton" > Submit < /button>


$('button[aria-selected="true"]').addClass('testing');