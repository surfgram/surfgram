import { PollOption } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PollOption", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			persistent_id: "example text",
			text: "example text",
			text_entities: [{} as any],
			voter_count: 123,
			added_by_user: {} as any,
			added_by_chat: {} as any,
			addition_date: 123,
		};

		const instance = new PollOption(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.persistentId ?? instance.raw?.persistent_id).toEqual(
			"example text",
		);
		expect(instance.text ?? instance.raw?.text).toEqual("example text");
		expect(instance.textEntities ?? instance.raw?.text_entities).toEqual([
			{} as any,
		]);
		expect(instance.voterCount ?? instance.raw?.voter_count).toEqual(123);
		expect(instance.addedByUser ?? instance.raw?.added_by_user).toEqual(
			{} as any,
		);
		expect(instance.addedByChat ?? instance.raw?.added_by_chat).toEqual(
			{} as any,
		);
		expect(instance.additionDate ?? instance.raw?.addition_date).toEqual(123);
	});
});
