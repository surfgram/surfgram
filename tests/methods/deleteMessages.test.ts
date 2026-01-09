import { deleteMessages } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("deleteMessages", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await deleteMessages.call(mockBot, 123, [123]);

		expect(mockBot.callApi).toHaveBeenCalledWith("deleteMessages", {
			chat_id: 123,
			message_ids: [123],
		});
	});
});
