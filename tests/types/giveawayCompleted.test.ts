import { GiveawayCompleted } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("GiveawayCompleted", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			winner_count: 123,
			unclaimed_prize_count: 123,
			giveaway_message: {} as any,
			is_star_giveaway: true,
		};

		const instance = new GiveawayCompleted(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.winnerCount ?? instance.raw?.winner_count).toEqual(123);
		expect(
			instance.unclaimedPrizeCount ?? instance.raw?.unclaimed_prize_count,
		).toEqual(123);
		expect(instance.giveawayMessage ?? instance.raw?.giveaway_message).toEqual(
			{} as any,
		);
		expect(instance.isStarGiveaway ?? instance.raw?.is_star_giveaway).toEqual(
			true,
		);
	});
});
