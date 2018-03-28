(function ($) {

    $(function () {
        'use strict'

        var app = {
            options: {
                cssClasses: {
                    active: '__active'
                }
            },
            init: function () {
                this.bind();
            },

            bind: function () {
                this.blockToggle();
                this.sidebarToggle();
            },

            blockToggle: function() {
                var __active = this.options.cssClasses.active,
                    _target;

                $('[data-block-toggle]').click(function (e) {
                    var _target = $(this).data('block-toggle');

                    $(_target).toggleClass(__active);
                    $(this).toggleClass(__active);
                });
            },

            sidebarToggle: function() {
                $('[data-sidebar-toggle]').click(function (e) {
                    $('html').toggleClass('__sidebar-active');
                });
            }
        }

        app.init();


        $(".map-state.__active").hover(
        function () {
        $(this).addClass("__hover");
        },
        function () {
        $(this).removeClass("__hover");
        }
        );

        $(".map-state.__active").click(function () {
        $('#state').addClass('__active');
        });

        $('[data-country]').click(function(e) {
        if ($(this).data('country') != 'undefined') {
            $('.country-switch').attr('xlink:href', '#' + $(this).data('country'));
        }
        });

        $('.accordeon > .item').click(function(e) {
        if ($(this).hasClass('__active')) {
            return false;
        }

        $(this).addClass('__active');
        $(this).siblings().removeClass('__active');
        });

        $('.card').click(function (e) {
        $('#state').removeClass('__active');
        $('#s-card').addClass('__active');
        });

        $('[data-modal]').click(function () {
            var id = $(this).data('modal'),
                _modal = $('#' + id),
                _link = $(this).data('video'),
                frame = '<iframe class="video" src="https://www.youtube.com/embed/'+ _link  +'" frameborder="0" allowfullscreen></iframe>'

            _modal.addClass('__active');
            $('[data-modal="'+ $(this).data('modal') +'"]').removeClass('__active');
            $(this).addClass('__active');

            if (_link) {
                _modal.find('.content').html(frame);
            }
        });

        $('[data-modal-close]').click(function () {
            $('#'+ $(this).data('modal-close')).removeClass('__active');
            $('[data-modal="'+ $(this).data('modal-close') +'"]').removeClass('__active');
        });

        $("[data-map-state]").hover(
            function () {
                var val = $(this).data('map-state');
                $('[data-state="' + val + '"').addClass('__hover');
            },
            function () {
                var val = $(this).data('map-state');
                $('[data-state="' + val + '"').removeClass('__hover');
            }
        );

        $('[data-map-state]').each(function(i) {
            var val = $(this).data('map-state');

            $('[data-state="' + val + '"').addClass('__active');
        });

        if (window.location.pathname === '/users/') {
            $('.main-nav').children().removeClass('__active');
            $('.main-nav').children().eq(1).addClass('__active');
        } else if (window.location.pathname === '/countries/') {
            $('.main-nav').children().removeClass('__active');
            $('.main-nav').children().eq(2).addClass('__active');
        }

    });

})(jQuery);
