import { ChatMemberRestricted } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatMemberRestricted', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      status: "example text",
      user: {} as any,
      is_member: true,
      can_send_messages: true,
      can_send_audios: true,
      can_send_documents: true,
      can_send_photos: true,
      can_send_videos: true,
      can_send_video_notes: true,
      can_send_voice_notes: true,
      can_send_polls: true,
      can_send_other_messages: true,
      can_add_web_page_previews: true,
      can_change_info: true,
      can_invite_users: true,
      can_pin_messages: true,
      can_manage_topics: true,
      until_date: 123,
    };

    const instance = new ChatMemberRestricted(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.status ?? instance.raw?.status).toEqual("example text");
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.isMember ?? instance.raw?.is_member).toEqual(true);
    expect(instance.canSendMessages ?? instance.raw?.can_send_messages).toEqual(true);
    expect(instance.canSendAudios ?? instance.raw?.can_send_audios).toEqual(true);
    expect(instance.canSendDocuments ?? instance.raw?.can_send_documents).toEqual(true);
    expect(instance.canSendPhotos ?? instance.raw?.can_send_photos).toEqual(true);
    expect(instance.canSendVideos ?? instance.raw?.can_send_videos).toEqual(true);
    expect(instance.canSendVideoNotes ?? instance.raw?.can_send_video_notes).toEqual(true);
    expect(instance.canSendVoiceNotes ?? instance.raw?.can_send_voice_notes).toEqual(true);
    expect(instance.canSendPolls ?? instance.raw?.can_send_polls).toEqual(true);
    expect(instance.canSendOtherMessages ?? instance.raw?.can_send_other_messages).toEqual(true);
    expect(instance.canAddWebPagePreviews ?? instance.raw?.can_add_web_page_previews).toEqual(true);
    expect(instance.canChangeInfo ?? instance.raw?.can_change_info).toEqual(true);
    expect(instance.canInviteUsers ?? instance.raw?.can_invite_users).toEqual(true);
    expect(instance.canPinMessages ?? instance.raw?.can_pin_messages).toEqual(true);
    expect(instance.canManageTopics ?? instance.raw?.can_manage_topics).toEqual(true);
    expect(instance.untilDate ?? instance.raw?.until_date).toEqual(123);
  });
});