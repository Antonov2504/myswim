
jQuery(function ($) {
    $(document).ready(function () {
        $(".description__button").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href');
            var top = $(id).offset().top - $(".header").height();
            $('body,html').animate({ scrollTop: top }, 500);
        });

        $(".description__nav .nav__link").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href');
            var top = $(id).offset().top - $(".header").height();
            $('body,html').animate({ scrollTop: top }, 500);
        });
    });
});