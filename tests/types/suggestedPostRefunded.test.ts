import { SuggestedPostRefunded } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SuggestedPostRefunded', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      suggested_post_message: {} as any,
      reason: "example text",
    };

    const instance = new SuggestedPostRefunded(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.suggestedPostMessage ?? instance.raw?.suggested_post_message).toEqual({} as any);
    expect(instance.reason ?? instance.raw?.reason).toEqual("example text");
  });
});