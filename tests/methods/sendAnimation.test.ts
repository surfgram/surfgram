import { sendAnimation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendAnimation', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      animation: {} as any,
      businessConnectionId: "example text",
      messageThreadId: 123,
      directMessagesTopicId: 123,
      duration: 123,
      width: 123,
      height: 123,
      thumbnail: {} as any,
      caption: "example text",
      parseMode: "example text",
      captionEntities: [{} as any],
      showCaptionAboveMedia: true,
      hasSpoiler: true,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendAnimation.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendAnimation', {
      chat_id: 123,
      animation: {} as any,
      business_connection_id: "example text",
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      duration: 123,
      width: 123,
      height: 123,
      thumbnail: {} as any,
      caption: "example text",
      parse_mode: "example text",
      caption_entities: [{} as any],
      show_caption_above_media: true,
      has_spoiler: true,
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