$(document).ready(() => {

    //sidebar menu methods
    const $toggleButton = $('.toggle-button');
    const $menuWrap = $('.menu-wrap');

   /* $toggleButton.on('mouseenter', function (event) {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
    $menuWrap.on('mouseleave', function () {
        $(this).toggleClass('toggle-button');
        $menuWrap.toggleClass('menu-show');
    });*/
    $toggleButton.on('click', function () {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
    


    //Nav Bar opacity method
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.nav-bar').addClass("active");
        } else {
            $('.nav-bar').removeClass('active');
        }
    });


});