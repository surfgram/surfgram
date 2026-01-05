import { Location } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Location", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			latitude: 123,
			longitude: 123,
			horizontal_accuracy: 123,
			live_period: 123,
			heading: 123,
			proximity_alert_radius: 123,
		};

		const instance = new Location(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.latitude ?? instance.raw?.latitude).toEqual(123);
		expect(instance.longitude ?? instance.raw?.longitude).toEqual(123);
		expect(
			instance.horizontalAccuracy ?? instance.raw?.horizontal_accuracy,
		).toEqual(123);
		expect(instance.livePeriod ?? instance.raw?.live_period).toEqual(123);
		expect(instance.heading ?? instance.raw?.heading).toEqual(123);
		expect(
			instance.proximityAlertRadius ?? instance.raw?.proximity_alert_radius,
		).toEqual(123);
	});
});
