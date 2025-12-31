import { Birthdate } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Birthdate", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			day: 123,
			month: 123,
			year: 123,
		};

		const instance = new Birthdate(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.day ?? instance.raw?.day).toEqual(123);
		expect(instance.month ?? instance.raw?.month).toEqual(123);
		expect(instance.year ?? instance.raw?.year).toEqual(123);
	});
});
