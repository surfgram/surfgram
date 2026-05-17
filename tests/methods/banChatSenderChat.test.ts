import { banChatSenderChat } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("banChatSenderChat", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await banChatSenderChat.call(mockBot, 123, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("banChatSenderChat", {
			chat_id: 123,
			sender_chat_id: 123,
		});
	});
});
