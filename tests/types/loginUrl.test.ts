import { LoginUrl } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('LoginUrl', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      url: "example text",
      forward_text: "example text",
      bot_username: "example text",
      request_write_access: true,
    };

    const instance = new LoginUrl(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.url ?? instance.raw?.url).toEqual("example text");
    expect(instance.forwardText ?? instance.raw?.forward_text).toEqual("example text");
    expect(instance.botUsername ?? instance.raw?.bot_username).toEqual("example text");
    expect(instance.requestWriteAccess ?? instance.raw?.request_write_access).toEqual(true);
  });
});