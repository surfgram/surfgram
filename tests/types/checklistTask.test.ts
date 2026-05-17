import { ChecklistTask } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ChecklistTask", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: 123,
			text: "example text",
			text_entities: [{} as any],
			completed_by_user: {} as any,
			completed_by_chat: {} as any,
			completion_date: 123,
		};

		const instance = new ChecklistTask(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual(123);
		expect(instance.text ?? instance.raw?.text).toEqual("example text");
		expect(instance.textEntities ?? instance.raw?.text_entities).toEqual([
			{} as any,
		]);
		expect(instance.completedByUser ?? instance.raw?.completed_by_user).toEqual(
			{} as any,
		);
		expect(instance.completedByChat ?? instance.raw?.completed_by_chat).toEqual(
			{} as any,
		);
		expect(instance.completionDate ?? instance.raw?.completion_date).toEqual(
			123,
		);
	});
});
