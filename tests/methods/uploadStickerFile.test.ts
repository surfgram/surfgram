import { uploadStickerFile } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("uploadStickerFile", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await uploadStickerFile.call(mockBot, 123, {} as any, "example text");

		expect(mockBot.callApi).toHaveBeenCalledWith("uploadStickerFile", {
			user_id: 123,
			sticker: {} as any,
			sticker_format: "example text",
		});
	});
});
