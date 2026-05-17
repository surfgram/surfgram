import { UserRating } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("UserRating", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			level: 123,
			rating: 123,
			current_level_rating: 123,
			next_level_rating: 123,
		};

		const instance = new UserRating(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.level ?? instance.raw?.level).toEqual(123);
		expect(instance.rating ?? instance.raw?.rating).toEqual(123);
		expect(
			instance.currentLevelRating ?? instance.raw?.current_level_rating,
		).toEqual(123);
		expect(instance.nextLevelRating ?? instance.raw?.next_level_rating).toEqual(
			123,
		);
	});
});
