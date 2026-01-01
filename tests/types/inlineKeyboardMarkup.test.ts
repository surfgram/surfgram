import { InlineKeyboardMarkup } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InlineKeyboardMarkup", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			inline_keyboard: [[{} as any]],
		};

		const instance = new InlineKeyboardMarkup(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.inlineKeyboard ?? instance.raw?.inline_keyboard).toEqual([
			[{} as any],
		]);
	});
});
