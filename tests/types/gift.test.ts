import { Gift } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Gift", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: "example text",
			sticker: {} as any,
			star_count: 123,
			upgrade_star_count: 123,
			is_premium: true,
			has_colors: true,
			total_count: 123,
			remaining_count: 123,
			personal_total_count: 123,
			personal_remaining_count: 123,
			background: {} as any,
			unique_gift_variant_count: 123,
			publisher_chat: {} as any,
		};

		const instance = new Gift(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual("example text");
		expect(instance.sticker ?? instance.raw?.sticker).toEqual({} as any);
		expect(instance.starCount ?? instance.raw?.star_count).toEqual(123);
		expect(
			instance.upgradeStarCount ?? instance.raw?.upgrade_star_count,
		).toEqual(123);
		expect(instance.isPremium ?? instance.raw?.is_premium).toEqual(true);
		expect(instance.hasColors ?? instance.raw?.has_colors).toEqual(true);
		expect(instance.totalCount ?? instance.raw?.total_count).toEqual(123);
		expect(instance.remainingCount ?? instance.raw?.remaining_count).toEqual(
			123,
		);
		expect(
			instance.personalTotalCount ?? instance.raw?.personal_total_count,
		).toEqual(123);
		expect(
			instance.personalRemainingCount ?? instance.raw?.personal_remaining_count,
		).toEqual(123);
		expect(instance.background ?? instance.raw?.background).toEqual({} as any);
		expect(
			instance.uniqueGiftVariantCount ??
				instance.raw?.unique_gift_variant_count,
		).toEqual(123);
		expect(instance.publisherChat ?? instance.raw?.publisher_chat).toEqual(
			{} as any,
		);
	});
});
