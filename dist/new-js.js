$(document).ready(function () {

//   CATEGORY NAV

    $('.category-nav__current').click(function (e) {
        $(this).parents('.category-nav').toggleClass('opened');
        $('.category-nav__list-wrap').slideToggle(700);
    });

    $('.category-nav__link').click(function (e) {
        $('.category-nav__link').removeClass('active');
        const activeText = $(this).text();
        $(this).addClass('active');

        $('.category-nav__current').text(activeText);

        $(this).parents('.category-nav').removeClass('opened');
        $('.category-nav__list-wrap').slideToggle(700);

    })

//    SUB-NAV DRAWER

    $('#openDraw').on('click', function (e) {
        e.preventDefault();
        $('.drawer').toggleClass('open-draw');

    });
    $('#backMenu, .btn-burger').click(function (e) {
        e.preventDefault();
        $('.drawer').removeClass('open-draw');
    });

});