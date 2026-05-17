import { InputMediaSticker } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputMediaSticker', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      media: "example text",
      emoji: "example text",
    };

    const instance = new InputMediaSticker(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.media ?? instance.raw?.media).toEqual("example text");
    expect(instance.emoji ?? instance.raw?.emoji).toEqual("example text");
  });
});