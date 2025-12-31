import { UniqueGift } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("UniqueGift", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			base_name: "example text",
			name: "example text",
			number: 123,
			model: {} as any,
			symbol: {} as any,
			backdrop: {} as any,
			publisher_chat: {} as any,
		};

		const instance = new UniqueGift(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.baseName ?? instance.raw?.base_name).toEqual(
			"example text",
		);
		expect(instance.name ?? instance.raw?.name).toEqual("example text");
		expect(instance.number ?? instance.raw?.number).toEqual(123);
		expect(instance.model ?? instance.raw?.model).toEqual({} as any);
		expect(instance.symbol ?? instance.raw?.symbol).toEqual({} as any);
		expect(instance.backdrop ?? instance.raw?.backdrop).toEqual({} as any);
		expect(instance.publisherChat ?? instance.raw?.publisher_chat).toEqual(
			{} as any,
		);
	});
});
