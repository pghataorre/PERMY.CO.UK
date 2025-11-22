import createContentfulClient from './createContentfulClient';
import config from '../../config/config.mjs';

const getContentFulEntry = async (contentFullDefaultKey: string) => {
  const contentFulClient = createContentfulClient();
	const { getEntries, getEntry } = contentFulClient;

  try {
    const defaultPage = await getEntry(config.contentFullDefaultKey);
    const musicPageContent = await getEntries({
			content_type:'mixesCollection',
			order: ['sys.createdAt']
    });

    const socialMediaEntries = await getEntries({content_type: 'socialMediaList'});
    const liveStreams = await getEntries({content_type: 'liveStreams'});

    return {musicPageContent, defaultPage, socialMediaEntries, liveStreams};

  } catch (errors){
    console.log('error occurred - contentful call --- ', errors);
  }
}

export default getContentFulEntry;
