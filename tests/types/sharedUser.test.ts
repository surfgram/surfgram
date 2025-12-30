import { SharedUser } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SharedUser', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      user_id: 123,
      first_name: 'example text',
      last_name: 'example text',
      username: 'example text',
      photo: [{} as any],
    };

    const instance = new SharedUser(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.userId ?? instance.raw?.user_id).toEqual(123);
    expect(instance.firstName ?? instance.raw?.first_name).toEqual('example text');
    expect(instance.lastName ?? instance.raw?.last_name).toEqual('example text');
    expect(instance.username ?? instance.raw?.username).toEqual('example text');
    expect(instance.photo ?? instance.raw?.photo).toEqual([{} as any]);
  });
});
