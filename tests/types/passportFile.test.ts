import { PassportFile } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PassportFile", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			file_id: "example text",
			file_unique_id: "example text",
			file_size: 123,
			file_date: 123,
		};

		const instance = new PassportFile(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.fileId ?? instance.raw?.file_id).toEqual("example text");
		expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual(
			"example text",
		);
		expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
		expect(instance.fileDate ?? instance.raw?.file_date).toEqual(123);
	});
});
