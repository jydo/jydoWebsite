
$(document).ready(function() {
    var _this = $(this);
        _this.checkNav = function (index, nextIndex, direction) {
            var leavingSection = $(this);
            if (index == 1 && direction == 'down') {
                $('#mainNav').removeClass('top');
                $('footer').removeClass('top');
            } else if (nextIndex == 1) {
                $('#mainNav').addClass('top');
                $('footer').addClass('top');
            }
        };
        _this.checkInview = function (index, nextIndex, direction) {
            $('.inview').css("-webkit-transition-delay", '0ms').css("-o-transition-delay", '0ms').css("transition-delay", '0ms');
            $('.inview').removeClass('inview');
            var $section = $('.section').eq(nextIndex - 1);
            var delayData = $section.attr('data-delay');
            $section.find('.check-inview').each(function (i) {
                var delay = delayData * (i + 1);
                $(this).css("-webkit-transition-delay", delay + 'ms').css("-o-transition-delay", delay + 'ms').css("transition-delay", delay + 'ms');
                $(this).addClass('inview');
            });
        };
        _this.centerContent = function ($container) {
            var winH = $(window).height();
            var containerH = $container.height();
            var padding = (winH - containerH) / 2;
            $container.css({'padding-bottom': padding});
        };
        _this.activeAnchor = function (index, nextIndex, direction) {
            $('#sideNav li a').removeClass('active');
            $('#sideNav li a').eq(nextIndex - 1).addClass("active");
        };
        _this.preloader = function () {
            setTimeout(function () {
                $('#preloader').addClass('loaded');
            }, 1000);
            setTimeout(function () {
                $('#fullpage').addClass('loaded');
                $('#preloader').remove();
                _this.checkInview(0, 1, 'down');
            }, 1500);
        };
        _this.scrollPage = function () {
            $('#fullpage').fullpage({
                anchors: ['welcomePage', 'overviewPage', 'devicesPage', 'jydoTestimonials'],
                menu: '#mainMenu',
                responsive: 900,
                onLeave: function (index, nextIndex, direction) {
                    _this.checkNav(index, nextIndex, direction);
                    _this.checkInview(index, nextIndex, direction);
                    _this.activeAnchor(index, nextIndex, direction);
                },
                afterResize: function () {
                    $('section .container').each(function () {
                        _this.centerContent($(this));
                    });
                }
            });
        };
        _this.init = function () {
            _this.scrollPage();
            $('section .container').each(function () {
                _this.centerContent($(this));
            });
            Waves.displayEffect();
            _this.preloader();
            $('.parallax').parallax();
        };
    _this.init();
});