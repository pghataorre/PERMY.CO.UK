import config from '../../config/config.mjs';
import startStreamDateLocale from './startStreamDateLocale';

const streamDateFormatted = (streamStartDateTime: string, streamEndDateTime: string): string => {
	const streamDate = startStreamDateLocale(streamStartDateTime);

	const startTime =  new Date(`${streamStartDateTime}`).toLocaleTimeString(config.dateLocaleString);
	const endTime =  new Date(`${streamEndDateTime}`).toLocaleTimeString(config.dateLocaleString);
	const streamDateTime = `${streamDate} - ${startTime} - ${endTime}`;

	return  streamDateTime;
}

export default streamDateFormatted;
