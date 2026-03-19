import { createChatSubscriptionInviteLink } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("createChatSubscriptionInviteLink", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await createChatSubscriptionInviteLink.call(
			mockBot,
			123,
			123,
			123,
			"example text",
		);

		expect(mockBot.callApi).toHaveBeenCalledWith(
			"createChatSubscriptionInviteLink",
			{
				chat_id: 123,
				subscription_period: 123,
				subscription_price: 123,
				name: "example text",
			},
		);
	});
});
