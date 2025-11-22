import PreLoaderVideo from "../PreLoaderVideo/PreLoaderVideo";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import StreamDateDetails from "../StreamDateDetails/StreamDateDetails";
import TwitchFrame from "../TwitchFrame/TwitchFrame";
import { useContext } from "react";
import { StreamStateContext } from "../../../context/StreamProvider/streamStateContext";
import ShareMedia from "../../ShareMedia/ShareMedia";

const LiveStreamDetails = () => {
    const {liveStreamContent, streamDateDetails, isStreamInProgress} = useContext(StreamStateContext);
    return (
			<div>
				<StreamDateDetails streamDetails={streamDateDetails[0]}/>
				<div className="live-stream-video">
					{isStreamInProgress ? (
						<>
							<TwitchFrame />
						</>
					): (
						<>
							<StreamDateDetails streamDetails={streamDateDetails[1]}/>
							<PreLoaderVideo
								imagePath={liveStreamContent?.streamLogo}
								showTimerFlag={streamDateDetails[1].showTimerFlag}
								videoPreloadUrl={liveStreamContent?.videoPreloadUrl}
							/>
						</>
					)}
				</div>
				<ShareMedia/>
				<div className="live-session-text">
					<div className="scroll-content" dangerouslySetInnerHTML={{__html: liveStreamContent?.streamDescription ? documentToHtmlString(liveStreamContent?.streamDescription) : '<p></p>'}}></div>
				</div>
			</div>
    );

}

export default LiveStreamDetails;
