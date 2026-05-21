document.addEventListener( 'DOMContentLoaded', function () {
	var carousels = document.querySelectorAll( '.crp-skills-carousel' );

	carousels.forEach( function ( carousel ) {
		var track = carousel.querySelector( '.crp-skills-carousel__track' );
		if ( ! track ) {
			return;
		}

		// Pause animation on hover for accessibility
		carousel.addEventListener( 'mouseenter', function () {
			track.style.animationPlayState = 'paused';
		} );

		carousel.addEventListener( 'mouseleave', function () {
			track.style.animationPlayState = 'running';
		} );

		// Pause when prefers-reduced-motion
		if ( window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
			track.style.animationPlayState = 'paused';
		}
	} );
} );