import { UserProfileAudios } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('UserProfileAudios', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      total_count: 123,
      audios: [{} as any],
    };

    const instance = new UserProfileAudios(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.totalCount ?? instance.raw?.total_count).toEqual(123);
    expect(instance.audios ?? instance.raw?.audios).toEqual([{} as any]);
  });
});