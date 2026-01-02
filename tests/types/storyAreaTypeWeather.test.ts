import { StoryAreaTypeWeather } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("StoryAreaTypeWeather", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			temperature: 123,
			emoji: "example text",
			background_color: 123,
		};

		const instance = new StoryAreaTypeWeather(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.temperature ?? instance.raw?.temperature).toEqual(123);
		expect(instance.emoji ?? instance.raw?.emoji).toEqual("example text");
		expect(instance.backgroundColor ?? instance.raw?.background_color).toEqual(
			123,
		);
	});
});
