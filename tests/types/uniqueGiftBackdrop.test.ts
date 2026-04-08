import { UniqueGiftBackdrop } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("UniqueGiftBackdrop", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			name: "example text",
			colors: {} as any,
			rarity_per_mille: 123,
		};

		const instance = new UniqueGiftBackdrop(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.name ?? instance.raw?.name).toEqual("example text");
		expect(instance.colors ?? instance.raw?.colors).toEqual({} as any);
		expect(instance.rarityPerMille ?? instance.raw?.rarity_per_mille).toEqual(
			123,
		);
	});
});
