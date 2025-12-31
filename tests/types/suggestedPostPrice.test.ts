import { SuggestedPostPrice } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SuggestedPostPrice', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      currency: "example text",
      amount: 123,
    };

    const instance = new SuggestedPostPrice(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.currency ?? instance.raw?.currency).toEqual("example text");
    expect(instance.amount ?? instance.raw?.amount).toEqual(123);
  });
});