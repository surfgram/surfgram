import { PollAnswer } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PollAnswer", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			poll_id: "example text",
			voter_chat: {} as any,
			user: {} as any,
			option_ids: [123],
		};

		const instance = new PollAnswer(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.pollId ?? instance.raw?.poll_id).toEqual("example text");
		expect(instance.voterChat ?? instance.raw?.voter_chat).toEqual({} as any);
		expect(instance.user ?? instance.raw?.user).toEqual({} as any);
		expect(instance.optionIds ?? instance.raw?.option_ids).toEqual([123]);
	});
});
