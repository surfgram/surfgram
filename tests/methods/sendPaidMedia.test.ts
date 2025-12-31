import { sendPaidMedia } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("sendPaidMedia", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			chatId: 123,
			starCount: 123,
			media: [{} as any],
			businessConnectionId: "example text",
			messageThreadId: 123,
			directMessagesTopicId: 123,
			payload: "example text",
			caption: "example text",
			parseMode: "example text",
			captionEntities: [{} as any],
			showCaptionAboveMedia: true,
			disableNotification: true,
			protectContent: true,
			allowPaidBroadcast: true,
			suggestedPostParameters: {} as any,
			replyParameters: {} as any,
			replyMarkup: {} as any,
		};

		await sendPaidMedia.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("sendPaidMedia", {
			chat_id: 123,
			star_count: 123,
			media: [{} as any],
			business_connection_id: "example text",
			message_thread_id: 123,
			direct_messages_topic_id: 123,
			payload: "example text",
			caption: "example text",
			parse_mode: "example text",
			caption_entities: [{} as any],
			show_caption_above_media: true,
			disable_notification: true,
			protect_content: true,
			allow_paid_broadcast: true,
			suggested_post_parameters: {} as any,
			reply_parameters: {} as any,
			reply_markup: {} as any,
		});
	});
});
