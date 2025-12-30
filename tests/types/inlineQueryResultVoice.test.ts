import { InlineQueryResultVoice } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultVoice', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      id: 'example text',
      voice_url: 'example text',
      title: 'example text',
      caption: 'example text',
      parse_mode: 'example text',
      caption_entities: [{} as any],
      voice_duration: 123,
      reply_markup: {} as any,
      input_message_content: {} as any,
    };

    const instance = new InlineQueryResultVoice(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.voiceUrl ?? instance.raw?.voice_url).toEqual('example text');
    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.caption ?? instance.raw?.caption).toEqual('example text');
    expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual('example text');
    expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([{} as any]);
    expect(instance.voiceDuration ?? instance.raw?.voice_duration).toEqual(123);
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
    expect(instance.inputMessageContent ?? instance.raw?.input_message_content).toEqual({} as any);
  });
});
