import { hideGeneralForumTopic } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("hideGeneralForumTopic", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await hideGeneralForumTopic.call(mockBot, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("hideGeneralForumTopic", {
			chat_id: 123,
		});
	});
});
