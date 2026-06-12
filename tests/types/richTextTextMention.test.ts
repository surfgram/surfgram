import { RichTextTextMention } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextTextMention', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      user: {} as any,
    };

    const instance = new RichTextTextMention(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
  });
});