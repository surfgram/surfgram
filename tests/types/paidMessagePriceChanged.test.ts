import { PaidMessagePriceChanged } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PaidMessagePriceChanged', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      paid_message_star_count: 123,
    };

    const instance = new PaidMessagePriceChanged(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.paidMessageStarCount ?? instance.raw?.paid_message_star_count).toEqual(123);
  });
});
