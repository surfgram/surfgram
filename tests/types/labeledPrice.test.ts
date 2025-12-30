import { LabeledPrice } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('LabeledPrice', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      label: 'example text',
      amount: 123,
    };

    const instance = new LabeledPrice(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.label ?? instance.raw?.label).toEqual('example text');
    expect(instance.amount ?? instance.raw?.amount).toEqual(123);
  });
});
