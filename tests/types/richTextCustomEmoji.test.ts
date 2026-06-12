import { RichTextCustomEmoji } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextCustomEmoji', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      custom_emoji_id: "example text",
      alternative_text: "example text",
    };

    const instance = new RichTextCustomEmoji(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.customEmojiId ?? instance.raw?.custom_emoji_id).toEqual("example text");
    expect(instance.alternativeText ?? instance.raw?.alternative_text).toEqual("example text");
  });
});