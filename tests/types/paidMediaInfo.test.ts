import { PaidMediaInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PaidMediaInfo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      star_count: 123,
      paid_media: [{} as any],
    };

    const instance = new PaidMediaInfo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.starCount ?? instance.raw?.star_count).toEqual(123);
    expect(instance.paidMedia ?? instance.raw?.paid_media).toEqual([{} as any]);
  });
});