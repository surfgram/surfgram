import { ForumTopicCreated } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ForumTopicCreated", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			name: "example text",
			icon_color: 123,
			icon_custom_emoji_id: "example text",
			is_name_implicit: true,
		};

		const instance = new ForumTopicCreated(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.name ?? instance.raw?.name).toEqual("example text");
		expect(instance.iconColor ?? instance.raw?.icon_color).toEqual(123);
		expect(
			instance.iconCustomEmojiId ?? instance.raw?.icon_custom_emoji_id,
		).toEqual("example text");
		expect(instance.isNameImplicit ?? instance.raw?.is_name_implicit).toEqual(
			true,
		);
	});
});
