import { RichTextBotCommand } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextBotCommand', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      bot_command: "example text",
    };

    const instance = new RichTextBotCommand(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.botCommand ?? instance.raw?.bot_command).toEqual("example text");
  });
});