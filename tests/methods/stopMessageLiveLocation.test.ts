import { stopMessageLiveLocation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('stopMessageLiveLocation', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      businessConnectionId: "example text",
      chatId: 123,
      messageId: 123,
      inlineMessageId: "example text",
      replyMarkup: {} as any,
    };

    await stopMessageLiveLocation.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('stopMessageLiveLocation', {
      business_connection_id: "example text",
      chat_id: 123,
      message_id: 123,
      inline_message_id: "example text",
      reply_markup: {} as any,
    });
  });
});