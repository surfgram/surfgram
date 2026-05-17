import { sendLivePhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendLivePhoto', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      livePhoto: {} as any,
      photo: {} as any,
      businessConnectionId: "example text",
      messageThreadId: 123,
      directMessagesTopicId: 123,
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

    await sendLivePhoto.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendLivePhoto', {
      chat_id: 123,
      live_photo: {} as any,
      photo: {} as any,
      business_connection_id: "example text",
      message_thread_id: 123,
      direct_messages_topic_id: 123,
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