import { sendContact } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("sendContact", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			chatId: 123,
			phoneNumber: "example text",
			firstName: "example text",
			businessConnectionId: "example text",
			messageThreadId: 123,
			directMessagesTopicId: 123,
			lastName: "example text",
			vcard: "example text",
			disableNotification: true,
			protectContent: true,
			allowPaidBroadcast: true,
			messageEffectId: "example text",
			suggestedPostParameters: {} as any,
			replyParameters: {} as any,
			replyMarkup: {} as any,
		};

		await sendContact.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("sendContact", {
			chat_id: 123,
			phone_number: "example text",
			first_name: "example text",
			business_connection_id: "example text",
			message_thread_id: 123,
			direct_messages_topic_id: 123,
			last_name: "example text",
			vcard: "example text",
			disable_notification: true,
			protect_content: true,
			allow_paid_broadcast: true,
			message_effect_id: "example text",
			suggested_post_parameters: {} as any,
			reply_parameters: {} as any,
			reply_markup: {} as any,
		});
	});
});
