import { ResponseParameters } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ResponseParameters", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			migrate_to_chat_id: 123,
			retry_after: 123,
		};

		const instance = new ResponseParameters(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(
			instance.migrateToChatId ?? instance.raw?.migrate_to_chat_id,
		).toEqual(123);
		expect(instance.retryAfter ?? instance.raw?.retry_after).toEqual(123);
	});
});
