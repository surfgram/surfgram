import { Poll } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Poll", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: "example text",
			question: "example text",
			question_entities: [{} as any],
			options: [{} as any],
			total_voter_count: 123,
			is_closed: true,
			is_anonymous: true,
			type: "example text",
			allows_multiple_answers: true,
			correct_option_id: 123,
			explanation: "example text",
			explanation_entities: [{} as any],
			open_period: 123,
			close_date: 123,
		};

		const instance = new Poll(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual("example text");
		expect(instance.question ?? instance.raw?.question).toEqual("example text");
		expect(
			instance.questionEntities ?? instance.raw?.question_entities,
		).toEqual([{} as any]);
		expect(instance.options ?? instance.raw?.options).toEqual([{} as any]);
		expect(instance.totalVoterCount ?? instance.raw?.total_voter_count).toEqual(
			123,
		);
		expect(instance.isClosed ?? instance.raw?.is_closed).toEqual(true);
		expect(instance.isAnonymous ?? instance.raw?.is_anonymous).toEqual(true);
		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(
			instance.allowsMultipleAnswers ?? instance.raw?.allows_multiple_answers,
		).toEqual(true);
		expect(instance.correctOptionId ?? instance.raw?.correct_option_id).toEqual(
			123,
		);
		expect(instance.explanation ?? instance.raw?.explanation).toEqual(
			"example text",
		);
		expect(
			instance.explanationEntities ?? instance.raw?.explanation_entities,
		).toEqual([{} as any]);
		expect(instance.openPeriod ?? instance.raw?.open_period).toEqual(123);
		expect(instance.closeDate ?? instance.raw?.close_date).toEqual(123);
	});
});
