import { WriteAccessAllowed } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('WriteAccessAllowed', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      from_request: true,
      web_app_name: "example text",
      from_attachment_menu: true,
    };

    const instance = new WriteAccessAllowed(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.fromRequest ?? instance.raw?.from_request).toEqual(true);
    expect(instance.webAppName ?? instance.raw?.web_app_name).toEqual("example text");
    expect(instance.fromAttachmentMenu ?? instance.raw?.from_attachment_menu).toEqual(true);
  });
});