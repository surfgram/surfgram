import { PollOptionAdded } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PollOptionAdded", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			poll_message: {} as any,
			option_persistent_id: "example text",
			option_text: "example text",
			option_text_entities: [{} as any],
		};

		const instance = new PollOptionAdded(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.pollMessage ?? instance.raw?.poll_message).toEqual(
			{} as any,
		);
		expect(
			instance.optionPersistentId ?? instance.raw?.option_persistent_id,
		).toEqual("example text");
		expect(instance.optionText ?? instance.raw?.option_text).toEqual(
			"example text",
		);
		expect(
			instance.optionTextEntities ?? instance.raw?.option_text_entities,
		).toEqual([{} as any]);
	});
});
