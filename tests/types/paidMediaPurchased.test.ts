import { PaidMediaPurchased } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PaidMediaPurchased", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			from: {} as any,
			paid_media_payload: "example text",
		};

		const instance = new PaidMediaPurchased(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.from ?? instance.raw?.from).toEqual({} as any);
		expect(
			instance.paidMediaPayload ?? instance.raw?.paid_media_payload,
		).toEqual("example text");
	});
});
