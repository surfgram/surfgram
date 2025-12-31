import { UniqueGiftInfo } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("UniqueGiftInfo", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			gift: {} as any,
			origin: "example text",
			last_resale_currency: "example text",
			last_resale_amount: 123,
			owned_gift_id: "example text",
			transfer_star_count: 123,
			next_transfer_date: 123,
		};

		const instance = new UniqueGiftInfo(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.gift ?? instance.raw?.gift).toEqual({} as any);
		expect(instance.origin ?? instance.raw?.origin).toEqual("example text");
		expect(
			instance.lastResaleCurrency ?? instance.raw?.last_resale_currency,
		).toEqual("example text");
		expect(
			instance.lastResaleAmount ?? instance.raw?.last_resale_amount,
		).toEqual(123);
		expect(instance.ownedGiftId ?? instance.raw?.owned_gift_id).toEqual(
			"example text",
		);
		expect(
			instance.transferStarCount ?? instance.raw?.transfer_star_count,
		).toEqual(123);
		expect(
			instance.nextTransferDate ?? instance.raw?.next_transfer_date,
		).toEqual(123);
	});
});
