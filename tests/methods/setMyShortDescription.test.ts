import { setMyShortDescription } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("setMyShortDescription", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await setMyShortDescription.call(mockBot, "example text", "example text");

		expect(mockBot.callApi).toHaveBeenCalledWith("setMyShortDescription", {
			short_description: "example text",
			language_code: "example text",
		});
	});
});
