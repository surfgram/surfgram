import { convertGiftToStars } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('convertGiftToStars', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await convertGiftToStars.call(mockBot, "example text", "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('convertGiftToStars', {
      business_connection_id: "example text",
      owned_gift_id: "example text",
    });
  });
});