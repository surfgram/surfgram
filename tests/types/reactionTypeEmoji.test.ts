import { ReactionTypeEmoji } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ReactionTypeEmoji", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			emoji: "example text",
		};

		const instance = new ReactionTypeEmoji(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.emoji ?? instance.raw?.emoji).toEqual("example text");
	});
});
