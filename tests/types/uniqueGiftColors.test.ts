import { UniqueGiftColors } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('UniqueGiftColors', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      model_custom_emoji_id: "example text",
      symbol_custom_emoji_id: "example text",
      light_theme_main_color: 123,
      light_theme_other_colors: [123],
      dark_theme_main_color: 123,
      dark_theme_other_colors: [123],
    };

    const instance = new UniqueGiftColors(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.modelCustomEmojiId ?? instance.raw?.model_custom_emoji_id).toEqual("example text");
    expect(instance.symbolCustomEmojiId ?? instance.raw?.symbol_custom_emoji_id).toEqual("example text");
    expect(instance.lightThemeMainColor ?? instance.raw?.light_theme_main_color).toEqual(123);
    expect(instance.lightThemeOtherColors ?? instance.raw?.light_theme_other_colors).toEqual([123]);
    expect(instance.darkThemeMainColor ?? instance.raw?.dark_theme_main_color).toEqual(123);
    expect(instance.darkThemeOtherColors ?? instance.raw?.dark_theme_other_colors).toEqual([123]);
  });
});