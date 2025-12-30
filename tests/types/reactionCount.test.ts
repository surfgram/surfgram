import { ReactionCount } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ReactionCount', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: {} as any,
      total_count: 123,
    };

    const instance = new ReactionCount(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual({} as any);
    expect(instance.totalCount ?? instance.raw?.total_count).toEqual(123);
  });
});
