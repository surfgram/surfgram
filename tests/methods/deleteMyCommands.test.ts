import { deleteMyCommands } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("deleteMyCommands", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await deleteMyCommands.call(mockBot, {} as any, "example text");

		expect(mockBot.callApi).toHaveBeenCalledWith("deleteMyCommands", {
			scope: {} as any,
			language_code: "example text",
		});
	});
});
