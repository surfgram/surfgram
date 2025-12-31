import { InputSticker } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputSticker', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      sticker: 'example text',
      format: 'example text',
      emoji_list: ['example text'],
      mask_position: {} as any,
      keywords: ['example text'],
    };

    const instance = new InputSticker(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.sticker ?? instance.raw?.sticker).toEqual('example text');
    expect(instance.format ?? instance.raw?.format).toEqual('example text');
    expect(instance.emojiList ?? instance.raw?.emoji_list).toEqual(['example text']);
    expect(instance.maskPosition ?? instance.raw?.mask_position).toEqual({} as any);
    expect(instance.keywords ?? instance.raw?.keywords).toEqual(['example text']);
  });
});
