// 自行加入的JS請寫在這裡
$(function() {
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
    $('.lobby-c .banner .slider').slick({
        dots: false,
        arrow: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        pauseOnHover:true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 展區C
    $('.showgroundSlider_C').slick({
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
});
