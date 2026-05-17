import { InputMediaAudio } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InputMediaAudio", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			media: "example text",
			thumbnail: "example text",
			caption: "example text",
			parse_mode: "example text",
			caption_entities: [{} as any],
			duration: 123,
			performer: "example text",
			title: "example text",
		};

		const instance = new InputMediaAudio(raw, mockBot);

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
		expect(instance.duration ?? instance.raw?.duration).toEqual(123);
		expect(instance.performer ?? instance.raw?.performer).toEqual(
			"example text",
		);
		expect(instance.title ?? instance.raw?.title).toEqual("example text");
	});
});
