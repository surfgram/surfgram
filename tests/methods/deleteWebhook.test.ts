import { deleteWebhook } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("deleteWebhook", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await deleteWebhook.call(mockBot, true);

		expect(mockBot.callApi).toHaveBeenCalledWith("deleteWebhook", {
			drop_pending_updates: true,
		});
	});
});
