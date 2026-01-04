import { ChatBackground } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ChatBackground", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: {} as any,
		};

		const instance = new ChatBackground(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual({} as any);
	});
});
