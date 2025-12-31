import { Dice } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Dice', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      emoji: 'example text',
      value: 123,
    };

    const instance = new Dice(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.emoji ?? instance.raw?.emoji).toEqual('example text');
    expect(instance.value ?? instance.raw?.value).toEqual(123);
  });
});
