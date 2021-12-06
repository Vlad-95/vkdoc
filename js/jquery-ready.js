$(document).ready(function() {
    //===========Мобильное меню
    // let body = $('body')
    // let windowWidth = window.innerWidth;
    // let header = $('.header');
    // let headerWrap = $('.header__wrap');
    // let nav = header.find('.nav')
    // let socials = $('.footer .socials');
    // // let time = header.find('.nav__item.time');
    // // let mail = header.find('.nav__item.mail');
    // // let address = header.find('.nav__item.address');
    // // let phone = header.find('.nav__item.phone')
    // let burger = $('.burger');
    // let windowHeight = $(window).height();

    // if (windowWidth <= 992) {
    //     //создаем контейнер для менюшки
    //     let mobileMenu = $(document.createElement('div'));
    //     let nav = $(document.createElement('div'));
    //     mobileMenu.addClass('mobile-menu');
    //     nav.addClass('nav');

    //     headerWrap.append(mobileMenu)
    //     mobileMenu.append(nav)

    //     //клонируем элементы хедера
    //     let mobileTime = time.clone();
    //     let mobileMail = mail.clone();
    //     let mobileAddress = address.clone();
    //     let mobilePhone = phone.clone();
        
    //     nav.append(mobilePhone); 
    //     nav.append(mobileMail);  
    //     nav.append(mobileAddress);  
    //     nav.append(mobileTime);   
              
    // }

    // function showMenu() {
    //     let mobileMenu = $('.mobile-menu');

    //     burger.toggleClass('active');
    //     body.toggleClass('no-scroll');
    //     mobileMenu.toggleClass('active');
    //     console.log(1)
    // }

    // burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ) 
    //ввод значений в поля
    // $('input[data-valid="numbers"]').on('input', function () {
    //     if (this.value.match(/[^0-9]/g)) {
    //         this.value = this.value.replace(/[^0-9]/g, '');
    //     }
    // })

    // $('input[data-valid="letter"]').on('input', function () {
    //     if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
    //         this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, '');
    //     }
    // });

    //маска
    $('input[name="inn"]').mask("999999999999", {placeholder:""});
    $('input[name="tel"]').mask("+7(999)999-99-99");

    //Подмена текста на кнопке
    if ($(window).width() <= 576) {
        $('.about .btn').text('Получить гайд на КЭДО')
    }
});