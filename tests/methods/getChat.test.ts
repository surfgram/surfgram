import { getChat } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getChat", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await getChat.call(mockBot, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("getChat", {
			chat_id: 123,
		});
	});
});
