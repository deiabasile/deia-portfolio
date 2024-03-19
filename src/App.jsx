import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

function App() {
	const { i18n } = useTranslation();

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
