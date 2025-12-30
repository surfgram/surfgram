import { StarAmount } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('StarAmount', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      amount: 123,
      nanostar_amount: 123,
    };

    const instance = new StarAmount(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.amount ?? instance.raw?.amount).toEqual(123);
    expect(instance.nanostarAmount ?? instance.raw?.nanostar_amount).toEqual(123);
  });
});