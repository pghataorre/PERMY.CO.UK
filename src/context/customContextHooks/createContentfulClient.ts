import { createClient } from 'contentful';
import config from '../../config/config.mjs';

const createContentfulClient = () => {
	const { contentful: {
      spaceToken,
      accessToken,
      hostUrl
    }
  } = config;

  const contentFulClient = createClient({
    space: spaceToken,
    accessToken,
    host: hostUrl
  });

	return contentFulClient;
}

export default createContentfulClient;
