import { sendSticker } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendSticker', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      sticker: {} as any,
      businessConnectionId: "example text",
      messageThreadId: 123,
      directMessagesTopicId: 123,
      receiverUserId: 123,
      callbackQueryId: "example text",
      emoji: "example text",
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendSticker.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendSticker', {
      chat_id: 123,
      sticker: {} as any,
      business_connection_id: "example text",
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      receiver_user_id: 123,
      callback_query_id: "example text",
      emoji: "example text",
      disable_notification: true,
      protect_content: true,
      allow_paid_broadcast: true,
      message_effect_id: "example text",
      suggested_post_parameters: {} as any,
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});