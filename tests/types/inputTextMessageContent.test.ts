import { InputTextMessageContent } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InputTextMessageContent", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			message_text: "example text",
			parse_mode: "example text",
			entities: [{} as any],
			link_preview_options: {} as any,
		};

		const instance = new InputTextMessageContent(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.messageText ?? instance.raw?.message_text).toEqual(
			"example text",
		);
		expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual(
			"example text",
		);
		expect(instance.entities ?? instance.raw?.entities).toEqual([{} as any]);
		expect(
			instance.linkPreviewOptions ?? instance.raw?.link_preview_options,
		).toEqual({} as any);
	});
});
