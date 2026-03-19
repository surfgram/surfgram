import { setBusinessAccountName } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("setBusinessAccountName", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await setBusinessAccountName.call(
			mockBot,
			"example text",
			"example text",
			"example text",
		);

		expect(mockBot.callApi).toHaveBeenCalledWith("setBusinessAccountName", {
			business_connection_id: "example text",
			first_name: "example text",
			last_name: "example text",
		});
	});
});
