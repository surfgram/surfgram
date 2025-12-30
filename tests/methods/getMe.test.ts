import { getMe } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getMe', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      text: 'example text',
      businessConnectionId: 'example text',
      messageThreadId: 123,
      directMessagesTopicId: 123,
      parseMode: 'example text',
      entities: [{} as any],
      linkPreviewOptions: {} as any,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: 'example text',
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await getMe.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('getMe', {
      chat_id: 123,
      text: 'example text',
      business_connection_id: 'example text',
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      parse_mode: 'example text',
      entities: [{} as any],
      link_preview_options: {} as any,
      disable_notification: true,
      protect_content: true,
      allow_paid_broadcast: true,
      message_effect_id: 'example text',
      suggested_post_parameters: {} as any,
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});
