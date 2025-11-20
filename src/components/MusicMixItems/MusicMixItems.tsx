import './MusicMixItems.scss';
import MixTapeDetails from '../MixTapeDetails/MixTapeDetails';
import MixTapeLogo from '../MixTapeLogo/MixTapeLogo';
import addMixCount from '../../api/addMixCount';
import { IMixCountPostBody } from '../../types/mixCountTypes'

type TMusicListItem = {
	mixItem: TMixItem;
	itemIndex: number;
	playMix: (playIndex: number) => void;
}

type TMixItem = {
    mixId: string;
    mixTapeTitle: string;
    mixTapeImageUrl: string;
	mixUrl: string;
}

const MusicListItem = ({mixItem, itemIndex, playMix}: TMusicListItem): JSX.Element => {

	const sendMixCount = async (mixBody: IMixCountPostBody) => {
		await addMixCount(mixBody);
	}

	return (
		<li>
			<h2 className="show-mobile">{mixItem.mixTapeTitle}</h2>
			<MixTapeLogo mixItem={mixItem} itemIndex={itemIndex} playMix={playMix} sendMixCount={sendMixCount}/>
			<MixTapeDetails mixItem={mixItem} itemIndex={itemIndex} playMix={playMix} sendMixCount={sendMixCount}/>
		</li>
	)
}

export default MusicListItem;
