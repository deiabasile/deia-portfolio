import React from 'react';
import { useTranslation } from 'react-i18next';

function GetInTouch() {
	const { t } = useTranslation();

	return (
		<div>
			<p>{t('welcomeMessageGetInTouch')}</p>
		</div>
	);
}

export default GetInTouch;
