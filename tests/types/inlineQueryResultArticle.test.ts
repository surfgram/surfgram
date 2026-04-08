import { InlineQueryResultArticle } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InlineQueryResultArticle", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			id: "example text",
			title: "example text",
			input_message_content: {} as any,
			reply_markup: {} as any,
			url: "example text",
			description: "example text",
			thumbnail_url: "example text",
			thumbnail_width: 123,
			thumbnail_height: 123,
		};

		const instance = new InlineQueryResultArticle(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.id ?? instance.raw?.id).toEqual("example text");
		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(
			instance.inputMessageContent ?? instance.raw?.input_message_content,
		).toEqual({} as any);
		expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual(
			{} as any,
		);
		expect(instance.url ?? instance.raw?.url).toEqual("example text");
		expect(instance.description ?? instance.raw?.description).toEqual(
			"example text",
		);
		expect(instance.thumbnailUrl ?? instance.raw?.thumbnail_url).toEqual(
			"example text",
		);
		expect(instance.thumbnailWidth ?? instance.raw?.thumbnail_width).toEqual(
			123,
		);
		expect(instance.thumbnailHeight ?? instance.raw?.thumbnail_height).toEqual(
			123,
		);
	});
});
