import { Update } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Update", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			update_id: 123,
			message: {} as any,
			edited_message: {} as any,
			channel_post: {} as any,
			edited_channel_post: {} as any,
			business_connection: {} as any,
			business_message: {} as any,
			edited_business_message: {} as any,
			deleted_business_messages: {} as any,
			message_reaction: {} as any,
			message_reaction_count: {} as any,
			inline_query: {} as any,
			chosen_inline_result: {} as any,
			callback_query: {} as any,
			shipping_query: {} as any,
			pre_checkout_query: {} as any,
			purchased_paid_media: {} as any,
			poll: {} as any,
			poll_answer: {} as any,
			my_chat_member: {} as any,
			chat_member: {} as any,
			chat_join_request: {} as any,
			chat_boost: {} as any,
			removed_chat_boost: {} as any,
		};

		const instance = new Update(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.updateId ?? instance.raw?.update_id).toEqual(123);
		expect(instance.message ?? instance.raw?.message).toEqual({} as any);
		expect(instance.editedMessage ?? instance.raw?.edited_message).toEqual(
			{} as any,
		);
		expect(instance.channelPost ?? instance.raw?.channel_post).toEqual(
			{} as any,
		);
		expect(
			instance.editedChannelPost ?? instance.raw?.edited_channel_post,
		).toEqual({} as any);
		expect(
			instance.businessConnection ?? instance.raw?.business_connection,
		).toEqual({} as any);
		expect(instance.businessMessage ?? instance.raw?.business_message).toEqual(
			{} as any,
		);
		expect(
			instance.editedBusinessMessage ?? instance.raw?.edited_business_message,
		).toEqual({} as any);
		expect(
			instance.deletedBusinessMessages ??
				instance.raw?.deleted_business_messages,
		).toEqual({} as any);
		expect(instance.messageReaction ?? instance.raw?.message_reaction).toEqual(
			{} as any,
		);
		expect(
			instance.messageReactionCount ?? instance.raw?.message_reaction_count,
		).toEqual({} as any);
		expect(instance.inlineQuery ?? instance.raw?.inline_query).toEqual(
			{} as any,
		);
		expect(
			instance.chosenInlineResult ?? instance.raw?.chosen_inline_result,
		).toEqual({} as any);
		expect(instance.callbackQuery ?? instance.raw?.callback_query).toEqual(
			{} as any,
		);
		expect(instance.shippingQuery ?? instance.raw?.shipping_query).toEqual(
			{} as any,
		);
		expect(
			instance.preCheckoutQuery ?? instance.raw?.pre_checkout_query,
		).toEqual({} as any);
		expect(
			instance.purchasedPaidMedia ?? instance.raw?.purchased_paid_media,
		).toEqual({} as any);
		expect(instance.poll ?? instance.raw?.poll).toEqual({} as any);
		expect(instance.pollAnswer ?? instance.raw?.poll_answer).toEqual({} as any);
		expect(instance.myChatMember ?? instance.raw?.my_chat_member).toEqual(
			{} as any,
		);
		expect(instance.chatMember ?? instance.raw?.chat_member).toEqual({} as any);
		expect(instance.chatJoinRequest ?? instance.raw?.chat_join_request).toEqual(
			{} as any,
		);
		expect(instance.chatBoost ?? instance.raw?.chat_boost).toEqual({} as any);
		expect(
			instance.removedChatBoost ?? instance.raw?.removed_chat_boost,
		).toEqual({} as any);
	});
});
