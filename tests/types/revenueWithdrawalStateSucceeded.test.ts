import { RevenueWithdrawalStateSucceeded } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RevenueWithdrawalStateSucceeded', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      date: 123,
      url: 'example text',
    };

    const instance = new RevenueWithdrawalStateSucceeded(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.url ?? instance.raw?.url).toEqual('example text');
  });
});
