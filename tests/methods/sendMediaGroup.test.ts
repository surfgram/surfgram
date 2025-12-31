import { sendMediaGroup } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("sendMediaGroup", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			chatId: 123,
			media: [{} as any],
			businessConnectionId: "example text",
			messageThreadId: 123,
			directMessagesTopicId: 123,
			disableNotification: true,
			protectContent: true,
			allowPaidBroadcast: true,
			messageEffectId: "example text",
			replyParameters: {} as any,
		};

		await sendMediaGroup.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("sendMediaGroup", {
			chat_id: 123,
			media: [{} as any],
			business_connection_id: "example text",
			message_thread_id: 123,
			direct_messages_topic_id: 123,
			disable_notification: true,
			protect_content: true,
			allow_paid_broadcast: true,
			message_effect_id: "example text",
			reply_parameters: {} as any,
		});
	});
});
