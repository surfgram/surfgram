import { TransactionPartnerChat } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('TransactionPartnerChat', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      chat: {} as any,
      gift: {} as any,
    };

    const instance = new TransactionPartnerChat(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.gift ?? instance.raw?.gift).toEqual({} as any);
  });
});