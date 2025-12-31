import { copyMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('copyMessage', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      fromChatId: 123,
      messageId: 123,
      messageThreadId: 123,
      directMessagesTopicId: 123,
      videoStartTimestamp: 123,
      caption: "example text",
      parseMode: "example text",
      captionEntities: [{} as any],
      showCaptionAboveMedia: true,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await copyMessage.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('copyMessage', {
      chat_id: 123,
      from_chat_id: 123,
      message_id: 123,
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      video_start_timestamp: 123,
      caption: "example text",
      parse_mode: "example text",
      caption_entities: [{} as any],
      show_caption_above_media: true,
      disable_notification: true,
      protect_content: true,
      allow_paid_broadcast: true,
      suggested_post_parameters: {} as any,
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});