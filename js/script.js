$(document).ready(function () {

	// collapse navbar when click
	$(document).on('click', '.navbar-collapse', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});

	//Initialize filterizr with default options
	$('.filtr-container').filterizr();
	$(function () {
		//Simple filter controls
		  $('.portfolio-nav li').on('click', function () {
			   $('.portfolio-nav li').removeClass('active');
			   $(this).addClass('active');
		  });
	});
    





	/**
	 * =======================================
	 * OPEN POUP VIDEO
	 * =======================================
	 */
	jQuery('#myModal').on('hidden.bs.modal', function (e) {
		jQuery('#myModal .video').attr("src", jQuery("#myModal  .video").attr("src"));
	});

	//  ADD THE ANIMATION TO THE VIDEO
	$(".modal").each(function (index) {
		$(this).on('show.bs.modal', function (e) {
			var open = $(this).attr('data-easein');
			if (open == 'shake') {
				$('.modal-dialog').velocity('callout.' + open);
			} else if (open == 'pulse') {
				$('.modal-dialog').velocity('callout.' + open);
			} else if (open == 'tada') {
				$('.modal-dialog').velocity('callout.' + open);
			} else if (open == 'flash') {
				$('.modal-dialog').velocity('callout.' + open);
			} else if (open == 'bounce') {
				$('.modal-dialog').velocity('callout.' + open);
			} else if (open == 'swing') {
				$('.modal-dialog').velocity('callout.' + open);
			} else {
				$('.modal-dialog').velocity('transition.' + open);
			}
		});
	});


	/**
	 * =======================================
	 * PORTFOLIO CAROUSEL
	 * =======================================
	 */
	$('.testimonial').owlCarousel({
		loop: true,
		nav: true,
		navText: true,
		dots: false,
		items: 1,
		responsiveClass: true,
		responsive: {
			0: {
				nav: false,
				dots: true
			},
			768: {
				nav: true,
				navText: [" <i class='icon-left-thin'></i> ", " <i class='icon-right-thin'></i> "],
				dots: false
			}
		}
	});

	/**
	 * =======================================
	 * CLIENT CAROUSEL
	 * =======================================
	 */
	$('#client').owlCarousel({
		loop: true,
		items: 6,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 2
			},
			// breakpoint from 420 up
			480: {
				items: 3
			},
			// breakpoint from 768 up
			768: {
				items: 4
			}
		}
	});
   

	/**
	 * =======================================
	 * WOW ANIMATION
	 * =======================================
	 */
	var wow = new WOW({
		mobile: false
	});
	wow.init();

});
