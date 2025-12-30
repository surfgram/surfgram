import { Gifts } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Gifts', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      gifts: [{} as any],
    };

    const instance = new Gifts(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.gifts ?? instance.raw?.gifts).toEqual([{} as any]);
  });
});
