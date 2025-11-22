import { ICleanedMixContent } from '../../types/contentfulTypes';
import getAssetImageUrl from './getAssetImageUrl';

const cleanMusicEntries = (mixContentEntry: any): ICleanedMixContent => {
	return {
		pageTitle: mixContentEntry.items[0].fields.mixPageTitle,
		pageDescription: mixContentEntry.items[0].fields.mixPageDescription,
		mixTapeCollection: mixContentEntry.items[0].fields.mixEntries.map((mixItems: any, index: number) =>  {

			return {
				mixId: mixItems.fields.mixId,
				mixTapeTitle: mixItems.fields.mixTapeTitle,
				mixUrl: mixItems.fields.mixUrl,
				mixTapeImageUrl: getAssetImageUrl(mixContentEntry, mixItems)
			}
		})
	}
}

export default cleanMusicEntries;