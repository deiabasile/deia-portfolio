import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from '../select';

import classes from './Header.module.scss';

function Header() {
	const { i18n } = useTranslation();

	const changeLanguageHandler = (event) => {
		i18n.changeLanguage(event.target.value);
	};

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
		</div>
	);
}

export default Header;
