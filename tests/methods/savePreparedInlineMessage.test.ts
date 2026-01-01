import { savePreparedInlineMessage } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("savePreparedInlineMessage", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			userId: 123,
			result: {} as any,
			allowUserChats: true,
			allowBotChats: true,
			allowGroupChats: true,
			allowChannelChats: true,
		};

		await savePreparedInlineMessage.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("savePreparedInlineMessage", {
			user_id: 123,
			result: {} as any,
			allow_user_chats: true,
			allow_bot_chats: true,
			allow_group_chats: true,
			allow_channel_chats: true,
		});
	});
});
