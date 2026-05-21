import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const {
		heading,
		description,
		successMessage,
		namePlaceholder,
		emailPlaceholder,
		messagePlaceholder,
		submitLabel,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'crp-contact-form',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Form Settings', 'cristian-rey-perez' ) }>
					<TextControl
						label={ __( 'Heading', 'cristian-rey-perez' ) }
						value={ heading }
						onChange={ ( val ) => setAttributes( { heading: val } ) }
					/>
					<TextareaControl
						label={ __( 'Description', 'cristian-rey-perez' ) }
						value={ description }
						onChange={ ( val ) => setAttributes( { description: val } ) }
					/>
					<TextControl
						label={ __( 'Success Message', 'cristian-rey-perez' ) }
						value={ successMessage }
						onChange={ ( val ) => setAttributes( { successMessage: val } ) }
					/>
					<TextControl
						label={ __( 'Submit Button Label', 'cristian-rey-perez' ) }
						value={ submitLabel }
						onChange={ ( val ) => setAttributes( { submitLabel: val } ) }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Placeholders', 'cristian-rey-perez' ) }
					initialOpen={ false }
				>
					<TextControl
						label={ __( 'Name Placeholder', 'cristian-rey-perez' ) }
						value={ namePlaceholder }
						onChange={ ( val ) =>
							setAttributes( { namePlaceholder: val } )
						}
					/>
					<TextControl
						label={ __( 'Email Placeholder', 'cristian-rey-perez' ) }
						value={ emailPlaceholder }
						onChange={ ( val ) =>
							setAttributes( { emailPlaceholder: val } )
						}
					/>
					<TextControl
						label={ __( 'Message Placeholder', 'cristian-rey-perez' ) }
						value={ messagePlaceholder }
						onChange={ ( val ) =>
							setAttributes( { messagePlaceholder: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				{ heading && (
					<h3 className="crp-contact-form__heading">{ heading }</h3>
				) }
				{ description && (
					<p className="crp-contact-form__description">
						{ description }
					</p>
				) }
				<div className="crp-contact-form__fields">
					<div className="crp-contact-form__field">
						<label className="crp-contact-form__label">
							{ __( 'Name', 'cristian-rey-perez' ) }
						</label>
						<input
							type="text"
							className="crp-contact-form__input"
							placeholder={ namePlaceholder }
							disabled
							tabIndex={ -1 }
						/>
					</div>
					<div className="crp-contact-form__field">
						<label className="crp-contact-form__label">
							{ __( 'Email', 'cristian-rey-perez' ) }
						</label>
						<input
							type="email"
							className="crp-contact-form__input"
							placeholder={ emailPlaceholder }
							disabled
							tabIndex={ -1 }
						/>
					</div>
					<div className="crp-contact-form__field">
						<label className="crp-contact-form__label">
							{ __( 'Message', 'cristian-rey-perez' ) }
						</label>
						<textarea
							className="crp-contact-form__textarea"
							rows="5"
							placeholder={ messagePlaceholder }
							disabled
							tabIndex={ -1 }
						/>
					</div>
				</div>
				<div className="crp-contact-form__submit-row">
					<button
						type="button"
						className="crp-contact-form__button"
						disabled
						tabIndex={ -1 }
					>
						{ submitLabel }
					</button>
				</div>
			</div>
		</>
	);
}