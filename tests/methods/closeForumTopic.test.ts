import { closeForumTopic } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("closeForumTopic", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await closeForumTopic.call(mockBot, 123, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("closeForumTopic", {
			chat_id: 123,
			message_thread_id: 123,
		});
	});
});
