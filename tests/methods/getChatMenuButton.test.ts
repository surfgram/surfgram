import { getChatMenuButton } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getChatMenuButton", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await getChatMenuButton.call(mockBot, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("getChatMenuButton", {
			chat_id: 123,
		});
	});
});
