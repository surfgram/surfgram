import { User } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("User", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: 123,
			is_bot: true,
			first_name: "example text",
			last_name: "example text",
			username: "example text",
			language_code: "example text",
			is_premium: true,
			added_to_attachment_menu: true,
			can_join_groups: true,
			can_read_all_group_messages: true,
			supports_inline_queries: true,
			can_connect_to_business: true,
			has_main_web_app: true,
			has_topics_enabled: true,
		};

		const instance = new User(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual(123);
		expect(instance.isBot ?? instance.raw?.is_bot).toEqual(true);
		expect(instance.firstName ?? instance.raw?.first_name).toEqual(
			"example text",
		);
		expect(instance.lastName ?? instance.raw?.last_name).toEqual(
			"example text",
		);
		expect(instance.username ?? instance.raw?.username).toEqual("example text");
		expect(instance.languageCode ?? instance.raw?.language_code).toEqual(
			"example text",
		);
		expect(instance.isPremium ?? instance.raw?.is_premium).toEqual(true);
		expect(
			instance.addedToAttachmentMenu ?? instance.raw?.added_to_attachment_menu,
		).toEqual(true);
		expect(instance.canJoinGroups ?? instance.raw?.can_join_groups).toEqual(
			true,
		);
		expect(
			instance.canReadAllGroupMessages ??
				instance.raw?.can_read_all_group_messages,
		).toEqual(true);
		expect(
			instance.supportsInlineQueries ?? instance.raw?.supports_inline_queries,
		).toEqual(true);
		expect(
			instance.canConnectToBusiness ?? instance.raw?.can_connect_to_business,
		).toEqual(true);
		expect(instance.hasMainWebApp ?? instance.raw?.has_main_web_app).toEqual(
			true,
		);
		expect(
			instance.hasTopicsEnabled ?? instance.raw?.has_topics_enabled,
		).toEqual(true);
	});
});
