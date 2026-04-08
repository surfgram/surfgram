import { sendGame } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendGame', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      gameShortName: "example text",
      businessConnectionId: "example text",
      messageThreadId: 123,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendGame.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendGame', {
      chat_id: 123,
      game_short_name: "example text",
      business_connection_id: "example text",
      message_thread_id: 123,
      disable_notification: true,
      protect_content: true,
      allow_paid_broadcast: true,
      message_effect_id: "example text",
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});