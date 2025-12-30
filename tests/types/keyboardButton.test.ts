import { KeyboardButton } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('KeyboardButton', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      text: 'example text',
      request_users: {} as any,
      request_chat: {} as any,
      request_contact: true,
      request_location: true,
      request_poll: {} as any,
      web_app: {} as any,
    };

    const instance = new KeyboardButton(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.text ?? instance.raw?.text).toEqual('example text');
    expect(instance.requestUsers ?? instance.raw?.request_users).toEqual({} as any);
    expect(instance.requestChat ?? instance.raw?.request_chat).toEqual({} as any);
    expect(instance.requestContact ?? instance.raw?.request_contact).toEqual(true);
    expect(instance.requestLocation ?? instance.raw?.request_location).toEqual(true);
    expect(instance.requestPoll ?? instance.raw?.request_poll).toEqual({} as any);
    expect(instance.webApp ?? instance.raw?.web_app).toEqual({} as any);
  });
});
