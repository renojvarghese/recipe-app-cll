$(document).ready(() => {

    //sidebar menu methods
    const $toggleButton = $('.toggle-button');
    const $menuWrap = $('.menu-wrap');

    $toggleButton.on('mouseenter', function () {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
        console.log(toggleButton)
    });
    $menuWrap.on('mouseleave', function () {
        $toggleButton.removeClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
    $toggleButton.on('click', function () {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });

    

    //Nav Bar opacity method
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.nav-bar').addClass("nav-active");
        } else {
            $('.nav-bar').removeClass('nav-active');
        }
    });
});