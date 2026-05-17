import { getForumTopicIconStickers } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getForumTopicIconStickers", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await getForumTopicIconStickers.call(
			mockBot,
			123,
			"example text",
			123,
			"example text",
		);

		expect(mockBot.callApi).toHaveBeenCalledWith("getForumTopicIconStickers", {
			chat_id: 123,
			name: "example text",
			icon_color: 123,
			icon_custom_emoji_id: "example text",
		});
	});
});
