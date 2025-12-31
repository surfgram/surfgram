import { setPassportDataErrors } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("setPassportDataErrors", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await setPassportDataErrors.call(mockBot, 123, [{} as any]);

		expect(mockBot.callApi).toHaveBeenCalledWith("setPassportDataErrors", {
			user_id: 123,
			errors: [{} as any],
		});
	});
});
