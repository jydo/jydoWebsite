// Copyright 2015 jydo inc. All rights reserved.

(function () {
    var createCarousel,
        baseURL = './images/framed/',
        iPadImages = ['Start.png', 'AppleTV.png', 'Sidebar.png', 'Laptop.png', 'VTC-Dir.png'],
        //adminImages = ['admin_containers.png', 'admin_devices.png', 'admin_add_devices.png', 'admin_settings.png'];
        adminImages = ['iMac-Flat-Containers.png', 'iMac-Flat-Devices.png', 'iMac-Flat-AddDevices.png', 'iMac-Flat-Settings.png'];

    createCarousel = function (sectionClass, images) {
        var next = $(sectionClass + ' .next-col'), back = $(sectionClass + ' .back-col'),
            image = $(sectionClass + ' .image img'), idx = 0;

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
    };

    $(document).ready(function () {
        createCarousel('.simplicity', iPadImages);
        createCarousel('.configuration', adminImages);
    });
})();