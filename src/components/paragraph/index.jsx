import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Paragraph.module.scss';

function Paragraph({ text }) {
	return (
		<div className={classes.paragraph}>
			<p>{text}</p>
		</div>
	);
}

Paragraph.defaultProps = {
	text: '',
};

Paragraph.propTypes = {
	text: PropTypes.string,
};

export default Paragraph;
