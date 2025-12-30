import { BusinessConnection } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BusinessConnection', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: 'example text',
      user: {} as any,
      user_chat_id: 123,
      date: 123,
      rights: {} as any,
      is_enabled: true,
    };

    const instance = new BusinessConnection(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.userChatId ?? instance.raw?.user_chat_id).toEqual(123);
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.rights ?? instance.raw?.rights).toEqual({} as any);
    expect(instance.isEnabled ?? instance.raw?.is_enabled).toEqual(true);
  });
});
