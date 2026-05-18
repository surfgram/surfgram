import { SuggestedPostInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SuggestedPostInfo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      state: "example text",
      price: {} as any,
      send_date: 123,
    };

    const instance = new SuggestedPostInfo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.state ?? instance.raw?.state).toEqual("example text");
    expect(instance.price ?? instance.raw?.price).toEqual({} as any);
    expect(instance.sendDate ?? instance.raw?.send_date).toEqual(123);
  });
});