import { InputMediaAnimation } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InputMediaAnimation", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			media: "example text",
			thumbnail: "example text",
			caption: "example text",
			parse_mode: "example text",
			caption_entities: [{} as any],
			show_caption_above_media: true,
			width: 123,
			height: 123,
			duration: 123,
			has_spoiler: true,
		};

		const instance = new InputMediaAnimation(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.media ?? instance.raw?.media).toEqual("example text");
		expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual(
			"example text",
		);
		expect(instance.caption ?? instance.raw?.caption).toEqual("example text");
		expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual(
			"example text",
		);
		expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([
			{} as any,
		]);
		expect(
			instance.showCaptionAboveMedia ?? instance.raw?.show_caption_above_media,
		).toEqual(true);
		expect(instance.width ?? instance.raw?.width).toEqual(123);
		expect(instance.height ?? instance.raw?.height).toEqual(123);
		expect(instance.duration ?? instance.raw?.duration).toEqual(123);
		expect(instance.hasSpoiler ?? instance.raw?.has_spoiler).toEqual(true);
	});
});
