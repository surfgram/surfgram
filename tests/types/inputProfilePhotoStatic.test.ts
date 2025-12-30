import { InputProfilePhotoStatic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputProfilePhotoStatic', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      photo: 'example text',
    };

    const instance = new InputProfilePhotoStatic(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.photo ?? instance.raw?.photo).toEqual('example text');
  });
});
