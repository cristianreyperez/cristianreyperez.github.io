/**
 * Skills carousel handler — works for the shortcode-rendered carousel.
 * Pauses animation on hover and respects prefers-reduced-motion.
 */
(function () {
	'use strict';

	function init() {
		var carousels = document.querySelectorAll('.crp-skills-carousel');

		carousels.forEach(function (carousel) {
			var track = carousel.querySelector('.crp-skills-carousel__track');
			if (!track) {
				return;
			}

			carousel.addEventListener('mouseenter', function () {
				track.style.animationPlayState = 'paused';
			});

			carousel.addEventListener('mouseleave', function () {
				track.style.animationPlayState = 'running';
			});

			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
				track.style.animationPlayState = 'paused';
			}
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();