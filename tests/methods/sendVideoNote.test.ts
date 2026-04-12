import { sendVideoNote } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendVideoNote', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      videoNote: {} as any,
      businessConnectionId: "example text",
      messageThreadId: 123,
      directMessagesTopicId: 123,
      duration: 123,
      length: 123,
      thumbnail: {} as any,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendVideoNote.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendVideoNote', {
      chat_id: 123,
      video_note: {} as any,
      business_connection_id: "example text",
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      duration: 123,
      length: 123,
      thumbnail: {} as any,
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