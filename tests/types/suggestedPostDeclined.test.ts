import { SuggestedPostDeclined } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("SuggestedPostDeclined", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			suggested_post_message: {} as any,
			comment: "example text",
		};

		const instance = new SuggestedPostDeclined(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(
			instance.suggestedPostMessage ?? instance.raw?.suggested_post_message,
		).toEqual({} as any);
		expect(instance.comment ?? instance.raw?.comment).toEqual("example text");
	});
});
