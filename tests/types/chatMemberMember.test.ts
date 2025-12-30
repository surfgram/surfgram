import { ChatMemberMember } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatMemberMember', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      status: 'example text',
      user: {} as any,
      until_date: 123,
    };

    const instance = new ChatMemberMember(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.status ?? instance.raw?.status).toEqual('example text');
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.untilDate ?? instance.raw?.until_date).toEqual(123);
  });
});
