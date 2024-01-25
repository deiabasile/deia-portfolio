import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './App.module.scss';
import Button from './components/button';

function App() {
	const { t, i18n } = useTranslation();

	const changeLanguageHandler = (e) => {
		const languageValue = e.target.value;
		i18n.changeLanguage(languageValue);
	};

	return (
		<div className={classes.layoutWrapper}>
			<header />

			<main>
				<Button
					name="name test 2"
					id="123"
					onButtonClick={() => alert('Hello world 1!')}
					i18nKey="description.part2"
					label={t('button')}
					type="primary"
				/>
				<Button
					name="name test 2"
					id="123"
					onButtonClick={() => alert('Hello world 2!')}
					label={t('button')}
					type="secondary"
				/>
				<div className="App">
					{/* Select box to change language */}
					<select
						className="custom-select"
						style={{ width: 200 }}
						onChange={changeLanguageHandler}
					>
						<option value="en">English</option>
						<option value="fr">French</option>
						<option value="pt">Portuguese</option>
					</select>
					{/* call name of the variable from  the translation.json file to t() method */}
					<h1>{t('andreia')}</h1>
				</div>
			</main>

			<footer />
		</div>
	);
}

export default App;
