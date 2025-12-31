import { giftPremiumSubscription } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('giftPremiumSubscription', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      userId: 123,
      monthCount: 123,
      starCount: 123,
      text: 'example text',
      textParseMode: 'example text',
      textEntities: [{} as any],
    };

    await giftPremiumSubscription.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('giftPremiumSubscription', {
      user_id: 123,
      month_count: 123,
      star_count: 123,
      text: 'example text',
      text_parse_mode: 'example text',
      text_entities: [{} as any],
    });
  });
});
