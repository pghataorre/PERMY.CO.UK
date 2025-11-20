import sendEmail from "./sendEmail";
import { mockEmailSendParams } from "../mockData/mockData";
import config from "../config/config.mjs";

jest.mock("../config/config.mjs");

describe('Test sendEmail()', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ success: true }),
    })
  });

  it('should send an email successfully', async () => {
    const result = await sendEmail(mockEmailSendParams);
    expect(result).toEqual(true);
  });

  it('should call fetch with correct parameters', async () => {
    const mockFetchParams = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify(mockEmailSendParams),
    };

    await sendEmail(mockEmailSendParams);
    expect(global.fetch).toHaveBeenCalledWith(`${config.apiUrl}/email`, mockFetchParams);
  });

  it('should handle fetch scenario when the response is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: jest.fn().mockResolvedValue({ success: false }),
    });

    const result = await sendEmail(mockEmailSendParams);
    expect(result).toEqual(false);
  });

  it('should handle fetch throwing an error', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    const result = await sendEmail(mockEmailSendParams);
    expect(result).toEqual(false);
  });

});