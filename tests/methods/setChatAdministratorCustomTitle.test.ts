import { setChatAdministratorCustomTitle } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("setChatAdministratorCustomTitle", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await setChatAdministratorCustomTitle.call(
			mockBot,
			123,
			123,
			"example text",
		);

		expect(mockBot.callApi).toHaveBeenCalledWith(
			"setChatAdministratorCustomTitle",
			{
				chat_id: 123,
				user_id: 123,
				custom_title: "example text",
			},
		);
	});
});
