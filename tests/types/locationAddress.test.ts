import { LocationAddress } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("LocationAddress", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			country_code: "example text",
			state: "example text",
			city: "example text",
			street: "example text",
		};

		const instance = new LocationAddress(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.countryCode ?? instance.raw?.country_code).toEqual(
			"example text",
		);
		expect(instance.state ?? instance.raw?.state).toEqual("example text");
		expect(instance.city ?? instance.raw?.city).toEqual("example text");
		expect(instance.street ?? instance.raw?.street).toEqual("example text");
	});
});
