import { getManagedBotToken } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getManagedBotToken", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await getManagedBotToken.call(mockBot, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("getManagedBotToken", {
			user_id: 123,
		});
	});
});
