import { Chat } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Chat", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: 123,
			type: "example text",
			title: "example text",
			username: "example text",
			first_name: "example text",
			last_name: "example text",
			is_forum: true,
			is_direct_messages: true,
		};

		const instance = new Chat(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual(123);
		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(instance.username ?? instance.raw?.username).toEqual("example text");
		expect(instance.firstName ?? instance.raw?.first_name).toEqual(
			"example text",
		);
		expect(instance.lastName ?? instance.raw?.last_name).toEqual(
			"example text",
		);
		expect(instance.isForum ?? instance.raw?.is_forum).toEqual(true);
		expect(
			instance.isDirectMessages ?? instance.raw?.is_direct_messages,
		).toEqual(true);
	});
});
