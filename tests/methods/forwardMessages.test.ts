import { forwardMessages } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("forwardMessages", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			chatId: 123,
			fromChatId: 123,
			messageIds: [123],
			messageThreadId: 123,
			directMessagesTopicId: 123,
			disableNotification: true,
			protectContent: true,
		};

		await forwardMessages.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("forwardMessages", {
			chat_id: 123,
			from_chat_id: 123,
			message_ids: [123],
			message_thread_id: 123,
			direct_messages_topic_id: 123,
			disable_notification: true,
			protect_content: true,
		});
	});
});
