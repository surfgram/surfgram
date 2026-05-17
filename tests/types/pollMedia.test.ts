import { PollMedia } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PollMedia", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			animation: {} as any,
			audio: {} as any,
			document: {} as any,
			live_photo: {} as any,
			location: {} as any,
			photo: [{} as any],
			sticker: {} as any,
			venue: {} as any,
			video: {} as any,
		};

		const instance = new PollMedia(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.animation ?? instance.raw?.animation).toEqual({} as any);
		expect(instance.audio ?? instance.raw?.audio).toEqual({} as any);
		expect(instance.document ?? instance.raw?.document).toEqual({} as any);
		expect(instance.livePhoto ?? instance.raw?.live_photo).toEqual({} as any);
		expect(instance.location ?? instance.raw?.location).toEqual({} as any);
		expect(instance.photo ?? instance.raw?.photo).toEqual([{} as any]);
		expect(instance.sticker ?? instance.raw?.sticker).toEqual({} as any);
		expect(instance.venue ?? instance.raw?.venue).toEqual({} as any);
		expect(instance.video ?? instance.raw?.video).toEqual({} as any);
	});
});
