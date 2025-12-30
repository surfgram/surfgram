import { StarTransaction } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('StarTransaction', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: 'example text',
      amount: 123,
      nanostar_amount: 123,
      date: 123,
      source: {} as any,
      receiver: {} as any,
    };

    const instance = new StarTransaction(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.amount ?? instance.raw?.amount).toEqual(123);
    expect(instance.nanostarAmount ?? instance.raw?.nanostar_amount).toEqual(123);
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.source ?? instance.raw?.source).toEqual({} as any);
    expect(instance.receiver ?? instance.raw?.receiver).toEqual({} as any);
  });
});
