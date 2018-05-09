/*
	Appland Theme Scripts
*/

(function($){ "use strict";

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Pagepiling Active
=========================================================================*/
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        navigation: {
            'position': 'right',
            'tooltips': ['Home', 'About', 'Delivery', 'Leadership', 'Testimonials', 'Downloads', 'Contact Us']
        },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });

/*=========================================================================
	Screenshot Carousel Active
=========================================================================*/
$('#app_carousel').owlCarousel({
        loop:true,
        margin: 20,
        autoplay: false,
        responsiveClass:true,
        smartSpeed: 500,
        dots: false,
        nav:true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        responsive:{
            0:{
                items: 1,
                autoplay: false,
                margin: 0
            },
            600:{
                items: 3,
                autoplay: false
            },
            1000:{
                items: 6
            }
        }

    });

/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    var testiSelector = $('#testimonial_carousel');
	testiSelector.owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        responsive:{
            0:{
                items: 1
            },
            400:{
                items: 2,
                autoplay: false
            },
            600:{
                items: 3
            }
        }

    });

/*=========================================================================
	Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	});

/*=========================================================================
	MAILCHIMP
=========================================================================*/

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369"
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };


})(jQuery);
