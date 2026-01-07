import { deleteChatPhoto } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("deleteChatPhoto", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await deleteChatPhoto.call(mockBot, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("deleteChatPhoto", {
			chat_id: 123,
		});
	});
});
