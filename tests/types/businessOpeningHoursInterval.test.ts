import { BusinessOpeningHoursInterval } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("BusinessOpeningHoursInterval", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			opening_minute: 123,
			closing_minute: 123,
		};

		const instance = new BusinessOpeningHoursInterval(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.openingMinute ?? instance.raw?.opening_minute).toEqual(123);
		expect(instance.closingMinute ?? instance.raw?.closing_minute).toEqual(123);
	});
});
