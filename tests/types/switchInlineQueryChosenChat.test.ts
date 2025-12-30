import { SwitchInlineQueryChosenChat } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SwitchInlineQueryChosenChat', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      query: 'example text',
      allow_user_chats: true,
      allow_bot_chats: true,
      allow_group_chats: true,
      allow_channel_chats: true,
    };

    const instance = new SwitchInlineQueryChosenChat(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.query ?? instance.raw?.query).toEqual('example text');
    expect(instance.allowUserChats ?? instance.raw?.allow_user_chats).toEqual(true);
    expect(instance.allowBotChats ?? instance.raw?.allow_bot_chats).toEqual(true);
    expect(instance.allowGroupChats ?? instance.raw?.allow_group_chats).toEqual(true);
    expect(instance.allowChannelChats ?? instance.raw?.allow_channel_chats).toEqual(true);
  });
});
