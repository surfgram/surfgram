import { sendChatAction } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("sendChatAction", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await sendChatAction.call(
			mockBot,
			123,
			"example text",
			"example text",
			123,
		);

		expect(mockBot.callApi).toHaveBeenCalledWith("sendChatAction", {
			chat_id: 123,
			action: "example text",
			business_connection_id: "example text",
			message_thread_id: 123,
		});
	});
});
