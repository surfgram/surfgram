import { sendMessageDraft } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("sendMessageDraft", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			chatId: 123,
			draftId: 123,
			messageThreadId: 123,
			text: "example text",
			parseMode: "example text",
			entities: [{} as any],
		};

		await sendMessageDraft.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("sendMessageDraft", {
			chat_id: 123,
			draft_id: 123,
			message_thread_id: 123,
			text: "example text",
			parse_mode: "example text",
			entities: [{} as any],
		});
	});
});
