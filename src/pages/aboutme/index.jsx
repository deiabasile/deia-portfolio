import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutMe() {
	const { t } = useTranslation();
	return (
		<div>
			<p>{t('welcomeMessageAboutMe')}</p>
		</div>
	);
}

export default AboutMe;
