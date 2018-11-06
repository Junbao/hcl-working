// Only Chrome -

function chromePageSlide () {
  var isChrome = window.chrome
  if (navigator.userAgent.indexOf('Edge') >= 0) {
    return
  } else if (isChrome) {
    // Do Something here
  }
};
chromePageSlide()


// jQuery find item with a data Attribute val
$('.carousel-thumbnail-item[data-index="' + lastSpot + '"]')


// self evoking function that also sets $ to be jQuery.  You can set any long name this way.
(function($) {
})(jQuery);

// prevent default on arrow keys
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);




$( document ).ready(function() {
  console.log( "ready!" );
});




window.onload = function() {
  init();
  doSomethingElse();
};

// Add Script to Headers
< script >
  if (window.innerWidth > 500) {
    var head = document.getElementsByTagName('head')[0];

    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "http://www.domain.com/js/jquery.min.js";
    head.appendChild(s1);

    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "http://www.domain.com/js/jquery.colorbox.min.js";
    head.appendChild(s2);

    var s3 = document.createElement("script");
    s3.type = "text/javascript";
    s3.src = "http://www.domain.com/js/inner-code-colorbox.min.js";
    head.appendChild(s3);
  }
</script >