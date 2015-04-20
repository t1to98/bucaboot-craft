var PrototypeModule = (function() {
  "use strict";

  var Module = {};

  Module.init = function(options) {
    options = options || {};

    //console.log('Prototype Module Initialized!');
  };

  Module.teardown = function() {
    // detach event handlers when destroying an
    // instance of this obj

    // ex: $('body').off('click');
  };

  return Module;

  // put helper functions here

}());

(function($) {
  "use strict";

  var proto = Object.create(PrototypeModule);
  proto.init();


  $(function() {

    var $ww = $(window).width();
    var $body = $('body');
    var $html = $('html');

    /////////////////
    // Popups
    /////////////////


    // Only intialize on certain pages
    if ($body.hasClass('page-hp')) {
      $('.js-popup').magnificPopup();
      $('.js-popup-iframe').magnificPopup({
        type: 'iframe'
        });

      // Close modal when clicking away
      $('body').on('click', '.close-modal', function(e){
        $.magnificPopup.close();
      });
    }


    /////////////////
    // Navigation
    /////////////////

        // Show/Hide Navigation
        $('.js-navTrigger').on('click', function(e) {
            e.preventDefault();

            if ($body.hasClass('siteNav-active')) {
          $body.addClass('siteNav-hiding');
          $body.removeClass('siteNav-active');
            } else {
          $body.addClass('siteNav-active');
          $body.removeClass('siteNav-hiding');
            }
        });


    /////////////////
    // Parallax
    /////////////////

    if($ww >= 920 && $body.hasClass('page-hp') && $html.hasClass('ie') == false) {
      setTimeout(function(){
        skrollr.init()
      }, 300);
    }



    /////////////////
    // In View
    /////////////////

    // Remove hover animation class when not in view.
    // Fixes bug where fixed background images disappear.
    $('.intro-arrow').bind('inview', function(event, visible) {
      var $this = $(this);
      if (visible) {
        $this.addClass('hover-anim');
      } else {
        $this.removeClass('hover-anim');
      }
    });

  });


})(jQuery);
