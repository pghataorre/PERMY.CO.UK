import config from "../config/config.mjs";

export const showCountDownTimer = (streamStartDate : string): boolean => {
    if (!streamStartDate) return false;

    const dateTimeNow = new Date();
    const actualStreamTime = new Date(`${streamStartDate}`);
    const streamTimeToShift = new Date(`${streamStartDate}`);
     const startingSoonTime = new Date(streamTimeToShift.setMinutes(streamTimeToShift.getMinutes() - config.preCountDownMins));

    return dateTimeNow.getTime() > startingSoonTime.getTime() && dateTimeNow.getTime() < actualStreamTime.getTime();
}

export const isStreamLive = (StreamStartDate : string, StreamEndDate: string): boolean => {
    if (!StreamStartDate || !StreamEndDate) return false;

    const dateTimeNow = new Date();
    const actualStreamStartTime = new Date(`${StreamStartDate}`);
    const actualStreamEndTime = new Date(`${StreamEndDate}`);

    return (dateTimeNow > actualStreamStartTime && dateTimeNow < actualStreamEndTime);
}

export const streamDateFormatted = (streamStartDateTime: string, streamEndDateTime: string): string => {
    const streamDate = startStreamDateLocale(streamStartDateTime);

    const startTime =  new Date(`${streamStartDateTime}`).toLocaleTimeString(config.dateLocaleString);
    const endTime =  new Date(`${streamEndDateTime}`).toLocaleTimeString(config.dateLocaleString);
    const streamDateTime = `${streamDate} - ${startTime} - ${endTime}`;

    return  streamDateTime;
}

export const startStreamDateLocale = (streamStartDateTime: string): string => {
    return new Date(`${streamStartDateTime}`).toLocaleDateString(config.dateLocaleString, {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export const getTwitchParentUrl = (): string => {
    if (window.location.href.includes('permy.co.uk')) {
        return 'www.permy.co.uk';
    }

    return 'localhost'
}

