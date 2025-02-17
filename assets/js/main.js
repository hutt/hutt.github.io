/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

	js v2.1
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}

// Lightbox.
		$('.lightbox')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.lightbox'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.gallery'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|jpeg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);


// Seiten-Funktionen
// YouTube-Video laden
var playYTStatus = 0;

function playVideo() {

	if (playYTStatus == 0){

		$(".yt").each(function(index){
			$(this).find('img').addClass('grayedout');
			$(this).children('.confirm').show();
		});

		playYTStatus = 1;

	} else if (playYTStatus == 1){

		$(".yt").each(function(index){

			//get video id from data selector in dom
			var vid = $(this).data("vid");

			// build iframe embed code
			var videoFrame = '<iframe src="https://www.youtube-nocookie.com/embed/' + vid + '" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

			//remove image
			$(this).empty();
			$(this).removeClass();
			$(this).addClass('video');

			// inject iframe
			$(this).append(videoFrame);

		});

		playYTStatus = 2;

	}
}

// Sektionen ausklappen, wenn Anker gesetzt ist
function getAnchor() {
	var urlParts = document.URL.split('#');	
    return (urlParts.length > 1) ? urlParts[1] : null;
}

function getGetVar() {
	var urlParts = document.URL.split('?');
	return (urlParts.length > 1) ? urlParts[1] : null;
}

function scrollToAnchor(aid){
    var aTag = $("section[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

if (getAnchor() == 'jobs' || getGetVar() == 'jobs') {
	$('#referenzen').slideToggle('slow', function(e){
		if ($('#referenzen').is(':hidden')) {
			$('#referenzen-toggle').addClass('primary');
		} else { 
			$('#referenzen-toggle').removeClass('primary'); 
		} 
	});

	if(getGetVar() != null) {
		scrollToAnchor('referenzen');
	}
}

if (getAnchor() == 'kampagnen' || getGetVar() == 'kampagnen') {
	$('#kampagnen').slideToggle('slow', function(e){
		if ($('#kampagnen').is(':hidden')) {
			$('#kampagnen-toggle').addClass('primary');
		} else { 
			$('#kampagnen-toggle').removeClass('primary'); 
		} 
	});

	if(getGetVar() != null) {
		scrollToAnchor('kampagnen');
	}
}

if (getAnchor() == 'projekte' || getGetVar() == 'projekte') {
	$('#kampagnen').slideToggle('slow', function(e){
		if ($('#kampagnen').is(':hidden')) {
			$('#kampagnen-toggle').addClass('primary');
		} else { 
			$('#kampagnen-toggle').removeClass('primary'); 
		} 
	});

	if(getGetVar() != null) {
		scrollToAnchor('kampagnen');
	}
}

//Begrüßung abhängig von Uhrzeit.
const h = new Date().getHours();
var begruessung = "";

switch (true) {
	case (h < 6):
		begruessung = "N'Abend.";
		break;
	case (h < 23):
		begruessung = "Moin.";
		break;
	default:
		begruessung = "N'Abend.";
		break;
}
$('#begruessung').html(begruessung);