import { ReplyKeyboardMarkup } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ReplyKeyboardMarkup", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			keyboard: [[{} as any]],
			is_persistent: true,
			resize_keyboard: true,
			one_time_keyboard: true,
			input_field_placeholder: "example text",
			selective: true,
		};

		const instance = new ReplyKeyboardMarkup(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.keyboard ?? instance.raw?.keyboard).toEqual([[{} as any]]);
		expect(instance.isPersistent ?? instance.raw?.is_persistent).toEqual(true);
		expect(instance.resizeKeyboard ?? instance.raw?.resize_keyboard).toEqual(
			true,
		);
		expect(instance.oneTimeKeyboard ?? instance.raw?.one_time_keyboard).toEqual(
			true,
		);
		expect(
			instance.inputFieldPlaceholder ?? instance.raw?.input_field_placeholder,
		).toEqual("example text");
		expect(instance.selective ?? instance.raw?.selective).toEqual(true);
	});
});
