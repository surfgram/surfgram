import { upgradeGift } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('upgradeGift', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await upgradeGift.call(mockBot, 'example text', 'example text', true, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('upgradeGift', {
      business_connection_id: 'example text',
      owned_gift_id: 'example text',
      keep_original_details: true,
      star_count: 123,
    });
  });
});
