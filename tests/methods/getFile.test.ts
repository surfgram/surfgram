import { getFile } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getFile", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await getFile.call(mockBot, "example text");

		expect(mockBot.callApi).toHaveBeenCalledWith("getFile", {
			file_id: "example text",
		});
	});
});
