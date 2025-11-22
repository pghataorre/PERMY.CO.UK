import RandomImage from '../components/RandomImage/RandomImage';
import BoxedContent from '../components/BoxedContent/BoxedContent';
import { useContext, useLayoutEffect } from 'react';
import { ContentfulContext } from '../context/ContentfulProvider/contentfulContext';
import SocialMediaList from '../components/SocialMediaList/SocialMediaList';
import GetInTouch from './GetInTouch';
import MyMixes from './MyMixes';
import LiveSession from './LiveSession';
import linkToSection from '../components/Header/HeaderHelpers';
import { StreamStateContext } from '../context/StreamProvider/streamStateContext';

const Default = (): JSX.Element => {
	const {content, hasError} = useContext(ContentfulContext);
	const { streamDateDetails } = useContext(StreamStateContext);

	useLayoutEffect(() => {
		const params = window.location.search;
		if (params === '?section=live-session-page') {
			linkToSection(undefined ,'live-session-page');
		}

	}, [streamDateDetails]);

	return (
		<>
			{!hasError ?
			(<>
				<div className="default-page" id="default-page">
					{ content && (
						<>
							<RandomImage contentEntry={content} />
							<BoxedContent contentEntry={content}/>
							<SocialMediaList />
							<h2>{content.pageTitle}</h2>
						</>
					)}
				</div>
				<div className="live-session" id="live-session-page">
					<LiveSession />
				</div>
				<div className="music-page" id="mixes-page">
					{ content && (<><MyMixes /></>)}
				</div>
				<div className="contact-page" id="contact-page">
					{ content && (<><GetInTouch /></>)}
				</div>
			</>)
			: (
			<div className="site-loading-error">
				<div className="site-loading-container">
					<h1>The site cant be loaded at the moment</h1>
					<button onClick={() => window.location.reload() }>Refresh and Retry</button>
				</div>
			</div>

			)}
		</>
	);
};

export default Default;
