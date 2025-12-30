import { OwnedGifts } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('OwnedGifts', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      total_count: 123,
      gifts: [{} as any],
      next_offset: "example text",
    };

    const instance = new OwnedGifts(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.totalCount ?? instance.raw?.total_count).toEqual(123);
    expect(instance.gifts ?? instance.raw?.gifts).toEqual([{} as any]);
    expect(instance.nextOffset ?? instance.raw?.next_offset).toEqual("example text");
  });
});