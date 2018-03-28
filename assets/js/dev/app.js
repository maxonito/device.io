(function($) {
    'use strict'

    $(function() {
        $('[data-toggle="main-nav"]').click(function(e) {
            $('#main-nav').toggleClass('__active');
            $('html').toggleClass('__fixed __show-overlay');
        });

        $('[data-scroll]').click(function(e) {
            e.preventDefault();

            var el = $('.' + $(this).data('scroll'));

            if (el.length) {
                $('html, body').animate({
                    scrollTop: el.offset().top - $('.page-header').height()
                }, 300);
            } else {
                $('html, body').animate({
                    scrollTop: 0
                }, 300);
            }

            $('#main-nav').removeClass('__active');
            $('html').removeClass('__fixed __show-overlay');
        });

        $('[data-lightbox]').each(function() {
            var icon =
                '<div class="bordered-icon zoom-icon">' +
                '<svg class="__border">' +
                '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#circle"></use>' +
                '</svg>' +
                '<svg class="icon">' +
                '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#zoom-in"></use>' +
                '</svg>' +
                '</div>'
            $(this).append(icon);
        });

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            infinite: false,
            lazyLoad: 'ondemand',
            asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: false,
            infinite: false,
            focusOnSelect: true
        });

        $('.slick-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true,
            mobileFirst: true,
            infinite: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        fade: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        fade: false,
                        dots: false
                    }
                }

            ]
        });

        $('.kit-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            mobileFirst: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1010,
                    settings: 'unslick'
                }

            ]
        });
        $('form').submit(function(e) {
            e.preventDefault();
            var url = "/forms.php",
                form = $(this);

            form.addClass('__loading');

            $.ajax({
                type: 'POST',
                url: url,
                data: form.serialize(),
                success: function(data) {
                    form.addClass('__success');

                    setTimeout(function (){
                        form.removeClass('__success __loading');
                    }, 3500 )
                },
                error: function(xhr, status, error) {
                    form.removeClass('__loading');
                }
            });
        });

        $('[data-modal="close"]').click(function (){
            $('#modal').removeClass('__active');
        });

        $('[data-modal="open"]').click(function (){
            $('#modal').addClass('__active');
            var data = $(this).closest('.form').serialize();
        });

        $('[data-toggle-kit]').click(function (){
            let val = $(this).data('toggle-kit'),
                kitBlock = $('[data-kit=' + val + ']'),
                kitSlider = kitBlock.find('kit-carousel');

            kitBlock.slideToggle(400);
        });
        var wm = $(window).width();
        $('.for-telegram').click(function() {
            location.href = "tg://resolve?domain=nikname";
        });
        if ( wm <= 767) {
           $('.for-viber').click(function() {
            location.href = "viber://add?number=120345678910";
        }); 
       } else {
        $('.for-viber').click(function() {
            location.href = "viber://chat?number=+120345678910";
        });
       }
    });

})(jQuery);
