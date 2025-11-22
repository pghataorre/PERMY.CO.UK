import { useEffect, useState, useContext } from 'react';
import { ContentfulContext } from '../ContentfulProvider/contentfulContext'
import { showCountDownTimer, isStreamLive, streamDateFormatted } from '../../utils/utlis';
import { ILiveSession, ILiveStreamData, TStreamDateDetails } from '../../types/contentfulTypes';
import { StreamStateContext } from './streamStateContext';
import config from '../../config/config.mjs';

const StreamStateProvider = ({children}: {children: JSX.Element}): JSX.Element  => {
  const [liveStreamContent, setLiveStreamContent] = useState<ILiveSession | undefined>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [streamDateDetails, setStreamDateDetails] = useState<TStreamDateDetails[] | undefined>();
  const [isStreamInProgress, setIsStreamInProgress] = useState<boolean>(false);

	const contentDataAll = useContext(ContentfulContext);

	useEffect(() => {
		try {
			setLiveStreamContent(contentDataAll?.liveStreamMedia);
		} catch (error) {
			setHasError(true);
			console.log('error ======== ', error);
		}
	}, [contentDataAll?.liveStreamMedia]);

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
							styleClass: 'live-stream-date-container-mobile',
							originalStartTime: liveStreamContent?.startDateTime
					},
					{
							liveStreamTitle: liveStreamContent?.liveStreamTitle,
							startDateTime,
							showTimerFlag,
							styleClass: 'live-stream-date-container show-details',
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

	const streamStatusData = {
		liveStreamContent,
		hasError,
		streamDateDetails,
		isStreamInProgress
	} as ILiveStreamData;

	return (
		<StreamStateContext.Provider value={streamStatusData}>
			{children}
		</StreamStateContext.Provider>
	);
};

export default StreamStateProvider;


