import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Font Awesome
// eslint-disable-next-line no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Pages
import AboutMe from './pages/aboutme';
import GetInTouch from './pages/getintouch';
import Home from './pages/home';
import Languages from './pages/languages';

// Components
import Header from './components/header';

// Styles
import classes from './App.module.scss';

// Constants
import routerPath from './constants';

library.add(fab, fas);

function App() {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.title = t('appName');
		}
	});

	return (
		<div className={classes.layoutWrapper}>
			<header>
				<Header />
			</header>

			<main>
				<Routes>
					{Object.keys(routerPath[i18n.language]).map((key) => (
						<Route
							key={key}
							path={routerPath[i18n.language][key]}
							exact
							element={
								{
									home: <Home />,
									aboutMe: <AboutMe />,
									languages: <Languages />,
									getInTouch: <GetInTouch />,
								}[key]
							}
						/>
					))}
				</Routes>
			</main>
			<footer />
		</div>
	);
}

export default App;
