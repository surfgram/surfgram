import { KeyboardButtonRequestChat } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('KeyboardButtonRequestChat', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      request_id: 123,
      chat_is_channel: true,
      chat_is_forum: true,
      chat_has_username: true,
      chat_is_created: true,
      user_administrator_rights: {} as any,
      bot_administrator_rights: {} as any,
      bot_is_member: true,
      request_title: true,
      request_username: true,
      request_photo: true,
    };

    const instance = new KeyboardButtonRequestChat(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.requestId ?? instance.raw?.request_id).toEqual(123);
    expect(instance.chatIsChannel ?? instance.raw?.chat_is_channel).toEqual(true);
    expect(instance.chatIsForum ?? instance.raw?.chat_is_forum).toEqual(true);
    expect(instance.chatHasUsername ?? instance.raw?.chat_has_username).toEqual(true);
    expect(instance.chatIsCreated ?? instance.raw?.chat_is_created).toEqual(true);
    expect(instance.userAdministratorRights ?? instance.raw?.user_administrator_rights).toEqual(
      {} as any
    );
    expect(instance.botAdministratorRights ?? instance.raw?.bot_administrator_rights).toEqual(
      {} as any
    );
    expect(instance.botIsMember ?? instance.raw?.bot_is_member).toEqual(true);
    expect(instance.requestTitle ?? instance.raw?.request_title).toEqual(true);
    expect(instance.requestUsername ?? instance.raw?.request_username).toEqual(true);
    expect(instance.requestPhoto ?? instance.raw?.request_photo).toEqual(true);
  });
});
