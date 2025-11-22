import { ISocialMediaCollection } from '../../types/contentfulTypes';

const cleanSocialMediaEntries = (socialMediaEntries: any): ISocialMediaCollection => {
		return {
			socialMediaCollection: socialMediaEntries.items[0].fields.socialMediaLink.map((socialMediaItem: any) => {
				return {
					socialMediaName: socialMediaItem.fields.socialMediaName,
					socialMediaLink: socialMediaItem.fields.socialMediaLink,
					socialMediaIcon: socialMediaItem.fields.socialMediaImage.fields.file.url
				}
		}),
	}
}

export default cleanSocialMediaEntries;

