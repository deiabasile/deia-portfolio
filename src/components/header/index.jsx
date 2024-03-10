import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from '../select';
import classes from './Header.module.scss';
import Navbar from '../navbar';

function Header() {
	const { i18n, t } = useTranslation();

	const changeLanguageHandler = (event) => {
		i18n.changeLanguage(event.target.value);
	};
	const menuItems = [t('home'), t('aboutMe'), t('languages'), t('getInTouch')];

	return (
		<div className={classes.wrapper}>
			<div className={classes.languageSelector}>
				<Select
					options={[
						{ value: 'en', label: 'English' },
						{ value: 'fr', label: 'French' },
						{ value: 'pt', label: 'Portuguese' },
					]}
					onSelectChange={changeLanguageHandler}
				/>
			</div>
			<Navbar menuItems={menuItems} />
		</div>
	);
}

export default Header;
