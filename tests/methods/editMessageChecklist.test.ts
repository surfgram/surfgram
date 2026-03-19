import { editMessageChecklist } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("editMessageChecklist", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			businessConnectionId: "example text",
			chatId: 123,
			messageId: 123,
			checklist: {} as any,
			replyMarkup: {} as any,
		};

		await editMessageChecklist.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("editMessageChecklist", {
			business_connection_id: "example text",
			chat_id: 123,
			message_id: 123,
			checklist: {} as any,
			reply_markup: {} as any,
		});
	});
});
