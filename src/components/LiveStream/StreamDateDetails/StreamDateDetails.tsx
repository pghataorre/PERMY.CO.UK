import { IStreamDateDetails } from "../../../types/contentfulTypes";
import LiveCountDown from "../LiveCountDown/LiveCountDown";

const StreamDateDetails = ({streamDetails}: IStreamDateDetails) => {
	const {liveStreamTitle, startDateTime, showTimerFlag, styleClass, originalStartTime} = streamDetails;

	return (
	<div className={styleClass}>
		<p>{liveStreamTitle}</p>
		<p>{startDateTime}</p>
		<LiveCountDown showCounter={showTimerFlag} countDownDate={new Date(`${originalStartTime}`)} />
	</div>
);
}

export default StreamDateDetails;
