import { ProximityAlertTriggered } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ProximityAlertTriggered", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			traveler: {} as any,
			watcher: {} as any,
			distance: 123,
		};

		const instance = new ProximityAlertTriggered(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.traveler ?? instance.raw?.traveler).toEqual({} as any);
		expect(instance.watcher ?? instance.raw?.watcher).toEqual({} as any);
		expect(instance.distance ?? instance.raw?.distance).toEqual(123);
	});
});
