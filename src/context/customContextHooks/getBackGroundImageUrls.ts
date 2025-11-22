import { IImageCollection } from '../../types/contentfulTypes';

const getBackGroundImageUrls = (backGroundCollections: IImageCollection[]) => {
	return backGroundCollections.map((item: IImageCollection) => item.fields.file.url);
}

export default getBackGroundImageUrls;
