// Copyright 2015 jydo inc. All rights reserved.

(function () {
    var baseURL = './images/framed/', images = ['Start.png', 'AppleTV.png', 'Sidebar.png', 'Laptop.png', 'VTC-Dir.png'];

    $(document).ready(function () {
        var next = $('.next-col'), back = $('.back-col'), image = $('.image img'), idx = 0;

        image.on('load', function () {
            image.removeClass('fade');
        });

        next.on('click', function () {
            idx = idx == images.length - 1 ? 0 : idx + 1;
            image.addClass('fade');

            window.setTimeout(function () {
                image.attr('src', baseURL + images[idx]);
            }, 500);
        });

        back.on('click', function () {
            idx = idx == 0 ? images.length - 1 : idx - 1;
            image.addClass('fade');

            window.setTimeout(function () {
                image.attr('src', baseURL + images[idx]);
            }, 500);
        });
    });
})();