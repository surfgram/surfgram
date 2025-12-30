import { RevenueWithdrawalStateFailed } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RevenueWithdrawalStateFailed', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
    };

    const instance = new RevenueWithdrawalStateFailed(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
  });
});