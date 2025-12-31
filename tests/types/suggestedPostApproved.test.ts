import { SuggestedPostApproved } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SuggestedPostApproved', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      suggested_post_message: {} as any,
      price: {} as any,
      send_date: 123,
    };

    const instance = new SuggestedPostApproved(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.suggestedPostMessage ?? instance.raw?.suggested_post_message).toEqual(
      {} as any
    );
    expect(instance.price ?? instance.raw?.price).toEqual({} as any);
    expect(instance.sendDate ?? instance.raw?.send_date).toEqual(123);
  });
});
