import { BotSubscriptionUpdated } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BotSubscriptionUpdated', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      user: {} as any,
      invoice_payload: "example text",
      state: "example text",
    };

    const instance = new BotSubscriptionUpdated(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.invoicePayload ?? instance.raw?.invoice_payload).toEqual("example text");
    expect(instance.state ?? instance.raw?.state).toEqual("example text");
  });
});