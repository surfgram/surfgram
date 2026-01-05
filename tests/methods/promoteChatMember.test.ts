import { promoteChatMember } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("promoteChatMember", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			chatId: 123,
			userId: 123,
			isAnonymous: true,
			canManageChat: true,
			canDeleteMessages: true,
			canManageVideoChats: true,
			canRestrictMembers: true,
			canPromoteMembers: true,
			canChangeInfo: true,
			canInviteUsers: true,
			canPostStories: true,
			canEditStories: true,
			canDeleteStories: true,
			canPostMessages: true,
			canEditMessages: true,
			canPinMessages: true,
			canManageTopics: true,
			canManageDirectMessages: true,
		};

		await promoteChatMember.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("promoteChatMember", {
			chat_id: 123,
			user_id: 123,
			is_anonymous: true,
			can_manage_chat: true,
			can_delete_messages: true,
			can_manage_video_chats: true,
			can_restrict_members: true,
			can_promote_members: true,
			can_change_info: true,
			can_invite_users: true,
			can_post_stories: true,
			can_edit_stories: true,
			can_delete_stories: true,
			can_post_messages: true,
			can_edit_messages: true,
			can_pin_messages: true,
			can_manage_topics: true,
			can_manage_direct_messages: true,
		});
	});
});
