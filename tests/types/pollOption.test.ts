import { PollOption } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PollOption", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			text: "example text",
			text_entities: [{} as any],
			voter_count: 123,
		};

		const instance = new PollOption(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.text ?? instance.raw?.text).toEqual("example text");
		expect(instance.textEntities ?? instance.raw?.text_entities).toEqual([
			{} as any,
		]);
		expect(instance.voterCount ?? instance.raw?.voter_count).toEqual(123);
	});
});
