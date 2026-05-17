import { PaidMedia } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PaidMedia", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			live_photo: {} as any,
		};

		const instance = new PaidMedia(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.livePhoto ?? instance.raw?.live_photo).toEqual({} as any);
	});
});
