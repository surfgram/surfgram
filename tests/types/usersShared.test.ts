import { UsersShared } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('UsersShared', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      request_id: 123,
      users: [{} as any],
    };

    const instance = new UsersShared(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.requestId ?? instance.raw?.request_id).toEqual(123);
    expect(instance.users ?? instance.raw?.users).toEqual([{} as any]);
  });
});
