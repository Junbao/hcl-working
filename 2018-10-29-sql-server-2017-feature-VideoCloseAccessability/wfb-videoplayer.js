/*Please Update the highlighted in your existing pop up JS code*/ 
$(document).ready(function () {
    
    $("#mainContent .oneplayer-popup-video").on('click', function (e) {
      e.preventDefault();
  });
  
  var lan=$("html").attr("lang"); 
  try {
      $("body").on("click",".oneplayer-popup-video", function (e) {            //added Event delegation
          var opId = $(this).data("vidid");
          var opName = $(this).data("vidname");
          var opDesc = $(this).data("viddesc");
          var opThumb = $(this).data("vidthumburl");
          var opThumbAlt = $(this).data("vidthumbalt");
          var opUploadDt = $(this).data("viduploaddate");
          var $opiframeElm = $("#surface-lightbox-preview .PopUpPlayerAPI");
          var oneVideoIframeSrc = "https://www.microsoft.com/" + lan + "/videoplayer/embed/";
          oneVideoIframeSrc = oneVideoIframeSrc + opId;
          $opiframeElm.attr("video-id", oneVideoIframeSrc);
          $opiframeElm.css("width", "100%");
          $opiframeElm.css("height", "100%");         
          $("#surface-lightbox-preview [itemprop='name']").text(opName);
          $("#surface-lightbox-preview [itemprop='description']").text(opDesc);
          $("#surface-lightbox-preview [itemprop='thumbnailUrl']").attr("src", opThumb).attr("alt", opThumbAlt);
          $("#surface-lightbox-preview [itemprop='uploadDate']").attr("content", opUploadDt);
          
   
          if ($opiframeElm.length) {
            
              $opiframeElm.attr("title", opName);
               $("#surface-lightbox-preview a.dummy-anchor").attr("aria-hidden","false");
             
          }
        });
      
  }
  catch (exception) {
      console.log("surface popup video block");
  }
  
  $('.oneplayer-popup-video').keypress(function (e) {
      var key = e.which;
      if(key == 13)  // the enter key code
      {
          $(this).trigger('click');
          return false;  
      }
  });   
  
 
  
});
/*
Function to update pop up video iframe

Add below script to any of the video releated .js file and as usual add that file to Theme settings.
*/

$(document).ready(function () {
  try {
     $("body").on("click",".oneplayer-popup-video", function (e) {       
          $(".PopUpPlayerAPI").each(function () {
              var playerData = {
                  options: {
                      autoplay: true,
                      mute: false,
                      loop: false,
                      market: $('html').attr('lang'),
                      useAdaptive: false,
                      playFullScreen: false
                  },
                  metadata: {
                      videoId: returnVideoId($(this).attr('video-id'))
                  }
              };
               
              MsOnePlayer.render(
                  $(this).attr('id'), // id of the container div
                  playerData, // player data            
                  function (player) { // onPlayerReady callback function which returns back player instance on which APIs can be called
                      player.addPlayerEventListener(function (e) {
                        
                      });
                  }
                  );
          });

          function returnVideoId(url) {
              var getAnArray = url.split('/');
              return getAnArray[getAnArray.length - 1];
          }
      setTimeout(function () {
              var iftitle = $("#surface-lightbox-preview ").find(".c-video").attr("data-title") != undefined ? $("#surface-lightbox-preview").find(".c-video").attr("data-title") : "";
              $("#surface-lightbox-preview iframe").attr("title", iftitle);
             
              $("#surface-lightbox-preview .PopUpPlayerAPI").append("<a href='javascript:void(0);' aria-hidden='true' aria-label class='dummy-anchor'>&nbsp;</a><a href='javascript:void(0);' aria-hidden='true' aria-label class='dummy-anchor'>&nbsp;</a>");
                
               
                        
          }, 300);
        
          
  });
  }
  catch (exception) {
      console.log(exception);
  }

});

$(window).on("load resize", function (e) {
      
    $(document).on("keyup", function (e) {
          if (e.which === 9 || e.keycode === 9) {
     
          if ($(":focus").length && !$(":focus").closest("#surface-lightbox-preview").length && ($("#surface-lightbox-preview").attr("aria-hidden") == "false")) {
              
              $("#surface-lightbox-preview .glyph-cancel").focus();
          }
         
      }
  })
    $("#surface-lightbox-preview").on("focus", "a.dummy-anchor", function () {
         
            $("#surface-lightbox-preview .glyph-cancel").focus();
          });
              
        $("div[data-js-dialog-hide='data-js-dialog-hide']").click(function(){
          $('#surface-lightbox-preview').attr('aria-hidden','true');
          $(".PopUpPlayerAPI").empty();
              $('.PopUpPlayerAPI').attr('video-id','');
               $('.PopUpPlayerAPI').attr('title','');
               $('.PopUpPlayerAPI').attr('style','');
                $('a.dummy-anchor').remove();  
          //  $('.oneplayer-popup-video').focus();
      });
        
  
  $("#surface-lightbox-preview .c-glyph.glyph-cancel").on('click keydown', function (e) {
      if (e.which == 13 || e.type == 'click') { 
          
           $('#surface-lightbox-preview').attr('aria-hidden','true');
          $(".PopUpPlayerAPI").empty();
              $('.PopUpPlayerAPI').attr('video-id','');
               $('.PopUpPlayerAPI').attr('title','');
               $('.PopUpPlayerAPI').attr('style','');
                $('a.dummy-anchor').remove();  
          //  $('.oneplayer-popup-video').focus();
      
      }
      });
  
})
