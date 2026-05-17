import { StoryAreaTypeSuggestedReaction } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("StoryAreaTypeSuggestedReaction", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			reaction_type: {} as any,
			is_dark: true,
			is_flipped: true,
		};

		const instance = new StoryAreaTypeSuggestedReaction(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.reactionType ?? instance.raw?.reaction_type).toEqual(
			{} as any,
		);
		expect(instance.isDark ?? instance.raw?.is_dark).toEqual(true);
		expect(instance.isFlipped ?? instance.raw?.is_flipped).toEqual(true);
	});
});
