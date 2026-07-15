import { editEphemeralMessageText } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editEphemeralMessageText', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      receiverUserId: 123,
      ephemeralMessageId: 123,
      text: "example text",
      parseMode: "example text",
      entities: [{} as any],
      linkPreviewOptions: {} as any,
      replyMarkup: {} as any,
    };

    await editEphemeralMessageText.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editEphemeralMessageText', {
      chat_id: 123,
      receiver_user_id: 123,
      ephemeral_message_id: 123,
      text: "example text",
      parse_mode: "example text",
      entities: [{} as any],
      link_preview_options: {} as any,
      reply_markup: {} as any,
    });
  });
});