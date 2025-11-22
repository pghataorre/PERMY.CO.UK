import { useEffect, useState, useContext } from 'react';
import config from '../../../config/config.mjs';
import { ContentfulContext } from '../../ContentfulProvider/contentfulContext';
import { TStreamDateDetails } from '../../../types/contentfulTypes';
import { streamDateFormatted, showCountDownTimer, isStreamLive } from '../../../helpers/liveStream';

const useStreamDetails = () => {
	const [streamDateDetails, setStreamDateDetails] = useState<TStreamDateDetails[] | undefined>();
	const [isStreamInProgress, setIsStreamInProgress] = useState<boolean>(false);
	const context = useContext(ContentfulContext);
	const liveStreamContent = context?.liveStreamMedia;

	useEffect(() => {
		const startDateTime = streamDateFormatted(`${liveStreamContent?.startDateTime}`, `${liveStreamContent?.endDateTime}`);
		const showTimerFlag = showCountDownTimer(liveStreamContent?.startDateTime || '');

		setStreamDateDetails([
			{
				liveStreamTitle: liveStreamContent?.liveStreamTitle,
				startDateTime,
				showTimerFlag,
				styleClass: config.liveStreamCssClassNames.mobile,
				originalStartTime: liveStreamContent?.startDateTime
			},
			{
				liveStreamTitle: liveStreamContent?.liveStreamTitle,
				startDateTime,
				showTimerFlag,
				styleClass: config.liveStreamCssClassNames.other,
				originalStartTime: liveStreamContent?.startDateTime
			}
		]);

	}, [liveStreamContent]);

	if (showCountDownTimer(liveStreamContent?.startDateTime || ''))  {
		const interval = setInterval(() => {
			const startDateTime = streamDateFormatted(`${liveStreamContent?.startDateTime}`, `${liveStreamContent?.endDateTime}`);
			const showTimerFlag = showCountDownTimer(liveStreamContent?.startDateTime || '');

			if (!showTimerFlag) {
				clearInterval(interval);
				setStreamDateDetails([
					{
						liveStreamTitle: liveStreamContent?.liveStreamTitle,
						startDateTime,
						showTimerFlag,
						styleClass: config.liveStreamCssClassNames.mobile,
						originalStartTime: liveStreamContent?.startDateTime
					},
					{
						liveStreamTitle: liveStreamContent?.liveStreamTitle,
						startDateTime,
						showTimerFlag,
						styleClass: config.liveStreamCssClassNames.other,
						originalStartTime: liveStreamContent?.startDateTime
					}
				]);
			}
		}, 1000);
	}

	if (isStreamLive(liveStreamContent?.startDateTime || '', liveStreamContent?.endDateTime || '')) {
		const interval = setInterval(() => {
			if (!isStreamLive(liveStreamContent?.startDateTime || '', liveStreamContent?.endDateTime || '')) {
				clearInterval(interval);
				setIsStreamInProgress(false);
			} else {
				if(!isStreamInProgress) {
					setIsStreamInProgress(true);
				}
			}
		}, 3000);

		console.log('IS LIVE');
	}

	return {
		streamDateDetails,
		isStreamInProgress
	}
}

export default useStreamDetails;
