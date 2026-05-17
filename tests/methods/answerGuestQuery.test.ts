import { answerGuestQuery } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("answerGuestQuery", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await answerGuestQuery.call(mockBot, "example text", {} as any);

		expect(mockBot.callApi).toHaveBeenCalledWith("answerGuestQuery", {
			guest_query_id: "example text",
			result: {} as any,
		});
	});
});
