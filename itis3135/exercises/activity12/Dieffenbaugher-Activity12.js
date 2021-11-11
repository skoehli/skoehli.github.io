$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        minSlides: 1,
        maxSlides: 1,
        captions: true,
        slideWidth: 500,
        auto: true,
        pause: 3000,
        pager: true,
        pagerType: 'short',
        pagerSelector: id_pager
    });
});