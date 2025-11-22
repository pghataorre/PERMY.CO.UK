import config from "../../config/config.mjs";

const showCountDownTimer = (streamStartDate : string): boolean => {
	if (!streamStartDate) return false;

	const dateTimeNow = new Date();
	const actualStreamTime = new Date(streamStartDate);
	const streamTimeToShift = new Date(streamStartDate);
		const startingSoonTime = new Date(streamTimeToShift.setMinutes(streamTimeToShift.getMinutes() - config.preCountDownMins));

	return dateTimeNow.getTime() > startingSoonTime.getTime() && dateTimeNow.getTime() < actualStreamTime.getTime();
}

export default showCountDownTimer;
