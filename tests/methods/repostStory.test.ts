import { repostStory } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("repostStory", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			businessConnectionId: "example text",
			fromChatId: 123,
			fromStoryId: 123,
			activePeriod: 123,
			postToChatPage: true,
			protectContent: true,
		};

		await repostStory.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("repostStory", {
			business_connection_id: "example text",
			from_chat_id: 123,
			from_story_id: 123,
			active_period: 123,
			post_to_chat_page: true,
			protect_content: true,
		});
	});
});
