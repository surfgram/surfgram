import { InlineQueryResultContact } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultContact', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      id: 'example text',
      phone_number: 'example text',
      first_name: 'example text',
      last_name: 'example text',
      vcard: 'example text',
      reply_markup: {} as any,
      input_message_content: {} as any,
      thumbnail_url: 'example text',
      thumbnail_width: 123,
      thumbnail_height: 123,
    };

    const instance = new InlineQueryResultContact(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.phoneNumber ?? instance.raw?.phone_number).toEqual('example text');
    expect(instance.firstName ?? instance.raw?.first_name).toEqual('example text');
    expect(instance.lastName ?? instance.raw?.last_name).toEqual('example text');
    expect(instance.vcard ?? instance.raw?.vcard).toEqual('example text');
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
    expect(instance.inputMessageContent ?? instance.raw?.input_message_content).toEqual({} as any);
    expect(instance.thumbnailUrl ?? instance.raw?.thumbnail_url).toEqual('example text');
    expect(instance.thumbnailWidth ?? instance.raw?.thumbnail_width).toEqual(123);
    expect(instance.thumbnailHeight ?? instance.raw?.thumbnail_height).toEqual(123);
  });
});
