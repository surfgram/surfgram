import { BotCommandScopeChatMember } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BotCommandScopeChatMember', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      chat_id: 123,
      user_id: 123,
    };

    const instance = new BotCommandScopeChatMember(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.chatId ?? instance.raw?.chat_id).toEqual(123);
    expect(instance.userId ?? instance.raw?.user_id).toEqual(123);
  });
});
