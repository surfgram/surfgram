import { StickerSet } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("StickerSet", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			name: "example text",
			title: "example text",
			sticker_type: "example text",
			stickers: [{} as any],
			thumbnail: {} as any,
		};

		const instance = new StickerSet(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.name ?? instance.raw?.name).toEqual("example text");
		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(instance.stickerType ?? instance.raw?.sticker_type).toEqual(
			"example text",
		);
		expect(instance.stickers ?? instance.raw?.stickers).toEqual([{} as any]);
		expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual({} as any);
	});
});
