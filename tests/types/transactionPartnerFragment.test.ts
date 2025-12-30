import { TransactionPartnerFragment } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('TransactionPartnerFragment', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      withdrawal_state: {} as any,
    };

    const instance = new TransactionPartnerFragment(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.withdrawalState ?? instance.raw?.withdrawal_state).toEqual({} as any);
  });
});