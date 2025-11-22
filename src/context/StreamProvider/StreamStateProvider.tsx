import { ILiveStreamData } from '../../types/contentfulTypes';
import { StreamStateContext } from './streamStateContext';
import {useLiveStreamContent, useStreamDetails } from './hooks';

const StreamStateProvider = ({children}: {children: JSX.Element}): JSX.Element  => {
	const {
		liveStreamContent,
		hasError
	} = useLiveStreamContent();

	const {
		streamDateDetails,
		isStreamInProgress
	} = useStreamDetails();

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


