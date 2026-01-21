import { CallbackQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('CallbackQuery', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: "example text",
      from: {} as any,
      message: {} as any,
      inline_message_id: "example text",
      chat_instance: "example text",
      data: "example text",
      game_short_name: "example text",
    };

    const instance = new CallbackQuery(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.id ?? instance.raw?.id).toEqual("example text");
    expect(instance.from ?? instance.raw?.from).toEqual({} as any);
    expect(instance.message ?? instance.raw?.message).toEqual({} as any);
    expect(instance.inlineMessageId ?? instance.raw?.inline_message_id).toEqual("example text");
    expect(instance.chatInstance ?? instance.raw?.chat_instance).toEqual("example text");
    expect(instance.data ?? instance.raw?.data).toEqual("example text");
    expect(instance.gameShortName ?? instance.raw?.game_short_name).toEqual("example text");
  });
});