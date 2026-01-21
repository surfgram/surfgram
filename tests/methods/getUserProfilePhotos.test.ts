import { getUserProfilePhotos } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getUserProfilePhotos", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		await getUserProfilePhotos.call(mockBot, 123, 123, 123);

		expect(mockBot.callApi).toHaveBeenCalledWith("getUserProfilePhotos", {
			user_id: 123,
			offset: 123,
			limit: 123,
		});
	});
});
