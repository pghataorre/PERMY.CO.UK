import config from '../../config/config.mjs';

const startStreamDateLocale = (streamStartDateTime: string): string => {
	return new Date(`${streamStartDateTime}`).toLocaleDateString(config.dateLocaleString, {
		weekday: "short",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default startStreamDateLocale;