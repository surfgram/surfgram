import { InputPaidMedia } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputPaidMedia', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      media: 'example text',
    };

    const instance = new InputPaidMedia(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.media ?? instance.raw?.media).toEqual('example text');
  });
});
