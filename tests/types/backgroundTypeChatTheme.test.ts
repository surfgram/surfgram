import { BackgroundTypeChatTheme } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BackgroundTypeChatTheme', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      theme_name: "example text",
    };

    const instance = new BackgroundTypeChatTheme(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.themeName ?? instance.raw?.theme_name).toEqual("example text");
  });
});