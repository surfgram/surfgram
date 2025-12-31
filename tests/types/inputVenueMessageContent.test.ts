import { InputVenueMessageContent } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InputVenueMessageContent", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			latitude: 123,
			longitude: 123,
			title: "example text",
			address: "example text",
			foursquare_id: "example text",
			foursquare_type: "example text",
			google_place_id: "example text",
			google_place_type: "example text",
		};

		const instance = new InputVenueMessageContent(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.latitude ?? instance.raw?.latitude).toEqual(123);
		expect(instance.longitude ?? instance.raw?.longitude).toEqual(123);
		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(instance.address ?? instance.raw?.address).toEqual("example text");
		expect(instance.foursquareId ?? instance.raw?.foursquare_id).toEqual(
			"example text",
		);
		expect(instance.foursquareType ?? instance.raw?.foursquare_type).toEqual(
			"example text",
		);
		expect(instance.googlePlaceId ?? instance.raw?.google_place_id).toEqual(
			"example text",
		);
		expect(instance.googlePlaceType ?? instance.raw?.google_place_type).toEqual(
			"example text",
		);
	});
});
