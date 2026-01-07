import { setUserEmojiStatus } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("setUserEmojiStatus", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await setUserEmojiStatus.call(mockBot, 123, "example text", 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("setUserEmojiStatus", {
			user_id: 123,
			emoji_status_custom_emoji_id: "example text",
			emoji_status_expiration_date: 123,
		});
	});
});
