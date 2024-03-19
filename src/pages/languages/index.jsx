import React from 'react';
import { useTranslation } from 'react-i18next';

function Languages() {
	const { t } = useTranslation();

	return (
		<div>
			<p>{t('welcomeMessageLanguages')}</p>
		</div>
	);
}

export default Languages;
