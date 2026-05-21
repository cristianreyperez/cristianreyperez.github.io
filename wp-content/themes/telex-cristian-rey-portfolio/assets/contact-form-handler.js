/**
 * Contact form handler — submits to Formspree for static hosting (GitHub Pages)
 * and falls back to the WordPress REST API when running on a live WordPress install.
 * Binds submit listeners on every `.crp-contact-form__form` present on the page.
 */
(function () {
	'use strict';

	function init() {
		var forms = document.querySelectorAll('.crp-contact-form__form');

		forms.forEach(function (form) {
			if (form.dataset.bound === '1') {
				return;
			}
			form.dataset.bound = '1';

			var statusEl = form.querySelector('.crp-contact-form__status');
			var submitBtn = form.querySelector('.crp-contact-form__button');
			var endpoint = form.dataset.endpoint;
			var wpEndpoint = form.dataset.wpEndpoint;
			var nonce = form.dataset.nonce;
			var successMessage = form.dataset.success || 'Message sent successfully.';

			if (!statusEl || !submitBtn || !endpoint) {
				return;
			}

			function setStatus(text, type) {
				statusEl.textContent = text;
				statusEl.className = 'crp-contact-form__status';
				if (type) {
					statusEl.classList.add('crp-contact-form__status--' + type);
				}
			}

			function validateEmail(email) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
			}

			function isFormspreeEndpoint(url) {
				return url && url.indexOf('formspree.io') !== -1;
			}

			form.addEventListener('submit', function (event) {
				event.preventDefault();

				var formData = {};
				var entries = new FormData(form);
				entries.forEach(function (value, key) {
					formData[key] = value;
				});

				if (!formData.name || formData.name.trim().length < 2) {
					setStatus('Please enter your name (at least 2 characters).', 'error');
					return;
				}
				if (!formData.email || !validateEmail(formData.email)) {
					setStatus('Please enter a valid email address.', 'error');
					return;
				}
				if (!formData.message || formData.message.trim().length < 10) {
					setStatus('Please enter a message (at least 10 characters).', 'error');
					return;
				}

				submitBtn.disabled = true;
				setStatus('Sending...', 'sending');

				var payload = {
					name: formData.name.trim(),
					email: formData.email.trim(),
					message: formData.message.trim(),
				};

				var headers = {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				};

				// Use Formspree as primary endpoint
				var targetEndpoint = endpoint;

				// If the primary endpoint is Formspree, use Formspree headers.
				// Otherwise fall back to WordPress REST API headers.
				if (!isFormspreeEndpoint(targetEndpoint)) {
					headers['X-WP-Nonce'] = nonce;
				}

				fetch(targetEndpoint, {
					method: 'POST',
					headers: headers,
					body: JSON.stringify(payload),
				})
					.then(function (response) {
						return response.json().then(function (result) {
							if (!response.ok) {
								// If Formspree failed, try WordPress REST API as fallback
								if (isFormspreeEndpoint(targetEndpoint) && wpEndpoint) {
									return fetch(wpEndpoint, {
										method: 'POST',
										headers: {
											'Content-Type': 'application/json',
											'X-WP-Nonce': nonce,
										},
										body: JSON.stringify(payload),
									}).then(function (wpResponse) {
										return wpResponse.json().then(function (wpResult) {
											if (!wpResponse.ok) {
												throw new Error(wpResult.message || result.error || 'Something went wrong. Please try again.');
											}
											form.reset();
											setStatus(successMessage, 'success');
										});
									});
								}
								throw new Error(result.error || result.message || 'Something went wrong. Please try again.');
							}
							form.reset();
							setStatus(successMessage, 'success');

							// Also save to WordPress if running on WP (best effort, don't block)
							if (isFormspreeEndpoint(targetEndpoint) && wpEndpoint && nonce) {
								fetch(wpEndpoint, {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
										'X-WP-Nonce': nonce,
									},
									body: JSON.stringify(payload),
								}).catch(function () {
									// Silent — Formspree already succeeded
								});
							}
						});
					})
					.catch(function (error) {
						setStatus(error.message, 'error');
					})
					.finally(function () {
						submitBtn.disabled = false;
					});
			});
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();