import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './App.module.scss';
import Button from './components/button';
import Header from './components/header';
import Paragraph from './components/paragraph';

function App() {
	const { t } = useTranslation();

	return (
		<div className={classes.layoutWrapper}>
			<header>
				<Header />
			</header>

			<main>
				<div>
					<Button
						name="name test 2"
						id="123"
						onButtonClick={() => alert('Hello world 1!')}
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
				</div>
				<h1>{t('welcomeMessage')}</h1>
				<Paragraph text="Hello World" />
			</main>
			<footer />
		</div>
	);
}

export default App;
