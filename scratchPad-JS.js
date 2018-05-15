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



/* http: //www.nullskull.com/faq/771/simulate-shifttab-and-tab-with-only-the-elements-on-your-web-page.aspx */
< script type = "text/JavaScript" >
    function tab(prev, next) {
        var obj;
        if (event.keyCode == 9 && event.shiftKey == true)
            obj = document.getElementById(prev);
        if (event.keyCode == 9 && event.shiftKey == false)
            obj = document.getElementById(next);

        if (event.keyCode == 37)
            obj = document.getElementById(prev);
        if (event.keyCode == 39)
            obj = document.getElementById(next);

        if (obj != undefined) {
            obj.onfocus = function () {
                obj.select();
            };
            obj.focus();
        }
        event.returnValue = false;
    } <
    /script>

    <!-- Call the tab function in the onKeyDown event. -->
    <!-- Pass in the ID of the previous and next elements -->
    <
    asp: TextBox ID = "textbox1"
Text = "Test1"
onKeydown = "return tab('textbox3', 'textbox2');"
runat = "server" > < /asp:TextBox> <
    asp: TextBox ID = "textbox2"
Text = "Test2"
onKeydown = "return tab('textbox1', 'textbox3');"
runat = "server" > < /asp:TextBox> <
    asp: TextBox ID = "textbox3"
Text = "Test3"
onKeydown = "return tab('textbox2', 'textbox1');"
runat = "server" > < /asp:TextBox>