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