import { IContentEntry } from '../../types/contentfulTypes';

const cleanContentEntry = (contentEntry: any): IContentEntry => {
	return {
		pageTitle: contentEntry.fields.pageHeading,
		backgroundImagesCollection: contentEntry.fields.backImgs,
		description: contentEntry.fields.description
	}
}

export default cleanContentEntry;

