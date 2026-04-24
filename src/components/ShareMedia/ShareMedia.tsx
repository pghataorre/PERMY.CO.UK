import FaceBookIcon from "../Icons/FaceBookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import ShareIcon from "../Icons/ShareIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import { TMixTapeItem } from '../../types/mixTapeDetailTypes';
import config from '../../config/config.mjs';
import './ShareMedia.scss';

const ShareMedia = ({ mixItem }: TMixTapeItem) => {
	const { baseUrl, liveMixPathName, shareLinkPath } = config;
	const fullBaseUrlWithQuery = `${baseUrl}?${shareLinkPath}=`
	const liveSessionUrl = `${fullBaseUrlWithQuery}${liveMixPathName}`;
	const mixItemUrl = mixItem?.mixUrl
		? mixItem?.mixUrl
		: liveSessionUrl;
	const whatsAppText = mixItem?.mixUrl
		? encodeURI(`I want to share this music mix with you from ---  ${fullBaseUrlWithQuery}${mixItem?.mixId}`)
		: encodeURI(`I want to share A Live Stream mix from --- ${liveSessionUrl}`);

	return (
		<div className="social-media-share-container">
			<button className="share-button">
				<ShareIcon />
				<ul className="social-media-list">
					<li>
						<a href={`https://wa.me/?text=${whatsAppText}`} target="_blank" rel="noreferrer">
							<WhatsAppIcon />
						</a>
					</li>
					<li>
						<a href={`https://www.facebook.com/sharer/sharer.php?u=${mixItemUrl}`} target="_blank" rel="noreferrer">
							<FaceBookIcon />
						</a>
					</li>
					<li>
						<a href="instagram://user?username=permjitghataorre" target="_blank" rel="noreferrer">
							<InstagramIcon />
						</a>
					</li>
				</ul>
			</button>
		</div >
	)
}

export default ShareMedia;