import { editMessageMedia } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editMessageMedia', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      media: {} as any,
      businessConnectionId: "example text",
      chatId: 123,
      messageId: 123,
      inlineMessageId: "example text",
      replyMarkup: {} as any,
    };

    await editMessageMedia.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editMessageMedia', {
      media: {} as any,
      business_connection_id: "example text",
      chat_id: 123,
      message_id: 123,
      inline_message_id: "example text",
      reply_markup: {} as any,
    });
  });
});