import { TransactionPartnerTelegramApi } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("TransactionPartnerTelegramApi", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			request_count: 123,
		};

		const instance = new TransactionPartnerTelegramApi(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.requestCount ?? instance.raw?.request_count).toEqual(123);
	});
});
