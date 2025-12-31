import { Game } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Game", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			title: "example text",
			description: "example text",
			photo: [{} as any],
			text: "example text",
			text_entities: [{} as any],
			animation: {} as any,
		};

		const instance = new Game(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(instance.description ?? instance.raw?.description).toEqual(
			"example text",
		);
		expect(instance.photo ?? instance.raw?.photo).toEqual([{} as any]);
		expect(instance.text ?? instance.raw?.text).toEqual("example text");
		expect(instance.textEntities ?? instance.raw?.text_entities).toEqual([
			{} as any,
		]);
		expect(instance.animation ?? instance.raw?.animation).toEqual({} as any);
	});
});
