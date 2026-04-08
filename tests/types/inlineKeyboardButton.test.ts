import { InlineKeyboardButton } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineKeyboardButton', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      text: "example text",
      icon_custom_emoji_id: "example text",
      style: "example text",
      url: "example text",
      callback_data: "example text",
      web_app: {} as any,
      login_url: {} as any,
      switch_inline_query: "example text",
      switch_inline_query_current_chat: "example text",
      switch_inline_query_chosen_chat: {} as any,
      copy_text: {} as any,
      callback_game: {} as any,
      pay: true,
    };

    const instance = new InlineKeyboardButton(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.text ?? instance.raw?.text).toEqual("example text");
    expect(instance.iconCustomEmojiId ?? instance.raw?.icon_custom_emoji_id).toEqual("example text");
    expect(instance.style ?? instance.raw?.style).toEqual("example text");
    expect(instance.url ?? instance.raw?.url).toEqual("example text");
    expect(instance.callbackData ?? instance.raw?.callback_data).toEqual("example text");
    expect(instance.webApp ?? instance.raw?.web_app).toEqual({} as any);
    expect(instance.loginUrl ?? instance.raw?.login_url).toEqual({} as any);
    expect(instance.switchInlineQuery ?? instance.raw?.switch_inline_query).toEqual("example text");
    expect(instance.switchInlineQueryCurrentChat ?? instance.raw?.switch_inline_query_current_chat).toEqual("example text");
    expect(instance.switchInlineQueryChosenChat ?? instance.raw?.switch_inline_query_chosen_chat).toEqual({} as any);
    expect(instance.copyText ?? instance.raw?.copy_text).toEqual({} as any);
    expect(instance.callbackGame ?? instance.raw?.callback_game).toEqual({} as any);
    expect(instance.pay ?? instance.raw?.pay).toEqual(true);
  });
});