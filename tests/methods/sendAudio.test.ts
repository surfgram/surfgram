import { sendAudio } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendAudio', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      audio: {} as any,
      businessConnectionId: "example text",
      messageThreadId: 123,
      directMessagesTopicId: 123,
      caption: "example text",
      parseMode: "example text",
      captionEntities: [{} as any],
      duration: 123,
      performer: "example text",
      title: "example text",
      thumbnail: {} as any,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendAudio.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendAudio', {
      chat_id: 123,
      audio: {} as any,
      business_connection_id: "example text",
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      caption: "example text",
      parse_mode: "example text",
      caption_entities: [{} as any],
      duration: 123,
      performer: "example text",
      title: "example text",
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