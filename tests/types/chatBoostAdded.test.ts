import { ChatBoostAdded } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ChatBoostAdded", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			boost_count: 123,
		};

		const instance = new ChatBoostAdded(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.boostCount ?? instance.raw?.boost_count).toEqual(123);
	});
});
