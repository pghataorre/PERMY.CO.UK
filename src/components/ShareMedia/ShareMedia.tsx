import FaceBookIcon from "../Icons/FaceBookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import ShareIcon from "../Icons/ShareIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import './ShareMedia.scss';
import { TMixTapeItem } from '../../types/mixTapeDetailTypes';
import config from '../../config/config.mjs';


const ShareMedia = ({ mixItem }: TMixTapeItem) => {
	const liveSessionUrl = `${config.baseUrl}?section=live-session-page`;
	const mixItemUrl = mixItem?.mixUrl
		? mixItem?.mixUrl
		: liveSessionUrl;


	const whatsAppText = mixItem?.mixUrl
		? encodeURI(`I want to share this music mix with you from ---  ${config.baseUrl}#${mixItem?.mixId}`)
		: encodeURI(`I want to share A Live Stream mix from --- ${liveSessionUrl}`);


	console.log(`encodeURI ----- ${whatsAppText}`);

	// https://wa.me/4407976612370?text=%E2%80%8E%20I%20want%20to%20share%20this%20music%20mix%20with%20you%20from%20---%20%20https%3A%2F%2Fwww.permy.co.uk%23123

	return (
		<div className="social-media-share-container">
			<button className="share-button">
				<ShareIcon />
				<ul className="social-media-list">
					<li>
						<a href={`https://wa.me/?text=${whatsAppText}`} target="_blank">
							<WhatsAppIcon />
						</a>
					</li>
					<li>
						<a href={`https://www.facebook.com/sharer/sharer.php?u=${mixItemUrl}`} target="_blank" >
							<FaceBookIcon />
						</a>
					</li>
					<li>
						<a href="instagram://user?username=permjitghataorre" target="_blank" >
							<InstagramIcon />
						</a>
					</li>
				</ul>
			</button>
		</div>
	)
}

export default ShareMedia;