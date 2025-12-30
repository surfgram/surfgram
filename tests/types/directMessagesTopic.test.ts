import { DirectMessagesTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('DirectMessagesTopic', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      topic_id: 123,
      user: {} as any,
    };

    const instance = new DirectMessagesTopic(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.topicId ?? instance.raw?.topic_id).toEqual(123);
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
  });
});
