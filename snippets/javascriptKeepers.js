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
