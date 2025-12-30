import { ChatJoinRequest } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatJoinRequest', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chat: {} as any,
      from: {} as any,
      user_chat_id: 123,
      date: 123,
      bio: 'example text',
      invite_link: {} as any,
    };

    const instance = new ChatJoinRequest(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.from ?? instance.raw?.from).toEqual({} as any);
    expect(instance.userChatId ?? instance.raw?.user_chat_id).toEqual(123);
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.bio ?? instance.raw?.bio).toEqual('example text');
    expect(instance.inviteLink ?? instance.raw?.invite_link).toEqual({} as any);
  });
});
