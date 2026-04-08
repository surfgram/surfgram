import { PreparedInlineMessage } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PreparedInlineMessage", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: "example text",
			expiration_date: 123,
		};

		const instance = new PreparedInlineMessage(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual("example text");
		expect(instance.expirationDate ?? instance.raw?.expiration_date).toEqual(
			123,
		);
	});
});
