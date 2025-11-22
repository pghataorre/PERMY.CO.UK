const getAssetImageUrl = (mixContentEntry: any, mixItems: any) => {
	const imagePath = mixContentEntry.includes.Asset.filter((assetItem: any) => {
		return assetItem.sys.id === mixItems.fields.mixtapeMediaItems[0].sys.id
	});

	return imagePath[0].fields.file.url;
}

export default getAssetImageUrl;