$(document).ready(function() {

  // Variables
  var $nav = $('nav'),
      $body = $('body'),
      $window = $(window),
      overviewTop = $('.overview').offset().top - $('.nav-wrapper').height();

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
  }

  function resize() {
    $body.removeClass('has-docked-nav')
    overviewTop = $('.overview').offset().top - $('.nav-wrapper').height();
    onScroll()
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
