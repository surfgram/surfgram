import { getCustomEmojiStickers } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getCustomEmojiStickers", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await getCustomEmojiStickers.call(mockBot, ["example text"]);

		expect(mockBot.callApi).toHaveBeenCalledWith("getCustomEmojiStickers", {
			custom_emoji_ids: ["example text"],
		});
	});
});
