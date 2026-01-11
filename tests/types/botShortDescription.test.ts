import { BotShortDescription } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("BotShortDescription", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			short_description: "example text",
		};

		const instance = new BotShortDescription(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(
			instance.shortDescription ?? instance.raw?.short_description,
		).toEqual("example text");
	});
});
