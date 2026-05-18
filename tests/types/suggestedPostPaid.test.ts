import { SuggestedPostPaid } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SuggestedPostPaid', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      suggested_post_message: {} as any,
      currency: "example text",
      amount: 123,
      star_amount: {} as any,
    };

    const instance = new SuggestedPostPaid(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.suggestedPostMessage ?? instance.raw?.suggested_post_message).toEqual({} as any);
    expect(instance.currency ?? instance.raw?.currency).toEqual("example text");
    expect(instance.amount ?? instance.raw?.amount).toEqual(123);
    expect(instance.starAmount ?? instance.raw?.star_amount).toEqual({} as any);
  });
});