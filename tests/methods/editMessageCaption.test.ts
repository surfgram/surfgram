import { editMessageCaption } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editMessageCaption', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      businessConnectionId: 'example text',
      chatId: 123,
      messageId: 123,
      inlineMessageId: 'example text',
      caption: 'example text',
      parseMode: 'example text',
      captionEntities: [{} as any],
      showCaptionAboveMedia: true,
      replyMarkup: {} as any,
    };

    await editMessageCaption.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editMessageCaption', {
      business_connection_id: 'example text',
      chat_id: 123,
      message_id: 123,
      inline_message_id: 'example text',
      caption: 'example text',
      parse_mode: 'example text',
      caption_entities: [{} as any],
      show_caption_above_media: true,
      reply_markup: {} as any,
    });
  });
});
