(function($){
  var registerBackToTop = function () {
    var THRESHOLD = 50;
    var $top = $('.back-to-top');

    $(window).on('scroll', function () {
      $top.toggleClass('back-to-top-on', window.pageYOffset > THRESHOLD);

      var scrollTop = $(window).scrollTop();
      var docHeight = $(document).height();
      var winHeight = $(window).height();
      var scrollPercent = (scrollTop) / (docHeight - winHeight);
      var scrollPercentRounded = Math.round(scrollPercent*100);
      $('#scrollpercent>span').html(scrollPercentRounded);
    });

    $top.on('click', function () {
      $('body').velocity('scroll');
    });
  }

  $(document).ready(function () {
    registerBackToTop();
  });
})(jQuery);