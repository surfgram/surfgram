import { WebAppInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('WebAppInfo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      url: 'example text',
    };

    const instance = new WebAppInfo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.url ?? instance.raw?.url).toEqual('example text');
  });
});
