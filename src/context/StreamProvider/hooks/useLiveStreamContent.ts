import { useEffect, useState, useContext } from 'react';
import { ContentfulContext } from '../../ContentfulProvider/contentfulContext';
import { ILiveSession } from '../../../types/contentfulTypes';

const useLiveStreamContent = () => {
  const [liveStreamContent, setLiveStreamContent] = useState<ILiveSession | undefined>();
	const [hasError, setHasError] = useState<boolean>(false);
	const contentDataAll = useContext(ContentfulContext);

	useEffect(() => {
		try {
			setLiveStreamContent(contentDataAll?.liveStreamMedia);
		} catch (error) {
			setHasError(true);
			console.log('error ======== ', error);
		}
	}, [contentDataAll?.liveStreamMedia]);

	return {
		liveStreamContent,
		hasError
	}
}

export default useLiveStreamContent;
