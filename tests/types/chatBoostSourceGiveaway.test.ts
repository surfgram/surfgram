import { ChatBoostSourceGiveaway } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatBoostSourceGiveaway', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      source: "example text",
      giveaway_message_id: 123,
      user: {} as any,
      prize_star_count: 123,
      is_unclaimed: true,
    };

    const instance = new ChatBoostSourceGiveaway(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.source ?? instance.raw?.source).toEqual("example text");
    expect(instance.giveawayMessageId ?? instance.raw?.giveaway_message_id).toEqual(123);
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.prizeStarCount ?? instance.raw?.prize_star_count).toEqual(123);
    expect(instance.isUnclaimed ?? instance.raw?.is_unclaimed).toEqual(true);
  });
});