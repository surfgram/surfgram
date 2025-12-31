import { TransactionPartnerAffiliateProgram } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("TransactionPartnerAffiliateProgram", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			sponsor_user: {} as any,
			commission_per_mille: 123,
		};

		const instance = new TransactionPartnerAffiliateProgram(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.sponsorUser ?? instance.raw?.sponsor_user).toEqual(
			{} as any,
		);
		expect(
			instance.commissionPerMille ?? instance.raw?.commission_per_mille,
		).toEqual(123);
	});
});
