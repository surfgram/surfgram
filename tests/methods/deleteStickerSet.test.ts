import { deleteStickerSet } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("deleteStickerSet", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await deleteStickerSet.call(mockBot, "example text");

		expect(mockBot.callApi).toHaveBeenCalledWith("deleteStickerSet", {
			name: "example text",
		});
	});
});
