import { ChatMemberOwner } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatMemberOwner', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      status: 'example text',
      user: {} as any,
      is_anonymous: true,
      custom_title: 'example text',
    };

    const instance = new ChatMemberOwner(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.status ?? instance.raw?.status).toEqual('example text');
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.isAnonymous ?? instance.raw?.is_anonymous).toEqual(true);
    expect(instance.customTitle ?? instance.raw?.custom_title).toEqual('example text');
  });
});
