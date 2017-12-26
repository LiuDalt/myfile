/**
 * Created by wjy on 2016/1/18.
 */
var detail = {
    init: function() {
        this.navshow();
        this.backTotop();
        this.refresh();
        this.loginPart();
        this.analysis();
    },
    // 键盘锁
    isKeyDown: false,
    // 左侧菜单
    navshow: function() {
        $('.more-one').on('click', function() {
            var _this = $(this);
            var section = $(this).closest('li.detail-navlist');
            var other = $('li.detail-navlist');
            if (!section.hasClass('activekey-one')) {
                other.removeClass('navlist-active activekey-one');
                other.children('.navul-one').slideUp();
                other.children('.navul-two').slideUp();
                other.removeClass('navlist-active activekey-two');
                other.find('.more-two').removeClass('nav-up').addClass('nav-down');
                other.find('.more-one').removeClass('nav-up').addClass('nav-down');
                section.children('.navul-one').slideDown();
                section.addClass('navlist-active activekey-one');
                _this.removeClass('nav-down').addClass('nav-up');
            } else {
                section.children('.navul-one').slideUp();
                section.removeClass('navlist-active activekey-one');
                _this.removeClass('nav-up').addClass('nav-down');
            }
        });
        $('.more-two').on('click', function() {
            var _this = $(this);
            var section = $(this).closest('li.detail-navlist');
            var other = $('li.detail-navlist.navlist-active');
            var navlistOne = section.closest('.navlist-one');
            if (!section.hasClass('activekey-two')) {
                other.removeClass('navlist-active activekey-two');
                other.children('.navul-two').slideUp();
                other.find('.more-two').removeClass('nav-up').addClass('nav-down');
                section.children('.navul-two').slideDown();
                section.addClass('navlist-active activekey-two');
                _this.removeClass('nav-down').addClass('nav-up');
                navlistOne.removeClass('navlist-active');
            } else {
                section.children('.navul-two').slideUp();
                section.removeClass('navlist-active activekey-two');
                _this.removeClass('nav-up').addClass('nav-down');
                navlistOne.addClass('navlist-active activekey-one');
            }
        });
    },
    refresh: function() {
        var activeList = $('.detail-nav li');
        $.each(activeList, function(i, dom) {
            if ($(dom).hasClass('navlist-active')) {
                if ($(dom).hasClass('navlist-one')) {
                    $(dom).find('.more-one').trigger('click');
                } else {
                    $(dom).closest('.navlist-one').find('.more-one').trigger('click');
                    $(dom).closest('.detail-navlist').find('.more-two').trigger('click');
                    $(dom).addClass('navlist-active');
                }
            }
        });
        var ahref = $('.detail-navlist-title a');
        $.each(ahref, function(i, dom) {
            if ($(dom).attr('href') == '#') {
                $(dom).attr('href', 'javascript:;');
                $(dom).on('click', function() {
                    $(dom).next('.navlist-more').trigger('click');
                });
            }
        });
    },
    // 向上返回按钮
    backTotop: function() {
        var offset = 600,
            scroll_top_duration = 0,
            $back_to_top = $('.btn-backtotop');
        //hide or show the "back to top" link
        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? $back_to_top.show(): $back_to_top.hide();
        });
        //smooth scroll to top
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    },
    // 顶部右侧登陆栏
    loginPart: function() {
        var domain = {
            domain: function(url) {
                var durl = /http:\/\/([^\/]+)\//i;
                var hosts = url.match(durl);
                hosts = hosts[1];
                d_arr = hosts.split('.');
                hosts = d_arr[d_arr.length - 2] + '.' + d_arr[d_arr.length - 1];
                return hosts;
            },
            domain_pre: function(url) {
                var durl = /http:\/\/([^\/]+)\//i;
                var hosts = url.match(durl);
                hosts = hosts[1];
                d_arr = hosts.split('.');
                return d_arr[0];
            },
            domain_arr: function(url) {
                var durl = /http:\/\/([^\/]+)\//i;
                var hosts = url.match(durl);
                hosts = hosts[1];
                d_arr = hosts.split('.');
                return d_arr;
            },
            currentUrl: window.location.href
        };
        var host_arr = domain.domain_arr(window.location.href);
        var baseUrl = host_arr[1] + '.' + host_arr[2];
        var wwwUrl = "http://www." + baseUrl;
        var passportUrl = "http://passport." + baseUrl;

        var www_url = wwwUrl;
        var uname,
            reg = new RegExp("(^| )uname=([^;]*)(;|$)");
        if (document.cookie.match(reg) && document.cookie.match(reg)[2]) {
            uname = decodeURI(document.cookie.match(reg)[2]);
        }
        var isLogin = uname ? true : false;
        var login = {
            login: '<div class="un-loginbox">' +
                '<a href="' + passportUrl + '/sso/login" class="un-loginbox-out diaLoginBtn" target="_blank">' +
                '登录' +
                '</a>' +
                '<em>' +
                '|' +
                '</em>' +
                '<a href="' + passportUrl + '/sso/reg_phone" class="un-loginbox-out diaRegBtn" target="_blank">' +
                '注册' +
                '</a>' +
                '</div>',
            info: '<div class="userMenu">' +
                '<a href="' + www_url + '/member/" rel="nofollow" class="userMenu-name" target="_blank">' +
                uname +
                '<i class="arrow"></i>' +
                '</a>' +
                '<div class="userMenu-menu"><i class="arrow"></i>' +
                '<ul>' +
                '<li><a href="' + www_url + '/member/" target="_blank">个人中心</a></li>' +
                '<li><a href="' + www_url + '/member/mycourse.html" target="_blank">我的课程</a></li>' +
                '<li><a href="http://jiuye.jikexueyuan.com/myclass" target="_blank">我的就业班</a></li>' +
                '<li><a href="' + www_url + '/member/freevip.html" target="_blank">免费VIP</a></li>' +
                '<li><a href="' + www_url + '/member/mycode.html" target="_blank">我的F码</a></li>' +
                '<li><a href="' + www_url + '/member/setting.html" target="_blank">账号设置</a></li>' +
                '<li><a href="' + www_url + '/member/connect.html" target="_blank">一键绑定</a></li>' +
                '<li><a href="' + passportUrl + '/submit/logout">退出</a></li>' +
                '</ul>' +
                '</div>' +
                '</div>'
        };

        if (isLogin) {
            $('.head-loginbox').html(login.info);
        } else {
            $('.head-loginbox').html(login.login);
        }

    },
    analysis: function() {
        $('.detail-navlist').find('a').on('click', function() {
            if ($(this).hasClass('detail-navlist-wikilogo')) {
                return;
            }
            sa.track('wiki_detail', {
                name: '点击菜单'
            });
        });
        $('.right-top-img').on('click', function() {
            var type = $(this).attr('data-name');
            sa.track('wiki_detail', {
                name: '点击右上角图片',
                type: type
            });
        });
        $('.right-download').find('a').on('click', function() {
            var title = $(this).text();
            sa.track('wiki_detail', {
                name: '点击离线下载',
                type: title
            });
        });
        $('.resource-item').find('a').on('click', function() {
            sa.track('wiki_detail', {
                name: '点击相关资源'
            });
        });
        $('.head-catalog-list').find('a').on('click', function() {
            sa.track('wiki_detail', {
                name: '点击面包屑'
            });
        });
        $('.head-logo').on('click', function() {
            sa.track('wiki_detail', {
                name: '点击logo',
            });
        });
        $('.detail-copyright').find('a').on('click', function() {
            var type = $(this).attr('data-name');
            sa.track('wiki_detail', {
                name: '点击许可相关',
                type: type
            });
        });
        $('.previous-and-next').find('a').on('click', function() {
            var type = $(this).attr('data-type');
            var method;
            if (detail.isKeyDown) {
                method = '键盘';
            } else {
                method = '鼠标';
            }
            detail.isKeyDown = false;
            sa.track('wiki_detail', {
                name: '上一篇或下一篇',
                type: type,
                method: method
            });

        });
        $('.detail-navlist-wikilogo').on('click', function() {
            sa.track('wiki_detail', {
                name: '点击极客学院wiki'
            });
        });
        $('#header-loginbox').find('a').on('click', function() {
            sa.track('wiki_detail', {
                name: '点击右上角个人中心'
            });
        });
    }
};

detail.init();

$('body').keydown(function(e) {
    if ($('#ds-thread').find('textarea').is(':focus')) {
        return true;
    }
    // left arrow
    if ((e.keyCode) == 37) {
        if (document.getElementById('previous_link') != null) {
            document.getElementById('previous_link').click();
        }
        detial.isKeyDown = true;
    }
    // right arrow
    if ((e.keyCode) == 39) {
        if (document.getElementById('next_link') != null) {
            document.getElementById('next_link').click();
        }
        detial.isKeyDown = true;
    }
});
