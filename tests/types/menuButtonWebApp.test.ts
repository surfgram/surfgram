import { MenuButtonWebApp } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MenuButtonWebApp', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      text: 'example text',
      web_app: {} as any,
    };

    const instance = new MenuButtonWebApp(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.text ?? instance.raw?.text).toEqual('example text');
    expect(instance.webApp ?? instance.raw?.web_app).toEqual({} as any);
  });
});
