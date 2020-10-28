// 自行加入的JS請寫在這裡
$(function() {
    var burger = document.querySelector('.burger'),
        header = document.querySelector('.header');
    var _menuStatus = false;
    burger.onclick = function(e) {
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
    }
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
});
