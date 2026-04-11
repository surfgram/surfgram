import { answerCallbackQuery } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("answerCallbackQuery", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			callbackQueryId: "example text",
			text: "example text",
			showAlert: true,
			url: "example text",
			cacheTime: 123,
		};

		await answerCallbackQuery.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("answerCallbackQuery", {
			callback_query_id: "example text",
			text: "example text",
			show_alert: true,
			url: "example text",
			cache_time: 123,
		});
	});
});
