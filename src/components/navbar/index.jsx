import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useScreenDetector from '../../hooks/useScreenDetector';
import Button from '../button';
import classes from './Navbar.module.scss';

function Navbar({ menuItems }) {
	// const { t } = useTranslation();

	const [isTabletNavVisible, setIsTabletNavVisible] = useState(false);

	const { isTablet, isMobile } = useScreenDetector();

	const handleIsNavVisible = () => {
		if (isTablet || isMobile) {
			if (isTabletNavVisible) {
				setIsTabletNavVisible(false);
			}
		}
	};

	useEffect(() => {
		handleIsNavVisible();
	}, [isTablet, isMobile]);
	return (
		<div className={classes.wrapper}>
			<div className={classes.burgerButtonWrapper}>
				<Button
					onButtonClick={() => setIsTabletNavVisible(!isTabletNavVisible)}
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
								<Link
									to={`/${item
										.replace(/\s/g, '')
										.replace(/[áàÀ]/g, 'a')
										.replace(/í/g, 'i')
										.toLowerCase()}`}
								>
									{item}
								</Link>
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
