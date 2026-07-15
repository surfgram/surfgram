import { editEphemeralMessageReplyMarkup } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editEphemeralMessageReplyMarkup', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await editEphemeralMessageReplyMarkup.call(mockBot, 123, 123, 123, {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('editEphemeralMessageReplyMarkup', {
      chat_id: 123,
      receiver_user_id: 123,
      ephemeral_message_id: 123,
      reply_markup: {} as any,
    });
  });
});