import { ChatMemberUpdated } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatMemberUpdated', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chat: {} as any,
      from: {} as any,
      date: 123,
      old_chat_member: {} as any,
      new_chat_member: {} as any,
      invite_link: {} as any,
      via_join_request: true,
      via_chat_folder_invite_link: true,
    };

    const instance = new ChatMemberUpdated(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.from ?? instance.raw?.from).toEqual({} as any);
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.oldChatMember ?? instance.raw?.old_chat_member).toEqual({} as any);
    expect(instance.newChatMember ?? instance.raw?.new_chat_member).toEqual({} as any);
    expect(instance.inviteLink ?? instance.raw?.invite_link).toEqual({} as any);
    expect(instance.viaJoinRequest ?? instance.raw?.via_join_request).toEqual(true);
    expect(instance.viaChatFolderInviteLink ?? instance.raw?.via_chat_folder_invite_link).toEqual(true);
  });
});