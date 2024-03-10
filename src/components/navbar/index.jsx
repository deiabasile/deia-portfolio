import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import useScreenDetector from '../../hooks/useScreenDetector';
import Button from '../button';
import classes from './Navbar.module.scss';

function Navbar({ menuItems }) {
	// const { t } = useTranslation();

	// const [isNavVisible, setIsNavVisible] = useState(true);
	const [isTabletNavVisible, setIsTabletNavVisible] = useState(false);
	// console.log('test', isNavVisible);

	const { isTablet, isMobile } = useScreenDetector();
	// console.log('desktop', isDesktop);
	// console.log('tablet', isTablet);
	// console.log('mobile', isMobile);

	const handleIsNavVisible = () => {
		if (isTablet || isMobile) {
			if (isTabletNavVisible) {
				setIsTabletNavVisible(false);
			}
		}
	};

	useEffect(() => {
		// console.log('2', isTablet);
		handleIsNavVisible();

		console.log('use Effect ran');
	}, [isTablet, isMobile]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.burgerButtonWrapper}>
				<Button
					// why this doesnt worK?
					// name="name test 2"
					// id="123"
					onButtonClick={() => setIsTabletNavVisible(!isTabletNavVisible)}
					// label={t('button')}
					// type="primary"
				/>
			</div>
			{(isTabletNavVisible || (!isTablet && !isMobile)) && (
				<nav className={classes.navbar}>
					<a className={classes.siteTitle} href="/">
						Portfolio
					</a>
					<ul>
						{menuItems.map((item) => (
							<li key={item}>
								<a href={`/${item.replace(/\s/g, '').toLowerCase()}`}>{item}</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
}

Navbar.defaultProps = {
	menuItems: [],
};

Navbar.propTypes = {
	menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
