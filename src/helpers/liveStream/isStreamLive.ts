
const isStreamLive = (StreamStartDate : string, StreamEndDate: string): boolean => {
	if (!StreamStartDate || !StreamEndDate) return false;

	const dateTimeNow = new Date();
	const actualStreamStartTime = new Date(`${StreamStartDate}`);
	const actualStreamEndTime = new Date(`${StreamEndDate}`);

	return (dateTimeNow > actualStreamStartTime && dateTimeNow < actualStreamEndTime);
}

export default isStreamLive;
