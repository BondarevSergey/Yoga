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

    

    var $menu = $(".header");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default")){
            $menu.removeClass("default").addClass("fixed").fadeIn('fast');
        } 
        else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default").fadeIn('fast');
        }                 
    });
    

    $(".js-MatchHeight").matchHeight();


    $('.btn-hover').hover(function(){
        $(this).parents('.price-box').toggleClass('active');
    });

});