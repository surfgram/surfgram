import { editEphemeralMessageMedia } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editEphemeralMessageMedia', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      receiverUserId: 123,
      ephemeralMessageId: 123,
      media: {} as any,
      replyMarkup: {} as any,
    };

    await editEphemeralMessageMedia.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editEphemeralMessageMedia', {
      chat_id: 123,
      receiver_user_id: 123,
      ephemeral_message_id: 123,
      media: {} as any,
      reply_markup: {} as any,
    });
  });
});