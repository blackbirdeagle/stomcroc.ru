var myMap;

ymaps.ready(function(){
    myMap = new ymaps.Map("map", {
        center: [55.746732, 37.763575],
        zoom: 16
    });


    var placemark1 = new ymaps.Placemark([55.746732, 37.763575],
        {
            balloonContent: 'Россия, г. Москва, Перовская улица, д.16'
        },
        {
            preset: 'twirl#redIcon'
        }
    );


    myMap.geoObjects.add(placemark1);

    myMap.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap.behaviors.disable('drag');
    }
});

$('.fancybox').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
        media : {},
        overlay: {
            locked: false
        }
    }
});

window.onload = function(){
    $( '#slider1' ).lemmonSlider({
        infinite: true
    });
}

$('.vac__link').click(function(){
    $('.vac__link').removeClass('active');
    $(this).addClass('active');

    $('.vac__desc').fadeOut(200);
    $(this).siblings('.vac__desc').fadeIn(200);
});

function centerElements(){
    var leftN = $('.calendar').width() / 2 - $('.nav-calendar').width() / 2;
    $('.nav-calendar').css('left', leftN);
}

centerElements();

$(window).resize(function(){
    centerElements();
});

$('.close-menu').click(function(){
    $('.top-menu').animate({left: -183}, 300);
});

$('.show__menu').click(function(){
    $('.top-menu').animate({left: 0}, 300);
});

$('.a-fontsize a').click(function(){
    $('.a-fontsize a').removeClass('active');
    $(this).addClass('active');
});



$('.a-fontsize-small').click(function(){
    $('body').removeClass('font-normal font-big');
    $('body').addClass('font-small');
});

$('.a-fontsize-normal').click(function(){
    $('body').removeClass('font-small font-big');
    $('body').addClass('font-normal');
});

$('.a-fontsize-big').click(function(){
    $('body').removeClass('font-small font-normal');
    $('body').addClass('font-big');
});



$('.a-color1').click(function(){
    $('body').removeClass('color-black color-blue');
    $('body').addClass('color-white');
});

$('.a-color2').click(function(){
    $('body').removeClass('color-white color-blue');
    $('body').addClass('color-black');
});

$('.a-color3').click(function(){
    $('body').removeClass('color-black color-white');
    $('body').addClass('color-blue');
});

$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 38;
        $('.popup.'+target).css('top', top).css('left', left);
    })


    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){

        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });

    }
}

addEventListener("keydown", keyExit);

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$(function () {
    $('#datetimepicker1').datetimepicker(
        {language: 'ru', format: 'HH:mm', locale: 'ru', pickTime: true}
    );

    $('#datetimepicker2').datetimepicker(
        {language: 'ru'}
    );
});

$(document).ready(function() {
    $("#video__slider").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });


    $("#slider_reviews").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });

    var owl = $("#slider_calendar");

    owl.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: false,
        navText: ['', ''],
    });



    $('.nav-calendar__prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $('.nav-calendar__next').click(function(){
        owl.trigger('next.owl.carousel');
    });
});
