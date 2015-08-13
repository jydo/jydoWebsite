$(document).ready(function() {

  // Variables
  var $nav = $('nav'),
      $body = $('body'),
      $window = $(window);

  function init() {
    $window.on('scroll', onScroll);
    $window.on('resize', resize);
  }

  function resize() {
    $body.removeClass('has-docked-nav');
    onScroll();
  }

  function onScroll() {
    if ($window.scrollTop() > 20) {
      $('#mainNav').removeClass('top');
    } else {
      $('#mainNav').addClass('top');
    }
  }

  init();
});
