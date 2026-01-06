import { StarTransactions } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("StarTransactions", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			transactions: [{} as any],
		};

		const instance = new StarTransactions(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.transactions ?? instance.raw?.transactions).toEqual([
			{} as any,
		]);
	});
});
