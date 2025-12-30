import { transferGift } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('transferGift', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await transferGift.call(mockBot, 'example text', 'example text', 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('transferGift', {
      business_connection_id: 'example text',
      owned_gift_id: 'example text',
      new_owner_chat_id: 123,
      star_count: 123,
    });
  });
});
