document.addEventListener( 'DOMContentLoaded', function () {
	var wrappers = document.querySelectorAll( '.wp-block-crp-contact-form' );

	wrappers.forEach( function ( wrapper ) {
		var form = wrapper.querySelector( '.crp-contact-form__form' );
		if ( ! form ) {
			return;
		}

		var statusEl = form.querySelector( '.crp-contact-form__status' );
		var submitBtn = form.querySelector( '.crp-contact-form__button' );
		var endpoint = form.dataset.endpoint;
		var wpEndpoint = form.dataset.wpEndpoint;
		var nonce = form.dataset.nonce;
		var successMessage = form.dataset.success || 'Message sent successfully.';

		if ( ! statusEl || ! submitBtn || ! endpoint ) {
			return;
		}

		function setStatus( text, type ) {
			statusEl.textContent = text;
			statusEl.className = 'crp-contact-form__status';
			if ( type ) {
				statusEl.classList.add( 'crp-contact-form__status--' + type );
			}
		}

		function validateEmail( email ) {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
		}

		function isFormspree( url ) {
			return url && url.indexOf( 'formspree.io' ) !== -1;
		}

		function validateForm( data ) {
			if ( ! data.name || data.name.trim().length < 2 ) {
				return 'Please enter your name (at least 2 characters).';
			}
			if ( ! data.email || ! validateEmail( data.email ) ) {
				return 'Please enter a valid email address.';
			}
			if ( ! data.message || data.message.trim().length < 10 ) {
				return 'Please enter a message (at least 10 characters).';
			}
			return null;
		}

		form.addEventListener( 'submit', function ( event ) {
			event.preventDefault();

			var formData = {};
			var entries = new FormData( form );
			entries.forEach( function ( value, key ) {
				formData[ key ] = value;
			} );

			var validationError = validateForm( formData );
			if ( validationError ) {
				setStatus( validationError, 'error' );
				return;
			}

			submitBtn.disabled = true;
			setStatus( 'Sending...', 'sending' );

			var payload = {
				name: formData.name.trim(),
				email: formData.email.trim(),
				message: formData.message.trim(),
			};

			var headers = {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			};

			if ( ! isFormspree( endpoint ) ) {
				headers[ 'X-WP-Nonce' ] = nonce;
			}

			fetch( endpoint, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify( payload ),
			} )
				.then( function ( response ) {
					return response.json().then( function ( result ) {
						if ( ! response.ok ) {
							throw new Error(
								result.error || result.message || 'Something went wrong. Please try again.'
							);
						}
						form.reset();
						setStatus( successMessage, 'success' );

						// Also save to WP if available (best effort)
						if ( isFormspree( endpoint ) && wpEndpoint && nonce ) {
							fetch( wpEndpoint, {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
									'X-WP-Nonce': nonce,
								},
								body: JSON.stringify( payload ),
							} ).catch( function () {} );
						}
					} );
				} )
				.catch( function ( error ) {
					setStatus( error.message, 'error' );
				} )
				.finally( function () {
					submitBtn.disabled = false;
				} );
		} );
	} );
} );