import Countdown from 'react-countdown';

type TLiveCountDown = {
	showCounter: boolean
	countDownDate: Date;
}

const LiveCountDown = ({showCounter, countDownDate}: TLiveCountDown) => {
	return (
		<div className="count-down">
			{showCounter ? <Countdown date={countDownDate} /> : <></>}
		</div>
	);
}

export default LiveCountDown;
