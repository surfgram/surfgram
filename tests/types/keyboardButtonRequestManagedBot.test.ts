import { KeyboardButtonRequestManagedBot } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("KeyboardButtonRequestManagedBot", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			request_id: 123,
			suggested_name: "example text",
			suggested_username: "example text",
		};

		const instance = new KeyboardButtonRequestManagedBot(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.requestId ?? instance.raw?.request_id).toEqual(123);
		expect(instance.suggestedName ?? instance.raw?.suggested_name).toEqual(
			"example text",
		);
		expect(
			instance.suggestedUsername ?? instance.raw?.suggested_username,
		).toEqual("example text");
	});
});
