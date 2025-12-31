import { BotDescription } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("BotDescription", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			description: "example text",
		};

		const instance = new BotDescription(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.description ?? instance.raw?.description).toEqual(
			"example text",
		);
	});
});
