import { BusinessMessagesDeleted } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("BusinessMessagesDeleted", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			business_connection_id: "example text",
			chat: {} as any,
			message_ids: [123],
		};

		const instance = new BusinessMessagesDeleted(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(
			instance.businessConnectionId ?? instance.raw?.business_connection_id,
		).toEqual("example text");
		expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
		expect(instance.messageIds ?? instance.raw?.message_ids).toEqual([123]);
	});
});
