import { AffiliateInfo } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("AffiliateInfo", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			affiliate_user: {} as any,
			affiliate_chat: {} as any,
			commission_per_mille: 123,
			amount: 123,
			nanostar_amount: 123,
		};

		const instance = new AffiliateInfo(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.affiliateUser ?? instance.raw?.affiliate_user).toEqual(
			{} as any,
		);
		expect(instance.affiliateChat ?? instance.raw?.affiliate_chat).toEqual(
			{} as any,
		);
		expect(
			instance.commissionPerMille ?? instance.raw?.commission_per_mille,
		).toEqual(123);
		expect(instance.amount ?? instance.raw?.amount).toEqual(123);
		expect(instance.nanostarAmount ?? instance.raw?.nanostar_amount).toEqual(
			123,
		);
	});
});
