import { ForumTopic } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ForumTopic", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			message_thread_id: 123,
			name: "example text",
			icon_color: 123,
			icon_custom_emoji_id: "example text",
		};

		const instance = new ForumTopic(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.messageThreadId ?? instance.raw?.message_thread_id).toEqual(
			123,
		);
		expect(instance.name ?? instance.raw?.name).toEqual("example text");
		expect(instance.iconColor ?? instance.raw?.icon_color).toEqual(123);
		expect(
			instance.iconCustomEmojiId ?? instance.raw?.icon_custom_emoji_id,
		).toEqual("example text");
	});
});
