import { BotName } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("BotName", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			name: "example text",
		};

		const instance = new BotName(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.name ?? instance.raw?.name).toEqual("example text");
	});
});
