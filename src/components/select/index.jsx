import React from 'react';
import PropTypes from 'prop-types';

function Select({ options, onSelectChange }) {
	return (
		<select onChange={onSelectChange}>
			{options.length &&
				options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
		</select>
	);
}

Select.defaultProps = {
	options: [],
	onSelectChange: () => null,
};

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.arrayOf),
	onSelectChange: PropTypes.func,
};

export default Select;
