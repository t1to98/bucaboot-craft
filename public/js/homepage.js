(function($) {

    /////////////////
    // Swiper
    /////////////////

    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazyLoading: true
    })

})(jQuery);
