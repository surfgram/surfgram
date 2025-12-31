import { ReplyParameters } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ReplyParameters", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			message_id: 123,
			chat_id: 123,
			allow_sending_without_reply: true,
			quote: "example text",
			quote_parse_mode: "example text",
			quote_entities: [{} as any],
			quote_position: 123,
			checklist_task_id: 123,
		};

		const instance = new ReplyParameters(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
		expect(instance.chatId ?? instance.raw?.chat_id).toEqual(123);
		expect(
			instance.allowSendingWithoutReply ??
				instance.raw?.allow_sending_without_reply,
		).toEqual(true);
		expect(instance.quote ?? instance.raw?.quote).toEqual("example text");
		expect(instance.quoteParseMode ?? instance.raw?.quote_parse_mode).toEqual(
			"example text",
		);
		expect(instance.quoteEntities ?? instance.raw?.quote_entities).toEqual([
			{} as any,
		]);
		expect(instance.quotePosition ?? instance.raw?.quote_position).toEqual(123);
		expect(instance.checklistTaskId ?? instance.raw?.checklist_task_id).toEqual(
			123,
		);
	});
});
