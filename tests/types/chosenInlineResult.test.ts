import { ChosenInlineResult } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ChosenInlineResult", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			result_id: "example text",
			from: {} as any,
			location: {} as any,
			inline_message_id: "example text",
			query: "example text",
		};

		const instance = new ChosenInlineResult(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.resultId ?? instance.raw?.result_id).toEqual(
			"example text",
		);
		expect(instance.from ?? instance.raw?.from).toEqual({} as any);
		expect(instance.location ?? instance.raw?.location).toEqual({} as any);
		expect(instance.inlineMessageId ?? instance.raw?.inline_message_id).toEqual(
			"example text",
		);
		expect(instance.query ?? instance.raw?.query).toEqual("example text");
	});
});
