import config from '../config/config.mjs';
import { IMixCountPostBody } from '../types/mixCountTypes';

const addMixCount = async (body: IMixCountPostBody): Promise<boolean> => {
	try {
    const response = await fetch(`${config.apiUrl}/mixCount`, {
        method: "POST",
        body: JSON.stringify({
            "mixId": body.mixId,
            "mixTitle": body.mixTitle
        })
    });

		if (!response.ok) {
			return false;
		}
		const result = await response.json();
		return result;

	} catch (error) {
		return false;
	}
}

export default addMixCount;