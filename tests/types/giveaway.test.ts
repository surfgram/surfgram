import { Giveaway } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Giveaway', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chats: [{} as any],
      winners_selection_date: 123,
      winner_count: 123,
      only_new_members: true,
      has_public_winners: true,
      prize_description: "example text",
      country_codes: ["example text"],
      prize_star_count: 123,
      premium_subscription_month_count: 123,
    };

    const instance = new Giveaway(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.chats ?? instance.raw?.chats).toEqual([{} as any]);
    expect(instance.winnersSelectionDate ?? instance.raw?.winners_selection_date).toEqual(123);
    expect(instance.winnerCount ?? instance.raw?.winner_count).toEqual(123);
    expect(instance.onlyNewMembers ?? instance.raw?.only_new_members).toEqual(true);
    expect(instance.hasPublicWinners ?? instance.raw?.has_public_winners).toEqual(true);
    expect(instance.prizeDescription ?? instance.raw?.prize_description).toEqual("example text");
    expect(instance.countryCodes ?? instance.raw?.country_codes).toEqual(["example text"]);
    expect(instance.prizeStarCount ?? instance.raw?.prize_star_count).toEqual(123);
    expect(instance.premiumSubscriptionMonthCount ?? instance.raw?.premium_subscription_month_count).toEqual(123);
  });
});