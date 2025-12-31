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
			total_count: 123,
			remaining_count: 123,
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
		expect(instance.totalCount ?? instance.raw?.total_count).toEqual(123);
		expect(instance.remainingCount ?? instance.raw?.remaining_count).toEqual(
			123,
		);
		expect(instance.publisherChat ?? instance.raw?.publisher_chat).toEqual(
			{} as any,
		);
	});
});
