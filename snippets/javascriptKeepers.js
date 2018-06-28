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
