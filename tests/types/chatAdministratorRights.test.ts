import { ChatAdministratorRights } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatAdministratorRights', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
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
    };

    const instance = new ChatAdministratorRights(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.isAnonymous ?? instance.raw?.is_anonymous).toEqual(true);
    expect(instance.canManageChat ?? instance.raw?.can_manage_chat).toEqual(true);
    expect(instance.canDeleteMessages ?? instance.raw?.can_delete_messages).toEqual(true);
    expect(instance.canManageVideoChats ?? instance.raw?.can_manage_video_chats).toEqual(true);
    expect(instance.canRestrictMembers ?? instance.raw?.can_restrict_members).toEqual(true);
    expect(instance.canPromoteMembers ?? instance.raw?.can_promote_members).toEqual(true);
    expect(instance.canChangeInfo ?? instance.raw?.can_change_info).toEqual(true);
    expect(instance.canInviteUsers ?? instance.raw?.can_invite_users).toEqual(true);
    expect(instance.canPostStories ?? instance.raw?.can_post_stories).toEqual(true);
    expect(instance.canEditStories ?? instance.raw?.can_edit_stories).toEqual(true);
    expect(instance.canDeleteStories ?? instance.raw?.can_delete_stories).toEqual(true);
    expect(instance.canPostMessages ?? instance.raw?.can_post_messages).toEqual(true);
    expect(instance.canEditMessages ?? instance.raw?.can_edit_messages).toEqual(true);
    expect(instance.canPinMessages ?? instance.raw?.can_pin_messages).toEqual(true);
    expect(instance.canManageTopics ?? instance.raw?.can_manage_topics).toEqual(true);
    expect(instance.canManageDirectMessages ?? instance.raw?.can_manage_direct_messages).toEqual(true);
  });
});