import { InlineQueryResultPhoto } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InlineQueryResultPhoto", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			id: "example text",
			photo_url: "example text",
			thumbnail_url: "example text",
			photo_width: 123,
			photo_height: 123,
			title: "example text",
			description: "example text",
			caption: "example text",
			parse_mode: "example text",
			caption_entities: [{} as any],
			show_caption_above_media: true,
			reply_markup: {} as any,
			input_message_content: {} as any,
		};

		const instance = new InlineQueryResultPhoto(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.id ?? instance.raw?.id).toEqual("example text");
		expect(instance.photoUrl ?? instance.raw?.photo_url).toEqual(
			"example text",
		);
		expect(instance.thumbnailUrl ?? instance.raw?.thumbnail_url).toEqual(
			"example text",
		);
		expect(instance.photoWidth ?? instance.raw?.photo_width).toEqual(123);
		expect(instance.photoHeight ?? instance.raw?.photo_height).toEqual(123);
		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(instance.description ?? instance.raw?.description).toEqual(
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
		expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual(
			{} as any,
		);
		expect(
			instance.inputMessageContent ?? instance.raw?.input_message_content,
		).toEqual({} as any);
	});
});
