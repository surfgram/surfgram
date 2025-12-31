import { ChatFullInfo } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ChatFullInfo", () => {
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
			accent_color_id: 123,
			max_reaction_count: 123,
			photo: {} as any,
			active_usernames: ["example text"],
			birthdate: {} as any,
			business_intro: {} as any,
			business_location: {} as any,
			business_opening_hours: {} as any,
			personal_chat: {} as any,
			parent_chat: {} as any,
			available_reactions: [{} as any],
			background_custom_emoji_id: "example text",
			profile_accent_color_id: 123,
			profile_background_custom_emoji_id: "example text",
			emoji_status_custom_emoji_id: "example text",
			emoji_status_expiration_date: 123,
			bio: "example text",
			has_private_forwards: true,
			has_restricted_voice_and_video_messages: true,
			join_to_send_messages: true,
			join_by_request: true,
			description: "example text",
			invite_link: "example text",
			pinned_message: {} as any,
			permissions: {} as any,
			accepted_gift_types: {} as any,
			can_send_paid_media: true,
			slow_mode_delay: 123,
			unrestrict_boost_count: 123,
			message_auto_delete_time: 123,
			has_aggressive_anti_spam_enabled: true,
			has_hidden_members: true,
			has_protected_content: true,
			has_visible_history: true,
			sticker_set_name: "example text",
			can_set_sticker_set: true,
			custom_emoji_sticker_set_name: "example text",
			linked_chat_id: 123,
			location: {} as any,
		};

		const instance = new ChatFullInfo(raw, mockBot);

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
		expect(instance.accentColorId ?? instance.raw?.accent_color_id).toEqual(
			123,
		);
		expect(
			instance.maxReactionCount ?? instance.raw?.max_reaction_count,
		).toEqual(123);
		expect(instance.photo ?? instance.raw?.photo).toEqual({} as any);
		expect(instance.activeUsernames ?? instance.raw?.active_usernames).toEqual([
			"example text",
		]);
		expect(instance.birthdate ?? instance.raw?.birthdate).toEqual({} as any);
		expect(instance.businessIntro ?? instance.raw?.business_intro).toEqual(
			{} as any,
		);
		expect(
			instance.businessLocation ?? instance.raw?.business_location,
		).toEqual({} as any);
		expect(
			instance.businessOpeningHours ?? instance.raw?.business_opening_hours,
		).toEqual({} as any);
		expect(instance.personalChat ?? instance.raw?.personal_chat).toEqual(
			{} as any,
		);
		expect(instance.parentChat ?? instance.raw?.parent_chat).toEqual({} as any);
		expect(
			instance.availableReactions ?? instance.raw?.available_reactions,
		).toEqual([{} as any]);
		expect(
			instance.backgroundCustomEmojiId ??
				instance.raw?.background_custom_emoji_id,
		).toEqual("example text");
		expect(
			instance.profileAccentColorId ?? instance.raw?.profile_accent_color_id,
		).toEqual(123);
		expect(
			instance.profileBackgroundCustomEmojiId ??
				instance.raw?.profile_background_custom_emoji_id,
		).toEqual("example text");
		expect(
			instance.emojiStatusCustomEmojiId ??
				instance.raw?.emoji_status_custom_emoji_id,
		).toEqual("example text");
		expect(
			instance.emojiStatusExpirationDate ??
				instance.raw?.emoji_status_expiration_date,
		).toEqual(123);
		expect(instance.bio ?? instance.raw?.bio).toEqual("example text");
		expect(
			instance.hasPrivateForwards ?? instance.raw?.has_private_forwards,
		).toEqual(true);
		expect(
			instance.hasRestrictedVoiceAndVideoMessages ??
				instance.raw?.has_restricted_voice_and_video_messages,
		).toEqual(true);
		expect(
			instance.joinToSendMessages ?? instance.raw?.join_to_send_messages,
		).toEqual(true);
		expect(instance.joinByRequest ?? instance.raw?.join_by_request).toEqual(
			true,
		);
		expect(instance.description ?? instance.raw?.description).toEqual(
			"example text",
		);
		expect(instance.inviteLink ?? instance.raw?.invite_link).toEqual(
			"example text",
		);
		expect(instance.pinnedMessage ?? instance.raw?.pinned_message).toEqual(
			{} as any,
		);
		expect(instance.permissions ?? instance.raw?.permissions).toEqual(
			{} as any,
		);
		expect(
			instance.acceptedGiftTypes ?? instance.raw?.accepted_gift_types,
		).toEqual({} as any);
		expect(
			instance.canSendPaidMedia ?? instance.raw?.can_send_paid_media,
		).toEqual(true);
		expect(instance.slowModeDelay ?? instance.raw?.slow_mode_delay).toEqual(
			123,
		);
		expect(
			instance.unrestrictBoostCount ?? instance.raw?.unrestrict_boost_count,
		).toEqual(123);
		expect(
			instance.messageAutoDeleteTime ?? instance.raw?.message_auto_delete_time,
		).toEqual(123);
		expect(
			instance.hasAggressiveAntiSpamEnabled ??
				instance.raw?.has_aggressive_anti_spam_enabled,
		).toEqual(true);
		expect(
			instance.hasHiddenMembers ?? instance.raw?.has_hidden_members,
		).toEqual(true);
		expect(
			instance.hasProtectedContent ?? instance.raw?.has_protected_content,
		).toEqual(true);
		expect(
			instance.hasVisibleHistory ?? instance.raw?.has_visible_history,
		).toEqual(true);
		expect(instance.stickerSetName ?? instance.raw?.sticker_set_name).toEqual(
			"example text",
		);
		expect(
			instance.canSetStickerSet ?? instance.raw?.can_set_sticker_set,
		).toEqual(true);
		expect(
			instance.customEmojiStickerSetName ??
				instance.raw?.custom_emoji_sticker_set_name,
		).toEqual("example text");
		expect(instance.linkedChatId ?? instance.raw?.linked_chat_id).toEqual(123);
		expect(instance.location ?? instance.raw?.location).toEqual({} as any);
	});
});
