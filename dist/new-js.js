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


    //OPEN DRAWER(SUB MENU)

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
        loop: false,
        effect: 'fade',
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
        sliderMembers.slideTo(index);
    });

    //    TESTIMONIALS SLIDER

    const sliderTestimonials = new Swiper('#sliderTestimonials', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: true,
        delay: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let $contentBlock = $('.testimonials__container');

    sliderTestimonials.on('slideChange', function () {
        const currSlide = this.slides[this.activeIndex];
        if (currSlide) {
            let content = $(currSlide).find('.ts-template').html();
            $contentBlock.html(content);
        }
    });


    function line_position() {
        const line = $('.stages-of-dev__line');
        const $indexes = $('.stages-of-dev .index');
        let height = $indexes.last().offsetParent().offset().top + 100;
        let top_offset = 'auto';

        if ($(window).width() <= 980) {
            height = 'auto';
            top_offset = 50;
        }

        const bottom_offset = $indexes.last().offsetParent().outerHeight() - 20;
        line.css({
            top: top_offset,
            bottom: bottom_offset,
            height: height
        });
    }

    line_position();

    $(window).on('resize', function () {
        line_position();
    });


    // substance-service items animation

    setTimeout(function () {
        const listItems = $('.stages-of-dev .animation-bg');
        const indexItems = $('.stages-of-dev .index');
        const rightHeading = $('.substance-service .heading .animation-bg');

        const itemDelay = 370;
        const startDelay = 1000;

        rightHeading.css({transitionDelay: startDelay + itemDelay + 'ms'});

        $.each(listItems, function (index, item) {
            $(item).css({transitionDelay: startDelay + (index + 1) *  itemDelay + 'ms'});
            $(indexItems[index]).css({transitionDelay: startDelay + (index + 1) * itemDelay + 'ms'});
        });

        $('.substance-service').addClass('active');
    }, 300);


});