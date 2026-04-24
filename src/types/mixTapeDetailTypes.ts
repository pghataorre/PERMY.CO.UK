import { TMixItem } from "./contentfulTypes";
import { IMixCountPostBody } from "./mixCountTypes";

export type TMixTapeItem = {
	mixItem?: TMixItem | undefined;
	itemIndex?: number;
	playMix?: (playIndex: number) => void;
	sendMixCount?: (body: IMixCountPostBody) => void;
}
