import { StoryArea } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("StoryArea", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			position: {} as any,
			type: {} as any,
		};

		const instance = new StoryArea(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.position ?? instance.raw?.position).toEqual({} as any);
		expect(instance.type ?? instance.raw?.type).toEqual({} as any);
	});
});
