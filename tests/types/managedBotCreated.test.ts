import { ManagedBotCreated } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ManagedBotCreated", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			bot: {} as any,
		};

		const instance = new ManagedBotCreated(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.raw?.bot).toEqual({} as any);
	});
});
