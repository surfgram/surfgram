import { deleteMessage } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("deleteMessage", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await deleteMessage.call(mockBot, 123, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("deleteMessage", {
			chat_id: 123,
			message_id: 123,
		});
	});
});
