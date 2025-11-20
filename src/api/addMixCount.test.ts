
import { mockAddMixPostBody, mockMixCount } from '../mockData/mockData';
import addMixCount from './addMixCount';
import config from '../config/config.mjs';
import { mockConfig } from '../mockData/mockData';


jest.mock('../config/config.mjs');

config.apiUrl = mockConfig.apiUrl;

describe('Test addMixCount()', () => {
	beforeEach(() => {
		global.fetch = jest.fn().mockResolvedValue({
			ok: true,
			json: jest.fn().mockResolvedValue(mockMixCount),
		})
	});

	it('should call addMixCount successfully', async () => {
		const result = await addMixCount(mockAddMixPostBody);
		expect(result).toEqual(mockMixCount);
	});

	it('should call addMixCount and POST with correct parameters', async () => {
		const mockFetchParams = {
			method: "POST",
			body: JSON.stringify(mockAddMixPostBody)
		}

		await addMixCount(mockAddMixPostBody);

		expect(global.fetch).toHaveBeenCalledWith(`${config.apiUrl}/mixCount`, mockFetchParams);
	});

	it('should handle fetch scenario when the response is not ok', async () => {
		global.fetch = jest.fn().mockResolvedValue({
			ok: false,
			status: 500,
			json: jest.fn().mockResolvedValue({}),
		});

		const result = await addMixCount(mockAddMixPostBody);
		expect(result).toEqual(false);
	});

	it('should handle fetch throwing an error', async () => {
		global.fetch = jest.fn().mockRejectedValue({});

		const result = await addMixCount(mockAddMixPostBody);
		expect(result).toEqual(false);
	});
})