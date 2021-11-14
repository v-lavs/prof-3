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
    });

//    SUB-NAV DRAWER

    // MOBILE MENU

    const nav = $('.header__nav');

    $('.btn-burger').on('click', function (e) {
        e.preventDefault();
        nav.toggleClass('open');
        $(this).toggleClass('open');
        $('body').toggleClass('modal-open');
    });

    $('.menu__link:not(".sub-menu-toggle")').on('click', function (e) {
        nav.removeClass('open');
        $('.btn-burger').removeClass('open');
        $('body').removeClass('modal-open');
    });

    $('#openDraw').on('click', function (e) {
        e.preventDefault();
        $('.drawer').addClass('open-draw');

    });
    $('#backMenu, .btn-burger').click(function (e) {
        e.preventDefault();
        $('.drawer').removeClass('open-draw');
    });

// HOVER BLOCK
    const $memberItems = $('#membersTeams .members-teams__item');

    const sliderMembers = new Swiper('#sliderMembers', {
        slidesPerView: 1,
        effect: 'fade',
        loop: false,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $memberItems.hover(function () {
        $memberItems.removeClass('active');
        $(this).addClass('active');
        const index = $(this).index();
        console.log(index);
        sliderMembers.slideTo(index);
    });

    //    TESTIMONIALS SLIDER
    const sliderTestimonials = new Swiper('#sliderTestimonials', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});