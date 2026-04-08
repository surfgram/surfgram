import { Story } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Story", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			chat: {} as any,
			id: 123,
		};

		const instance = new Story(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
		expect(instance.id ?? instance.raw?.id).toEqual(123);
	});
});
