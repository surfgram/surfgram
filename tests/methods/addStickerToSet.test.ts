import { addStickerToSet } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("addStickerToSet", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await addStickerToSet.call(mockBot, 123, "example text", {} as any);

		expect(mockBot.callApi).toHaveBeenCalledWith("addStickerToSet", {
			user_id: 123,
			name: "example text",
			sticker: {} as any,
		});
	});
});
