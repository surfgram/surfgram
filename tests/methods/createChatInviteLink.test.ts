import { createChatInviteLink } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("createChatInviteLink", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			chatId: 123,
			name: "example text",
			expireDate: 123,
			memberLimit: 123,
			createsJoinRequest: true,
		};

		await createChatInviteLink.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("createChatInviteLink", {
			chat_id: 123,
			name: "example text",
			expire_date: 123,
			member_limit: 123,
			creates_join_request: true,
		});
	});
});
