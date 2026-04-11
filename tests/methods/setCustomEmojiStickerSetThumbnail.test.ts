import { setCustomEmojiStickerSetThumbnail } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("setCustomEmojiStickerSetThumbnail", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await setCustomEmojiStickerSetThumbnail.call(
			mockBot,
			"example text",
			"example text",
		);

		expect(mockBot.callApi).toHaveBeenCalledWith(
			"setCustomEmojiStickerSetThumbnail",
			{
				name: "example text",
				custom_emoji_id: "example text",
			},
		);
	});
});
