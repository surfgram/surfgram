import { CallbackGame } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("CallbackGame", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			user_id: 123,
			score: 123,
			force: true,
			disable_edit_message: true,
			chat_id: 123,
			message_id: 123,
			inline_message_id: "example text",
		};

		const instance = new CallbackGame(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.userId ?? instance.raw?.user_id).toEqual(123);
		expect(instance.score ?? instance.raw?.score).toEqual(123);
		expect(instance.force ?? instance.raw?.force).toEqual(true);
		expect(
			instance.disableEditMessage ?? instance.raw?.disable_edit_message,
		).toEqual(true);
		expect(instance.chatId ?? instance.raw?.chat_id).toEqual(123);
		expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
		expect(instance.inlineMessageId ?? instance.raw?.inline_message_id).toEqual(
			"example text",
		);
	});
});
