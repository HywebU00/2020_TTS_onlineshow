// 自行加入的JS請寫在這裡
$(function() {
    // header btn
    var btnRegister = $('header').find('.btn_register'),
        btnLogin = $('header').find('.btn_login');
        btnLang = $('header').find('.top_language');
    $('.menuBlock .menu').after('<div class="btn_block"></div>');
    btnRegister.clone().prependTo('.btn_block');
    btnLogin.clone().prependTo('.btn_block');
    btnLang.clone().prependTo('.btn_block');
    // 控制音效
    $('.audio').find('a').off().click(function(e) {
        if ($(this).hasClass('off')) {
            $(this).removeClass('off').addClass('on');
        } else {
            $(this).removeClass('on').addClass('off');
        }
        e.preventDefault();
    });
    var burger = document.querySelector('.burger'),
        header = document.querySelector('.header');
    var _menuStatus = false;
    $('.burger').click(function(e) {
        if (!_menuStatus) {
            $(this).parent().stop().addClass('menu-opened');
            $('.menuBlock').stop().addClass('menu-opened');
            $('header').addClass('menu-opened');
            $('.search').stop().removeClass('search-opened');
            _menuStatus = true;
            _searchStatus = false;
        } else {
            $(this).parent().stop().removeClass('menu-opened');
            $('.menuBlock').stop().removeClass('menu-opened');
            $('header').removeClass('menu-opened');
            $('.search').stop().removeClass('search-opened');
            _menuStatus = false;
        };
        e.preventDefault();
        console.log(_menuStatus);
    });
    var _searchStatus = false;
    // 打開search
    $('.top_search').off().click(function(e) {
        if (!_searchStatus) {
            $('.burger-container').stop().removeClass('menu-opened')
            $('.search').stop().addClass('search-opened');
            $('.menuBlock').stop().removeClass('menu-opened');
            $('header').stop().removeClass('menu-opened').addClass('menu-opened');
            _searchStatus = true;
            _menuStatus = false;
        } else {
            $('.search').stop().removeClass('search-opened');
            $('.menuBlock').stop().removeClass('menu-opened');
            $('header').stop().removeClass('menu-opened');
            _searchStatus = false;
        }
        e.preventDefault();
        console.log(_menuStatus);
    });
    $('.search').find('a.close').off().click(function(e) {
        $('.search').stop().removeClass('search-opened');
        $('.menuBlock').stop().removeClass('menu-opened');
        $('header').stop().removeClass('menu-opened');
        _searchStatus = false;
        e.preventDefault();
    });
    //大廳lobby輪播
    $('.lobby-a .banner .slider').slick({
        dots: false,
        arrow: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        pauseOnHover: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 展區
    $('.showgroundSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    $('.showgroundSlider_B').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // booth product slider
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        autoplay:false,
        loop:true,
        asNavFor: '.Slider-nav'
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: false,
        arrows: true,
        centerMode: false,
        autoplay:false,
        loop:true,
        focusOnSelect: true
    });
    // 設定iframe
    $('.company').find("[data-fancybox]").fancybox({
        iframe: {
            css: {
                width: '600px'
            }
        }
    });
    $('.product').find("[data-fancybox]").fancybox({
        iframe: {
            css: {
                // width: '800px'
            }
        }
    });
    $('.youtube').find("[data-fancybox]").fancybox({
        iframe: {
            css: {
                // width: '800px'
            }
        }
    });
    // $('.youtube a').click(function() {
    //     $('.youtube iframe').each(function() {
    //         $(this).stopVideo();
    //     });
    // });
    $('.youtube a').click(function() {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
    // chat
    var chat_status = false;
    $('.chat_window').hide();
    $('.function .text a').off().click(function(e) {
        if (!chat_status) {
            $('.chat_window').show().css('transform', 'translateX(' + 0 + 'px)');
            chat_status = true;
        }
        e.preventDefault();
    });
    $('.function .chat a').off().click(function(e) {
        if (!chat_status) {
            $('.chat_window').show().css('transform', 'translateX(' + 0 + 'px)');
            chat_status = true;
        }
        e.preventDefault();
    });
    $('.chat_window').find('a.close').off().click(function(e) {
        $('.chat_window').hide().css('transform', 'translateX(' + 360 + 'px)');
        chat_status = false;
        e.preventDefault();
    });
    // minimize
    $('.chat_window').find('a.minimize').off().click(function(e) {
        $(this).toggleClass('inverse');
        $('.chat_window').toggleClass('half');
        e.preventDefault();
    });
});
