import { ChatBoost } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ChatBoost", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			boost_id: "example text",
			add_date: 123,
			expiration_date: 123,
			source: {} as any,
		};

		const instance = new ChatBoost(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.boostId ?? instance.raw?.boost_id).toEqual("example text");
		expect(instance.addDate ?? instance.raw?.add_date).toEqual(123);
		expect(instance.expirationDate ?? instance.raw?.expiration_date).toEqual(
			123,
		);
		expect(instance.source ?? instance.raw?.source).toEqual({} as any);
	});
});
