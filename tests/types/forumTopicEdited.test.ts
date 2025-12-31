import { ForumTopicEdited } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ForumTopicEdited", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			name: "example text",
			icon_custom_emoji_id: "example text",
		};

		const instance = new ForumTopicEdited(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.name ?? instance.raw?.name).toEqual("example text");
		expect(
			instance.iconCustomEmojiId ?? instance.raw?.icon_custom_emoji_id,
		).toEqual("example text");
	});
});
