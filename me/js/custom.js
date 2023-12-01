;(function () {
	
	'use strict';

	// preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};


	var burgerMenu = function() {

		$('.js-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#main-nav > .js-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#main-nav > .js-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	var sliderMain = function() {
		
	  	$('#banner .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#banner .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#banner .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};
	
	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#counter-animate').length > 0 ) {
			$('#counter-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var typed = function () {
			//------- Typed --------// 
			var typed = new Typed('#typed-slide-1', {
				stringsElement: '#typed-strings-slide-1',
				backSpeed: 40,
				typeSpeed: 40,
				loop: true
			});

			//------- Typed --------// 
			var typed = new Typed('#typed-slide-2', {
				stringsElement: '#typed-strings-slide-2',
				backSpeed: 40,
				typeSpeed: 40,
				loop: true
			});
		}

	var back_to_top = function () {
	$(window).on('scroll', function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	}

	var header_sticky = function () {
	$(window).on('scroll', function () {
			if ($(this).scrollTop() > 50) {
				$(".header").css('background', '#000');
			} else {
				$(".header").css('background', 'transparent');
			}
		});
	}

	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		counter();
		sliderMain();
		contentWayPoint();
		counterWayPoint();
		typed();
		back_to_top();
		header_sticky();
	});


}());

/*------------------
	Isotope Filter
--------------------*/
var $container = $('.work-gallery');
	$container.imagesLoaded().progress( function() {
		$container.isotope();
	});

$('.work-filter li').on('click', function(){
	$(".work-filter li").removeClass("active");
	$(this).addClass("active");
	var selector = $(this).attr('data-filter');
	$container.imagesLoaded().progress( function() {
		$container.isotope({
			filter: selector,
		});
	});
	return false;
});
