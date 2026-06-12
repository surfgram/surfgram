import { editMessageText } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editMessageText', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      businessConnectionId: "example text",
      chatId: 123,
      messageId: 123,
      inlineMessageId: "example text",
      text: "example text",
      parseMode: "example text",
      entities: [{} as any],
      linkPreviewOptions: {} as any,
      richMessage: {} as any,
      replyMarkup: {} as any,
    };

    await editMessageText.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editMessageText', {
      business_connection_id: "example text",
      chat_id: 123,
      message_id: 123,
      inline_message_id: "example text",
      text: "example text",
      parse_mode: "example text",
      entities: [{} as any],
      link_preview_options: {} as any,
      rich_message: {} as any,
      reply_markup: {} as any,
    });
  });
});