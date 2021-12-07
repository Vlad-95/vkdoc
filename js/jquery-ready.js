$(document).ready(function() {
    //мобильное меню
    let body = $('body');
    let burger = $('.burger');

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    //Якорные ссылки
    function anchorLinks () {
        let currentLink = $(this).attr('data-anchor');
        let currentDiv = $('[data-anchor="'+ currentLink +'"]:not(a)');        

        //скролл до элемента
        $('html, body').animate({scrollTop: currentDiv.offset().top}, 500);

        if ($(window).width() <= 992) {
            let mobileMenu = $('.mobile-menu');

            burger.removeClass('active');
            body.removeClass('no-scroll');
            mobileMenu.removeClass('active');
        }
    }

    $('a[data-anchor]').click(anchorLinks);

    //одинаковая высота блоков
    if ($('.transition').length) {
        $('.transition .items__item').matchHeight({
            byRow: false,
        })
    }

    //переключение табов
    if ($('.connection').length) {
        let tabs = $('.connection .tabs');
        let content = $('.connection .content');
        tabs.on('click', 'div:not(.active)', function() {
           console.log($(this).index())
           $(this).addClass('active').siblings().removeClass('active');
           content.find('.content__item').hide().eq($(this).index()).fadeIn();
        })
    }

    //Подмена текста на кнопке
    if ($(window).width() <= 576) {
        $('.about .btn').text('Получить гайд на КЭДО')
    }

    //Маска телефона
    $('input[name="tel"]').mask('+7 (999) 999-99-99')
});