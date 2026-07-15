import { editEphemeralMessageCaption } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editEphemeralMessageCaption', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      receiverUserId: 123,
      ephemeralMessageId: 123,
      caption: "example text",
      parseMode: "example text",
      captionEntities: [{} as any],
      replyMarkup: {} as any,
    };

    await editEphemeralMessageCaption.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editEphemeralMessageCaption', {
      chat_id: 123,
      receiver_user_id: 123,
      ephemeral_message_id: 123,
      caption: "example text",
      parse_mode: "example text",
      caption_entities: [{} as any],
      reply_markup: {} as any,
    });
  });
});