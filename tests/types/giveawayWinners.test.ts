import { GiveawayWinners } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("GiveawayWinners", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			chat: {} as any,
			giveaway_message_id: 123,
			winners_selection_date: 123,
			winner_count: 123,
			winners: [{} as any],
			additional_chat_count: 123,
			prize_star_count: 123,
			premium_subscription_month_count: 123,
			unclaimed_prize_count: 123,
			only_new_members: true,
			was_refunded: true,
			prize_description: "example text",
		};

		const instance = new GiveawayWinners(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
		expect(
			instance.giveawayMessageId ?? instance.raw?.giveaway_message_id,
		).toEqual(123);
		expect(
			instance.winnersSelectionDate ?? instance.raw?.winners_selection_date,
		).toEqual(123);
		expect(instance.winnerCount ?? instance.raw?.winner_count).toEqual(123);
		expect(instance.winners ?? instance.raw?.winners).toEqual([{} as any]);
		expect(
			instance.additionalChatCount ?? instance.raw?.additional_chat_count,
		).toEqual(123);
		expect(instance.prizeStarCount ?? instance.raw?.prize_star_count).toEqual(
			123,
		);
		expect(
			instance.premiumSubscriptionMonthCount ??
				instance.raw?.premium_subscription_month_count,
		).toEqual(123);
		expect(
			instance.unclaimedPrizeCount ?? instance.raw?.unclaimed_prize_count,
		).toEqual(123);
		expect(instance.onlyNewMembers ?? instance.raw?.only_new_members).toEqual(
			true,
		);
		expect(instance.wasRefunded ?? instance.raw?.was_refunded).toEqual(true);
		expect(
			instance.prizeDescription ?? instance.raw?.prize_description,
		).toEqual("example text");
	});
});
