import { PreparedKeyboardButton } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PreparedKeyboardButton", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: "example text",
		};

		const instance = new PreparedKeyboardButton(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual("example text");
	});
});
