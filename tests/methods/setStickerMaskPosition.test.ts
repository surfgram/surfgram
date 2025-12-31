import { setStickerMaskPosition } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("setStickerMaskPosition", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await setStickerMaskPosition.call(mockBot, "example text", {} as any);

		expect(mockBot.callApi).toHaveBeenCalledWith("setStickerMaskPosition", {
			sticker: "example text",
			mask_position: {} as any,
		});
	});
});
