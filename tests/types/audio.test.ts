import { Audio } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Audio", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			file_id: "example text",
			file_unique_id: "example text",
			duration: 123,
			performer: "example text",
			title: "example text",
			file_name: "example text",
			mime_type: "example text",
			file_size: 123,
			thumbnail: {} as any,
		};

		const instance = new Audio(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.fileId ?? instance.raw?.file_id).toEqual("example text");
		expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual(
			"example text",
		);
		expect(instance.duration ?? instance.raw?.duration).toEqual(123);
		expect(instance.performer ?? instance.raw?.performer).toEqual(
			"example text",
		);
		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(instance.fileName ?? instance.raw?.file_name).toEqual(
			"example text",
		);
		expect(instance.mimeType ?? instance.raw?.mime_type).toEqual(
			"example text",
		);
		expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
		expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual({} as any);
	});
});
