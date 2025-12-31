import { InputPaidMediaVideo } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InputPaidMediaVideo", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			media: "example text",
			thumbnail: "example text",
			cover: "example text",
			start_timestamp: 123,
			width: 123,
			height: 123,
			duration: 123,
			supports_streaming: true,
		};

		const instance = new InputPaidMediaVideo(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.media ?? instance.raw?.media).toEqual("example text");
		expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual(
			"example text",
		);
		expect(instance.cover ?? instance.raw?.cover).toEqual("example text");
		expect(instance.startTimestamp ?? instance.raw?.start_timestamp).toEqual(
			123,
		);
		expect(instance.width ?? instance.raw?.width).toEqual(123);
		expect(instance.height ?? instance.raw?.height).toEqual(123);
		expect(instance.duration ?? instance.raw?.duration).toEqual(123);
		expect(
			instance.supportsStreaming ?? instance.raw?.supports_streaming,
		).toEqual(true);
	});
});
