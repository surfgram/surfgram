import { UserChatBoosts } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("UserChatBoosts", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			boosts: [{} as any],
		};

		const instance = new UserChatBoosts(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.boosts ?? instance.raw?.boosts).toEqual([{} as any]);
	});
});
