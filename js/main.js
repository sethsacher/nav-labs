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
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'careers', 'page7'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About', 'Delivery', 'Leadership', 'Testimonials', 'Downloads', 'Careers', 'Contact Us'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        // onLeave: function(index, nextIndex, direction){},
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
        // afterResize: function(){},
        // afterResponsive: function(isResponsive){},
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

  /*=========================================================================
      Leadership Carousel
  =========================================================================*/
      var testiSelector = $('#leadership_carousel');
  	testiSelector.owlCarousel({
          loop:false, /* Was originally loop:true */
          autoplay:false, /* Was originally autoplay:true */
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
    Testimonial Carousel
=========================================================================*/
    var testiSelector = $('#testimonial_carousel');
	testiSelector.owlCarousel({
        loop:false, /* Was originally loop:true */
        autoplay:false, /* Was originally autoplay:true */
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
            url: "https://nav-labs.us18.list-manage.com/subscribe/post?u=69e02de1c608bb5eed9a9be94&amp;id=4287a8011c"
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
