import { AcceptedGiftTypes } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('AcceptedGiftTypes', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      unlimited_gifts: true,
      limited_gifts: true,
      unique_gifts: true,
      premium_subscription: true,
    };

    const instance = new AcceptedGiftTypes(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.unlimitedGifts ?? instance.raw?.unlimited_gifts).toEqual(true);
    expect(instance.limitedGifts ?? instance.raw?.limited_gifts).toEqual(true);
    expect(instance.uniqueGifts ?? instance.raw?.unique_gifts).toEqual(true);
    expect(instance.premiumSubscription ?? instance.raw?.premium_subscription).toEqual(true);
  });
});