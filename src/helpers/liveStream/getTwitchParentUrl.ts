const getTwitchParentUrl = (): string => {
	if (window.location.href.includes('permy.co.uk')) {
		return 'www.permy.co.uk';
	}

	return 'localhost'
}

export default getTwitchParentUrl;
