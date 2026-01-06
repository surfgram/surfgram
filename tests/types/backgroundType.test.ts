import { BackgroundType } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("BackgroundType", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			fill: {} as any,
			dark_theme_dimming: 123,
		};

		const instance = new BackgroundType(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.fill ?? instance.raw?.fill).toEqual({} as any);
		expect(
			instance.darkThemeDimming ?? instance.raw?.dark_theme_dimming,
		).toEqual(123);
	});
});
