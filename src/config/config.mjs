const config = {
	apiUrl: 'https://api.permy.co.uk',
	timingAllocation: 1000,
	dateLocaleString: 'en-GB',
	maxGameTime: 105,
	contentful: {
		spaceToken: 'amzqzg545ox9',
		accessToken: 'JYsLC2ZvAvEcn54uS3f_phf381yYrzql2SxznpPQSRE',
		hostUrl: 'https://cdn.contentful.com',
	},
	recapchaSiteKey: '6LdhxEwqAAAAANa2JCvVWIPxu2PeI9ogdjRdqEx8',
	maxEmailFreeTextLength: 300,
	preCountDownMins: 30,
	backgroundSpinnerUrl: './public/images/dj-xite-logo.png',
	defaultVideo: '/video/permy.mp4',
	contentFullDefaultKey: 'wbp1AL9SvovWWYCq6c92r',
	liveStreamCssClassNames: {
		mobile: 'live-stream-date-container-mobile',
		other: 'live-stream-date-container show-details'
	}
};

export default config;
