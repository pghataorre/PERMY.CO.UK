import './MixTapeDetails.scss'
import PlayIconSecondary from '../Icons/PlayIconSecondary';
import ShareMedia from '../ShareMedia/ShareMedia';
import { TMixTapeItem } from '../../types/mixTapeDetailTypes';


const MixTapeDetails = ({ mixItem, itemIndex, playMix, sendMixCount }: TMixTapeItem): JSX.Element => {
	const handleClick = async () => {
		if (typeof itemIndex === 'number') {
			playMix?.(itemIndex);
		}


		await sendMixCount?.({ mixId: mixItem?.mixId || '', mixTitle: mixItem?.mixTapeTitle || '' })
	}

	return (
		<div className="mix-item-details" id={mixItem?.mixId}>
			<div>
				<h2 className="show-desktop">{mixItem?.mixTapeTitle}</h2>
			</div>
			<div className="social-media-share-container">
				<ShareMedia mixItem={mixItem} />
				<button className="play-button-secondary" data-testid="play-button" onClick={() => handleClick()}>
					<PlayIconSecondary />
				</button>
			</div>
		</div>
	)
}

export default MixTapeDetails;
