import { exportChatInviteLink } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("exportChatInviteLink", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await exportChatInviteLink.call(mockBot, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("exportChatInviteLink", {
			chat_id: 123,
		});
	});
});
