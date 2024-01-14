import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Button.module.scss';

function Button({ name, id, onButtonClick, label, type, isDisabled }) {
	return (
		<button
			className={type === 'primary' ? classes.primary : classes.secondary}
			disabled={isDisabled}
			id={id}
			name={name}
			onClick={onButtonClick}
			type="button"
		>
			{label}
		</button>
	);
}

Button.defaultProps = {
	id: '',
	isDisabled: false,
	label: '',
	name: '',
	onButtonClick: () => null,
	type: 'Primary',
};

Button.propTypes = {
	id: PropTypes.string,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
	onButtonClick: PropTypes.func,
	type: PropTypes.string,
};

export default Button;
