import { getUserGifts } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("getUserGifts", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			userId: 123,
			excludeUnlimited: true,
			excludeLimitedUpgradable: true,
			excludeLimitedNonUpgradable: true,
			excludeFromBlockchain: true,
			excludeUnique: true,
			sortByPrice: true,
			offset: "example text",
			limit: 123,
		};

		await getUserGifts.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("getUserGifts", {
			user_id: 123,
			exclude_unlimited: true,
			exclude_limited_upgradable: true,
			exclude_limited_non_upgradable: true,
			exclude_from_blockchain: true,
			exclude_unique: true,
			sort_by_price: true,
			offset: "example text",
			limit: 123,
		});
	});
});
