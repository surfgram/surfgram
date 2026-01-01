import { GiftBackground } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("GiftBackground", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			center_color: 123,
			edge_color: 123,
			text_color: 123,
		};

		const instance = new GiftBackground(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.centerColor ?? instance.raw?.center_color).toEqual(123);
		expect(instance.edgeColor ?? instance.raw?.edge_color).toEqual(123);
		expect(instance.textColor ?? instance.raw?.text_color).toEqual(123);
	});
});
