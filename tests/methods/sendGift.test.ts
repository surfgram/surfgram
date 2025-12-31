import { sendGift } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendGift', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      giftId: 'example text',
      userId: 123,
      chatId: 123,
      payForUpgrade: true,
      text: 'example text',
      textParseMode: 'example text',
      textEntities: [{} as any],
    };

    await sendGift.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendGift', {
      gift_id: 'example text',
      user_id: 123,
      chat_id: 123,
      pay_for_upgrade: true,
      text: 'example text',
      text_parse_mode: 'example text',
      text_entities: [{} as any],
    });
  });
});
