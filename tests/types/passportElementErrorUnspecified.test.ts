import { PassportElementErrorUnspecified } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PassportElementErrorUnspecified', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      source: 'example text',
      type: 'example text',
      element_hash: 'example text',
      message: 'example text',
    };

    const instance = new PassportElementErrorUnspecified(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.source ?? instance.raw?.source).toEqual('example text');
    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.elementHash ?? instance.raw?.element_hash).toEqual('example text');
    expect(instance.message ?? instance.raw?.message).toEqual('example text');
  });
});
