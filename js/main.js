$(function(){
    $(".aboutSlider").owlCarousel({
        items:1,
        dots:false,
        nav:true
    });

    $(".commentSlider").owlCarousel({
        items:1,
        dots:false,
        responsive : {
            480 : {
                nav:true
            }
         }
    });

    $(".btntogle").click(function () {
        $(".menuWrap").stop(true, true).slideToggle('fast');
    });


    $(window).on('resize', function () {
        if ($(window).width() >= 768) {
            $('.menu__left').insertBefore('.logo');
            $('.menu__right').appendTo('.header-right');
        } else {
            $('.menu__right').appendTo('.j-menuWrap');
            $('.menu__left').insertBefore('.menu__right');
        }
    });

    $(window).trigger('resize');


    $(".js-MatchHeight").matchHeight();


    $('.btn-hover').hover(function(){
        $(this).parents('.price-box').toggleClass('active');
    });

});