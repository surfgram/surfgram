import { ChatBoostSourcePremium } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatBoostSourcePremium', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      source: "example text",
      user: {} as any,
    };

    const instance = new ChatBoostSourcePremium(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.source ?? instance.raw?.source).toEqual("example text");
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
  });
});