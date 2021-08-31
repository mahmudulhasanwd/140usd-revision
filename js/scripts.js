(function ($) {
	$(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({
				'scrollTop': '0px'
			}, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		$('.first-slider').owlCarousel({
			loop: true,
			margin: 20,
			center: false,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1.2
				},
				768: {
					items: 2.3
				},
				960: {
					items: 3.2
				},
				1200: {
					items: 4
				},
				1920: {
					items: 4
				}
			}
		});

		var owl = $('.first-slider');
		owl.owlCarousel();
		// Go to the next item
		$('#next').click(function () {
			owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('#previous').click(function () {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			owl.trigger('prev.owl.carousel', [300]);
		})


		$('.second-slider').owlCarousel({
			loop: true,
			margin: 20,
			center: false,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1.2
				},
				768: {
					items: 2.2
				},
				960: {
					items: 3.2
				},
				1200: {
					items: 4
				},
				1920: {
					items: 4
				}
			}
		});

		
		$('.mobile-servizi-slider').owlCarousel({
			loop: true,
			margin: 0,
			center: true,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1.2,
					center: false
				},
				360: {
					items: 1.3,
					center: false
				},
				576: {
					items: 2
				},
				768: {
					items: 2
				},
				960: {
					items: 1
				},
				1200: {
					items: 1
				},
				1920: {
					items: 1
				}
			}
		});


		$('.mobile-enti-slider').owlCarousel({
			loop: true,
			margin: 0,
			center: true,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1.2
				},
				360: {
					items: 1.3,
					center: false
				},
				576: {
					items: 2
				},
				768: {
					items: 3,
					margin: 15,
					center: false
				},
				960: {
					items: 3.3,
					margin: 15,
					center: false
				},
				1200: {
					items: 1,
					margin: 15,
					center: false
				},
				1920: {
					items: 1
				}
			}
		});


	





		// code for searchbox

		$("#search").click(function () {
			$(".searchboxds").toggleClass("show")
		})

		$(document).on("click", function (event) {
			if (!$(event.target).closest($("#search, .searchboxds")).length) {
				$(".searchboxds").removeClass("show");
			}
		});

		$(".mobile-header-right a ").click(function () {
			$(".searchboxms").toggleClass("show")
		})

		$(document).on("click", function (event) {
			if (!$(event.target).closest($(".mobile-header-right a, .searchboxms")).length) {
				$(".searchboxms").removeClass("show");
			}
		});


		// code for mobile menu

		$("#menutigger").click(function () {
			$(".menusm").animate({
				"left": "0"
			})
			$("body").addClass("over");

		})

		$(".menusm-header span ").click(function () {
			$(".menusm").animate({
				"left": "-100%"
			})
			$("body").removeClass("over");

		})

		$(".menusm-link ul li#droptigger ").click(function () {
			$(".smdrop").slideToggle();
		})

		// code for responsive footer

		$(".footer-link").click(function () {
			$(this).children("ul").slideToggle();
		})

		// call to action
		$("a#callTo , a#callToTwo , a.callTwo").click (function (){
			var a =$(".quale-area").offset().top - 150
			$("html").animate ({
				scrollTop:a,
			})
		});


		$("a#azenda-one").click (function (){
			var b =$(".smart-area").offset().top - 150
			$("html").animate ({
				scrollTop:b,
			})
		});

		$("a#azenda-two").click (function (){
			var c =$(".smart-area-two").offset().top - 250
			$("html").animate ({
				scrollTop:c,
			})
		});

		$("a#conta-one ,a.conta-one").click (function (){
			var d =$(".quale-area").offset().top - 150
			$("html").animate ({
				scrollTop:d,
			})
		});


		$("a#shepa-one").click(function () {
			var shone = $("#callshepa-one").offset().top - 150
			$("html").animate({
				scrollTop: shone,
			})
		});

		$("a#shepa-two").click(function () {
			var shtwo = $("#callshepa-two").offset().top - 150
			$("html").animate({
				scrollTop: shtwo,
			})
		});

		$("a#shepa-three").click(function () {
			var shthree = $("#callshepa-three").offset().top - 150
			$("html").animate({
				scrollTop: shthree,
			})
		});

		$("a#shepa-four").click(function () {
			var shfour = $("#callshepa-four").offset().top - 150
			$("html").animate({
				scrollTop: shfour,
			})
		});

		













	});
})(jQuery);
