import { answerWebAppQuery } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("answerWebAppQuery", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await answerWebAppQuery.call(mockBot, "example text", {} as any);

		expect(mockBot.callApi).toHaveBeenCalledWith("answerWebAppQuery", {
			web_app_query_id: "example text",
			result: {} as any,
		});
	});
});
