import React from 'react';
import { useTranslation } from 'react-i18next';

// import PropTypes from 'prop-types';
import classes from './Menubar.module.scss';

function Menubar() {
	const { t } = useTranslation();

	const menuItems = [t('home'), t('aboutMe'), 'languages', t('getInTouch')];

	return (
		<div>
			<nav className={classes.navbar}>
				<a className={classes.siteTitle} href="/">
					Portfolio
				</a>
				<ul>
					{menuItems.map((item) => (
						<li>
							<a href={`/${item.replace(/\s/g, '').toLowerCase()}`}>{item}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

Menubar.defaultProps = {
	text: '',
};

// Menubar.propTypes = {
// 	text: PropTypes.string,
// };

export default Menubar;
