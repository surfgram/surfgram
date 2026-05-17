import { verifyChat } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("verifyChat", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await verifyChat.call(mockBot, 123, "example text");

		expect(mockBot.callApi).toHaveBeenCalledWith("verifyChat", {
			chat_id: 123,
			custom_description: "example text",
		});
	});
});
