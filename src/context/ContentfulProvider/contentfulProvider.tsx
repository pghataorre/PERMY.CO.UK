import { useEffect, useState, useContext } from 'react';
import { ContentfulContext } from './contentfulContext';
import { getContentFulEntry, cleanContentEntry, cleanMusicEntries, cleanSocialMediaEntries, cleanLiveStreamsEntry } from '../customContextHooks';
import { IContentEntry, ICleanedMixContent, ISocialMediaCollection, ILiveSession, IContentCollection } from '../../types/contentfulTypes';
import config from '../../config/config.mjs'

const ContentfulProvider = ({children}: {children: JSX.Element}): JSX.Element  => {
  const [content, setContent] =  useState<IContentEntry>();
  const [musicContent, setMusicContent] = useState<ICleanedMixContent>();
  const [socialMedia, setSocialMedia] = useState<ISocialMediaCollection>();
	const [liveStreamMedia, setLiveStreamMedia] = useState<ILiveSession>()

  const [hasError, setHasError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        const originalContent = await getContentFulEntry(config.contentFullDefaultKey);
        const cleanedEntry = cleanContentEntry(originalContent!.defaultPage);
        const cleanedMusicEntries = cleanMusicEntries(originalContent!.musicPageContent);
        const cleanedSocialMediaEntries = cleanSocialMediaEntries(originalContent?.socialMediaEntries);
        const cleanLiveStreamsEntries = cleanLiveStreamsEntry(originalContent?.liveStreams as IContentCollection);
        setContent(cleanedEntry);
        setMusicContent(cleanedMusicEntries);
        setSocialMedia(cleanedSocialMediaEntries);
				setLiveStreamMedia(cleanLiveStreamsEntries);
      } catch(error) {
        setHasError(true);
        console.log('error ======== ', error);
      }
    })();
  }, []);

  return (
    <ContentfulContext.Provider value={{content, hasError, musicContent, socialMedia, liveStreamMedia}}>
      {children}
    </ContentfulContext.Provider>
  );
};

export default ContentfulProvider;

export const useParentProvider = () => useContext(ContentfulContext);
