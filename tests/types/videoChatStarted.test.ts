import { VideoChatStarted } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("VideoChatStarted", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			duration: 123,
		};

		const instance = new VideoChatStarted(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.duration ?? instance.raw?.duration).toEqual(123);
	});
});
