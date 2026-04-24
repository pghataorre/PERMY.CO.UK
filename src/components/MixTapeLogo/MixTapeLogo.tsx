import './MixTapeLogo.scss';
import PlayIcon from "../Icons/PlayIcon";
import { TMixItem } from '../../types/contentfulTypes';
import { IMixCountPostBody } from '../../types/mixCountTypes';

type TMusicListItem = {
	mixItem: TMixItem;
	itemIndex: number;
	playMix: (playIndex: number) => void;
	sendMixCount: (body: IMixCountPostBody) => void;
}

const MixTapeLogo = ({ mixItem, itemIndex, playMix, sendMixCount }: TMusicListItem): JSX.Element => {
	const handleClick = async () => {
		playMix(itemIndex);
		await sendMixCount({ mixId: mixItem.mixId ?? '', mixTitle: mixItem.mixTapeTitle })
	}

	return (
		<div className='mix-item-image'>
			<img src={mixItem.mixTapeImageUrl} alt={mixItem.mixTapeTitle} />
			<button type="button" className="play-button" onClick={() => handleClick()}>
				<span><PlayIcon /></span>
			</button>
		</div>
	)
}

export default MixTapeLogo;
