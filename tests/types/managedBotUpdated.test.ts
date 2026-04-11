import { ManagedBotUpdated } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ManagedBotUpdated", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			user: {} as any,
			bot: {} as any,
		};

		const instance = new ManagedBotUpdated(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.user ?? instance.raw?.user).toEqual({} as any);
		expect(instance.bot ?? instance.raw?.bot).toEqual({} as any);
	});
});
