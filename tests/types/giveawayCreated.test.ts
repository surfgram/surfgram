import { GiveawayCreated } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('GiveawayCreated', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      prize_star_count: 123,
    };

    const instance = new GiveawayCreated(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.prizeStarCount ?? instance.raw?.prize_star_count).toEqual(123);
  });
});