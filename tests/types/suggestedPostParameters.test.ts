import { SuggestedPostParameters } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SuggestedPostParameters', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      price: {} as any,
      send_date: 123,
    };

    const instance = new SuggestedPostParameters(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.price ?? instance.raw?.price).toEqual({} as any);
    expect(instance.sendDate ?? instance.raw?.send_date).toEqual(123);
  });
});
