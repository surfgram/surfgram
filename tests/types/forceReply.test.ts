import { ForceReply } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ForceReply", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			force_reply: true,
			input_field_placeholder: "example text",
			selective: true,
		};

		const instance = new ForceReply(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.forceReply ?? instance.raw?.force_reply).toEqual(true);
		expect(
			instance.inputFieldPlaceholder ?? instance.raw?.input_field_placeholder,
		).toEqual("example text");
		expect(instance.selective ?? instance.raw?.selective).toEqual(true);
	});
});
